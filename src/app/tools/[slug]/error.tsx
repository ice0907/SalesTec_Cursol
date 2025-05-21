'use client';

import React from 'react';
import Link from 'next/link';

export default function ToolError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('ツールページでエラーが発生しました:', error);
  }, [error]);

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-gray-900 mb-4">ツール情報の取得中にエラーが発生しました</h1>
        <p className="text-gray-600 mb-6">
          申し訳ありませんが、ツール情報の読み込み中に問題が発生しました。
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => reset()}
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            再読み込み
          </button>
          <Link
            href="/"
            className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
} 