import React from 'react';

type StageInsightProps = {
  stageId: number;
  stageName: string;
  className?: string;
};

/**
 * ステージインサイトコンポーネント
 * 
 * 各ステージの市場動向や重要度などのインサイト情報を表示
 */
export function StageInsight({ stageId, stageName, className = '' }: StageInsightProps) {
  // ステージに応じたインサイト情報を取得
  const getStageInsight = (id: number) => {
    const insights = {
      1: {
        marketTrend: 'AIとデータエンリッチメント技術の進化により、リード獲得の精度が大幅に向上している。データプライバシー規制への対応が課題。',
        importance: 'high',
        keyKPI: ['リード獲得コスト (CAC)', 'リード品質スコア', '商談化率'],
        tips: '初期段階でデータの品質を高めることで、後続のプロセスもスムーズに進みます。'
      },
      2: {
        marketTrend: 'パーソナライズされたマルチチャネルアプローチがスタンダードに。メール以外にもソーシャルメディアやビデオを組み合わせた戦略が効果的。',
        importance: 'high',
        keyKPI: ['メール開封率', 'レスポンス率', 'ミーティング設定率'],
        tips: '相手の反応に基づいたシーケンスの分岐設計が重要です。'
      },
      3: {
        marketTrend: 'CRMとの統合が進み、AIによる商談予測精度が向上。モバイルでの利便性も重視されている。',
        importance: 'critical',
        keyKPI: ['商談進捗率', 'パイプライン精度', '商談サイクル時間'],
        tips: 'データ入力の自動化で営業担当者の負担を減らし、データ品質を高めましょう。'
      },
      4: {
        marketTrend: 'バーチャルデモとインタラクティブなプレゼンテーションツールの需要が増加。顧客体験を重視した提案が差別化要因に。',
        importance: 'medium',
        keyKPI: ['デモ完了率', '提案後の進行率', '顧客フィードバックスコア'],
        tips: '顧客のビジネス課題に焦点を当てた価値提案が重要です。'
      },
      5: {
        marketTrend: 'クラウドベースのCPQ導入が加速。複雑な価格設定も自動化され、スピードと正確性が向上している。',
        importance: 'high',
        keyKPI: ['見積作成時間', '契約締結率', '契約サイクル時間'],
        tips: '価格設定ルールを明確にし、例外処理のプロセスを整備しておくことが重要です。'
      },
      6: {
        marketTrend: 'AIによる予測精度の向上と、リアルタイムダッシュボードの需要が高まっている。経営層へのレポーティングも自動化が進む。',
        importance: 'medium',
        keyKPI: ['予測精度', 'パイプラインの健全性', '収益目標達成率'],
        tips: '過去データの分析と共に、リアルタイムの指標モニタリングも重要です。'
      },
      7: {
        marketTrend: 'プロダクトレッドグロースの考え方が浸透し、製品利用データに基づくカスタマーサクセスの自動化が進んでいる。',
        importance: 'high',
        keyKPI: ['顧客満足度', '更新率', '製品利用率'],
        tips: 'ハイタッチとローダッチを組み合わせた効率的なオンボーディングが重要です。'
      }
    };

    return insights[id as keyof typeof insights] || {
      marketTrend: '市場は常に変化しています。最新のトレンドを把握しましょう。',
      importance: 'medium',
      keyKPI: ['成果指標1', '成果指標2', '成果指標3'],
      tips: '継続的な改善を心がけましょう。'
    };
  };

  const insight = getStageInsight(stageId);
  
  // 重要度に応じたバッジのスタイルを設定
  const importanceBadgeStyle = () => {
    switch (insight.importance) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">ステージインサイト</h3>
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${importanceBadgeStyle()}`}>
          {insight.importance === 'critical' && '最重要'}
          {insight.importance === 'high' && '重要度：高'}
          {insight.importance === 'medium' && '重要度：中'}
          {insight.importance === 'low' && '重要度：低'}
        </span>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700">市場動向</h4>
          <p className="mt-1 text-sm text-gray-600">{insight.marketTrend}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700">主要KPI</h4>
          <ul className="mt-1 space-y-1">
            {insight.keyKPI.map((kpi, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-1.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                {kpi}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700">成功のためのヒント</h4>
          <p className="mt-1 text-sm text-gray-600">{insight.tips}</p>
        </div>
      </div>
    </div>
  );
} 