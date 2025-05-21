import { leadGenerationTools } from './tools-part1';
import { outreachTools } from './tools-part1';
import { crmTools } from './tools-part2';
import { proposalTools } from './tools-part2';
import { contractTools } from './tools-part3';
import { forecastTools } from './tools-part3';
import { onboardingTools } from './tools-part3';

// Mazrica Salesをcrmツールに追加
const allCrmTools = [
  ...crmTools,
  {
    id: "11",
    name: "Mazrica Sales",
    description: "ドラッグ＆ドロップで直感的に使える日本製SFA/CRMツール",
    companyName: "株式会社マツリカ",
    logoUrl: "/logos/mazrica-sales.png",
    pricingModel: "サブスクリプション",
    languages: ["ja"],
    targetSize: "中小企業",
    slug: "mazrica-sales",
    detailedDescription: `
      Mazrica Sales（マツリカセールス）は、日本企業向けに開発された直感的な操作性が特徴のSFA/CRMツールです。
      カード形式の案件管理ボードにより、営業パイプラインの視覚化と進捗管理が容易に行えます。
      日本企業特有の商談プロセスや商慣習に合わせたワークフローをドラッグ＆ドロップで柔軟にカスタマイズできます。
      AI技術を活用した受注確率予測（92%の正答率）や、AIによるOCR機能（名刺・メモの自動テキスト化）など、最新技術を採用しています。
      日本の企業データベースとの連携により、取引先情報の自動入力や更新が可能です。
      グループウェアとの連携機能も充実しており、日本企業のワークスタイルにマッチした設計となっています。
      クラウド型で導入が容易であり、中小企業から導入可能な料金体系が特徴です。
    `
  }
];

// ZoomInfoの詳細説明を追加
const updatedLeadGenerationTools = leadGenerationTools.map(tool => {
  if (tool.slug === 'zoominfo') {
    return {
      ...tool,
      detailedDescription: `
        ZoomInfoは企業と個人のB2Bコンタクトデータベースとして世界最大級のプラットフォームです。
        常に更新される正確な企業データ、連絡先情報、組織図情報を提供し、営業チームのターゲティングを強化します。
        特許取得済みの技術で、ウェブ全体から企業と個人の情報を収集・分析・更新し続け、常に最新のデータを提供します。
        「買い手インテント」データにより、現在製品やサービスを積極的に探している見込み客を特定できます。
        インテグレーション機能が充実しており、CRMやマーケティングオートメーションツールと連携して使用できます。
        テクノグラフィックデータ（企業が使用している技術情報）も提供し、製品適合性の高い見込み客を特定できます。
        北米市場での導入が多いですが、グローバル企業情報も充実しています。
      `
    };
  } else if (tool.slug === 'apollo') {
    return {
      ...tool,
      detailedDescription: `
        Apolloは1,000万以上の企業と連絡先データを持つインテリジェンスプラットフォームです。
        リード生成から営業エンゲージメントまで一貫したプロセスを提供するオールインワンのソリューションです。
        AIを活用した見込み客スコアリング機能により、最も可能性の高いリードに集中できます。
        無料プランから始められるため、スタートアップや小規模チームでも導入しやすいツールです。
        高度なフィルタリング機能で、業界、企業規模、役職、使用技術など細かい条件でターゲットを絞り込めます。
        メールシーケンス機能を内蔵しており、データ収集からアウトリーチまでをシームレスに行えます。
        LinkedInとの連携機能が強力で、LinkedInプロフィルから直接データを取得・活用できます。
        CRMとの双方向同期により、データ入力の手間を削減できます。
      `
    };
  }
  return tool;
});

// 全ツールを一つの配列に結合
const allTools = [
  ...leadGenerationTools, 
  ...outreachTools,
  ...crmTools,
  ...proposalTools,
  ...contractTools,
  ...forecastTools,
  ...onboardingTools
];

// ツールのスラッグ重複チェック（開発環境でのみ実行）
if (process.env.NODE_ENV === 'development') {
  const slugs = new Set();
  const duplicates: string[] = [];
  
  allTools.forEach(tool => {
    if (tool && tool.slug) {
      const normalizedSlug = tool.slug.toLowerCase().trim();
      if (slugs.has(normalizedSlug)) {
        duplicates.push(normalizedSlug);
      } else {
        slugs.add(normalizedSlug);
      }
    }
  });
  
  if (duplicates.length > 0) {
    console.warn('重複するスラッグが見つかりました:', duplicates);
  }
}

/**
 * 全ステージのツールデータ
 */
export const allStagesWithTools = [
  {
    id: 1,
    name: "リード獲得／データ整備",
    description: "見込み客の獲得とデータの収集・管理を行うステージです。リードジェネレーション、データクレンジング、エンリッチメントなど、営業活動の基盤となるデータ整備を行います。",
    slug: "lead-generation",
    categories: [
      {
        id: "1",
        name: "リードジェネレーション",
        description: "新規見込み顧客の獲得と発掘を支援するツール",
      },
      {
        id: "2",
        name: "データクレンジング",
        description: "顧客データの品質向上と正確性を維持",
      },
      {
        id: "3",
        name: "リードデータ管理",
        description: "見込み客の情報を効率的に管理",
      },
    ],
    tools: updatedLeadGenerationTools,
  },
  {
    id: 2,
    name: "アウトリーチ／商談化",
    description: "見込み客へのアプローチと商談の設定を効率化するステージです。メールシーケンス、コールダイヤラー、オンライン商談予約など、様々なツールが活用されています。",
    slug: "outreach",
    categories: [
      {
        id: "1",
        name: "メールシーケンス",
        description: "自動化されたメール配信で効率的なアウトリーチを実現",
      },
      {
        id: "2",
        name: "コールダイヤラー",
        description: "電話営業の効率化と品質向上を支援",
      },
      {
        id: "3",
        name: "オンライン商談予約",
        description: "顧客との商談日程調整を自動化",
      },
    ],
    tools: outreachTools,
  },
  {
    id: 3,
    name: "商談管理・CRM",
    description: "商談の進捗管理と顧客関係の構築を支援するステージです。CRMシステム、営業活動管理、商談トラッキングなどのツールが含まれます。",
    slug: "crm",
    categories: [
      {
        id: "1",
        name: "CRMシステム",
        description: "顧客関係管理の中核となるプラットフォーム",
      },
      {
        id: "2",
        name: "営業活動管理",
        description: "営業担当者の活動を記録・管理するツール",
      },
      {
        id: "3",
        name: "商談トラッキング",
        description: "商談の進捗状況を可視化し管理",
      },
    ],
    tools: allCrmTools,
  },
  {
    id: 4,
    name: "提案・デモ",
    description: "ソリューションの提案とデモンストレーションを効果的に行うステージです。提案書作成、プレゼンテーション、デモツールなどが含まれます。",
    slug: "proposal",
    categories: [
      {
        id: "1",
        name: "提案書作成",
        description: "効果的な提案書を効率的に作成するツール",
      },
      {
        id: "2",
        name: "プレゼンテーション",
        description: "魅力的なプレゼンを支援するツール",
      },
      {
        id: "3",
        name: "デモツール",
        description: "製品デモを効果的に実施するためのツール",
      },
    ],
    tools: proposalTools,
  },
  {
    id: 5,
    name: "見積／契約",
    description: "商談の最終段階で必要な見積作成と契約管理を支援するステージです。見積書作成、電子契約、支払い管理などのツールが含まれます。",
    slug: "contract",
    categories: [
      {
        id: "1",
        name: "見積書作成",
        description: "正確で効率的な見積書作成を支援",
      },
      {
        id: "2",
        name: "電子契約",
        description: "契約プロセスのデジタル化と効率化",
      },
      {
        id: "3",
        name: "支払い管理",
        description: "契約に関連する支払いの管理と追跡",
      },
    ],
    tools: contractTools,
  },
  {
    id: 6,
    name: "フォーキャスト",
    description: "売上予測と分析を行うステージです。予測分析、パイプライン管理、レポーティングなどのツールが含まれます。",
    slug: "forecast",
    categories: [
      {
        id: "1",
        name: "予測分析",
        description: "AIを活用した精度の高い売上予測",
      },
      {
        id: "2",
        name: "パイプライン管理",
        description: "商談パイプラインの可視化と管理",
      },
      {
        id: "3",
        name: "レポーティング",
        description: "営業活動の分析とレポート作成",
      },
    ],
    tools: forecastTools,
  },
  {
    id: 7,
    name: "オンボーディング",
    description: "契約後の顧客受け入れと初期設定を支援するステージです。アカウント設定、トレーニング、初期サポートなどのツールが含まれます。",
    slug: "onboarding",
    categories: [
      {
        id: "1",
        name: "アカウント設定",
        description: "新規顧客のアカウント初期設定を効率化",
      },
      {
        id: "2",
        name: "トレーニング",
        description: "効果的な製品トレーニングを提供",
      },
      {
        id: "3",
        name: "初期サポート",
        description: "スムーズな立ち上げを支援するサポート",
      },
    ],
    tools: onboardingTools,
  }
];

/**
 * ステージ情報だけを格納した配列（ツールデータなし）
 */
export const allStages = allStagesWithTools.map(({ id, name, description, slug }) => ({
  id,
  name,
  description,
  slug,
}));

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
  features?: string[];
}

export interface ToolWithStage extends Tool {
  stageName: string;
  stageSlug: string;
}

// 特定のスラッグからツールを取得するヘルパー関数
export function getToolBySlug(slug: string): ToolWithStage | null {
  if (!slug) return null;
  
  const normalizedSlug = slug.toLowerCase().trim();
  
  // すべてのステージからツールを検索
  for (const stage of allStagesWithTools) {
    if (!stage || !Array.isArray(stage.tools)) continue;
    
    const foundTool = stage.tools.find(t => 
      t && typeof t.slug === 'string' && t.slug.toLowerCase() === normalizedSlug
    );
    
    if (foundTool) {
      return {
        ...foundTool,
        stageName: stage.name,
        stageSlug: stage.slug
      };
    }
  }
  
  // 特定のツールの特別処理
  const specialTools = ['gong', 'granola', 'humantic-ai', 'crystal'];
  if (specialTools.includes(normalizedSlug)) {
    for (const stage of allStagesWithTools) {
      if (!stage || !Array.isArray(stage.tools)) continue;
      
      for (const t of stage.tools) {
        if (!t || typeof t.slug !== 'string') continue;
        
        const tSlug = t.slug.toLowerCase();
        if (tSlug === normalizedSlug || tSlug.includes(normalizedSlug) || normalizedSlug.includes(tSlug)) {
          return {
            ...t,
            stageName: stage.name,
            stageSlug: stage.slug
          };
        }
      }
    }
  }
  
  return null;
} 