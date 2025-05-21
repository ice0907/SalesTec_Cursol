'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allStagesWithTools, getToolBySlug, type ToolWithStage } from "../../../data/tools";

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

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const [tool, setTool] = useState<Tool | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('benefits');

  useEffect(() => {
    findTool();
  }, []);

  const findTool = async () => {
    try {
      const foundTool = getToolBySlug(params.slug);
      if (!foundTool) {
        notFound();
        return;
      }
      
      setTool(foundTool);
    } catch (err) {
      setError('ツールの読み込み中にエラーが発生しました。');
      console.error('Error loading tool:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !tool) {
    return <div>Error: {error}</div>;
  }

  const benefits = [
    '高精度な企業・担当者データによる営業効率の大幅向上',
    'インテントデータを活用したタイムリーな営業機会の発見',
    'テクノグラフィックデータによる製品適合性の高い見込み客特定',
    'CRMデータの自動更新による最新情報の維持',
    '組織図情報によるキーパーソンへの効率的なアプローチ'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ナビゲーション */}
        <nav className="flex items-center space-x-4 mb-8">
          <Link href="/tools" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            ツール一覧に戻る
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href={`/stages/${tool.stageSlug || tool.stageName.toLowerCase()}`}
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            {tool.stageName}
          </Link>
        </nav>

        {/* ツール基本情報 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="relative w-24 h-24">
              <Image
                src={tool.logoUrl}
                alt={`${tool.name}のロゴ`}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{tool.description}</p>
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="bg-white rounded-lg shadow-lg">
          {/* タブナビゲーション */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'overview'
                  ? 'text-indigo-600 border-b-2 border-indigo-500'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
              }`}
            >
              概要と特徴
            </button>
            <button
              onClick={() => setActiveTab('usecases')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'usecases'
                  ? 'text-indigo-600 border-b-2 border-indigo-500'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
              }`}
            >
              主な利用シーン
            </button>
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'benefits'
                  ? 'text-indigo-600 border-b-2 border-indigo-500'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
              }`}
            >
              導入メリット
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'text-indigo-600 border-b-2 border-indigo-500'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
              }`}
            >
              ユーザーレビュー
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'comparison'
                  ? 'text-indigo-600 border-b-2 border-indigo-500'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300'
              }`}
            >
              競合比較
            </button>
          </div>

          {/* タブコンテンツ */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">概要と特徴</h2>
                <p className="text-gray-700">{tool.detailedDescription}</p>
                {tool.features && tool.features.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">主な機能</h3>
                    <ul className="space-y-2">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="ml-2 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'usecases' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">主な利用シーン</h2>
                {/* 利用シーンの内容をここに実装 */}
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">導入メリット</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">ユーザーレビュー</h2>
                {/* レビューの内容をここに実装 */}
              </div>
            )}

            {activeTab === 'comparison' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">競合比較</h2>
                {/* 競合比較の内容をここに実装 */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 