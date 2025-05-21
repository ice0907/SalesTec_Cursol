import React from 'react';
import Link from 'next/link';

type Stage = {
  id: number;
  name: string;
  slug: string;
  description: string;
};

type ProcessFlowProps = {
  stages: Stage[];
  currentStage?: string;
  className?: string;
};

/**
 * 営業プロセスフロー図（矢印型）
 * 
 * 添付画像のような青い矢印フロー型のプロセス図コンポーネント
 */
export default function ProcessFlow({ stages, currentStage, className = '' }: ProcessFlowProps) {
  return (
    <div className={`w-full overflow-auto ${className}`}>
      <div className="min-w-max">
        {/* プロセスフロー */}
        <div className="flex flex-col lg:flex-row">
          {/* 矢印形状のステージ */}
          <div className="flex flex-col lg:flex-row items-stretch">
            {stages.map((stage, index) => (
              <React.Fragment key={stage.id}>
                <Link 
                  href={`/stages/${stage.slug}`}
                  className={`group relative flex items-center justify-center h-20 lg:h-40 min-w-32 lg:min-w-40 px-4 py-2 text-center ${
                    currentStage === stage.slug 
                      ? 'bg-indigo-700 text-white' 
                      : 'bg-indigo-800 text-white hover:bg-indigo-700'
                  } transition-colors duration-200`}
                >
                  {/* 矢印の形状 - 最初のステージには左側の三角形なし */}
                  {index > 0 && (
                    <div className="absolute left-0 top-0 h-0 w-0 border-t-[40px] lg:border-t-[80px] border-t-transparent border-b-[40px] lg:border-b-[80px] border-b-transparent border-l-[20px] lg:border-l-[30px] border-l-white"></div>
                  )}
                  
                  {/* 右側の三角形 - 最後のステージにも表示 */}
                  <div className="absolute right-0 top-0 h-0 w-0 border-t-[40px] lg:border-t-[80px] border-t-transparent border-b-[40px] lg:border-b-[80px] border-b-transparent border-l-[20px] lg:border-l-[30px] border-l-indigo-800 group-hover:border-l-indigo-700 transition-colors duration-200"></div>
                  
                  {/* テキスト */}
                  <div className="relative z-10 flex flex-col items-center justify-center px-2 lg:px-4">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-white text-indigo-800 font-bold text-sm mb-1">
                      {stage.id}
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-center">{stage.name}</span>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* モバイル用の説明文 */}
        <div className="block lg:hidden mt-4">
          {stages.map((stage) => (
            currentStage === stage.slug && (
              <div key={stage.id} className="text-sm text-gray-600">
                {stage.description}
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
} 