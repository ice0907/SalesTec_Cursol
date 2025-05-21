import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">ページが見つかりませんでした</h2>
      <p className="text-gray-600 mb-8">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <div className="space-y-4">
        <Link href="/" className="text-blue-500 hover:underline block">
          ホームに戻る
        </Link>
        <Link href="/admin" className="text-blue-500 hover:underline block">
          管理画面に戻る
        </Link>
      </div>
    </div>
  );
} 