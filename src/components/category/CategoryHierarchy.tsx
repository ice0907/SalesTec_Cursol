import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

type Category = {
  id: string;
  slug: string;
  name: string;
  description?: string | null;
  kpiExamples?: string | null;
  order: number;
  children?: Category[];
};

type CategoryHierarchyProps = {
  categories: Category[];
  currentCategorySlug?: string;
};

/**
 * カテゴリ階層表示コンポーネント
 * 
 * メインカテゴリとサブカテゴリを階層的に表示する
 */
export default function CategoryHierarchy({ categories, currentCategorySlug }: CategoryHierarchyProps) {
  // 親カテゴリを順序でソート
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          営業プロセス / カテゴリ
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          営業活動の流れに沿ったカテゴリ分類
        </p>
      </div>
      <nav className="py-4">
        <ul className="space-y-2 px-2">
          {sortedCategories.map((category) => (
            <li key={category.id} className="py-1">
              {/* メインカテゴリ */}
              <Link
                href={`/categories/${category.slug}`}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  currentCategorySlug === category.slug
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 mr-3">
                  <span className="text-xs font-medium leading-none text-indigo-600">
                    {category.order}
                  </span>
                </span>
                {category.name}
              </Link>
              
              {/* サブカテゴリがある場合 */}
              {category.children && category.children.length > 0 && (
                <ul className="ml-6 mt-1 space-y-1">
                  {category.children
                    .sort((a, b) => a.order - b.order)
                    .map((subCategory) => (
                      <li key={subCategory.id}>
                        <Link
                          href={`/categories/${subCategory.slug}`}
                          className={`flex items-center pl-4 pr-2 py-2 text-sm rounded-md ${
                            currentCategorySlug === subCategory.slug
                              ? 'bg-indigo-50 text-indigo-600 font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          <ChevronRightIcon className="mr-2 h-4 w-4 text-gray-400" />
                          {subCategory.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 