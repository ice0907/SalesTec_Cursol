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

export default function NewDataSourcePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    type: 'WEBSITE', // デフォルト値
    url: '',
    toolId: '',
    companyId: '',
    isActive: true,
  });
  const [tools, setTools] = useState<Tool[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ツールと企業のデータを取得
  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error('データの取得中にエラーが発生しました:', error);
        setError('関連データの取得に失敗しました。後でもう一度お試しください。');
      }
    };

    fetchData();
  }, []);

  // フォームの入力値を更新
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
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
      // toolIdとcompanyIdが空文字列の場合はnullに変換
      const dataToSend = {
        ...formData,
        toolId: formData.toolId || null,
        companyId: formData.companyId || null,
      };

      const response = await fetch('/api/datasources', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'データソースの作成に失敗しました');
      }

      // 成功したらデータソース一覧ページにリダイレクト
      router.push('/admin/datasources');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('データソースの作成中にエラーが発生しました');
      }
      console.error('Error creating data source:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">新しいデータソースの作成</h1>
        <p className="text-gray-600">ツールや企業の情報を更新するためのデータソースを作成します。</p>
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
                value={formData.toolId}
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
                value={formData.companyId}
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
              {loading ? '保存中...' : '保存する'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 