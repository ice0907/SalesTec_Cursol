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
    <Link
      href={`/tools/${slug}`}
      className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div>
        <div className="mb-4 flex items-center">
          <div className="mr-3 h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
            {logoUrl ? (
              <div className="relative h-10 w-10">
                <Image
                  src={logoUrl}
                  alt={`${name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-sm font-medium text-gray-500">
                  {name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-xs text-gray-500">{companyName}</p>
          </div>
        </div>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
          {pricingModel}
        </span>
        <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
          {targetSize}
        </span>
        {languages.includes('ja') && (
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            日本語対応
          </span>
        )}
      </div>
    </Link>
  );
} 