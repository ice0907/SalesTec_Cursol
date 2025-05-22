'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allStagesWithTools, getToolBySlug, type ToolWithStage } from "../../../data/tools";
import { toolDetails } from "../../../data/tool-details";
import { 
  BuildingOffice2Icon, 
  CalendarIcon, 
  UsersIcon, 
  CurrencyYenIcon, 
  BuildingOfficeIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

// ツール固有データを取得する関数
function getToolSpecificData(dataObj: Record<string, string[]>, slug: string, defaultValue: string[], toolSlug?: string): string[] {
  if (!dataObj || !slug) {
    return defaultValue;
  }

  // 完全一致
  if (dataObj[slug]) {
    return dataObj[slug];
  }

  // ハイフンやアンダースコアを除去して比較
  const normalizedKey = slug.replace(/[-_]/g, '').toLowerCase();
  for (const key of Object.keys(dataObj)) {
    const keyNormalized = key.replace(/[-_]/g, '').toLowerCase();
    if (keyNormalized === normalizedKey) {
      return dataObj[key];
    }
  }
  
  // 部分一致
  for (const key of Object.keys(dataObj)) {
    if (key.includes(slug) || slug.includes(key)) {
      return dataObj[key];
    }
  }
  
  // tool.slugで再試行
  if (toolSlug && toolSlug !== slug) {
    if (dataObj[toolSlug]) {
      return dataObj[toolSlug];
    }
  }
  
  return defaultValue;
}

// 公式サイトのURLマッピング
const officialSites: Record<string, string> = {
  'salesforce': 'https://www.salesforce.com/',
  'hubspot': 'https://www.hubspot.com/',
  'outreach': 'https://www.outreach.io/',
  'mazrica-sales': 'https://mazrica.com/',
  // ... 他のツールのURLを追加
};

// ツールの機能データ
const toolFeatures: Record<string, string[]> = {
  'salesforce': [
    "包括的な顧客データ管理システム",
    "高度な営業プロセス自動化",
    "AIを活用した営業予測",
    "カスタマイズ可能なダッシュボード",
    "モバイルアプリ対応"
  ],
  'hubspot': [
    "オールインワンのマーケティング・営業プラットフォーム",
    "リード獲得から育成までの自動化",
    "カスタマイズ可能な営業パイプライン",
    "メールトラッキング機能",
    "会議予約の自動化"
  ],
  'outreach': [
    "メール配信の自動化と追跡",
    "マルチチャネルシーケンス管理",
    "AIを活用した応答予測",
    "セールスエンゲージメント分析",
    "CRMとの双方向同期"
  ],
  'calendly': [
    "スマートなスケジューリング自動化",
    "複数カレンダーの統合管理",
    "カスタマイズ可能な予約ページ",
    "自動リマインダー送信",
    "Zoomなどとの連携機能"
  ],
  'mazrica-sales': [
    "直感的なカード型案件管理",
    "AIによる受注確率予測",
    "日本企業向けカスタマイズ機能",
    "商談履歴の一元管理",
    "営業活動の可視化ダッシュボード"
  ],
  'zoominfo': [
    "高精度な企業・担当者データベース",
    "インテントデータ分析",
    "組織図情報の提供",
    "リアルタイムのアラート機能",
    "CRMデータエンリッチメント"
  ],
  'apollo': [
    "プロスペクティングの自動化",
    "メールシーケンス機能",
    "LinkedIn連携",
    "データ検証と更新",
    "営業インテリジェンス機能"
  ],
  'gong': [
    "通話・商談の自動録音と分析",
    "AIによる会話インテリジェンス",
    "ベストプラクティスの抽出",
    "コーチング機能",
    "リアルタイムのインサイト提供"
  ],
  'granola': [
    "会議の自動文字起こし",
    "重要ポイントの自動抽出",
    "CRMとの自動連携",
    "タスク・アクションの自動生成",
    "会議アーカイブ機能"
  ],
  'humantic-ai': [
    "パーソナリティ分析",
    "コミュニケーション提案",
    "チーム適合性評価",
    "行動予測分析",
    "カスタマイズ可能なインサイト"
  ],
  'crystal': [
    "DISC分析ベースの性格診断",
    "コミュニケーションコーチング",
    "チーム分析機能",
    "メール文章の最適化提案",
    "LinkedIn連携機能"
  ],
  'linkedin-sales-navigator': [
    "高度な検索・フィルタリング",
    "リード推奨機能",
    "InMailメッセージング",
    "CRM連携",
    "リアルタイムの更新通知"
  ]
};

interface Tool {
  id: string;
  name: string;
  description: string;
  companyName: string;
  logoUrl: string;
  pricingModel: string;
  languages: string[];
  targetSize: string;
  slug: string;
  detailedDescription?: string;
  stageName: string;
  stageSlug: string;
  features?: string[];
}

interface CompanyInfo {
  foundedDate: string;
  employeeCount: string;
  customerCount: string;
  notableCustomers: string[];
}

interface ProductInfo {
  name: string;
  description: string;
  releaseDate: string;
  targetMarket: string;
  pricing?: string;
}

interface CompanyStrategy {
  fourC: FourCAnalysis;
  futureStrategy: string[];
  focusAreas: string[];
  challenges: string[];
}

interface FourCAnalysis {
  customer: string[];
  competitor: string[];
  company: string[];
  commodity: string[];
}

interface Review {
  name: string;
  company: string;
  position: string;
  rating: number;
  comment: string;
}

// デフォルト値の定義
const defaultFeatures: string[] = [
  "基本的な機能1",
  "基本的な機能2",
  "基本的な機能3"
];

const defaultUseCases: string[] = [
  "一般的な利用シーン1",
  "一般的な利用シーン2",
  "一般的な利用シーン3"
];

const defaultBenefits: string[] = [
  "一般的なメリット1",
  "一般的なメリット2",
  "一般的なメリット3"
];

const defaultReviews: Review[] = [
  {
    name: "佐藤 健太",
    company: "テクノロジーソリューションズ株式会社",
    position: "営業マネージャー",
    rating: 4,
    comment: "導入から3ヶ月で営業チームの生産性が向上しました。特にデータの一元管理がしやすく、チーム間の情報共有がスムーズになりました。"
  },
  {
    name: "鈴木 麻衣",
    company: "グローバルシステムズ株式会社",
    position: "セールスディレクター",
    rating: 5,
    comment: "使いやすいインターフェースと豊富な機能に惹かれて導入を決めました。特に分析機能が優れており、営業戦略の立案に役立っています。"
  }
];

// ツールの説明データ
const toolDescriptions: Record<string, string> = {
  'salesforce': 'クラウドベースの統合CRMプラットフォーム。営業、マーケティング、サービスプロセスを一元管理し、企業の顧客関係強化を支援。',
  'hubspot': '無料から始められるオールインワンのマーケティング・営業・サービスプラットフォーム。使いやすいインターフェイスが特徴。',
  // ... 他のツールの説明を追加
};

// レビューデータ
const allReviews: Record<string, Review[]> = {
  'salesforce': [
    {
      name: "田中 健一",
      company: "グローバルテクノロジー株式会社",
      position: "営業部長",
      rating: 5,
      comment: "大規模な営業チームの管理に最適です。カスタマイズ性が高く、当社の複雑な営業プロセスにも柔軟に対応できています。"
    },
    {
      name: "山田 美咲",
      company: "イノベーションパートナーズ",
      position: "セールスマネージャー",
      rating: 4,
      comment: "導入当初は複雑に感じましたが、充実したサポートのおかげで、今では営業チーム全体の生産性が大幅に向上しています。"
    }
  ],
  'hubspot': [
    {
      name: "佐藤 直子",
      company: "クリエイティブソリューションズ",
      position: "マーケティング部長",
      rating: 5,
      comment: "マーケティングと営業の連携が格段に良くなりました。特に無料版から始められる点が、導入の決め手となりました。"
    },
    {
      name: "鈴木 健太",
      company: "テクノスタートアップ",
      position: "CEO",
      rating: 4,
      comment: "使いやすいインターフェースで、チーム全員が抵抗なく使いこなせています。カスタマージャーニーの可視化が非常に役立っています。"
    }
  ],
  'zoominfo': [
    {
      name: "高橋 誠",
      company: "グローバルセールス株式会社",
      position: "営業企画部長",
      rating: 5,
      comment: "データの精度が非常に高く、ターゲット企業へのアプローチが格段に効率化されました。インテントデータの活用で商談の質も向上しています。"
    },
    {
      name: "中村 優子",
      company: "テクノロジーソリューションズ",
      position: "BDR マネージャー",
      rating: 4,
      comment: "正確な企業データとインテントシグナルにより、効果的なアプローチが可能になりました。特に組織図情報は商談展開に大変役立っています。"
    }
  ],
  'mazrica-sales': [
    {
      name: "木村 太郎",
      company: "日本ソリューションズ株式会社",
      position: "営業部長",
      rating: 5,
      comment: "日本企業の商習慣に合わせた機能が充実しており、チームの導入もスムーズでした。案件管理が非常に分かりやすくなりました。"
    },
    {
      name: "斎藤 美香",
      company: "テクノ商事",
      position: "営業マネージャー",
      rating: 4,
      comment: "直感的な操作性と日本語対応の充実さが決め手でした。AIによる受注予測も徐々に精度が向上しています。"
    }
  ],
  'humantic-ai': [
    {
      name: "伊藤 隆",
      company: "エンタープライズソリューションズ",
      position: "エンタープライズセールス部長",
      rating: 5,
      comment: "商談相手の性格特性を事前に把握できることで、アプローチ方法を最適化できています。特に大型案件での活用が効果的です。"
    },
    {
      name: "中島 恵",
      company: "グローバルテック",
      position: "セールスディレクター",
      rating: 4,
      comment: "顧客とのコミュニケーションの質が向上し、商談の成約率が改善しました。チーム全体のスキル向上にも役立っています。"
    }
  ],
  'crystal': [
    {
      name: "渡辺 健",
      company: "ビジネスグロース株式会社",
      position: "人事部長",
      rating: 5,
      comment: "採用活動での活用が特に効果的です。候補者とのコミュニケーションが円滑になり、適切な人材の見極めに役立っています。"
    },
    {
      name: "松田 由美",
      company: "イノベーションパートナーズ",
      position: "営業トレーナー",
      rating: 4,
      comment: "営業チームのコミュニケーションスキル向上に大きく貢献しています。特にメール文章の最適化提案が実践的です。"
    }
  ],
  'outreach': [
    {
      name: "小林 健一",
      company: "テクノセールス株式会社",
      position: "SDRマネージャー",
      rating: 5,
      comment: "メール配信の自動化により、チームの生産性が3倍に向上しました。データに基づいたアプローチの最適化が可能になり、返信率も大幅に改善しています。"
    },
    {
      name: "山本 真由美",
      company: "グローバルソフトウェア",
      position: "セールスオペレーションズ",
      rating: 4,
      comment: "マルチチャネルでの営業活動の管理が容易になり、チーム全体の活動の可視化が実現しました。CRMとの連携も安定しています。"
    }
  ],
  'calendly': [
    {
      name: "藤田 雄太",
      company: "デジタルマーケティング株式会社",
      position: "カスタマーサクセス部長",
      rating: 5,
      comment: "顧客とのミーティング設定の効率が劇的に改善しました。特にタイムゾーンを跨いだ海外クライアントとの調整が簡単になりました。"
    },
    {
      name: "村田 さやか",
      company: "クラウドサービス",
      position: "営業マネージャー",
      rating: 5,
      comment: "商談のノーショー率が大幅に減少し、リマインダー機能のおかげで効率的なスケジュール管理が可能になりました。"
    }
  ],
  'apollo': [
    {
      name: "岡田 拓也",
      company: "スタートアップテクノロジーズ",
      position: "セールス開発部長",
      rating: 5,
      comment: "リード獲得からアプローチまでの工数が大幅に削減され、営業チームの生産性が向上しました。データの精度も高く、信頼して使用できています。"
    },
    {
      name: "林 美咲",
      company: "グロースハック株式会社",
      position: "BDRリーダー",
      rating: 4,
      comment: "LinkedInとの連携が強力で、ターゲット企業へのアプローチが効率化されました。メールシーケンス機能も非常に使いやすいです。"
    }
  ],
  'gong': [
    {
      name: "佐々木 隆",
      company: "エンタープライズソリューションズ",
      position: "セールスイネーブルメント部長",
      rating: 5,
      comment: "会話分析により、トップセールスの成功パターンを組織全体で共有できるようになりました。新人の育成期間も大幅に短縮されています。"
    },
    {
      name: "石川 真理",
      company: "テクノコーポレーション",
      position: "営業トレーニングマネージャー",
      rating: 4,
      comment: "リアルタイムでの商談分析と改善提案により、チーム全体の商談品質が向上しています。競合情報の把握も容易になりました。"
    }
  ],
  'granola': [
    {
      name: "中野 健太",
      company: "ビジネステクノロジー株式会社",
      position: "営業部長",
      rating: 5,
      comment: "商談の文字起こしと要約機能により、フォローアップの質が向上し、チーム間の情報共有がスムーズになりました。"
    },
    {
      name: "吉田 美穂",
      company: "クラウドイノベーション",
      position: "セールスマネージャー",
      rating: 4,
      comment: "重要なポイントの自動抽出機能が非常に便利で、CRMへの入力も自動化され、営業活動に集中できるようになりました。"
    }
  ],
  'linkedin-sales-navigator': [
    {
      name: "加藤 秀樹",
      company: "グローバルビジネスソリューションズ",
      position: "ビジネス開発部長",
      rating: 5,
      comment: "ターゲット企業の意思決定者への直接アプローチが容易になり、商談創出率が大幅に向上しました。業界動向の把握も効率的です。"
    },
    {
      name: "渡辺 麻衣",
      company: "デジタルマーケティングパートナーズ",
      position: "アカウントエグゼクティブ",
      rating: 4,
      comment: "InMailを活用した効果的なアプローチが可能になり、既存顧客組織内での新規コンタクト開拓も順調です。"
    }
  ]
};

// 会社情報データ
const companyInfoData: Record<string, CompanyInfo> = {
  'salesforce': {
    foundedDate: '1999年3月',
    employeeCount: '約79,000人（2023年時点）',
    customerCount: '150,000社以上',
    notableCustomers: ['トヨタ自動車', 'ソフトバンク', 'リクルート', 'DeNA', 'サイバーエージェント']
  },
  'hubspot': {
    foundedDate: '2006年6月',
    employeeCount: '約7,400人（2023年時点）',
    customerCount: '180,000社以上',
    notableCustomers: ['楽天', 'メルカリ', 'ラクスル', 'SmartHR', 'Sansan']
  },
  'outreach': {
    foundedDate: '2014年',
    employeeCount: '約1,000人（2023年時点）',
    customerCount: '5,000社以上',
    notableCustomers: ['Microsoft', 'DocuSign', 'Adobe', 'Snowflake', 'Zoom']
  },
  'mazrica-sales': {
    foundedDate: '2015年',
    employeeCount: '約100人（2023年時点）',
    customerCount: '1,000社以上',
    notableCustomers: ['ビズリーチ', 'マネーフォワード', 'フリー', 'アンドパッド', 'ラクスル']
  }
};

// デフォルトの会社情報
const defaultCompanyInfo: CompanyInfo = {
  foundedDate: '情報なし',
  employeeCount: '非公開',
  customerCount: '非公開',
  notableCustomers: []
};

// プロダクト情報データ
const productData: Record<string, ProductInfo[]> = {
  'salesforce': [
    {
      name: 'Sales Cloud',
      description: '営業プロセス管理と顧客データ管理のための包括的なCRMソリューション',
      releaseDate: '2000年',
      targetMarket: '中小企業から大企業まで',
      pricing: '$25/ユーザー/月〜'
    },
    {
      name: 'Service Cloud',
      description: 'カスタマーサービス向けプラットフォーム',
      releaseDate: '2009年',
      targetMarket: 'カスタマーサポート部門',
      pricing: '$25/ユーザー/月〜'
    },
    {
      name: 'Marketing Cloud',
      description: 'マーケティング自動化とキャンペーン管理',
      releaseDate: '2013年',
      targetMarket: 'マーケティング部門',
      pricing: 'カスタム価格'
    }
  ],
  'hubspot': [
    {
      name: 'Marketing Hub',
      description: 'インバウンドマーケティング管理ツール',
      releaseDate: '2006年',
      targetMarket: 'マーケティングチーム',
      pricing: '無料版あり、$800/月〜'
    },
    {
      name: 'Sales Hub',
      description: '営業活動管理と効率化ツール',
      releaseDate: '2014年',
      targetMarket: '営業チーム',
      pricing: '無料版あり、$450/月〜'
    },
    {
      name: 'Service Hub',
      description: 'カスタマーサービス管理ツール',
      releaseDate: '2018年',
      targetMarket: 'カスタマーサポートチーム',
      pricing: '無料版あり、$450/月〜'
    }
  ],
  'mazrica-sales': [
    {
      name: 'Mazrica Sales',
      description: '日本企業向けカード型案件管理ツール',
      releaseDate: '2015年',
      targetMarket: '日本の中小企業',
      pricing: '5,000円/ユーザー/月〜'
    },
    {
      name: 'Mazrica Analytics',
      description: '営業活動分析ツール',
      releaseDate: '2020年',
      targetMarket: '営業マネージャー',
      pricing: '10,000円/ユーザー/月〜'
    }
  ]
};

// 4C分析と戦略データ
const strategyData: Record<string, CompanyStrategy> = {
  'salesforce': {
    fourC: {
      customer: [
        '大企業から中小企業まで幅広い顧客層',
        'デジタルトランスフォーメーションに積極的な企業',
        'グローバル展開を行う企業'
      ],
      competitor: [
        'Microsoft Dynamics 365',
        'Oracle CRM',
        'SAP CRM',
        '新興のクラウドCRMプロバイダー'
      ],
      company: [
        'クラウドCRMのパイオニア',
        '強力なエコシステム',
        'AI技術への積極投資',
        'グローバルな展開力'
      ],
      commodity: [
        '包括的なCRMソリューション',
        'カスタマイズ性の高さ',
        'AIによる予測分析',
        'マルチクラウド対応'
      ]
    },
    futureStrategy: [
      'AIとデータ分析の更なる強化',
      'インダストリークラウドの拡充',
      'サステナビリティソリューションの開発',
      'スモールビジネス市場への注力'
    ],
    focusAreas: [
      'AI/ML技術の統合',
      'バーティカルソリューションの開発',
      'カスタマーサクセスの強化'
    ],
    challenges: [
      '新興プレイヤーとの競争',
      'プライバシー規制への対応',
      '価格競争力の維持'
    ]
  },
  'hubspot': {
    fourC: {
      customer: [
        '中小企業からミッドマーケット',
        'デジタルマーケティングに注力する企業',
        'インバウンドマーケティングを重視する組織'
      ],
      competitor: [
        'Salesforce',
        'Marketo',
        'Pardot',
        'その他のMAツール'
      ],
      company: [
        'インバウンドマーケティングのリーダー',
        'ユーザーフレンドリーな製品開発',
        '教育コンテンツの充実'
      ],
      commodity: [
        'オールインワンのマーケティングプラットフォーム',
        '使いやすいUI/UX',
        '充実した無料プラン'
      ]
    },
    futureStrategy: [
      'エンタープライズ市場への展開',
      'AIを活用したパーソナライゼーション',
      'コンテンツマーケティングの進化',
      'グローバル展開の加速'
    ],
    focusAreas: [
      'プロダクトの使いやすさの向上',
      'カスタマーサクセスの強化',
      '新興市場での成長'
    ],
    challenges: [
      'エンタープライズ市場での競争',
      '製品の複雑化への対応',
      '地域ごとのニーズ対応'
    ]
  }
};

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  const details = toolDetails[params.slug];

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー部分 */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-24">
              <Image
                src={tool.logoUrl}
                alt={`${tool.name} logo`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
              <p className="mt-1 text-lg text-gray-500">{tool.description}</p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* メイン情報 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 会社概要 */}
            <section className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">会社概要</h2>
              {details && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BuildingOffice2Icon className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">会社名</p>
                        <p className="text-base font-medium">{details.company.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">設立</p>
                        <p className="text-base font-medium">{details.company.foundedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <UsersIcon className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">従業員数</p>
                        <p className="text-base font-medium">{details.company.employeeCount}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CurrencyYenIcon className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">売上高</p>
                        <p className="text-base font-medium">{details.company.revenue}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <BuildingOfficeIcon className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">導入企業数</p>
                        <p className="text-base font-medium">{details.company.customerCount}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">本社所在地</p>
                        <p className="text-base font-medium">{details.company.headquarters}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <GlobeAltIcon className="h-6 w-6 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Webサイト</p>
                        <a
                          href={details.company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-medium text-blue-600 hover:text-blue-500"
                        >
                          {details.company.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 主要導入企業 */}
            {details && details.company.notableCustomers.length > 0 && (
              <section className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">主要導入企業</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {details.company.notableCustomers.map((customer, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                    >
                      <p className="font-medium text-gray-900">{customer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* プロダクトライナップ */}
            {details && details.products.length > 0 && (
              <section className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">プロダクトラインナップ</h2>
                <div className="space-y-8">
                  {details.products.map((product, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      
                      {/* 主要機能 */}
                      <div className="mb-4">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">主要機能</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 料金プラン */}
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">料金プラン</h4>
                        <p className="text-gray-600 mb-3">{product.pricing.model}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {product.pricing.plans.map((plan, planIndex) => (
                            <div
                              key={planIndex}
                              className="border border-gray-200 rounded-lg p-4"
                            >
                              <h5 className="font-medium text-gray-900">{plan.name}</h5>
                              <p className="text-blue-600 font-bold my-2">{plan.price}</p>
                              <p className="text-sm text-gray-500">{plan.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4C分析 */}
            {details && (
              <section className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4C分析</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Customer */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer（市場・顧客）</h3>
                    <ul className="list-disc list-inside mb-3 space-y-2">
                      {details.fourC.customer.points.map((point, index) => (
                        <li key={index} className="text-gray-600">{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500">{details.fourC.customer.analysis}</p>
                  </div>

                  {/* Competitor */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitor（競合）</h3>
                    <ul className="list-disc list-inside mb-3 space-y-2">
                      {details.fourC.competitor.points.map((point, index) => (
                        <li key={index} className="text-gray-600">{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500">{details.fourC.competitor.analysis}</p>
                  </div>

                  {/* Company */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Company（自社）</h3>
                    <ul className="list-disc list-inside mb-3 space-y-2">
                      {details.fourC.company.points.map((point, index) => (
                        <li key={index} className="text-gray-600">{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500">{details.fourC.company.analysis}</p>
                  </div>

                  {/* Commodity */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Commodity（商品）</h3>
                    <ul className="list-disc list-inside mb-3 space-y-2">
                      {details.fourC.commodity.points.map((point, index) => (
                        <li key={index} className="text-gray-600">{point}</li>
                      ))}
                    </ul>
                    <p className="text-sm text-gray-500">{details.fourC.commodity.analysis}</p>
                  </div>
                </div>

                {/* 戦略 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">今後の戦略</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">短期戦略</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {details.fourC.strategy.shortTerm.map((strategy, index) => (
                          <li key={index} className="text-gray-600">{strategy}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">中期戦略</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {details.fourC.strategy.midTerm.map((strategy, index) => (
                          <li key={index} className="text-gray-600">{strategy}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">長期戦略</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {details.fourC.strategy.longTerm.map((strategy, index) => (
                          <li key={index} className="text-gray-600">{strategy}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* サイドバー */}
          <div className="lg:col-span-1 space-y-6">
            {/* ステージ情報 */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">ステージ情報</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">ステージ</p>
                  <p className="font-medium">{tool.stageName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">対象企業規模</p>
                  <p className="font-medium">{tool.targetSize}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">価格モデル</p>
                  <p className="font-medium">{tool.pricingModel}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">対応言語</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {tool.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {lang === 'ja' ? '日本語' : lang === 'en' ? '英語' : lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 