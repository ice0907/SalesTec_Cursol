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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">SalesTech Catalog</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
            Find tools to optimize your sales process
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              View All Tools
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* 表示モード切り替えタブ */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode('flow')}
              className={`relative inline-flex items-center rounded-l-md px-4 py-2 text-sm font-medium ${
                viewMode === 'flow'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 focus:z-10 focus:outline-none`}
            >
              フロー図
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`relative -ml-px inline-flex items-center rounded-r-md px-4 py-2 text-sm font-medium ${
                viewMode === 'cards'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 focus:z-10 focus:outline-none`}
            >
              カードビュー
            </button>
          </div>
        </div>

        {/* 営業プロセス表示エリア */}
        <div className="mt-12">
          {/* フロー図表示 */}
          {viewMode === 'flow' && (
            <div className="max-w-full overflow-hidden">
              <ProcessFlow stages={stages} />
            </div>
          )}

          {/* カードビュー表示 */}
          {viewMode === 'cards' && (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {stages.map((stage) => (
                <Link
                  key={stage.id}
                  href={`/stages/${stage.slug}`}
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                        <span className="text-lg font-medium leading-none text-indigo-600">
                          {stage.id}
                        </span>
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {stage.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 