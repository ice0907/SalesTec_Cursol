'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">エラーが発生しました</h2>
            <p className="text-gray-700 mb-4">
              申し訳ありませんが、ページの読み込み中にエラーが発生しました。
            </p>
            <p className="text-sm text-gray-500 mb-6">
              エラー: {error.message || 'Unknown error'}
            </p>
            <button
              onClick={() => reset()}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              もう一度試す
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
