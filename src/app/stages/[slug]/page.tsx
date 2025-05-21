'use client';

import React from "react";
import { ToolCard } from "../../../components/ui/ToolCard";
import { FilterBar } from "../../../components/ui/FilterBar";
import { StageNavigation } from "../../../components/ui/StageNavigation";
import { CategoryDetail } from "../../../components/ui/CategoryDetail";
import { StageInsight } from "../../../components/ui/StageInsight";
import Link from "next/link";
import { allStagesWithTools, allStages } from "../../../data/tools";

const pricingOptions = [
  { id: "free", name: "無料プランあり" },
  { id: "subscription", name: "サブスクリプション" },
  { id: "per-seat", name: "従量課金" },
  { id: "enterprise", name: "エンタープライズ" },
];

const sizeOptions = [
  { id: "startup", name: "スタートアップ" },
  { id: "sme", name: "中小企業" },
  { id: "mid-market", name: "ミッドマーケット" },
  { id: "enterprise", name: "エンタープライズ" },
];

export default function StageDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const [selectedPricing, setSelectedPricing] = React.useState<string[]>([]);
  const [selectedSize, setSelectedSize] = React.useState<string[]>([]);
  const [showJapaneseOnly, setShowJapaneseOnly] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'tools' | 'categories'>('categories');

  // スラグに基づいてステージを検索
  const stage = allStagesWithTools.find((s) => s.slug === params.slug);

  // ステージが見つからない場合
  if (!stage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">ステージが見つかりません</h1>
          <p className="mt-2 text-sm text-gray-600">
            指定されたステージは存在しないか、削除された可能性があります。
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ツールのフィルタリング
  const filteredTools = stage.tools.filter((tool) => {
    // 価格モデルでフィルタリング
    if (selectedPricing.length > 0) {
      const pricingMatch = selectedPricing.some(price => {
        if (price === 'free' && tool.pricingModel.includes('フリー')) return true;
        return tool.pricingModel.includes(pricingOptions.find(option => option.id === price)?.name || '');
      });
      if (!pricingMatch) return false;
    }

    // 対象規模でフィルタリング
    if (selectedSize.length > 0) {
      const sizeMatch = selectedSize.some(size => 
        tool.targetSize.includes(sizeOptions.find(option => option.id === size)?.name || '')
      );
      if (!sizeMatch) return false;
    }

    // 日本語対応フィルタリング
    if (showJapaneseOnly && !tool.languages.includes('ja')) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-4">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              カテゴリ一覧に戻る
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{stage?.name || 'カテゴリ詳細'}</h1>
        </div>
        
        {/* ステージナビゲーション */}
        <StageNavigation stages={allStages} currentStageId={stage.id} />
        
        {/* ステージインサイト */}
        <div className="mb-8">
          <StageInsight stageId={stage.id} stageName={stage.name} />
        </div>
        
        {/* タブナビゲーション */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('categories')}
              className={`${
                activeTab === 'categories'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              カテゴリ
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`${
                activeTab === 'tools'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              ツール一覧 ({filteredTools.length})
            </button>
          </nav>
        </div>
        
        {/* カテゴリタブ */}
        {activeTab === 'categories' && (
          <div className="mb-8">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {stage.categories.map((category) => (
                <CategoryDetail key={category.id} category={category} />
              ))}
            </div>
          </div>
        )}
        
        {/* ツール一覧タブ */}
        {activeTab === 'tools' && (
          <div className="mb-8">
            <FilterBar
              pricingOptions={pricingOptions}
              sizeOptions={sizeOptions}
              selectedPricing={selectedPricing}
              selectedSize={selectedSize}
              onPricingChange={setSelectedPricing}
              onSizeChange={setSelectedSize}
              showJapaneseOnly={showJapaneseOnly}
              onJapaneseOnlyChange={setShowJapaneseOnly}
            />
            
            {filteredTools.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} {...tool} />
                ))}
              </div>
            ) : (
              <div className="mt-8 text-center py-12 bg-white rounded-lg border border-gray-200">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">該当するツールが見つかりません</h3>
                <p className="mt-1 text-sm text-gray-500">フィルター条件を変更して再度お試しください。</p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPricing([]);
                      setSelectedSize([]);
                      setShowJapaneseOnly(false);
                    }}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    フィルターをクリア
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* ページ下部のナビゲーション */}
        <div className="mt-12">
          <StageNavigation stages={allStages} currentStageId={stage.id} />
        </div>
      </div>
    </div>
  );
} 