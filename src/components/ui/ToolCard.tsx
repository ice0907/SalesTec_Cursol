import React from "react";
import Image from "next/image";
import Link from "next/link";

type ToolCardProps = {
  id: string;
  name: string;
  description: string;
  companyName: string;
  logoUrl: string;
  pricingModel: string;
  languages: string[];
  targetSize: string;
  slug: string;
};

/**
 * ツールカードコンポーネント
 * 
 * 各セールステックツールを表示するカードコンポーネント
 */
export function ToolCard({
  name,
  description,
  companyName,
  logoUrl,
  pricingModel,
  languages,
  targetSize,
  slug,
}: ToolCardProps) {
  return (
    <Link href={`/tools/${slug}`} className="block group h-full">
      <div className="card-interactive h-full">
        <div className="p-6">
          <div className="flex items-start space-x-4 mb-4">
            <div className="flex-shrink-0">
              {logoUrl ? (
                <div className="w-14 h-14 relative rounded-2xl overflow-hidden shadow-soft bg-white border border-neutral-200">
                  <Image
                    src={logoUrl}
                    alt={`${name} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center shadow-soft">
                  <span className="text-primary-600 text-lg font-bold">
                    {name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200 truncate">
                {name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1 font-medium">
                {companyName}
              </p>
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="badge-primary">
              {pricingModel}
            </span>
            <span className="badge text-neutral-600 bg-neutral-100 border-neutral-200">
              {targetSize}
            </span>
            {languages.includes('ja') && (
              <span className="badge-success">
                🇯🇵 日本語
              </span>
            )}
          </div>

          <div className="flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            詳細を見る
            <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}   