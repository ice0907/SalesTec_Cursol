'use client';

import React, { useState } from 'react';
import Link from "next/link";
import ProcessFlow from '../components/process/ProcessFlow';

const stages = [
  {
    id: 1,
    name: "リード獲得／データ整備",
    description: "見込み客の獲得とデータの収集・管理",
    slug: "lead-generation",
  },
  {
    id: 2,
    name: "アウトリーチ／商談化",
    description: "見込み客へのアプローチと商談の設定",
    slug: "outreach",
  },
  {
    id: 3,
    name: "商談管理・CRM",
    description: "商談の進捗管理と顧客関係の構築",
    slug: "crm",
  },
  {
    id: 4,
    name: "提案・デモ",
    description: "ソリューションの提案とデモンストレーション",
    slug: "proposal",
  },
  {
    id: 5,
    name: "見積 / 契約・CPQ / eSignature",
    description: "見積書作成と契約締結の効率化",
    slug: "contract",
  },
  {
    id: 6,
    name: "フォーキャスト・収益最適化",
    description: "売上予測と収益の最大化",
    slug: "forecast",
  },
  {
    id: 7,
    name: "オンボーディング・CS（ポストセールス）",
    description: "顧客の導入支援と継続的なサポート",
    slug: "onboarding",
  },
];

// 表示モードの型
type ViewMode = 'flow' | 'cards';

export default function Home() {
  // 表示モードの状態（フロー図、カード）
  const [viewMode, setViewMode] = useState<ViewMode>('flow');

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-secondary-600/5"></div>
        <div className="relative container-width section-padding py-16 sm:py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="font-display font-bold text-balance">
              <span className="gradient-text">SalesTech Catalog</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
              営業プロセスを最適化するためのツールを見つけよう
            </p>
            <p className="mt-2 text-base text-neutral-500 max-w-2xl mx-auto">
              Find tools to optimize your sales process
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/tools" className="btn-primary group">
                全ツールを見る
                <svg
                  className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link href="/stages" className="btn-secondary">
                プロセス別に探す
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-width section-padding pb-16 sm:pb-24">
        {/* 表示モード切り替えタブ */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-2xl p-1 shadow-soft">
            <div className="flex">
              <button
                type="button"
                onClick={() => setViewMode('flow')}
                className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  viewMode === 'flow'
                    ? 'bg-primary-500 text-white shadow-soft'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  フロー図
                </span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`relative px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  viewMode === 'cards'
                    ? 'bg-primary-500 text-white shadow-soft'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/50'
                }`}
              >
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  カードビュー
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 営業プロセス表示エリア */}
        <div className="animate-slide-up">
          {/* フロー図表示 */}
          {viewMode === 'flow' && (
            <div className="max-w-full overflow-hidden">
              <ProcessFlow stages={stages} />
            </div>
          )}

          {/* カードビュー表示 */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {stages.map((stage, index) => (
                <Link
                  key={stage.id}
                  href={`/stages/${stage.slug}`}
                  className="card-interactive group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-soft">
                          <span className="text-lg font-bold text-white">
                            {stage.id}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                          {stage.name}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                          {stage.description}
                        </p>
                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                          詳細を見る
                          <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="text-3xl font-bold gradient-text">100+</div>
              <div className="mt-2 text-sm text-neutral-600">セールステックツール</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="text-3xl font-bold gradient-text">7</div>
              <div className="mt-2 text-sm text-neutral-600">営業プロセスステージ</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="mt-2 text-sm text-neutral-600">企業・ベンダー</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}   