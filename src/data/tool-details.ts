// ツールの詳細情報を格納するインターフェース
export interface CompanyInfo {
  name: string;
  foundedDate: string;
  employeeCount: string;
  revenue: string;
  customerCount: string;
  notableCustomers: string[];
  headquarters: string;
  website: string;
}

export interface ProductInfo {
  name: string;
  description: string;
  features: string[];
  pricing: {
    model: string;
    plans: {
      name: string;
      price: string;
      description: string;
    }[];
  };
  targetMarket: string[];
}

export interface FourCAnalysis {
  customer: {
    points: string[];
    analysis: string;
  };
  competitor: {
    points: string[];
    analysis: string;
  };
  company: {
    points: string[];
    analysis: string;
  };
  commodity: {
    points: string[];
    analysis: string;
  };
  strategy: {
    shortTerm: string[];
    midTerm: string[];
    longTerm: string[];
  };
}

// ツール詳細データ
export const toolDetails: Record<string, {
  company: CompanyInfo;
  products: ProductInfo[];
  fourC: FourCAnalysis;
}> = {
  'salesforce': {
    company: {
      name: 'Salesforce, Inc.',
      foundedDate: '1999年3月',
      employeeCount: '約79,000人（2023年）',
      revenue: '約3.1兆円（2023年度）',
      customerCount: '15万社以上',
      notableCustomers: [
        'トヨタ自動車',
        'パナソニック',
        'ソフトバンク',
        'リクルート',
        'ZOZO'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://www.salesforce.com/jp/'
    },
    products: [
      {
        name: 'Sales Cloud',
        description: '営業活動の効率化と顧客管理を支援するCRMプラットフォーム',
        features: [
          '商談管理',
          'リード管理',
          '営業予測',
          'モバイル対応',
          'Einstein AI分析'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Essentials',
              price: '¥9,000',
              description: '小規模ビジネス向け基本機能'
            },
            {
              name: 'Professional',
              price: '¥18,000',
              description: '完全なCRM機能とオートメーション'
            },
            {
              name: 'Enterprise',
              price: '¥36,000',
              description: '高度なカスタマイズと分析機能'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          '大企業',
          'エンタープライズ'
        ]
      },
      {
        name: 'Service Cloud',
        description: 'カスタマーサービスと顧客サポートのプラットフォーム',
        features: [
          'ケース管理',
          'ナレッジベース',
          'オムニチャネルルーティング',
          'セルフサービスポータル',
          'AIによる自動化'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Professional',
              price: '¥18,000',
              description: '標準的なサービス機能'
            },
            {
              name: 'Enterprise',
              price: '¥36,000',
              description: '高度なカスタマイズ機能'
            }
          ]
        },
        targetMarket: [
          'カスタマーサービス部門',
          'サポートセンター',
          'フィールドサービス'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'デジタルトランスフォーメーションを推進する企業',
          '顧客体験の向上を重視する組織',
          'データドリブンな意思決定を行いたい企業',
          'クラウドベースのソリューションを求める企業'
        ],
        analysis: '顧客のデジタル化ニーズに応える包括的なソリューションを提供し、特に大企業向けに強みを持つ'
      },
      competitor: {
        points: [
          'Microsoft Dynamics 365: エンタープライズ市場での競合',
          'HubSpot: 中小企業市場での競合',
          'Oracle: データベースとの統合での競合',
          'SAP: ERPとの統合での競合'
        ],
        analysis: 'クラウドCRM市場でのリーダーポジションを確立し、継続的なイノベーションで競争優位性を維持'
      },
      company: {
        points: [
          'クラウドCRMのパイオニア',
          '強力なパートナーエコシステム',
          '継続的な製品革新',
          'サステナビリティへの強いコミットメント'
        ],
        analysis: '顧客成功を重視する企業文化と、強力なR&D能力により、市場リーダーシップを維持'
      },
      commodity: {
        points: [
          'AIを活用した予測分析',
          'カスタマイズ可能なプラットフォーム',
          'マルチクラウド戦略',
          'セキュリティとコンプライアンス'
        ],
        analysis: '製品の革新性と柔軟性により、様々な業界・規模の企業ニーズに対応'
      },
      strategy: {
        shortTerm: [
          'Einstein AI機能の強化',
          'インダストリークラウドの拡充',
          'パートナーエコシステムの拡大'
        ],
        midTerm: [
          'サステナビリティソリューションの開発',
          'グローバル展開の加速',
          'デジタルトランスフォーメーション支援の強化'
        ],
        longTerm: [
          'メタバース戦略の展開',
          '新興市場での存在感強化',
          '次世代テクノロジーへの投資'
        ]
      }
    }
  },
  // 他のツールの詳細情報も同様に追加
}; 