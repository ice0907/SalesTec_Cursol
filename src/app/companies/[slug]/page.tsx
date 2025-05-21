import React from "react";
import Image from "next/image";
import Link from "next/link";

// 仮のデータ（後でAPIから取得するように変更）
const company = {
  id: "1",
  name: "Salesforce, Inc.",
  description: "世界最大のCRMプラットフォームを提供する企業。1999年に設立され、クラウドベースのCRMソリューションを提供しています。営業、マーケティング、カスタマーサービスなど、ビジネスプロセス全体をカバーする包括的なソリューションを展開しています。",
  logoUrl: "/logos/salesforce.png",
  employeeCount: 70000,
  fundingRound: "上場企業",
  fundingAmount: 0,
  tools: [
    {
      id: "1",
      name: "Salesforce",
      description: "世界最大のCRMプラットフォーム",
      logoUrl: "/logos/salesforce.png",
      pricingModel: "エンタープライズ",
      languages: ["ja", "en"],
      targetSize: "エンタープライズ",
      slug: "salesforce",
      stages: [
        { id: "2", name: "アウトリーチ／商談化", slug: "outreach" },
        { id: "3", name: "商談管理・CRM", slug: "crm" },
        { id: "4", name: "提案・デモ", slug: "proposal" },
      ],
    },
    // 他のツールデータ...
  ],
};

export default function CompanyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center space-x-4">
              {company.logoUrl && (
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={company.logoUrl}
                    alt={`${company.name} logo`}
                    fill
                    className="rounded-md object-contain"
                  />
                </div>
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {company.name}
                </h1>
                {company.employeeCount && (
                  <p className="mt-1 text-sm text-gray-500">
                    従業員数: {company.employeeCount.toLocaleString()}人
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">概要</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {company.description}
                </dd>
              </div>
              {company.fundingRound && (
                <div>
                  <dt className="text-sm font-medium text-gray-500">資金調達</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {company.fundingRound}
                    {company.fundingAmount &&
                      ` (${company.fundingAmount.toLocaleString()}円)`}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">提供ツール</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.tools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    {tool.logoUrl && (
                      <div className="relative h-12 w-12 flex-shrink-0">
                        <Image
                          src={tool.logoUrl}
                          alt={`${tool.name} logo`}
                          fill
                          className="rounded-md object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="hover:text-indigo-600"
                        >
                          {tool.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500">{tool.pricingModel}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{tool.description}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">
                      対応ステージ
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {tool.stages.map((stage) => (
                        <Link
                          key={stage.id}
                          href={`/stages/${stage.slug}`}
                          className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 hover:bg-indigo-200"
                        >
                          {stage.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tool.languages.includes("ja") && (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        日本語対応
                      </span>
                    )}
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      {tool.targetSize}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 