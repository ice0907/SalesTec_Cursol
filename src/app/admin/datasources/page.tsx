'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

type DataSource = {
  id: string;
  name: string;
  type: string;
  url: string;
  toolId: string | null;
  companyId: string | null;
  isActive: boolean;
  lastChecked: string | null;
  createdAt: string;
  updatedAt: string;
  tool: {
    id: string;
    name: string;
    slug: string;
  } | null;
  company: {
    id: string;
    name: string;
    slug: string;
  } | null;
};

export default function DataSourcesPage() {
  const [dataSources, setDataSources] = useState<DataSource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // データソースの取得
  const fetchDataSources = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/datasources');
      if (!response.ok) {
        throw new Error('データソースの取得に失敗しました');
      }
      const data = await response.json();
      setDataSources(data);
      setError(null);
    } catch (error) {
      setError('データソースの取得中にエラーが発生しました');
      console.error('Error fetching data sources:', error);
    } finally {
      setLoading(false);
    }
  };

  // ページ読み込み時にデータソースを取得
  useEffect(() => {
    fetchDataSources();
  }, []);

  // データソースの削除
  const handleDelete = async (id: string) => {
    if (!confirm('このデータソースを削除してもよろしいですか？')) {
      return;
    }

    try {
      const response = await fetch(`/api/datasources/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('データソースの削除に失敗しました');
      }

      // 成功したら一覧を更新
      fetchDataSources();
    } catch (error) {
      setError('データソースの削除中にエラーが発生しました');
      console.error('Error deleting data source:', error);
    }
  };

  // データソースの有効/無効切り替え
  const handleToggleActive = async (id: string, currentActive: boolean) => {
    try {
      const response = await fetch(`/api/datasources/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isActive: !currentActive,
        }),
      });

      if (!response.ok) {
        throw new Error('データソースのステータス更新に失敗しました');
      }

      // 成功したら一覧を更新
      fetchDataSources();
    } catch (error) {
      setError('データソースのステータス更新中にエラーが発生しました');
      console.error('Error updating data source status:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">データソース管理</h1>
        <Link 
          href="/admin/datasources/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center"
        >
          <PlusIcon className="w-5 h-5 mr-2" /> 新規作成
        </Link>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">名前</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">タイプ</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">関連ツール/企業</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最終チェック</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ステータス</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">アクション</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dataSources.length > 0 ? (
                dataSources.map((dataSource) => (
                  <tr key={dataSource.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{dataSource.name}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{dataSource.url}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        dataSource.type === 'WEBSITE' ? 'bg-purple-100 text-purple-800' :
                        dataSource.type === 'API' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {dataSource.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dataSource.tool && (
                        <div>
                          <span className="font-medium">ツール:</span> {dataSource.tool.name}
                        </div>
                      )}
                      {dataSource.company && (
                        <div>
                          <span className="font-medium">企業:</span> {dataSource.company.name}
                        </div>
                      )}
                      {!dataSource.tool && !dataSource.company && 'なし'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {dataSource.lastChecked 
                        ? new Date(dataSource.lastChecked).toLocaleString('ja-JP')
                        : 'なし'
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleActive(dataSource.id, dataSource.isActive)}
                        className={`px-3 py-1 text-sm rounded-full ${
                          dataSource.isActive 
                            ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {dataSource.isActive ? '有効' : '無効'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link 
                          href={`/admin/datasources/${dataSource.id}/edit`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <PencilIcon className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => handleDelete(dataSource.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                    データソースがありません。新しいデータソースを作成してください。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 