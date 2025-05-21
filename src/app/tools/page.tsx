'use client';

import React from "react";
import { ToolCard } from "../../components/ui/ToolCard";
import { FilterBar } from "../../components/ui/FilterBar";
import { allStagesWithTools } from "../../data/tools";
import Link from "next/link";
import Image from "next/image";

// 型定義
type Tool = {
  id: string;
  name: string;
  description: string;
  companyName: string;
  logoUrl: string;
  pricingModel: string;
  languages: string[];
  targetSize: string;
  slug: string;
  detailedDescription: string;
  stageName: string;
  categories: {
    name: string;
    slug: string;
  }[];
};

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

// ツールデータを取得し、必要なフィルタリングを適用
const getFilteredTools = (): Tool[] => {
  try {
    // 各ステージからツールを取得し、フラット化
    const tools = allStagesWithTools.reduce<Tool[]>((acc, stage) => {
      if (stage && Array.isArray(stage.tools)) {
        return [...acc, ...stage.tools as Tool[]];
      }
      return acc;
    }, []);

    // nullやundefinedのツールを除外
    return tools.filter((tool): tool is Tool => 
      Boolean(tool && tool.id && tool.name && tool.slug)
    );
  } catch (error) {
    console.error('ツールデータの取得中にエラーが発生しました:', error);
    return [];
  }
};

export default function ToolsPage() {
  const [selectedPricing, setSelectedPricing] = React.useState<string[]>([]);
  const [selectedSize, setSelectedSize] = React.useState<string[]>([]);
  const [showJapaneseOnly, setShowJapaneseOnly] = React.useState(false);
  const [tools, setTools] = React.useState<Tool[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedStages, setSelectedStages] = React.useState<string[]>([]);
  const [sortOption, setSortOption] = React.useState<string>('name');

  // ステージ（カテゴリ）オプションを取得
  const stageOptions = React.useMemo(() => {
    return allStagesWithTools.map(stage => ({
      id: stage.slug,
      name: stage.name
    }));
  }, []);

  // ソートオプション
  const sortOptions = [
    { id: 'name', name: '名前順' },
    { id: 'company', name: '会社名順' },
    { id: 'stage', name: 'カテゴリ順' }
  ];

  React.useEffect(() => {
    try {
      const filteredTools = getFilteredTools();
      setTools(filteredTools);
      setError(null);
    } catch (err) {
      console.error('ツールの初期化中にエラーが発生しました:', err);
      setError('ツールデータの読み込み中にエラーが発生しました。');
    }
  }, []);

  // フィルタリングされたツールを取得
  const filteredTools = React.useMemo(() => {
    return tools.filter(tool => {
      // 検索クエリでのフィルタリング
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.companyName.toLowerCase().includes(query);
        
        if (!matchesSearch) return false;
      }

      // ステージ（カテゴリ）でのフィルタリング
      if (selectedStages.length > 0 && (!tool.stageName || !selectedStages.includes(tool.stageName))) {
        return false;
      }

      // 日本語対応フィルター
      if (showJapaneseOnly && !tool.languages.includes('ja')) {
        return false;
      }

      // 価格モデルフィルター
      if (selectedPricing.length > 0 && !selectedPricing.includes(tool.pricingModel.toLowerCase())) {
        return false;
      }

      // 企業規模フィルター
      if (selectedSize.length > 0 && !selectedSize.includes(tool.targetSize.toLowerCase())) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (sortOption) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'company':
          return a.companyName.localeCompare(b.companyName);
        case 'stage':
          return a.stageName.localeCompare(b.stageName);
        default:
          return 0;
      }
    });
  }, [tools, searchQuery, selectedStages, showJapaneseOnly, selectedPricing, selectedSize, sortOption]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">エラーが発生しました</h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

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
          <h1 className="text-3xl font-bold text-gray-900">セールステックツール一覧</h1>
          <p className="mt-2 text-sm text-gray-600">
            営業プロセスを効率化するツールを探す
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="ツール名、説明、会社名で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                カテゴリでフィルター
              </label>
              <div className="flex flex-wrap gap-2">
                {stageOptions.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => {
                      setSelectedStages(prev =>
                        prev.includes(stage.name)
                          ? prev.filter(s => s !== stage.name)
                          : [...prev, stage.name]
                      );
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedStages.includes(stage.name)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {stage.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                並び替え
              </label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

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

        <div className="mt-4 mb-4">
          <p className="text-sm text-gray-600">
            検索結果: {filteredTools.length}件
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <div key={tool.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <Link href={`/tools/${tool.slug}`} className="block p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={tool.logoUrl}
                        alt={`${tool.name} logo`}
                        width={64}
                        height={64}
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-medium text-gray-900 truncate">
                          {tool.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {tool.stageName && (
                          <Link
                            href={`/stages/${tool.stageName.toLowerCase()}`}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
                          >
                            {tool.stageName}
                          </Link>
                        )}
                        {tool.categories && tool.categories.map((category, index) => (
                          <Link
                            key={index}
                            href={`/categories/${category.slug}`}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                        {tool.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          {tool.pricingModel}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          {tool.languages.includes('ja') ? '日本語対応' : '日本語非対応'}
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          {tool.targetSize}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">
                条件に一致するツールが見つかりませんでした。
                <br />
                検索条件を変更してお試しください。
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 