import React from 'react';

type Category = {
  id: string;
  name: string;
  description: string;
};

type CategoryDetailProps = {
  category: Category;
  className?: string;
};

/**
 * カテゴリ詳細コンポーネント
 * 
 * カテゴリの詳細情報とアイコンを表示
 */
export function CategoryDetail({ category, className = '' }: CategoryDetailProps) {
  // カテゴリに応じたアイコンを取得するヘルパー関数
  const getCategoryIcon = (categoryName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'リードジェネレーション': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      'データクレンジング': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      'メールシーケンス': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      'CRMシステム': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      // デフォルトアイコン
      'default': (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    };

    return icons[categoryName] || icons['default'];
  };

  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-start">
        <div className="mr-4 p-2 bg-indigo-50 rounded-lg text-indigo-600">
          {getCategoryIcon(category.name)}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
          <p className="mt-2 text-sm text-gray-600">{category.description}</p>
          
          <div className="mt-4">
            <div className="text-xs font-medium text-gray-500 uppercase">主な機能</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-4">
              {generateFeatures(category.name).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// カテゴリ名に基づいて機能リストを生成するヘルパー関数
function generateFeatures(categoryName: string): string[] {
  const featureMap: { [key: string]: string[] } = {
    'リードジェネレーション': [
      'リードデータの収集と管理',
      'ターゲットリストの作成',
      'データエンリッチメント',
      'リードスコアリング'
    ],
    'データクレンジング': [
      '重複データの検出と統合',
      'データ検証と正規化',
      '不完全なデータの補完',
      'データ品質スコアリング'
    ],
    'リードデータ管理': [
      'リードの一元管理',
      'データ更新の自動化',
      'セグメンテーション',
      'データ変更履歴の追跡'
    ],
    'メールシーケンス': [
      '自動メール配信',
      'A/Bテスト',
      '開封率・クリック率の分析',
      'パーソナライズされたテンプレート'
    ],
    'コールダイヤラー': [
      '自動発信',
      '通話録音',
      'コール分析',
      'CRMとの連携'
    ],
    'オンライン商談予約': [
      'カレンダー連携',
      '自動リマインダー',
      '予約ページのカスタマイズ',
      'タイムゾーン管理'
    ],
    'CRMシステム': [
      '顧客データの一元管理',
      '商談トラッキング',
      'レポート・分析',
      'チーム間コラボレーション'
    ],
    'CPQ (Configure, Price, Quote)': [
      '製品構成の自動化',
      '価格計算',
      '見積書生成',
      '承認プロセス'
    ],
    '電子署名ツール': [
      'ワークフロー自動化',
      '電子署名の法的有効性',
      '監査証跡',
      'マルチデバイス対応'
    ],
  };

  // カテゴリに対する機能がない場合はデフォルトの機能リストを返す
  return featureMap[categoryName] || [
    'データ分析・レポーティング',
    'ワークフロー自動化',
    'チーム連携機能',
    'サードパーティ統合'
  ];
} 