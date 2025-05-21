'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Tool = {
  id: string;
  name: string;
  slug: string;
};

type Company = {
  id: string;
  name: string;
  slug: string;
};

type DataSource = {
  id: string;
  name: string;
  type: string;
  url: string;
  toolId: string | null;
  companyId: string | null;
  isActive: boolean;
  lastChecked: string | null;
};

export default function EditDataSourcePage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { id } = params;
  
  const [formData, setFormData] = useState<DataSource>({
    id: '',
    name: '',
    type: 'WEBSITE',
    url: '',
    toolId: null,
    companyId: null,
    isActive: true,
    lastChecked: null,
  });
  
  const [tools, setTools] = useState<Tool[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // データソース、ツール、企業のデータを取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        // データソースの取得
        const dataSourceResponse = await fetch(`/api/datasources/${id}`);
        if (!dataSourceResponse.ok) {
          throw new Error('データソースの取得に失敗しました');
        }
        const dataSourceData = await dataSourceResponse.json();
        setFormData(dataSourceData);

        // ツールの取得
        const toolsResponse = await fetch('/api/tools');
        if (!toolsResponse.ok) {
          throw new Error('ツールの取得に失敗しました');
        }
        const toolsData = await toolsResponse.json();
        setTools(toolsData);

        // 企業の取得
        const companiesResponse = await fetch('/api/companies');
        if (!companiesResponse.ok) {
          throw new Error('企業の取得に失敗しました');
        }
        const companiesData = await companiesResponse.json();
        setCompanies(companiesData);

        setError(null);
      } catch (error) {
        console.error('データの取得中にエラーが発生しました:', error);
        setError('データの取得に失敗しました。後でもう一度お試しください。');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // フォームの入力値を更新
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'toolId' || name === 'companyId') {
      // 空の値はnullに変換
      setFormData((prev) => ({ ...prev, [name]: value || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // フォームの送信
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/datasources/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'データソースの更新に失敗しました');
      }

      // 成功したらデータソース一覧ページにリダイレクト
      router.push('/admin/datasources');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('データソースの更新中にエラーが発生しました');
      }
      console.error('Error updating data source:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">データソースの編集</h1>
        <p className="text-gray-600">データソースの設定を更新します。</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            {/* 名前 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* タイプ */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                タイプ <span className="text-red-500">*</span>
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="WEBSITE">ウェブサイト</option>
                <option value="API">API</option>
                <option value="RSS">RSSフィード</option>
              </select>
            </div>

            {/* URL */}
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700">
                URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* ツール */}
            <div>
              <label htmlFor="toolId" className="block text-sm font-medium text-gray-700">
                関連ツール
              </label>
              <select
                id="toolId"
                name="toolId"
                value={formData.toolId || ''}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">選択してください</option>
                {tools.map((tool) => (
                  <option key={tool.id} value={tool.id}>
                    {tool.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 企業 */}
            <div>
              <label htmlFor="companyId" className="block text-sm font-medium text-gray-700">
                関連企業
              </label>
              <select
                id="companyId"
                name="companyId"
                value={formData.companyId || ''}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">選択してください</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 最終チェック日時 */}
            <div>
              <label htmlFor="lastChecked" className="block text-sm font-medium text-gray-700">
                最終チェック日時
              </label>
              <div className="text-sm text-gray-500">
                {formData.lastChecked 
                  ? new Date(formData.lastChecked).toLocaleString('ja-JP')
                  : 'まだチェックされていません'
                }
              </div>
            </div>

            {/* アクティブ状態 */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="isActive"
                  name="isActive"
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="isActive" className="font-medium text-gray-700">
                  有効にする
                </label>
                <p className="text-gray-500">このデータソースをアクティブにし、自動更新に含める</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end space-x-3">
            <Link
              href="/admin/datasources"
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              キャンセル
            </Link>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? '更新中...' : '更新する'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 