import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/outline';

type CategoryDetailProps = {
  name: string;
  description?: string | null;
  kpiExamples?: string | null;
  toolCount?: number;
};

/**
 * カテゴリ詳細コンポーネント
 * 
 * カテゴリの説明文とKPI例を表示する
 */
export default function CategoryDetail({ name, description, kpiExamples, toolCount = 0 }: CategoryDetailProps) {
  // KPI例をリスト形式に変換
  const kpiList = kpiExamples 
    ? kpiExamples.split(',').map(kpi => kpi.trim())
    : [];

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {name}
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          登録ツール数: {toolCount}
        </p>
      </div>
      <div className="px-4 py-5 sm:px-6">
        {description && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">カテゴリ概要</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{description}</p>
          </div>
        )}
        
        {kpiList.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2 text-indigo-500" />
              主要KPI例
            </h3>
            <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {kpiList.map((kpi, index) => (
                <li key={index} className="col-span-1 flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                    <span className="text-xs font-medium text-indigo-600">{index + 1}</span>
                  </div>
                  <span className="text-sm text-gray-700">{kpi}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 