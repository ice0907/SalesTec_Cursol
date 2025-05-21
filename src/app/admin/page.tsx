'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

type Stats = {
  totalTools: number;
  totalCompanies: number;
  totalDataSources: number;
  activeDataSources: number;
  lastUpdated: string | null;
};

type RecentUpdate = {
  id: string;
  toolId: string;
  toolName: string;
  updateType: string;
  changes: {
    field: string;
    oldValue: string;
    newValue: string;
  }[];
  createdAt: string;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalTools: 0,
    totalCompanies: 0,
    totalDataSources: 0,
    activeDataSources: 0,
    lastUpdated: null,
  });
  const [recentUpdates, setRecentUpdates] = useState<RecentUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  // データ取得
  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      try {
        // TODO: APIが実装されたら実際のデータを取得
        // 現在はモックデータを使用
        const mockStats: Stats = {
          totalTools: 25,
          totalCompanies: 15,
          totalDataSources: 40,
          activeDataSources: 32,
          lastUpdated: new Date().toISOString(),
        };

        const mockUpdates: RecentUpdate[] = [
          {
            id: '1',
            toolId: 'tool1',
            toolName: 'Salesforce',
            updateType: 'AUTO',
            changes: [
              { field: 'pricingModel', oldValue: 'SUBSCRIPTION', newValue: 'FREEMIUM' },
              { field: 'features', oldValue: 'CRM, Sales', newValue: 'CRM, Sales, Marketing' },
            ],
            createdAt: new Date(Date.now() - 3600000).toISOString(),
          },
          {
            id: '2',
            toolId: 'tool2',
            toolName: 'HubSpot',
            updateType: 'AUTO',
            changes: [
              { field: 'languages', oldValue: 'EN, FR', newValue: 'EN, FR, JP' },
            ],
            createdAt: new Date(Date.now() - 86400000).toISOString(),
          },
          {
            id: '3',
            toolId: 'tool3',
            toolName: 'Zoom',
            updateType: 'MANUAL',
            changes: [
              { field: 'description', oldValue: '旧説明', newValue: '新説明' },
            ],
            createdAt: new Date(Date.now() - 259200000).toISOString(),
          },
        ];

        setStats(mockStats);
        setRecentUpdates(mockUpdates);
      } catch (error) {
        console.error('ダッシュボードデータの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // 更新を手動で実行
  const handleRunUpdate = async () => {
    try {
      // TODO: 更新処理を実行するAPIを呼び出す
      alert('更新処理を開始しました。更新が完了するまでしばらくお待ちください。');
    } catch (error) {
      console.error('更新処理の実行に失敗しました:', error);
    }
  };

  // 日付をフォーマット
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'なし';
    return new Date(dateString).toLocaleString('ja-JP');
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
      {/* 統計セクション タイトル */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">統計情報</h2>
        <p className="mt-1 text-sm text-gray-500">システム全体のステータスおよび統計</p>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              ツール数
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-indigo-600">
              {stats.totalTools}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <Link href="/admin/tools" className="text-sm font-medium text-indigo-600 hover:text-indigo-900 flex items-center">
              全てのツールを表示
              <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              企業数
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-indigo-600">
              {stats.totalCompanies}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <Link href="/admin/companies" className="text-sm font-medium text-indigo-600 hover:text-indigo-900 flex items-center">
              全ての企業を表示
              <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              データソース
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-indigo-600">
              {stats.activeDataSources} / {stats.totalDataSources}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <Link href="/admin/datasources" className="text-sm font-medium text-indigo-600 hover:text-indigo-900 flex items-center">
              全てのデータソースを表示
              <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              最終更新日時
            </dt>
            <dd className="mt-1 text-xl font-semibold text-indigo-600">
              {formatDate(stats.lastUpdated)}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-4 sm:px-6">
            <button 
              onClick={handleRunUpdate} 
              className="text-sm font-medium text-indigo-600 hover:text-indigo-900 flex items-center"
            >
              <ArrowPathIcon className="mr-1 h-4 w-4" />
              今すぐ更新を実行
            </button>
          </div>
        </div>
      </div>

      {/* 最近の更新 */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md mb-8">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            最近の更新
          </h3>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentUpdates.length > 0 ? (
            recentUpdates.map((update) => (
              <li key={update.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {update.toolName}
                      </p>
                      <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        update.updateType === 'AUTO' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {update.updateType === 'AUTO' ? '自動' : '手動'}
                      </span>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <Link
                        href={`/admin/tools/${update.toolId}`}
                        className="text-sm text-gray-500 hover:text-gray-900 flex items-center"
                      >
                        詳細
                        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <div className="text-sm text-gray-500">
                        {update.changes.map((change, idx) => (
                          <div key={idx} className="mb-1">
                            <span className="font-medium">{change.field}:</span>{' '}
                            <span className="line-through text-red-600">{change.oldValue}</span>{' '}
                            <span className="text-green-600">{change.newValue}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <span>
                        {formatDate(update.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="px-4 py-5 text-center text-sm text-gray-500">
              最近の更新はありません
            </li>
          )}
        </ul>
        <div className="bg-gray-50 px-4 py-4 sm:px-6">
          <Link
            href="/admin/updates"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-900 flex items-center"
          >
            全ての更新履歴を表示
            <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* クイックアクション */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            クイックアクション
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Link
              href="/admin/datasources/new"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              新しいデータソースを追加
            </Link>
            <Link
              href="/admin/tools/new"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              新しいツールを追加
            </Link>
            <Link
              href="/admin/companies/new"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              新しい企業を追加
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 