import React from 'react';
import Link from 'next/link';

export default function ToolNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">ツールが見つかりません</h1>
        <p className="text-gray-600 mb-6">
          指定されたツールは存在しないか、削除された可能性があります。
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            href="/tools"
            className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ツール一覧に戻る
          </Link>
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