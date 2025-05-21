'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

type Tool = {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: string;
  website: string;
  status: 'active' | 'pending' | 'archived';
  createdAt: string;
  updatedAt: string;
};

export default function ToolsPage() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // データ取得
  useEffect(() => {
    const fetchTools = async () => {
      setLoading(true);
      try {
        // TODO: 実際のAPIから取得する
        // モックデータを使用
        const mockTools: Tool[] = [
          {
            id: '1',
            name: 'Salesforce',
            category: 'CRM',
            description: '世界No.1のCRMプラットフォーム',
            pricing: 'サブスクリプション',
            website: 'https://www.salesforce.com/jp/',
            status: 'active',
            createdAt: '2023-01-01T00:00:00Z',
            updatedAt: '2023-05-01T00:00:00Z',
          },
          {
            id: '2',
            name: 'HubSpot',
            category: 'マーケティングオートメーション',
            description: 'インバウンドマーケティングとセールスのためのプラットフォーム',
            pricing: 'フリーミアム',
            website: 'https://www.hubspot.jp/',
            status: 'active',
            createdAt: '2023-02-01T00:00:00Z',
            updatedAt: '2023-04-15T00:00:00Z',
          },
          {
            id: '3',
            name: 'Marketo',
            category: 'マーケティングオートメーション',
            description: 'B2Bマーケティングオートメーションプラットフォーム',
            pricing: 'エンタープライズ',
            website: 'https://business.adobe.com/jp/products/marketo/adobe-marketo.html',
            status: 'pending',
            createdAt: '2023-03-01T00:00:00Z',
            updatedAt: '2023-03-01T00:00:00Z',
          },
          {
            id: '4',
            name: 'Zoom',
            category: 'ビデオ会議',
            description: 'クラウドビデオ会議サービス',
            pricing: 'フリーミアム',
            website: 'https://zoom.us/',
            status: 'active',
            createdAt: '2023-01-15T00:00:00Z',
            updatedAt: '2023-06-01T00:00:00Z',
          },
          {
            id: '5',
            name: 'Slack',
            category: 'コミュニケーション',
            description: 'ビジネス向けメッセージングアプリ',
            pricing: 'フリーミアム',
            website: 'https://slack.com/intl/ja-jp/',
            status: 'archived',
            createdAt: '2022-11-01T00:00:00Z',
            updatedAt: '2023-04-01T00:00:00Z',
          },
        ];
        
        setTools(mockTools);
      } catch (error) {
        console.error('ツールデータの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  // 検索とフィルタリング
  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || tool.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || tool.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // カテゴリーのユニークリスト
  const categories = ['all', ...new Set(tools.map(tool => tool.category))];

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ja-JP');
  };

  // ステータスに応じたバッジカラー
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // ステータスの日本語表示
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return '有効';
      case 'pending':
        return '保留中';
      case 'archived':
        return 'アーカイブ';
      default:
        return status;
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
            <h2 className="text-lg font-medium text-gray-900">ツール一覧</h2>
            <p className="mt-1 text-sm text-gray-500">
              セールステックツールの管理と編集
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link
              href="/admin/tools/new"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              新しいツールを追加
            </Link>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
              検索
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="search"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="ツール名または説明で検索"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              カテゴリ
            </label>
            <select
              id="category"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="all">すべてのカテゴリ</option>
              {categories.filter(c => c !== 'all').map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              ステータス
            </label>
            <select
              id="status"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">すべてのステータス</option>
              <option value="active">有効</option>
              <option value="pending">保留中</option>
              <option value="archived">アーカイブ</option>
            </select>
          </div>
        </div>
      </div>

      {/* ツール一覧テーブル */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool) => (
              <li key={tool.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-indigo-600 truncate">{tool.name}</p>
                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(tool.status)}`}>
                        {getStatusLabel(tool.status)}
                      </span>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <Link
                        href={`/admin/tools/${tool.id}/edit`}
                        className="mr-2 text-gray-400 hover:text-gray-500"
                      >
                        <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">編集</span>
                      </Link>
                      <button
                        className="text-red-400 hover:text-red-500"
                        onClick={() => {
                          if (confirm(`${tool.name}を削除してもよろしいですか？`)) {
                            // TODO: 削除APIを呼び出す
                            console.log(`ツール${tool.id}を削除`);
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
                        カテゴリ: {tool.category}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        料金: {tool.pricing}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <p>
                        最終更新: {formatDate(tool.updatedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 truncate">{tool.description}</p>
                  </div>
                  <div className="mt-2">
                    <a
                      href={tool.website}
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
              該当するツールはありません
            </li>
          )}
        </ul>
      </div>
    </div>
  );
} 