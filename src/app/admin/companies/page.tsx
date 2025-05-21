'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

type Company = {
  id: string;
  name: string;
  description: string;
  website: string;
  location: string;
  size: 'small' | 'medium' | 'large' | 'enterprise';
  industry: string;
  createdAt: string;
  updatedAt: string;
};

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');

  // データ取得
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        // TODO: 実際のAPIから取得する
        // モックデータを使用
        const mockCompanies: Company[] = [
          {
            id: '1',
            name: '株式会社セールスフォース・ジャパン',
            description: 'クラウドベースのCRMプラットフォームを提供する企業',
            website: 'https://www.salesforce.com/jp/',
            location: '東京',
            size: 'enterprise',
            industry: 'ソフトウェア',
            createdAt: '2023-01-01T00:00:00Z',
            updatedAt: '2023-05-01T00:00:00Z',
          },
          {
            id: '2',
            name: 'HubSpot Japan株式会社',
            description: 'インバウンドマーケティングとセールスプラットフォームを提供する企業',
            website: 'https://www.hubspot.jp/',
            location: '東京',
            size: 'large',
            industry: 'マーケティング',
            createdAt: '2023-02-01T00:00:00Z',
            updatedAt: '2023-04-15T00:00:00Z',
          },
          {
            id: '3',
            name: 'アドビ株式会社',
            description: 'デジタルマーケティングソリューションを提供する企業',
            website: 'https://business.adobe.com/jp/',
            location: '東京',
            size: 'enterprise',
            industry: 'ソフトウェア',
            createdAt: '2023-03-01T00:00:00Z',
            updatedAt: '2023-03-01T00:00:00Z',
          }
        ];
        
        setCompanies(mockCompanies);
      } catch (error) {
        console.error('企業データの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // 検索とフィルタリング
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = industryFilter === 'all' || company.industry === industryFilter;
    const matchesSize = sizeFilter === 'all' || company.size === sizeFilter;
    
    return matchesSearch && matchesIndustry && matchesSize;
  });

  // 業種のユニークリスト
  const industries = ['all', ...new Set(companies.map(company => company.industry))];

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ja-JP');
  };

  // 企業規模の日本語表示
  const getSizeLabel = (size: string) => {
    switch (size) {
      case 'small':
        return '小規模 (1-50人)';
      case 'medium':
        return '中規模 (51-200人)';
      case 'large':
        return '大規模 (201-1000人)';
      case 'enterprise':
        return '超大規模 (1000人以上)';
      default:
        return size;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div>
      {/* ヘッダー（検索とフィルター） */}
      <div className="mb-8">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div>
            <h2 className="text-lg font-medium text-gray-900">企業一覧</h2>
            <p className="mt-1 text-sm text-gray-500">
              セールステック関連企業の管理と編集
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/admin/companies/new"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              新しい企業を追加
            </Link>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              検索
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="search"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="企業名または説明で検索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              業種
            </label>
            <select
              id="industry"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
            >
              <option value="all">すべての業種</option>
              {industries.filter(i => i !== 'all').map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700">
              企業規模
            </label>
            <select
              id="size"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
            >
              <option value="all">すべての規模</option>
              <option value="small">小規模 (1-50人)</option>
              <option value="medium">中規模 (51-200人)</option>
              <option value="large">大規模 (201-1000人)</option>
              <option value="enterprise">超大規模 (1000人以上)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 企業一覧 */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map((company) => (
              <li key={company.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-indigo-600 truncate">{company.name}</h3>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <Link
                        href={`/admin/companies/${company.id}/edit`}
                        className="mr-2 text-gray-400 hover:text-gray-500"
                      >
                        <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">編集</span>
                      </Link>
                      <button
                        className="text-red-400 hover:text-red-500"
                        onClick={() => {
                          if (confirm(`${company.name}を削除してもよろしいですか？`)) {
                            // TODO: 削除APIを呼び出す
                            console.log(`企業${company.id}を削除`);
                          }
                        }}
                      >
                        <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">削除</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        業種: {company.industry}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        所在地: {company.location}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        規模: {getSizeLabel(company.size)}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        最終更新: {formatDate(company.updatedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{company.description}</p>
                  </div>
                  <div className="mt-2">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      ウェブサイトを開く →
                    </a>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="px-4 py-5 text-center text-sm text-gray-500">
              該当する企業はありません
            </li>
          )}
        </ul>
      </div>
    </div>
  );
} 