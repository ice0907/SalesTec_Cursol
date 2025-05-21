import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobeAltIcon, CurrencyYenIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

type ToolCardProps = {
  id: string;
  slug: string;
  name: string;
  description: string;
  logoUrl?: string | null;
  company: {
    name: string;
    slug: string;
  };
  pricingModel: string;
  languages: string[];
  targetSize: string;
  features: string[];
  categories: {
    name: string;
    slug: string;
  }[];
};

/**
 * ツールカードコンポーネント
 * 
 * ツールの基本情報と主要メタデータを表示するカード
 */
export default function ToolCard({ 
  id, 
  slug, 
  name, 
  description, 
  logoUrl, 
  company, 
  pricingModel, 
  languages, 
  targetSize, 
  features, 
  categories 
}: ToolCardProps) {
  // 言語表示の整形
  const hasJapanese = languages.includes('ja');
  const languageDisplay = hasJapanese 
    ? '日本語対応' 
    : '英語のみ';

  // 導入規模の表示
  const sizeMap: {[key: string]: string} = {
    'SMB': '小規模企業',
    'SMB-Mid-Market': '中小企業〜中堅企業',
    'Mid-Market': '中堅企業',
    'Mid-Market-Enterprise': '中堅〜大企業',
    'Enterprise': '大企業',
    'SMB-Enterprise': '小規模〜大企業'
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center mb-4">
          {/* ロゴ */}
          <div className="flex-shrink-0 h-12 w-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
            {logoUrl ? (
              <Image 
                src={logoUrl} 
                alt={`${name} logo`} 
                width={48} 
                height={48}
                className="rounded-md"
              />
            ) : (
              <span className="text-xl font-bold text-indigo-600">
                {name.substring(0, 2)}
              </span>
            )}
          </div>
          
          {/* ツール名と会社名 */}
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              <Link href={`/tools/${slug}`} className="hover:text-indigo-600">
                {name}
              </Link>
            </h3>
            <p className="text-sm text-gray-500">
              <Link href={`/companies/${company.slug}`} className="hover:underline">
                {company.name}
              </Link>
            </p>
          </div>
        </div>
        
        {/* 説明 */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        {/* メタデータ行 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <CurrencyYenIcon className="h-4 w-4 mr-1 text-gray-400" />
            <span>{pricingModel}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <GlobeAltIcon className="h-4 w-4 mr-1 text-gray-400" />
            <span className={hasJapanese ? 'text-green-600 font-medium' : ''}>
              {languageDisplay}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <BuildingOfficeIcon className="h-4 w-4 mr-1 text-gray-400" />
            <span>{sizeMap[targetSize] || targetSize}</span>
          </div>
        </div>
        
        {/* カテゴリタグ */}
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={`/categories/${category.slug}`}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
        
        {/* 機能タグ */}
        <div className="flex flex-wrap gap-2">
          {features.slice(0, 4).map((feature, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {feature}
            </span>
          ))}
          {features.length > 4 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              +{features.length - 4}
            </span>
          )}
        </div>
      </div>
      
      {/* フッター */}
      <div className="border-t border-gray-200 px-5 py-3 text-right">
        <Link 
          href={`/tools/${slug}`}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          詳細を見る →
        </Link>
      </div>
    </div>
  );
} 