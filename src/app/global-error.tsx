'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('グローバルエラーが発生しました:', error);
  }, [error]);

  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">エラーが発生しました</h1>
              <p className="text-gray-600 mb-6">
                申し訳ありませんが、重大な問題が発生しました。
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => reset()}
                  className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  再試行
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 