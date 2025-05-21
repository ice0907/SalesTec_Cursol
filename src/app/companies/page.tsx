import React from "react";
import Image from "next/image";
import Link from "next/link";

// 仮のデータ（後でAPIから取得するように変更）
const companies = [
  {
    id: "1",
    name: "Salesforce, Inc.",
    description: "世界最大のCRMプラットフォームを提供する企業",
    logoUrl: "/logos/salesforce.png",
    employeeCount: 70000,
    fundingRound: "上場企業",
    fundingAmount: 0,
    tools: [
      {
        id: "1",
        name: "Salesforce",
        slug: "salesforce",
      },
    ],
  },
  // 他の企業データ...
];

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">企業一覧</h1>
          <p className="mt-2 text-sm text-gray-600">
            セールステックツールを提供する企業の一覧
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {company.logoUrl && (
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        src={company.logoUrl}
                        alt={`${company.name} logo`}
                        fill
                        className="rounded-md object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">
                      {company.name}
                    </h2>
                    {company.employeeCount && (
                      <p className="text-sm text-gray-500">
                        従業員数: {company.employeeCount.toLocaleString()}人
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">{company.description}</p>
                {company.fundingRound && (
                  <p className="mt-2 text-sm text-gray-500">
                    資金調達: {company.fundingRound}
                    {company.fundingAmount &&
                      ` (${company.fundingAmount.toLocaleString()}円)`}
                  </p>
                )}
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900">提供ツール</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {company.tools.map((tool) => (
                      <Link
                        key={tool.id}
                        href={`/tools/${tool.slug}`}
                        className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 hover:bg-indigo-200"
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 