'use client';

import React, { useState, useEffect } from 'react';
import { 
  ArrowUpIcon, 
  ArrowDownIcon 
} from '@heroicons/react/24/outline';

type StatItem = {
  id: string;
  name: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease';
  period: string;
};

type CategoryStat = {
  category: string;
  count: number;
  percentage: number;
};

type ActivityStat = {
  date: string;
  count: number;
};

export default function StatsPage() {
  const [loading, setLoading] = useState(true);
  const [summaryStats, setSummaryStats] = useState<StatItem[]>([]);
  const [categoryStats, setCategoryStats] = useState<CategoryStat[]>([]);
  const [activityStats, setActivityStats] = useState<ActivityStat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        // TODO: 実際のAPIから統計データを取得
        // モックデータを使用
        const mockSummaryStats: StatItem[] = [
          {
            id: '1',
            name: '登録ツール数',
            value: 128,
            change: 12,
            changeType: 'increase',
            period: '先月比',
          },
          {
            id: '2',
            name: '登録企業数',
            value: 42,
            change: 5,
            changeType: 'increase',
            period: '先月比',
          },
          {
            id: '3',
            name: 'データソース',
            value: 8,
            change: 2,
            changeType: 'increase',
            period: '先月比',
          },
          {
            id: '4',
            name: 'ページビュー',
            value: 4285,
            change: 3.2,
            changeType: 'decrease',
            period: '先週比',
          },
        ];

        const mockCategoryStats: CategoryStat[] = [
          { category: 'CRM', count: 24, percentage: 18.75 },
          { category: 'マーケティングオートメーション', count: 18, percentage: 14.06 },
          { category: 'セールスイネーブルメント', count: 16, percentage: 12.5 },
          { category: 'ビデオ会議', count: 10, percentage: 7.81 },
          { category: 'リードジェネレーション', count: 14, percentage: 10.94 },
          { category: 'その他', count: 46, percentage: 35.94 },
        ];

        const mockActivityStats: ActivityStat[] = [
          { date: '2023-01-01', count: 5 },
          { date: '2023-02-01', count: 8 },
          { date: '2023-03-01', count: 12 },
          { date: '2023-04-01', count: 10 },
          { date: '2023-05-01', count: 15 },
          { date: '2023-06-01', count: 20 },
          { date: '2023-07-01', count: 18 },
          { date: '2023-08-01', count: 22 },
          { date: '2023-09-01', count: 28 },
          { date: '2023-10-01', count: 30 },
          { date: '2023-11-01', count: 35 },
          { date: '2023-12-01', count: 40 },
        ];

        setSummaryStats(mockSummaryStats);
        setCategoryStats(mockCategoryStats);
        setActivityStats(mockActivityStats);
      } catch (error) {
        console.error('統計データの取得に失敗しました:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // 日付フォーマット
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-medium text-gray-900">統計情報</h2>
        <p className="mt-1 text-sm text-gray-500">
          セールステックツール/企業の登録状況とサイト利用統計
        </p>
      </div>

      {/* 概要統計 */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {summaryStats.map((stat) => (
          <div key={stat.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {stat.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {stat.value.toLocaleString()}
              </dd>
              <dd className={`mt-2 flex items-center text-sm ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 mr-1" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 mr-1" aria-hidden="true" />
                )}
                <span className="font-medium">
                  {stat.change}%
                </span>
                <span className="ml-1 text-gray-500">({stat.period})</span>
              </dd>
            </div>
          </div>
        ))}
      </div>

      {/* カテゴリ別統計 */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            カテゴリ別ツール数
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            {categoryStats.map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between text-sm font-medium text-gray-900">
                  <div>{item.category}</div>
                  <div>{item.count}件 ({item.percentage}%)</div>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 月別登録数 */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            月別ツール登録数
          </h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="h-80">
            <div className="flex h-full items-end space-x-2">
              {activityStats.map((item) => {
                const maxValue = Math.max(...activityStats.map(s => s.count));
                const heightPercentage = (item.count / maxValue) * 100;
                
                return (
                  <div key={item.date} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-indigo-600 rounded-t"
                      style={{ height: `${heightPercentage}%` }}
                    ></div>
                    <div className="mt-2 text-xs text-gray-500">
                      {formatDate(item.date)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 