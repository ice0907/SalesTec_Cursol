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
  'zoominfo': {
    company: {
      name: 'ZoomInfo Technologies Inc.',
      foundedDate: '2000年',
      employeeCount: '約3,000人（2023年）',
      revenue: '約1,200億円（2023年度）',
      customerCount: '2万社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'SAP',
        'Salesforce',
        'Adobe'
      ],
      headquarters: 'バンクーバー、ワシントン州、アメリカ',
      website: 'https://www.zoominfo.com/'
    },
    products: [
      {
        name: 'ZoomInfo Platform',
        description: 'B2B企業・担当者データベースとインテリジェンスプラットフォーム',
        features: [
          '企業・担当者データベース',
          'インテントデータ分析',
          '組織図機能',
          'ウェブサイト訪問者特定',
          'FormComplete自動入力'
        ],
        pricing: {
          model: 'サブスクリプション（年額）',
          plans: [
            {
              name: 'Professional',
              price: '要問い合わせ',
              description: '基本機能とデータアクセス'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '高度な分析と統合機能'
            }
          ]
        },
        targetMarket: [
          'B2B企業',
          '営業部門',
          'マーケティング部門'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'B2B営業活動の効率化を図る企業',
          '高品質なリードデータを求める組織',
          'データドリブンな営業戦略を展開する企業',
          'グローバル展開を目指す企業'
        ],
        analysis: '特に大企業の営業・マーケティング部門で強みを持ち、データの質と量で競争優位性を確立'
      },
      competitor: {
        points: [
          'LinkedIn Sales Navigator: プロフェッショナルネットワークでの競合',
          'Clearbit: 企業データでの競合',
          'DiscoverOrg: 技術部門向けデータでの競合',
          'Dun & Bradstreet: 企業信用情報での競合'
        ],
        analysis: 'B2Bデータ市場でのリーダーポジションを確立し、AIと機械学習によるデータ品質で差別化'
      },
      company: {
        points: [
          '大規模なB2Bデータベース',
          'AIを活用したデータ分析',
          '継続的なデータ更新',
          'グローバルな展開'
        ],
        analysis: 'データの質と量、そしてAI技術の活用により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'AIによるデータ分析',
          'リアルタイムデータ更新',
          'CRMとの統合',
          'コンプライアンス対応'
        ],
        analysis: '技術的な優位性とデータの質により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'データ品質の向上',
          'アジア市場での展開強化'
        ],
        midTerm: [
          '新規データソースの開拓',
          '予測分析機能の拡充',
          'パートナーエコシステムの構築'
        ],
        longTerm: [
          'グローバルデータカバレッジの拡大',
          '次世代AI技術の導入',
          '新規市場への展開'
        ]
      }
    }
  },
  'hunter': {
    company: {
      name: 'Hunter.io',
      foundedDate: '2015年',
      employeeCount: '約50人（2023年）',
      revenue: '非公開',
      customerCount: '10万社以上',
      notableCustomers: [
        'HubSpot',
        'Microsoft',
        'Oracle',
        'Salesforce',
        'Adobe'
      ],
      headquarters: 'パリ、フランス',
      website: 'https://hunter.io/'
    },
    products: [
      {
        name: 'Hunter.io Platform',
        description: 'メールアドレス検索・検証プラットフォーム',
        features: [
          'メールアドレス検索',
          'メール検証',
          'Chrome拡張機能',
          '一括検証',
          'API連携'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Free',
              price: '¥0',
              description: '月25件まで検索可能'
            },
            {
              name: 'Starter',
              price: '¥4,900',
              description: '月500件まで検索可能'
            },
            {
              name: 'Growth',
              price: '¥14,900',
              description: '月5,000件まで検索可能'
            }
          ]
        },
        targetMarket: [
          '営業担当者',
          'マーケター',
          'リクルーター',
          'スタートアップ'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '効率的なリード獲得を目指す企業',
          'コスト効率を重視する組織',
          '小規模から中規模の営業チーム',
          'スタートアップ企業'
        ],
        analysis: '特に小規模から中規模の企業で、コスト効率の良いリード獲得ツールとして支持'
      },
      competitor: {
        points: [
          'FindThatLead: メール検索での競合',
          'Snov.io: メール検索・検証での競合',
          'Clearbit: 企業データでの競合',
          'RocketReach: 連絡先検索での競合'
        ],
        analysis: 'シンプルな機能と手頃な価格で、小規模ユーザー層での競争優位性を確立'
      },
      company: {
        points: [
          'シンプルな操作性',
          '手頃な価格設定',
          'APIの柔軟性',
          '継続的な機能改善'
        ],
        analysis: '使いやすさとコストパフォーマンスを重視した製品開発で差別化'
      },
      commodity: {
        points: [
          'メール検索技術',
          '検証アルゴリズム',
          'API連携',
          'ブラウザ拡張機能'
        ],
        analysis: '技術的な実装の質と使いやすさで競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          '検索精度の向上',
          '新規機能の追加',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'AI機能の導入',
          'パートナー連携の拡大',
          '新規市場への展開'
        ],
        longTerm: [
          'プラットフォームの拡張',
          'グローバル展開の加速',
          '新規サービス開発'
        ]
      }
    }
  },
  'dnb': {
    company: {
      name: 'Dun & Bradstreet',
      foundedDate: '1841年',
      employeeCount: '約6,000人（2023年）',
      revenue: '約2,000億円（2023年度）',
      customerCount: '5万社以上',
      notableCustomers: [
        'トヨタ自動車',
        '三菱UFJ銀行',
        '三井住友銀行',
        'みずほ銀行',
        '日本取引所グループ'
      ],
      headquarters: 'ジャクソンビル、フロリダ州、アメリカ',
      website: 'https://www.dnb.com/'
    },
    products: [
      {
        name: 'D&B Hoovers',
        description: '企業情報と市場分析プラットフォーム',
        features: [
          '企業データベース',
          '信用情報分析',
          '企業階層構造',
          '市場分析',
          'リスク評価'
        ],
        pricing: {
          model: 'エンタープライズ（要問い合わせ）',
          plans: [
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '包括的な企業情報と分析機能'
            }
          ]
        },
        targetMarket: [
          '金融機関',
          '大企業',
          '与信管理部門',
          '営業部門'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '与信管理を重視する金融機関',
          'リスク管理を必要とする企業',
          'グローバル展開を目指す組織',
          '大規模な営業活動を行う企業'
        ],
        analysis: '特に金融機関や大企業での与信管理・リスク評価での強みを持つ'
      },
      competitor: {
        points: [
          'Experian: 信用情報での競合',
          'Equifax: 信用情報での競合',
          'TransUnion: 信用情報での競合',
          'Bloomberg: 企業情報での競合'
        ],
        analysis: '長年の実績と信頼性で、特に与信管理市場での優位性を確立'
      },
      company: {
        points: [
          '180年以上の歴史',
          'グローバルなデータ網',
          '高い信頼性',
          '専門的な分析能力'
        ],
        analysis: '長年の実績と信頼性、そして専門的な分析能力により市場での優位性を維持'
      },
      commodity: {
        points: [
          '企業データベース',
          '信用情報分析',
          'リスク評価モデル',
          '市場分析ツール'
        ],
        analysis: 'データの質と分析の精度により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'データ更新頻度の向上',
          'AI分析機能の強化',
          'アジア市場での展開強化'
        ],
        midTerm: [
          '新規データソースの開拓',
          '予測分析モデルの改善',
          'パートナーシップの拡大'
        ],
        longTerm: [
          'グローバルデータ網の拡充',
          '次世代分析技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'rocketreach': {
    company: {
      name: 'RocketReach',
      foundedDate: '2015年',
      employeeCount: '約100人（2023年）',
      revenue: '非公開',
      customerCount: '5万社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'Salesforce',
        'HubSpot',
        'LinkedIn'
      ],
      headquarters: 'シアトル、ワシントン州、アメリカ',
      website: 'https://rocketreach.co/'
    },
    products: [
      {
        name: 'RocketReach Platform',
        description: 'ビジネスパーソンの連絡先情報検索プラットフォーム',
        features: [
          '連絡先情報検索',
          'Chrome拡張機能',
          '一括検索',
          'CRM連携',
          'データ検証'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Essential',
              price: '¥4,900',
              description: '月100件まで検索可能'
            },
            {
              name: 'Professional',
              price: '¥14,900',
              description: '月1,000件まで検索可能'
            },
            {
              name: 'Ultimate',
              price: '¥49,900',
              description: '月5,000件まで検索可能'
            }
          ]
        },
        targetMarket: [
          '営業担当者',
          'リクルーター',
          'マーケター',
          '中小企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '効率的なリード獲得を目指す企業',
          'コスト効率を重視する組織',
          '営業・採用活動を行う企業',
          'スタートアップ企業'
        ],
        analysis: '特に営業・採用活動を行う企業で、効率的な連絡先情報収集ツールとして支持'
      },
      competitor: {
        points: [
          'LinkedIn Sales Navigator: プロフェッショナルネットワークでの競合',
          'Hunter.io: メール検索での競合',
          'Clearbit: 企業データでの競合',
          'ZoomInfo: B2Bデータでの競合'
        ],
        analysis: '使いやすさと手頃な価格で、中小規模ユーザー層での競争優位性を確立'
      },
      company: {
        points: [
          '使いやすいインターフェース',
          '柔軟な価格設定',
          'CRM連携の充実',
          '継続的な機能改善'
        ],
        analysis: 'ユーザーフレンドリーな設計と柔軟な価格設定で差別化'
      },
      commodity: {
        points: [
          '連絡先検索技術',
          'データ検証',
          'API連携',
          'ブラウザ拡張機能'
        ],
        analysis: '技術的な実装の質と使いやすさで競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          '検索精度の向上',
          '新規機能の追加',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'AI機能の導入',
          'パートナー連携の拡大',
          '新規市場への展開'
        ],
        longTerm: [
          'プラットフォームの拡張',
          'グローバル展開の加速',
          '新規サービス開発'
        ]
      }
    }
  },
  'gong-revenue': {
    company: {
      name: 'Gong.io',
      foundedDate: '2015年',
      employeeCount: '約1,000人（2023年）',
      revenue: '非公開',
      customerCount: '3,000社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'Salesforce',
        'HubSpot',
        'LinkedIn'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://www.gong.io/'
    },
    products: [
      {
        name: 'Gong Revenue Intelligence Platform',
        description: '営業会話インテリジェンスと分析プラットフォーム',
        features: [
          '会話録音・分析',
          'AIによるインサイト',
          'コーチング機能',
          'パイプライン分析',
          'CRM連携'
        ],
        pricing: {
          model: 'サブスクリプション（要問い合わせ）',
          plans: [
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '包括的な会話分析とコーチング機能'
            }
          ]
        },
        targetMarket: [
          '営業部門',
          '営業マネージャー',
          '営業トレーナー',
          '大企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '営業プロセスの改善を目指す企業',
          'データドリブンな営業活動を行う組織',
          '営業トレーニングを重視する企業',
          '大規模な営業チームを持つ企業'
        ],
        analysis: '特に大企業の営業部門で、会話分析とコーチング機能による強みを持つ'
      },
      competitor: {
        points: [
          'Chorus.ai: 会話分析での競合',
          'ExecVision: コーチングでの競合',
          'SalesLoft: 営業活動管理での競合',
          'Outreach: 営業活動管理での競合'
        ],
        analysis: 'AIを活用した会話分析とコーチング機能で、市場での優位性を確立'
      },
      company: {
        points: [
          'AI技術の活用',
          '大規模なデータセット',
          '継続的な機能改善',
          '専門的な分析能力'
        ],
        analysis: 'AI技術と専門的な分析能力により、市場での優位性を維持'
      },
      commodity: {
        points: [
          '会話分析技術',
          'AI予測モデル',
          'コーチング機能',
          'CRM連携'
        ],
        analysis: '技術的な優位性と分析の精度により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI分析精度の向上',
          '新規機能の追加',
          'ユーザー体験の改善'
        ],
        midTerm: [
          '予測分析機能の強化',
          'パートナー連携の拡大',
          '新規市場への展開'
        ],
        longTerm: [
          'プラットフォームの拡張',
          'グローバル展開の加速',
          '次世代AI技術の導入'
        ]
      }
    }
  },
  'zoho-crm': {
    company: {
      name: 'Zoho Corporation',
      foundedDate: '1996年',
      employeeCount: '約10,000人（2023年）',
      revenue: '約1,000億円（2023年度）',
      customerCount: '5万社以上',
      notableCustomers: [
        'Amazon',
        'Microsoft',
        'Oracle',
        'SAP',
        'Salesforce'
      ],
      headquarters: 'チェンナイ、タミル・ナードゥ州、インド',
      website: 'https://www.zoho.com/crm/'
    },
    products: [
      {
        name: 'Zoho CRM',
        description: '包括的なCRMソリューション',
        features: [
          'AIアシスタント「Zia」',
          'マルチチャネル管理',
          'ワークフロー自動化',
          'モバイルアプリ',
          'カスタマイズ機能'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Standard',
              price: '¥1,800',
              description: '基本機能と標準的なサポート'
            },
            {
              name: 'Professional',
              price: '¥3,600',
              description: '高度な機能と優先サポート'
            },
            {
              name: 'Enterprise',
              price: '¥7,200',
              description: 'エンタープライズ機能と専任サポート'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'スタートアップ',
          '営業部門',
          'カスタマーサポート部門'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'コスト効率を重視する企業',
          '柔軟なカスタマイズを求める組織',
          '中小規模の営業チーム',
          'スタートアップ企業'
        ],
        analysis: '特に中小企業やスタートアップで、コストパフォーマンスと柔軟性の高さで支持'
      },
      competitor: {
        points: [
          'Salesforce: エンタープライズ市場での競合',
          'HubSpot: 中小企業市場での競合',
          'Microsoft Dynamics: エンタープライズ市場での競合',
          'Pipedrive: 中小企業市場での競合'
        ],
        analysis: '手頃な価格と使いやすさで、特に中小企業市場での競争優位性を確立'
      },
      company: {
        points: [
          '包括的な製品ラインナップ',
          '手頃な価格設定',
          '継続的な機能改善',
          'グローバルな展開'
        ],
        analysis: '製品の質と価格のバランス、そして継続的な改善により市場での優位性を維持'
      },
      commodity: {
        points: [
          'AIアシスタント機能',
          'カスタマイズ可能なプラットフォーム',
          'モバイル対応',
          '他製品との連携'
        ],
        analysis: '技術的な実装の質と使いやすさで競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナーエコシステムの拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'microsoft-dynamics': {
    company: {
      name: 'Microsoft Corporation',
      foundedDate: '1975年',
      employeeCount: '約221,000人（2023年）',
      revenue: '約21.9兆円（2023年度）',
      customerCount: '100万社以上',
      notableCustomers: [
        'トヨタ自動車',
        '日立製作所',
        '三菱重工業',
        '富士通',
        'NTT'
      ],
      headquarters: 'レドモンド、ワシントン州、アメリカ',
      website: 'https://dynamics.microsoft.com/ja-jp/'
    },
    products: [
      {
        name: 'Dynamics 365 Sales',
        description: 'AIを活用した営業支援プラットフォーム',
        features: [
          'AI予測分析',
          'Office 365統合',
          'Power Platform連携',
          'モバイル対応',
          'カスタマイズ機能'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Sales Professional',
              price: '¥12,000',
              description: '基本機能とOffice 365統合'
            },
            {
              name: 'Sales Enterprise',
              price: '¥24,000',
              description: '高度な機能とAI分析'
            }
          ]
        },
        targetMarket: [
          '大企業',
          'エンタープライズ',
          '営業部門',
          'Microsoft製品利用企業'
        ]
      },
      {
        name: 'Dynamics 365 Customer Service',
        description: 'カスタマーサービス管理プラットフォーム',
        features: [
          'ケース管理',
          'ナレッジベース',
          'AIチャットボット',
          'オムニチャネル対応',
          'Power Platform連携'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Customer Service Professional',
              price: '¥12,000',
              description: '基本機能とケース管理'
            },
            {
              name: 'Customer Service Enterprise',
              price: '¥24,000',
              description: '高度な機能とAI分析'
            }
          ]
        },
        targetMarket: [
          'カスタマーサービス部門',
          'サポートセンター',
          '大企業',
          'Microsoft製品利用企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'Microsoft製品を活用する企業',
          'エンタープライズ規模の組織',
          'Office 365利用企業',
          'グローバル展開企業'
        ],
        analysis: '特にMicrosoft製品を活用する大企業で、製品間の統合性の高さで支持'
      },
      competitor: {
        points: [
          'Salesforce: CRM市場での競合',
          'SAP: ERP市場での競合',
          'Oracle: エンタープライズ市場での競合',
          'ServiceNow: サービス管理での競合'
        ],
        analysis: 'Microsoft製品との統合性とエンタープライズ市場での強みで競争優位性を確立'
      },
      company: {
        points: [
          'Microsoft製品との統合',
          'グローバルな展開',
          '強力なR&D能力',
          'エンタープライズ市場での実績'
        ],
        analysis: 'Microsoftの製品エコシステムと技術力により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'AI予測分析',
          'Office 365統合',
          'Power Platform連携',
          'セキュリティ機能'
        ],
        analysis: 'Microsoftの技術スタックとの統合性により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'Office 365統合の深化',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'Power Platform連携の拡充',
          '新規市場への展開',
          'パートナーエコシステムの構築'
        ],
        longTerm: [
          'クラウド戦略の強化',
          '次世代技術の導入',
          'グローバル展開の加速'
        ]
      }
    }
  },
  'hubspot': {
    company: {
      name: 'HubSpot, Inc.',
      foundedDate: '2006年',
      employeeCount: '約7,000人（2023年）',
      revenue: '約2,000億円（2023年度）',
      customerCount: '15万社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'Salesforce',
        'Adobe',
        'Dropbox'
      ],
      headquarters: 'ケンブリッジ、マサチューセッツ州、アメリカ',
      website: 'https://www.hubspot.jp/'
    },
    products: [
      {
        name: 'HubSpot CRM',
        description: '無料で使える包括的なCRMプラットフォーム',
        features: [
          '無料CRM',
          'マーケティング自動化',
          'セールスハブ',
          'サービスハブ',
          'CMSハブ'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Free',
              price: '¥0',
              description: '基本機能と2,000,000件の連絡先'
            },
            {
              name: 'Starter',
              price: '¥4,500',
              description: '基本機能と1,000件の連絡先'
            },
            {
              name: 'Professional',
              price: '¥45,000',
              description: '高度な機能と2,000件の連絡先'
            },
            {
              name: 'Enterprise',
              price: '¥120,000',
              description: 'エンタープライズ機能と10,000件の連絡先'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'スタートアップ',
          'マーケティング部門',
          '営業部門'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'マーケティング自動化を求める企業',
          'コスト効率を重視する組織',
          '成長中の中小企業',
          'スタートアップ企業'
        ],
        analysis: '特に中小企業やスタートアップで、使いやすさとコストパフォーマンスで支持'
      },
      competitor: {
        points: [
          'Salesforce: CRM市場での競合',
          'Marketo: マーケティング自動化での競合',
          'Pardot: マーケティング自動化での競合',
          'Zoho CRM: 中小企業市場での競合'
        ],
        analysis: '無料CRMと使いやすさで、特に中小企業市場での競争優位性を確立'
      },
      company: {
        points: [
          '無料CRMの提供',
          '使いやすいインターフェース',
          '包括的な製品ラインナップ',
          '教育コンテンツの充実'
        ],
        analysis: '製品の使いやすさと教育コンテンツの充実により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'マーケティング自動化',
          'セールス自動化',
          'カスタマーサービス',
          'CMS機能'
        ],
        analysis: '製品の統合性と使いやすさで競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナーエコシステムの拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'pandadoc': {
    company: {
      name: 'PandaDoc',
      foundedDate: '2011年',
      employeeCount: '約500人（2023年）',
      revenue: '非公開',
      customerCount: '3万社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'HubSpot',
        'Dropbox',
        'LinkedIn'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://www.pandadoc.jp/'
    },
    products: [
      {
        name: 'PandaDoc Platform',
        description: '提案書・契約書管理プラットフォーム',
        features: [
          'ドキュメント作成',
          '電子署名',
          'テンプレート管理',
          'CRM連携',
          'ワークフロー自動化'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Essentials',
              price: '¥1,800',
              description: '基本機能と5テンプレート'
            },
            {
              name: 'Business',
              price: '¥3,600',
              description: '高度な機能と無制限テンプレート'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'カスタマイズ機能と専任サポート'
            }
          ]
        },
        targetMarket: [
          '営業部門',
          '法務部門',
          '人事部門',
          '中小企業から大企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'ドキュメント管理の効率化を求める企業',
          '電子署名を活用する組織',
          '営業プロセスの改善を目指す企業',
          'リモートワークを推進する企業'
        ],
        analysis: '特に営業部門での提案書・契約書管理の効率化ニーズに応える'
      },
      competitor: {
        points: [
          'DocuSign: 電子署名での競合',
          'Adobe Sign: 電子署名での競合',
          'HelloSign: 電子署名での競合',
          'Conga: 契約管理での競合'
        ],
        analysis: '使いやすさとCRM連携の充実で、特に中小企業市場での競争優位性を確立'
      },
      company: {
        points: [
          '使いやすいインターフェース',
          'CRM連携の充実',
          'テンプレート機能',
          '継続的な機能改善'
        ],
        analysis: '製品の使いやすさとCRM連携の充実により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'ドキュメント作成機能',
          '電子署名機能',
          'テンプレート管理',
          'ワークフロー自動化'
        ],
        analysis: '技術的な実装の質と使いやすさで競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナー連携の拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'docusign': {
    company: {
      name: 'DocuSign, Inc.',
      foundedDate: '2003年',
      employeeCount: '約7,000人（2023年）',
      revenue: '約2,500億円（2023年度）',
      customerCount: '100万社以上',
      notableCustomers: [
        'トヨタ自動車',
        '日立製作所',
        '三菱UFJ銀行',
        'NTT',
        'ソフトバンク'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://www.docusign.jp/'
    },
    products: [
      {
        name: 'DocuSign eSignature',
        description: '電子署名・契約管理プラットフォーム',
        features: [
          '電子署名',
          '契約管理',
          'ワークフロー自動化',
          'モバイル対応',
          'API連携'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Personal',
              price: '¥1,800',
              description: '個人向け基本機能'
            },
            {
              name: 'Standard',
              price: '¥3,600',
              description: '小規模チーム向け機能'
            },
            {
              name: 'Business Pro',
              price: '¥7,200',
              description: 'ビジネス向け高度機能'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'エンタープライズ向け機能'
            }
          ]
        },
        targetMarket: [
          '大企業',
          '金融機関',
          '法務部門',
          '人事部門'
        ]
      },
      {
        name: 'DocuSign CLM',
        description: '契約ライフサイクル管理プラットフォーム',
        features: [
          '契約作成',
          '承認ワークフロー',
          '契約分析',
          'コンプライアンス管理',
          'AI分析'
        ],
        pricing: {
          model: 'エンタープライズ（要問い合わせ）',
          plans: [
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '包括的な契約管理機能'
            }
          ]
        },
        targetMarket: [
          '法務部門',
          '調達部門',
          '大企業',
          'グローバル企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '電子署名の標準化を目指す企業',
          'コンプライアンスを重視する組織',
          'グローバル展開企業',
          '大規模な契約管理を必要とする企業'
        ],
        analysis: '特に大企業や金融機関で、セキュリティとコンプライアンスの高さで支持'
      },
      competitor: {
        points: [
          'Adobe Sign: 電子署名での競合',
          'PandaDoc: 契約管理での競合',
          'HelloSign: 電子署名での競合',
          'Conga: 契約管理での競合'
        ],
        analysis: '市場シェアとブランド力で、特に大企業市場での競争優位性を確立'
      },
      company: {
        points: [
          '市場リーダーシップ',
          'グローバルな展開',
          '強力なコンプライアンス',
          'エンタープライズ向け機能'
        ],
        analysis: '市場での実績と信頼性により、市場での優位性を維持'
      },
      commodity: {
        points: [
          '電子署名技術',
          '契約管理機能',
          'セキュリティ機能',
          'コンプライアンス対応'
        ],
        analysis: '技術的な優位性とコンプライアンス対応により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナーエコシステムの拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'clari': {
    company: {
      name: 'Clari',
      foundedDate: '2012年',
      employeeCount: '約500人（2023年）',
      revenue: '非公開',
      customerCount: '1,000社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'Adobe',
        'Dropbox',
        'Okta'
      ],
      headquarters: 'サニーベール、カリフォルニア州、アメリカ',
      website: 'https://www.clari.com/'
    },
    products: [
      {
        name: 'Clari Revenue Platform',
        description: 'AIを活用した営業予測・分析プラットフォーム',
        features: [
          'AI予測分析',
          'パイプライン管理',
          '営業活動分析',
          'CRM連携',
          'レポーティング'
        ],
        pricing: {
          model: 'エンタープライズ（要問い合わせ）',
          plans: [
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '包括的な営業予測・分析機能'
            }
          ]
        },
        targetMarket: [
          '営業部門',
          '営業マネージャー',
          '営業オペレーション',
          '大企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '営業予測の精度向上を目指す企業',
          'データドリブンな営業活動を行う組織',
          '大規模な営業チームを持つ企業',
          'グローバル展開企業'
        ],
        analysis: '特に大企業の営業部門で、AIを活用した予測分析の精度で支持'
      },
      competitor: {
        points: [
          'Gong.io: 営業分析での競合',
          'Outreach: 営業活動管理での競合',
          'SalesLoft: 営業活動管理での競合',
          'Aviso: 営業予測での競合'
        ],
        analysis: 'AIを活用した予測分析の精度で、特に大企業市場での競争優位性を確立'
      },
      company: {
        points: [
          'AI技術の活用',
          '予測分析の精度',
          'CRM連携の充実',
          '継続的な機能改善'
        ],
        analysis: 'AI技術と予測分析の精度により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'AI予測モデル',
          'パイプライン分析',
          '営業活動分析',
          'レポーティング機能'
        ],
        analysis: '技術的な優位性と分析の精度により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI予測精度の向上',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          '予測分析機能の拡充',
          'パートナー連携の拡大',
          '新規市場への展開'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代AI技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'aviso': {
    company: {
      name: 'Aviso',
      foundedDate: '2012年',
      employeeCount: '約200人（2023年）',
      revenue: '非公開',
      customerCount: '500社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'Adobe',
        'Dropbox',
        'Okta'
      ],
      headquarters: 'サニーベール、カリフォルニア州、アメリカ',
      website: 'https://www.aviso.com/'
    },
    products: [
      {
        name: 'Aviso AI',
        description: 'AIを活用した営業予測・分析プラットフォーム',
        features: [
          'AI予測分析',
          'パイプライン管理',
          '営業活動分析',
          'CRM連携',
          'レポーティング'
        ],
        pricing: {
          model: 'エンタープライズ（要問い合わせ）',
          plans: [
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '包括的な営業予測・分析機能'
            }
          ]
        },
        targetMarket: [
          '営業部門',
          '営業マネージャー',
          '営業オペレーション',
          '大企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '営業予測の精度向上を目指す企業',
          'データドリブンな営業活動を行う組織',
          '大規模な営業チームを持つ企業',
          'グローバル展開企業'
        ],
        analysis: '特に大企業の営業部門で、AIを活用した予測分析の精度で支持'
      },
      competitor: {
        points: [
          'Clari: 営業予測での競合',
          'Gong.io: 営業分析での競合',
          'Outreach: 営業活動管理での競合',
          'SalesLoft: 営業活動管理での競合'
        ],
        analysis: 'AIを活用した予測分析の精度で、特に大企業市場での競争優位性を確立'
      },
      company: {
        points: [
          'AI技術の活用',
          '予測分析の精度',
          'CRM連携の充実',
          '継続的な機能改善'
        ],
        analysis: 'AI技術と予測分析の精度により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'AI予測モデル',
          'パイプライン分析',
          '営業活動分析',
          'レポーティング機能'
        ],
        analysis: '技術的な優位性と分析の精度により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI予測精度の向上',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          '予測分析機能の拡充',
          'パートナー連携の拡大',
          '新規市場への展開'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代AI技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'userflow': {
    company: {
      name: 'Userflow',
      foundedDate: '2017年',
      employeeCount: '約50人（2023年）',
      revenue: '非公開',
      customerCount: '1,000社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'HubSpot',
        'Dropbox',
        'Atlassian'
      ],
      headquarters: 'コペンハーゲン、デンマーク',
      website: 'https://userflow.com/'
    },
    products: [
      {
        name: 'Userflow Platform',
        description: '製品オンボーディング・ユーザーガイダンスプラットフォーム',
        features: [
          'インタラクティブツアー',
          'チェックリスト',
          'ツールチップ',
          'モーダル',
          'アナリティクス'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Starter',
              price: '¥9,000',
              description: '基本機能と1,000アクティブユーザー'
            },
            {
              name: 'Growth',
              price: '¥27,000',
              description: '高度な機能と5,000アクティブユーザー'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'カスタマイズ機能と無制限ユーザー'
            }
          ]
        },
        targetMarket: [
          'SaaS企業',
          'プロダクトマネージャー',
          'UXデザイナー',
          'カスタマーサクセス'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '製品の使いやすさを向上させたい企業',
          'ユーザーオンボーディングを改善したい組織',
          'SaaS企業',
          'デジタルプロダクト企業'
        ],
        analysis: '特にSaaS企業で、製品の使いやすさ向上とユーザーオンボーディング改善ニーズに応える'
      },
      competitor: {
        points: [
          'Pendo: プロダクト分析での競合',
          'WalkMe: デジタル採用での競合',
          'Appcues: オンボーディングでの競合',
          'Userpilot: ユーザーガイダンスでの競合'
        ],
        analysis: '使いやすさと柔軟性で、特に中小規模のSaaS企業での競争優位性を確立'
      },
      company: {
        points: [
          '使いやすいインターフェース',
          '柔軟なカスタマイズ',
          '継続的な機能改善',
          'グローバルな展開'
        ],
        analysis: '製品の使いやすさと柔軟性により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'インタラクティブツアー',
          'チェックリスト機能',
          'アナリティクス',
          'カスタマイズ機能'
        ],
        analysis: '技術的な実装の質と使いやすさで競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナー連携の拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'pendo': {
    company: {
      name: 'Pendo',
      foundedDate: '2013年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約300億円（2023年度）',
      customerCount: '2,000社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'HubSpot',
        'Dropbox',
        'Atlassian'
      ],
      headquarters: 'ローリー、ノースカロライナ州、アメリカ',
      website: 'https://www.pendo.io/'
    },
    products: [
      {
        name: 'Pendo Platform',
        description: 'プロダクト体験・分析プラットフォーム',
        features: [
          'ユーザーガイダンス',
          'フィードバック収集',
          'プロダクト分析',
          'A/Bテスト',
          'セグメント分析'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Starter',
              price: '¥45,000',
              description: '基本機能と10,000アクティブユーザー'
            },
            {
              name: 'Growth',
              price: '¥135,000',
              description: '高度な機能と50,000アクティブユーザー'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'カスタマイズ機能と無制限ユーザー'
            }
          ]
        },
        targetMarket: [
          'SaaS企業',
          'プロダクトマネージャー',
          'UXデザイナー',
          'カスタマーサクセス'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'プロダクト体験を向上させたい企業',
          'ユーザー行動を分析したい組織',
          'SaaS企業',
          'デジタルプロダクト企業'
        ],
        analysis: '特に大規模なSaaS企業で、プロダクト体験の向上とユーザー行動分析ニーズに応える'
      },
      competitor: {
        points: [
          'Userflow: オンボーディングでの競合',
          'WalkMe: デジタル採用での競合',
          'Appcues: オンボーディングでの競合',
          'Mixpanel: プロダクト分析での競合'
        ],
        analysis: '包括的なプロダクト体験プラットフォームとして、特に大企業市場での競争優位性を確立'
      },
      company: {
        points: [
          '包括的な機能',
          '強力な分析機能',
          'エンタープライズ向け機能',
          'グローバルな展開'
        ],
        analysis: '製品の包括性と分析機能により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'ユーザーガイダンス',
          'プロダクト分析',
          'フィードバック収集',
          'A/Bテスト'
        ],
        analysis: '技術的な優位性と分析機能により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナーエコシステムの拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'walkme': {
    company: {
      name: 'WalkMe',
      foundedDate: '2011年',
      employeeCount: '約1,500人（2023年）',
      revenue: '約400億円（2023年度）',
      customerCount: '2,500社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'SAP',
        'Salesforce',
        'Adobe'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://www.walkme.com/'
    },
    products: [
      {
        name: 'WalkMe Platform',
        description: 'デジタル採用・オンボーディングプラットフォーム',
        features: [
          'インタラクティブガイド',
          'タスクリスト',
          'スマートツールチップ',
          'ユーザー分析',
          '自動化ワークフロー'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Starter',
              price: '¥60,000',
              description: '基本機能と5,000アクティブユーザー'
            },
            {
              name: 'Professional',
              price: '¥180,000',
              description: '高度な機能と20,000アクティブユーザー'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'カスタマイズ機能と無制限ユーザー'
            }
          ]
        },
        targetMarket: [
          '大企業',
          'エンタープライズ',
          'IT部門',
          'デジタルトランスフォーメーション推進部門'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'デジタル採用を推進する大企業',
          '複雑なシステムを導入する組織',
          'エンタープライズ企業',
          'グローバル展開する企業'
        ],
        analysis: '特に大規模企業でのデジタル採用とシステム導入支援ニーズに応える'
      },
      competitor: {
        points: [
          'Pendo: プロダクト体験での競合',
          'Userflow: オンボーディングでの競合',
          'Whatfix: デジタル採用での競合',
          'Appcues: オンボーディングでの競合'
        ],
        analysis: 'エンタープライズ向けデジタル採用プラットフォームとして、特に大企業市場での競争優位性を確立'
      },
      company: {
        points: [
          'エンタープライズ向け機能',
          '強力な分析機能',
          'グローバル展開',
          '豊富な統合機能'
        ],
        analysis: 'エンタープライズ市場での実績と包括的な機能により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'インタラクティブガイド',
          '自動化ワークフロー',
          'ユーザー分析',
          'タスクリスト'
        ],
        analysis: '技術的な優位性とエンタープライズ向け機能により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナーエコシステムの拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'whatfix': {
    company: {
      name: 'Whatfix',
      foundedDate: '2014年',
      employeeCount: '約800人（2023年）',
      revenue: '約200億円（2023年度）',
      customerCount: '1,500社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'SAP',
        'Salesforce',
        'Adobe'
      ],
      headquarters: 'サンノゼ、カリフォルニア州、アメリカ',
      website: 'https://www.whatfix.com/'
    },
    products: [
      {
        name: 'Whatfix Platform',
        description: 'デジタル採用・オンボーディングプラットフォーム',
        features: [
          'インタラクティブガイド',
          'コンテキストヘルプ',
          'タスクリスト',
          'ユーザー分析',
          '自動化ワークフロー'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Starter',
              price: '¥45,000',
              description: '基本機能と3,000アクティブユーザー'
            },
            {
              name: 'Professional',
              price: '¥135,000',
              description: '高度な機能と15,000アクティブユーザー'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'カスタマイズ機能と無制限ユーザー'
            }
          ]
        },
        targetMarket: [
          '大企業',
          'エンタープライズ',
          'IT部門',
          'デジタルトランスフォーメーション推進部門'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'デジタル採用を推進する大企業',
          '複雑なシステムを導入する組織',
          'エンタープライズ企業',
          'グローバル展開する企業'
        ],
        analysis: '特に大規模企業でのデジタル採用とシステム導入支援ニーズに応える'
      },
      competitor: {
        points: [
          'WalkMe: デジタル採用での競合',
          'Pendo: プロダクト体験での競合',
          'Userflow: オンボーディングでの競合',
          'Appcues: オンボーディングでの競合'
        ],
        analysis: 'エンタープライズ向けデジタル採用プラットフォームとして、特に大企業市場での競争優位性を確立'
      },
      company: {
        points: [
          'エンタープライズ向け機能',
          '強力な分析機能',
          'グローバル展開',
          '豊富な統合機能'
        ],
        analysis: 'エンタープライズ市場での実績と包括的な機能により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'インタラクティブガイド',
          'コンテキストヘルプ',
          'ユーザー分析',
          'タスクリスト'
        ],
        analysis: '技術的な優位性とエンタープライズ向け機能により、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナーエコシステムの拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'appcues': {
    company: {
      name: 'Appcues',
      foundedDate: '2013年',
      employeeCount: '約200人（2023年）',
      revenue: '約100億円（2023年度）',
      customerCount: '1,000社以上',
      notableCustomers: [
        'Microsoft',
        'Oracle',
        'HubSpot',
        'Dropbox',
        'Atlassian'
      ],
      headquarters: 'ボストン、マサチューセッツ州、アメリカ',
      website: 'https://www.appcues.com/'
    },
    products: [
      {
        name: 'Appcues Platform',
        description: 'プロダクトオンボーディング・ユーザーガイダンスプラットフォーム',
        features: [
          'インタラクティブツアー',
          'チェックリスト',
          'ツールチップ',
          'モーダル',
          'アナリティクス'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Starter',
              price: '¥30,000',
              description: '基本機能と5,000アクティブユーザー'
            },
            {
              name: 'Growth',
              price: '¥90,000',
              description: '高度な機能と25,000アクティブユーザー'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'カスタマイズ機能と無制限ユーザー'
            }
          ]
        },
        targetMarket: [
          'SaaS企業',
          'プロダクトマネージャー',
          'UXデザイナー',
          'カスタマーサクセス'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'プロダクト体験を向上させたい企業',
          'ユーザーオンボーディングを改善したい組織',
          'SaaS企業',
          'デジタルプロダクト企業'
        ],
        analysis: '特にSaaS企業で、プロダクト体験の向上とユーザーオンボーディング改善ニーズに応える'
      },
      competitor: {
        points: [
          'Userflow: オンボーディングでの競合',
          'Pendo: プロダクト体験での競合',
          'WalkMe: デジタル採用での競合',
          'Whatfix: デジタル採用での競合'
        ],
        analysis: 'SaaS向けオンボーディングプラットフォームとして、特に中小企業市場での競争優位性を確立'
      },
      company: {
        points: [
          '使いやすいインターフェース',
          '柔軟なカスタマイズ機能',
          '豊富な統合機能',
          '強力なアナリティクス'
        ],
        analysis: '製品の使いやすさと柔軟性により、市場での優位性を維持'
      },
      commodity: {
        points: [
          'インタラクティブツアー',
          'チェックリスト',
          'ツールチップ',
          'アナリティクス'
        ],
        analysis: '技術的な優位性と使いやすさにより、競合他社との差別化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規機能の追加'
        ],
        midTerm: [
          'パートナーエコシステムの拡大',
          '新規市場への展開',
          '製品統合の強化'
        ],
        longTerm: [
          'グローバル展開の加速',
          '次世代技術の導入',
          '新規サービス開発'
        ]
      }
    }
  },
  'agile-crm': {
    company: {
      name: 'Agile CRM Inc.',
      foundedDate: '2013年',
      employeeCount: '約100人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '15,000社以上',
      notableCustomers: [
        'Skullcandy',
        'Groupon',
        'Walmart',
        'Panasonic',
        'Accenture'
      ],
      headquarters: 'テキサス州ダラス、アメリカ',
      website: 'https://www.agilecrm.com/'
    },
    products: [
      {
        name: 'Agile CRM',
        description: 'オールインワンCRMソリューション',
        features: [
          '連絡先・リード管理',
          'メール自動化',
          'ソーシャルCRM',
          'ウェブ分析',
          'ヘルプデスク機能',
          'プロジェクト管理',
          'モバイルアプリ',
          'API統合'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '¥0',
              description: '10ユーザーまで、基本CRM機能'
            },
            {
              name: 'Starter',
              price: '¥1,000',
              description: 'メール自動化、ウェブ分析機能'
            },
            {
              name: 'Regular',
              price: '¥3,000',
              description: 'ヘルプデスク、カスタムフィールド'
            },
            {
              name: 'Enterprise',
              price: '¥6,000',
              description: '高度な自動化、カスタムダッシュボード'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'ミッドマーケット'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '中小企業向けの手頃な価格設定',
          'オールインワンソリューション',
          '使いやすいインターフェース',
          '無料プランの提供'
        ],
        analysis: '中小企業が求める包括的なCRM機能を手頃な価格で提供し、成長段階の企業に最適'
      },
      competitor: {
        points: [
          'HubSpotとの価格競争',
          'Salesforceとの機能比較',
          'Zoho CRMとの市場競合',
          'Pipedriveとの使いやすさ競争'
        ],
        analysis: '大手CRMベンダーに対して価格優位性とオールインワン機能で差別化を図る'
      },
      company: {
        points: [
          '中小企業市場への特化',
          '継続的な機能追加',
          '顧客サポートの充実',
          'パートナーエコシステムの構築'
        ],
        analysis: '中小企業セグメントでの強いポジションを活かし、顧客満足度向上に注力'
      },
      commodity: {
        points: [
          'CRM、マーケティング、サービス統合',
          'AI機能の段階的導入',
          'モバイルファーストの設計',
          'サードパーティ統合の拡充'
        ],
        analysis: '包括的な機能セットと使いやすさにより、中小企業の業務効率化を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規統合の追加'
        ],
        midTerm: [
          '中堅企業市場への展開',
          '業界特化機能の開発',
          'グローバル展開の加速'
        ],
        longTerm: [
          'エンタープライズ市場への参入',
          '次世代CRM技術の導入',
          'プラットフォーム化の推進'
        ]
      }
    }
  },
  'monday-crm': {
    company: {
      name: 'monday.com Ltd.',
      foundedDate: '2012年',
      employeeCount: '約1,500人（2023年）',
      revenue: '約800億円（2023年度）',
      customerCount: '15万社以上',
      notableCustomers: [
        'Coca-Cola',
        'Adobe',
        'Universal Music Group',
        'WeWork',
        'Canva'
      ],
      headquarters: 'テルアビブ、イスラエル',
      website: 'https://monday.com/crm/'
    },
    products: [
      {
        name: 'monday sales CRM',
        description: 'ビジュアルで直感的なCRMプラットフォーム',
        features: [
          'ビジュアルパイプライン管理',
          'カスタマイズ可能なダッシュボード',
          'メール統合',
          '自動化ワークフロー',
          'レポート・分析',
          'モバイルアプリ',
          'チームコラボレーション',
          'API統合'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Basic',
              price: '¥1,200',
              description: '基本CRM機能、3ボードまで'
            },
            {
              name: 'Standard',
              price: '¥1,500',
              description: 'タイムライン、カレンダー表示'
            },
            {
              name: 'Pro',
              price: '¥2,400',
              description: '高度な自動化、統合機能'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'ミッドマーケット',
          'エンタープライズ'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'ビジュアルで直感的なインターフェース',
          '高いカスタマイズ性',
          'チームコラボレーション機能',
          '豊富なテンプレート'
        ],
        analysis: '従来のCRMに不満を持つチームに、視覚的で使いやすいソリューションを提供'
      },
      competitor: {
        points: [
          'Asanaとのプロジェクト管理競争',
          'Salesforceとの機能比較',
          'Notionとの柔軟性競争',
          'Airtableとのデータベース機能比較'
        ],
        analysis: 'ビジュアルデザインと使いやすさで従来のCRMベンダーとの差別化を実現'
      },
      company: {
        points: [
          '急速な成長と市場拡大',
          '継続的な機能革新',
          '強力なマーケティング戦略',
          'グローバル展開の推進'
        ],
        analysis: '革新的なアプローチと強力な成長戦略により、CRM市場での地位を確立'
      },
      commodity: {
        points: [
          'ワークOS プラットフォーム',
          'ノーコード自動化',
          '豊富な統合オプション',
          'リアルタイムコラボレーション'
        ],
        analysis: 'プラットフォームアプローチにより、CRMを超えた包括的なワークソリューションを提供'
      },
      strategy: {
        shortTerm: [
          'AI機能の統合',
          'モバイル体験の向上',
          '新規統合の追加'
        ],
        midTerm: [
          '業界特化ソリューションの開発',
          'エンタープライズ機能の強化',
          'グローバル市場での拡大'
        ],
        longTerm: [
          'ワークOSエコシステムの完成',
          '次世代コラボレーション技術の導入',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'pipedrive': {
    company: {
      name: 'Pipedrive OÜ',
      foundedDate: '2010年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約150億円（2023年度）',
      customerCount: '10万社以上',
      notableCustomers: [
        'Amazon',
        'Skype',
        'RE/MAX',
        'Vimeo',
        'Teamwork'
      ],
      headquarters: 'タリン、エストニア',
      website: 'https://www.pipedrive.com/ja/'
    },
    products: [
      {
        name: 'Pipedrive CRM',
        description: '営業活動に特化したシンプルなCRM',
        features: [
          'ビジュアルパイプライン',
          '活動管理',
          'メール統合',
          '営業レポート',
          'モバイルアプリ',
          'ワークフロー自動化',
          'ウェブフォーム',
          'API統合'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Essential',
              price: '¥1,500',
              description: '基本CRM機能、メール統合'
            },
            {
              name: 'Advanced',
              price: '¥2,500',
              description: '自動化、レポート機能'
            },
            {
              name: 'Professional',
              price: '¥5,000',
              description: '高度な分析、カスタムフィールド'
            },
            {
              name: 'Enterprise',
              price: '¥10,000',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'ミッドマーケット',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '営業活動に特化した設計',
          'シンプルで使いやすいUI',
          '迅速な導入・設定',
          '手頃な価格設定'
        ],
        analysis: '営業チームが実際に使いたくなるシンプルで効果的なCRMを求める企業に最適'
      },
      competitor: {
        points: [
          'HubSpotとの機能比較',
          'Salesforceとの価格競争',
          'Zoho CRMとの使いやすさ競争',
          'Monday.comとのビジュアル機能比較'
        ],
        analysis: '営業特化とシンプルさで大手CRMベンダーとの差別化を実現'
      },
      company: {
        points: [
          '営業チーム向け特化戦略',
          '継続的なUX改善',
          '中小企業市場での強いポジション',
          'グローバル展開の推進'
        ],
        analysis: '営業特化戦略により、特定セグメントでの強固なポジションを確立'
      },
      commodity: {
        points: [
          '営業パイプライン管理',
          'シンプルな自動化機能',
          '豊富な統合オプション',
          'モバイルファースト設計'
        ],
        analysis: '営業活動の効率化に特化した機能セットにより、高い顧客満足度を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の段階的導入',
          'モバイル体験の向上',
          '新規統合の追加'
        ],
        midTerm: [
          '中堅企業市場への展開',
          'マーケティング機能の強化',
          'アジア市場での拡大'
        ],
        longTerm: [
          '包括的な営業プラットフォーム化',
          '次世代営業技術の導入',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'linkedin-sales-navigator': {
    company: {
      name: 'LinkedIn Corporation',
      foundedDate: '2003年',
      employeeCount: '約20,000人（2023年）',
      revenue: '約1.5兆円（2023年度）',
      customerCount: '9億人以上のユーザー',
      notableCustomers: [
        'Microsoft',
        'Salesforce',
        'Adobe',
        'Oracle',
        'IBM'
      ],
      headquarters: 'サニーベール、カリフォルニア州、アメリカ',
      website: 'https://business.linkedin.com/sales-solutions/sales-navigator'
    },
    products: [
      {
        name: 'LinkedIn Sales Navigator',
        description: 'プロフェッショナルネットワークを活用した営業支援ツール',
        features: [
          '高度な検索・フィルタリング',
          'リード推奨機能',
          'InMailメッセージング',
          'CRM統合',
          '営業インサイト',
          'チーム機能',
          'リアルタイム通知',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Core',
              price: '¥8,000',
              description: '基本検索、InMail 20通/月'
            },
            {
              name: 'Advanced',
              price: '¥12,000',
              description: '高度な検索、InMail 30通/月'
            },
            {
              name: 'Advanced Plus',
              price: '¥18,000',
              description: 'チーム機能、InMail 50通/月'
            }
          ]
        },
        targetMarket: [
          'B2B営業チーム',
          'エンタープライズ',
          '営業代行会社'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'B2B営業に特化した機能',
          '豊富なプロフェッショナルデータ',
          '高い到達率とエンゲージメント',
          'CRMとの統合機能'
        ],
        analysis: 'B2B営業において最も効果的なプロスペクティングツールとして広く認知'
      },
      competitor: {
        points: [
          'ZoomInfoとのデータ品質競争',
          'Outreachとの営業自動化競争',
          'HubSpotとの統合機能比較',
          'Apolloとの価格競争'
        ],
        analysis: 'LinkedInプラットフォームの独自性により、他の営業ツールとは異なるポジションを確立'
      },
      company: {
        points: [
          'Microsoftによる強力なバックアップ',
          '継続的なプラットフォーム改善',
          'グローバルネットワークの拡大',
          'AI技術の積極的な導入'
        ],
        analysis: 'プロフェッショナルネットワークのリーダーとして、営業分野での影響力を拡大'
      },
      commodity: {
        points: [
          'プロフェッショナルネットワーク',
          'AI駆動のリード推奨',
          'リアルタイムインサイト',
          '包括的なCRM統合'
        ],
        analysis: '独自のネットワークデータとAI技術により、他では得られない営業インサイトを提供'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'CRM統合の拡充',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'グローバル市場での拡大',
          '業界特化機能の開発',
          'パートナーエコシステムの強化'
        ],
        longTerm: [
          '次世代営業プラットフォームの構築',
          'AI営業アシスタントの開発',
          '新規市場セグメントの開拓'
        ]
      }
    }
  }
};   