'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChartBarIcon, 
  Cog6ToothIcon, 
  DocumentDuplicateIcon, 
  HomeIcon, 
  ServerIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'ダッシュボード', href: '/admin', icon: HomeIcon },
  { name: 'データソース', href: '/admin/datasources', icon: ServerIcon },
  { name: 'ツール', href: '/admin/tools', icon: WrenchScrewdriverIcon },
  { name: '企業', href: '/admin/companies', icon: BuildingOfficeIcon },
  { name: '更新履歴', href: '/admin/updates', icon: DocumentDuplicateIcon },
  { name: '統計', href: '/admin/stats', icon: ChartBarIcon },
  { name: '設定', href: '/admin/settings', icon: Cog6ToothIcon },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* サイドバー - デスクトップ用 */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-indigo-700">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-indigo-800">
              <span className="text-white text-xl font-bold">✨ SalesTec 管理画面 ✨</span>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100 hover:bg-indigo-600'
                    }`}
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="p-4 text-xs text-indigo-200">
                © 2024 SalesTec
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-gray-100">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                {navigation.find(
                  (item) => pathname === item.href || pathname.startsWith(`${item.href}/`)
                )?.name || '管理画面'}
              </h1>
              <div className="py-4">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 