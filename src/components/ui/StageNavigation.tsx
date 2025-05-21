import React from 'react';
import Link from 'next/link';

type Stage = {
  id: number;
  name: string;
  slug: string;
};

type StageNavigationProps = {
  stages: Stage[];
  currentStageId: number;
};

/**
 * ステージナビゲーションコンポーネント
 * 
 * ステージ間の移動を可能にするナビゲーション
 */
export function StageNavigation({ stages, currentStageId }: StageNavigationProps) {
  // 前のステージと次のステージを取得
  const currentIndex = stages.findIndex(stage => stage.id === currentStageId);
  const prevStage = currentIndex > 0 ? stages[currentIndex - 1] : null;
  const nextStage = currentIndex < stages.length - 1 ? stages[currentIndex + 1] : null;

  return (
    <div className="flex justify-between items-center py-4 border-t border-b border-gray-200 my-6">
      <div>
        {prevStage && (
          <Link
            href={`/stages/${prevStage.slug}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>{prevStage.name}</span>
          </Link>
        )}
      </div>
      
      <div className="hidden md:flex space-x-2">
        {stages.map((stage) => (
          <Link
            key={stage.id}
            href={`/stages/${stage.slug}`}
            className={`px-3 py-1 text-sm rounded-full ${
              stage.id === currentStageId
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {stage.id}
          </Link>
        ))}
      </div>
      
      <div>
        {nextStage && (
          <Link
            href={`/stages/${nextStage.slug}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <span>{nextStage.name}</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
} 