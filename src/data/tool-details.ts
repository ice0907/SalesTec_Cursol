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
  },
  'apollo': {
    company: {
      name: 'Apollo.io',
      foundedDate: '2015年',
      employeeCount: '約500人（2023年）',
      revenue: '約100億円（2023年度）',
      customerCount: '30万社以上',
      notableCustomers: [
        'Zoom',
        'Outreach',
        'Gong',
        'Snowflake',
        'Stripe'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://apollo.io'
    },
    products: [
      {
        name: 'Apollo',
        description: '2億以上の連絡先データベースを持つ包括的な営業インテリジェンスプラットフォーム',
        features: [
          '2億以上の連絡先データベース',
          'AIリードスコアリング',
          'メールシーケンス自動化',
          '営業ダイヤラー',
          'CRM統合',
          'リアルタイムデータ更新',
          '高度な検索フィルター',
          '営業分析・レポート'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '月間60クレジット、基本検索'
            },
            {
              name: 'Starter',
              price: '¥5,500',
              description: '月間1,200クレジット、メールシーケンス'
            },
            {
              name: 'Professional',
              price: '¥8,800',
              description: '月間3,000クレジット、営業ダイヤラー'
            },
            {
              name: 'Organization',
              price: '¥13,200',
              description: '月間6,000クレジット、チーム管理'
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
          '包括的なデータベース',
          '使いやすいインターフェース',
          '強力な自動化機能',
          '手頃な価格設定'
        ],
        analysis: '営業チームが必要とする機能を一つのプラットフォームに統合し、効率的なプロスペクティングを実現'
      },
      competitor: {
        points: [
          'ZoomInfo、Outreachとの競合',
          'オールインワンアプローチ',
          '価格競争力',
          'ユーザビリティの優位性'
        ],
        analysis: 'データプロバイダーと営業自動化ツールの機能を統合し、コストパフォーマンスに優れたソリューションを提供'
      },
      company: {
        points: [
          '急成長するスタートアップ',
          '強力な資金調達',
          'プロダクト主導の成長',
          'グローバル展開'
        ],
        analysis: 'Y Combinatorの卒業生として、プロダクト主導の成長戦略で急速に市場シェアを拡大'
      },
      commodity: {
        points: [
          '営業インテリジェンスプラットフォーム',
          'データドリブン営業支援',
          '営業自動化ツール',
          'リードジェネレーション'
        ],
        analysis: 'データ、自動化、分析を統合した包括的な営業プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'データ品質の向上',
          'AI機能の強化',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          '国際展開の加速',
          'パートナーエコシステムの構築'
        ],
        longTerm: [
          '営業インテリジェンス市場のリーダーポジション確立',
          '次世代営業プラットフォームの構築',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'clearbit': {
    company: {
      name: 'Clearbit',
      foundedDate: '2014年',
      employeeCount: '約200人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Segment',
        'Stripe',
        'Asana',
        'Zendesk',
        'Shopify'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://clearbit.com'
    },
    products: [
      {
        name: 'Clearbit',
        description: '企業・担当者データのエンリッチメントに特化したツール',
        features: [
          'リアルタイムデータエンリッチメント',
          '85以上のデータソース',
          'API統合',
          '企業ロゴ・写真取得',
          'テクノグラフィックデータ',
          'ファーモグラフィックデータ',
          'リードスコアリング',
          'データ品質保証'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '月間100リクエスト、基本エンリッチメント'
            },
            {
              name: 'Growth',
              price: '¥11,000〜',
              description: '月間2,500リクエスト、高度なデータポイント'
            },
            {
              name: 'Pro',
              price: '¥55,000〜',
              description: '月間10,000リクエスト、カスタムデータポイント'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '無制限リクエスト、カスタム統合'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'ミッドマーケット',
          'エンタープライズ'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '高品質なデータ',
          'リアルタイム更新',
          '簡単なAPI統合',
          '包括的なデータカバレッジ'
        ],
        analysis: '営業・マーケティングチームが必要とする正確で最新の企業データを提供し、リード品質の向上を実現'
      },
      competitor: {
        points: [
          'ZoomInfo、Apolloとの差別化',
          'データエンリッチメント特化',
          'API ファーストアプローチ',
          '開発者フレンドリー'
        ],
        analysis: 'データエンリッチメントに特化することで、他のツールとの統合を前提とした専門性の高いソリューションを提供'
      },
      company: {
        points: [
          'データ品質へのこだわり',
          '技術力の高さ',
          'API エコシステム',
          '継続的なイノベーション'
        ],
        analysis: 'データサイエンスと機械学習に強みを持つ技術企業として、データ品質と精度にこだわったプロダクト開発を継続'
      },
      commodity: {
        points: [
          'データエンリッチメントサービス',
          'B2Bデータインテリジェンス',
          '営業・マーケティング支援',
          'データ品質向上ツール'
        ],
        analysis: '企業データの収集、検証、エンリッチメントに特化したサービス'
      },
      strategy: {
        shortTerm: [
          'データカバレッジの拡大',
          'API機能の強化',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'AI・機械学習によるデータ精度向上',
          '新規データソースの追加',
          'グローバル展開'
        ],
        longTerm: [
          'B2Bデータインテリジェンスのデファクトスタンダード確立',
          '次世代データプラットフォームの構築',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'leadiq': {
    company: {
      name: 'LeadIQ',
      foundedDate: '2015年',
      employeeCount: '約150人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '5万社以上',
      notableCustomers: [
        'Salesforce',
        'Microsoft',
        'Adobe',
        'Zoom',
        'Slack'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://leadiq.com'
    },
    products: [
      {
        name: 'LeadIQ',
        description: 'AI搭載のプロスペクティングプラットフォーム',
        features: [
          'AI搭載プロスペクティング',
          'リアルタイムデータ検証',
          'CRM自動同期',
          'Chrome拡張機能',
          'メールシーケンス',
          'チーム管理',
          'アクティビティトラッキング',
          'インテグレーション'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '月間20クレジット、基本機能'
            },
            {
              name: 'Essential',
              price: '¥4,400',
              description: '月間120クレジット、CRM統合'
            },
            {
              name: 'Pro',
              price: '¥8,800',
              description: '月間480クレジット、高度な機能'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '無制限クレジット、カスタム機能'
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
          'AI搭載の効率的なプロスペクティング',
          '使いやすいインターフェース',
          'リアルタイムデータ更新',
          '手頃な価格設定'
        ],
        analysis: '営業チームの生産性向上を重視する企業に最適なAI搭載プロスペクティングツール'
      },
      competitor: {
        points: [
          'Apollo、ZoomInfoとの競合',
          'AI機能での差別化',
          'ユーザビリティの優位性',
          '価格競争力'
        ],
        analysis: 'AI技術とユーザビリティに焦点を当てることで、従来のデータプロバイダーとの差別化を実現'
      },
      company: {
        points: [
          'AI技術への投資',
          'ユーザー中心の設計',
          '急成長する顧客基盤',
          '継続的なイノベーション'
        ],
        analysis: 'AI技術を活用した次世代プロスペクティングツールの開発に注力'
      },
      commodity: {
        points: [
          'AI搭載プロスペクティング',
          '営業インテリジェンス',
          'データ検証サービス',
          '営業自動化ツール'
        ],
        analysis: 'AI技術を活用したプロスペクティングの効率化と精度向上を実現'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'データ品質の向上',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          '新規統合の追加',
          'グローバル展開'
        ],
        longTerm: [
          'AI営業プラットフォームのリーダーポジション確立',
          '次世代営業技術の開発',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'datanyze': {
    company: {
      name: 'Datanyze',
      foundedDate: '2012年',
      employeeCount: '約100人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Salesforce',
        'HubSpot',
        'Marketo',
        'Pardot',
        'Outreach'
      ],
      headquarters: 'サンマテオ、カリフォルニア州、アメリカ',
      website: 'https://www.datanyze.com'
    },
    products: [
      {
        name: 'Datanyze',
        description: 'テクノグラフィックデータに特化したB2B営業インテリジェンスプラットフォーム',
        features: [
          'テクノグラフィックデータ',
          'ウェブサイト技術検出',
          'リード生成',
          'Chrome拡張機能',
          'CRM統合',
          'アラート機能',
          'データエクスポート',
          'API統合'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥5,500',
              description: '月間500クレジット、基本機能'
            },
            {
              name: 'Professional',
              price: '¥11,000',
              description: '月間2,000クレジット、高度な機能'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: '無制限クレジット、カスタム機能'
            }
          ]
        },
        targetMarket: [
          'テクノロジー企業',
          'SaaS企業',
          'マーケティングエージェンシー'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'テクノロジー企業への営業',
          '競合分析の必要性',
          'マーケットインテリジェンス',
          'リード品質の向上'
        ],
        analysis: 'テクノロジー業界での営業活動において、技術スタックに基づいたターゲティングを重視する企業に最適'
      },
      competitor: {
        points: [
          'BuiltWith、Wappalyzerとの競合',
          'テクノグラフィック特化',
          'B2B営業統合',
          'データ精度の優位性'
        ],
        analysis: 'テクノグラフィックデータに特化することで、ニッチな市場でのリーダーポジションを確立'
      },
      company: {
        points: [
          'テクノロジー業界への深い理解',
          'データ収集技術の専門性',
          '継続的なデータ更新',
          'B2B営業への特化'
        ],
        analysis: 'テクノロジー業界に特化した専門知識とデータ収集技術で差別化'
      },
      commodity: {
        points: [
          'テクノグラフィックインテリジェンス',
          'ウェブ技術分析',
          'B2B営業支援',
          'マーケットリサーチ'
        ],
        analysis: 'ウェブサイトの技術スタック分析に特化したユニークなサービス'
      },
      strategy: {
        shortTerm: [
          'データカバレッジの拡大',
          '検出精度の向上',
          'ユーザー体験の改善'
        ],
        midTerm: [
          '新技術の検出機能追加',
          'AI分析機能の導入',
          'パートナーシップの拡大'
        ],
        longTerm: [
          'テクノグラフィック分野でのデファクトスタンダード確立',
          '次世代技術分析プラットフォームの構築',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'lusha': {
    company: {
      name: 'Lusha',
      foundedDate: '2016年',
      employeeCount: '約300人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '100万ユーザー以上',
      notableCustomers: [
        'Airbnb',
        'Uber',
        'Google',
        'Microsoft',
        'Salesforce'
      ],
      headquarters: 'テルアビブ、イスラエル',
      website: 'https://www.lusha.com'
    },
    products: [
      {
        name: 'Lusha',
        description: 'B2B連絡先データベースとプロスペクティングプラットフォーム',
        features: [
          'B2B連絡先データベース',
          'メール・電話番号検索',
          'Chrome拡張機能',
          'LinkedIn統合',
          'CRM統合',
          'データエンリッチメント',
          'リアルタイム検証',
          'GDPR準拠'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '月間5クレジット、基本機能'
            },
            {
              name: 'Pro',
              price: '¥3,300',
              description: '月間480クレジット、高度な機能'
            },
            {
              name: 'Premium',
              price: '¥6,600',
              description: '月間960クレジット、チーム機能'
            },
            {
              name: 'Scale',
              price: '要問い合わせ',
              description: '無制限クレジット、エンタープライズ機能'
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
          'グローバルデータカバレッジ',
          '使いやすいインターフェース',
          'LinkedIn統合',
          '手頃な価格設定'
        ],
        analysis: 'グローバル市場での営業活動を行う企業に最適な連絡先データプラットフォーム'
      },
      competitor: {
        points: [
          'ZoomInfo、Apolloとの競合',
          'LinkedIn統合の強み',
          'グローバルデータ',
          '価格競争力'
        ],
        analysis: 'LinkedIn統合とグローバルデータカバレッジで差別化を実現'
      },
      company: {
        points: [
          'イスラエル発の技術企業',
          'グローバル展開',
          '急成長する顧客基盤',
          'データプライバシー重視'
        ],
        analysis: 'イスラエルの技術力を活かしたグローバルB2Bデータプラットフォーム'
      },
      commodity: {
        points: [
          'B2B連絡先データベース',
          'プロスペクティングツール',
          'データエンリッチメント',
          '営業支援プラットフォーム'
        ],
        analysis: 'グローバルB2B連絡先データの収集と提供に特化'
      },
      strategy: {
        shortTerm: [
          'データ品質の向上',
          'ユーザー体験の改善',
          '新規統合の追加'
        ],
        midTerm: [
          'AI機能の導入',
          'エンタープライズ市場への展開',
          'アジア市場での拡大'
        ],
        longTerm: [
          'グローバルB2Bデータプラットフォームのリーダーポジション確立',
          '次世代営業インテリジェンスの開発',
          '新規サービス領域の開拓'
        ]
      }
    }
  },
  'outreach-lead': {
    company: {
      name: 'Outreach',
      foundedDate: '2014年',
      employeeCount: '約1,500人（2023年）',
      revenue: '約300億円（2023年度）',
      customerCount: '6,000社以上',
      notableCustomers: [
        'Adobe',
        'Cisco',
        'DocuSign',
        'Okta',
        'Zoom'
      ],
      headquarters: 'シアトル、ワシントン州、アメリカ',
      website: 'https://www.outreach.io'
    },
    products: [
      {
        name: 'Outreach Sales Execution Platform',
        description: 'AI搭載の営業実行プラットフォーム',
        features: [
          'AI搭載営業シーケンス',
          'マルチチャネルエンゲージメント',
          '営業分析・レポート',
          'CRM統合',
          'コール録音・分析',
          'メール自動化',
          'タスク管理',
          'パフォーマンス追跡'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Professional',
              price: '¥11,000',
              description: '基本的な営業自動化機能'
            },
            {
              name: 'Enterprise',
              price: '¥22,000',
              description: '高度な分析とAI機能'
            },
            {
              name: 'Ultimate',
              price: '要問い合わせ',
              description: 'カスタム機能とサポート'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          'テクノロジー企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '営業チームの生産性向上',
          'AI搭載の高度な自動化',
          '包括的な営業プラットフォーム',
          'エンタープライズ級の機能'
        ],
        analysis: '大規模な営業組織において、営業プロセス全体の効率化と標準化を求める企業に最適'
      },
      competitor: {
        points: [
          'SalesLoft、HubSpotとの競合',
          'AI機能での差別化',
          'エンタープライズ市場での強み',
          '包括的なプラットフォーム'
        ],
        analysis: 'AI技術と包括的な営業プラットフォームで、エンタープライズ市場でのリーダーポジションを確立'
      },
      company: {
        points: [
          '営業技術分野のパイオニア',
          '継続的なイノベーション',
          '強力な顧客基盤',
          'AI技術への投資'
        ],
        analysis: '営業自動化分野のリーダーとして、AI技術を活用した次世代営業プラットフォームの開発を推進'
      },
      commodity: {
        points: [
          '営業自動化プラットフォーム',
          'AI営業インテリジェンス',
          '営業プロセス最適化',
          'エンゲージメント管理'
        ],
        analysis: '営業プロセス全体をカバーする包括的なプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規統合の追加'
        ],
        midTerm: [
          'グローバル市場での拡大',
          '新規業界への展開',
          'パートナーエコシステムの構築'
        ],
        longTerm: [
          '営業技術分野でのデファクトスタンダード確立',
          '次世代AI営業プラットフォームの構築',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'salesloft-lead': {
    company: {
      name: 'SalesLoft',
      foundedDate: '2011年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約200億円（2023年度）',
      customerCount: '5,000社以上',
      notableCustomers: [
        'IBM',
        'Shopify',
        'Twilio',
        'Square',
        'Tableau'
      ],
      headquarters: 'アトランタ、ジョージア州、アメリカ',
      website: 'https://salesloft.com'
    },
    products: [
      {
        name: 'SalesLoft Revenue Workflow Platform',
        description: '収益ワークフロープラットフォーム',
        features: [
          'カデンス（営業シーケンス）',
          'コール管理',
          'メール自動化',
          '営業分析',
          'CRM統合',
          'コーチング機能',
          'フォーキャスティング',
          'コンバージョン分析'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Essentials',
              price: '¥8,800',
              description: '基本的なカデンス機能'
            },
            {
              name: 'Advanced',
              price: '¥16,500',
              description: '高度な分析とコーチング'
            },
            {
              name: 'Premier',
              price: '要問い合わせ',
              description: 'カスタム機能とサポート'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          'B2B企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '営業チームの効率化',
          'データドリブンな営業',
          '営業コーチング',
          '収益予測の精度向上'
        ],
        analysis: '営業プロセスの標準化と効率化を重視する中堅・大企業に最適なプラットフォーム'
      },
      competitor: {
        points: [
          'Outreach、HubSpotとの競合',
          'カデンス機能での差別化',
          'コーチング機能の強み',
          '使いやすさの優位性'
        ],
        analysis: '営業カデンスとコーチング機能に特化することで、競合他社との差別化を実現'
      },
      company: {
        points: [
          '営業プロセス最適化の専門性',
          '継続的な機能改善',
          '強力なカスタマーサクセス',
          'データ分析への注力'
        ],
        analysis: '営業プロセスの科学的アプローチに基づいたプロダクト開発で差別化'
      },
      commodity: {
        points: [
          '営業カデンスプラットフォーム',
          '収益ワークフロー管理',
          '営業コーチング',
          'パフォーマンス分析'
        ],
        analysis: '営業活動の標準化と最適化に特化したプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の導入',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'グローバル展開の加速',
          '新規業界への展開',
          'パートナーシップの拡大'
        ],
        longTerm: [
          '収益ワークフロー分野でのリーダーポジション確立',
          '次世代営業プラットフォームの構築',
          '新規サービス領域の開拓'
        ]
      }
    }
  },
  'hubspot-crm': {
    company: {
      name: 'HubSpot',
      foundedDate: '2006年',
      employeeCount: '約7,000人（2023年）',
      revenue: '約2,000億円（2023年度）',
      customerCount: '20万社以上',
      notableCustomers: [
        'Atlassian',
        'SurveyMonkey',
        'Trello',
        'VMware',
        'Purple'
      ],
      headquarters: 'ケンブリッジ、マサチューセッツ州、アメリカ',
      website: 'https://www.hubspot.com'
    },
    products: [
      {
        name: 'HubSpot CRM Platform',
        description: '統合型CRMプラットフォーム',
        features: [
          '無料CRM',
          'マーケティング自動化',
          '営業パイプライン管理',
          'カスタマーサービス',
          'コンテンツ管理',
          'レポート・分析',
          'ワークフロー自動化',
          'インテグレーション'
        ],
        pricing: {
          model: 'フリーミアム + サブスクリプション（月額）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本CRM機能、5ユーザーまで'
            },
            {
              name: 'Starter',
              price: '¥5,400〜',
              description: 'マーケティング・営業基本機能'
            },
            {
              name: 'Professional',
              price: '¥96,000〜',
              description: '高度な自動化とレポート'
            },
            {
              name: 'Enterprise',
              price: '¥432,000〜',
              description: 'カスタム機能とサポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'ミッドマーケット',
          'エンタープライズ'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '統合型プラットフォーム',
          '無料から始められる',
          '使いやすいインターフェース',
          '豊富な教育リソース'
        ],
        analysis: 'インバウンドマーケティングから営業、カスタマーサービスまでを統合的に管理したい企業に最適'
      },
      competitor: {
        points: [
          'Salesforce、Zohoとの競合',
          'フリーミアムモデルでの差別化',
          'インバウンドマーケティングの強み',
          '使いやすさの優位性'
        ],
        analysis: 'フリーミアムモデルと使いやすさで、特に中小企業市場でのシェア拡大を実現'
      },
      company: {
        points: [
          'インバウンドマーケティングのパイオニア',
          '教育・コンテンツマーケティング',
          '継続的なプロダクト改善',
          '強力なコミュニティ'
        ],
        analysis: 'インバウンドマーケティングの概念を普及させた企業として、教育とコンテンツを重視した成長戦略'
      },
      commodity: {
        points: [
          '統合型CRMプラットフォーム',
          'インバウンドマーケティング',
          '営業・マーケティング自動化',
          'カスタマーエクスペリエンス'
        ],
        analysis: 'マーケティング、営業、サービスを統合したオールインワンプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規統合の追加'
        ],
        midTerm: [
          'エンタープライズ市場での拡大',
          'グローバル展開の加速',
          '新規プロダクトの開発'
        ],
        longTerm: [
          'カスタマープラットフォーム分野でのリーダーポジション確立',
          '次世代顧客体験プラットフォームの構築',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'freshsales': {
    company: {
      name: 'Freshworks',
      foundedDate: '2010年',
      employeeCount: '約5,000人（2023年）',
      revenue: '約600億円（2023年度）',
      customerCount: '6万社以上',
      notableCustomers: [
        'Honda',
        'Bridgestone',
        'Klarna',
        'Delivery Hero',
        'Vice Media'
      ],
      headquarters: 'サンマテオ、カリフォルニア州、アメリカ',
      website: 'https://www.freshworks.com'
    },
    products: [
      {
        name: 'Freshsales',
        description: 'AI搭載のCRMプラットフォーム',
        features: [
          'AI搭載リードスコアリング',
          '営業パイプライン管理',
          'メール統合',
          '電話統合',
          'ワークフロー自動化',
          'レポート・分析',
          'モバイルアプリ',
          'カスタマイゼーション'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本CRM機能、3ユーザーまで'
            },
            {
              name: 'Growth',
              price: '¥1,800',
              description: 'メール統合、基本レポート'
            },
            {
              name: 'Pro',
              price: '¥4,700',
              description: '電話統合、高度な自動化'
            },
            {
              name: 'Enterprise',
              price: '¥7,900',
              description: 'AI機能、カスタムレポート'
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
          '使いやすいインターフェース',
          '手頃な価格設定',
          'AI搭載機能',
          '包括的な営業ツール'
        ],
        analysis: '中小企業から中堅企業まで、使いやすく手頃な価格のCRMを求める企業に最適'
      },
      competitor: {
        points: [
          'HubSpot、Salesforceとの競合',
          '価格競争力での差別化',
          'AI機能の強み',
          '使いやすさの優位性'
        ],
        analysis: '価格と使いやすさのバランスで、中小企業市場での競争優位性を確立'
      },
      company: {
        points: [
          'インド発のSaaS企業',
          '急成長する顧客基盤',
          'AI技術への投資',
          'グローバル展開'
        ],
        analysis: 'インド発のSaaS企業として、グローバル市場で急成長を遂げる'
      },
      commodity: {
        points: [
          'CRMプラットフォーム',
          '営業自動化',
          'カスタマーエンゲージメント',
          'ビジネスインテリジェンス'
        ],
        analysis: '営業プロセス全体をサポートする包括的なCRMソリューション'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新規統合の追加'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新規プロダクトの開発'
        ],
        longTerm: [
          'CRM分野でのグローバルリーダーポジション確立',
          '次世代顧客体験プラットフォームの構築',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'close': {
    company: {
      name: 'Close',
      foundedDate: '2013年',
      employeeCount: '約100人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Twilio',
        'MongoDB',
        'Segment',
        'Mixpanel',
        'Zapier'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://close.com'
    },
    products: [
      {
        name: 'Close CRM',
        description: '営業チーム向けのシンプルで強力なCRM',
        features: [
          '内蔵電話・SMS',
          'メール統合',
          '営業パイプライン',
          'レポート・分析',
          'ワークフロー自動化',
          'リードスコアリング',
          'モバイルアプリ',
          'API統合'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥2,900',
              description: '基本CRM機能、メール統合'
            },
            {
              name: 'Basic',
              price: '¥6,900',
              description: '電話・SMS、基本レポート'
            },
            {
              name: 'Professional',
              price: '¥11,900',
              description: '高度な自動化、詳細レポート'
            },
            {
              name: 'Business',
              price: '¥16,900',
              description: 'カスタムフィールド、API'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'SaaS企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '営業活動に特化',
          'シンプルで使いやすい',
          '内蔵コミュニケーション',
          '手頃な価格設定'
        ],
        analysis: '営業活動に集中したい中小企業やスタートアップに最適なシンプルなCRM'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          '営業特化での差別化',
          'シンプルさの優位性',
          '内蔵コミュニケーション'
        ],
        analysis: '営業活動に特化したシンプルなアプローチで差別化を実現'
      },
      company: {
        points: [
          '営業チーム向け特化',
          'プロダクト主導の成長',
          '継続的な機能改善',
          '顧客フィードバック重視'
        ],
        analysis: '営業チームのニーズに特化したプロダクト開発で差別化'
      },
      commodity: {
        points: [
          '営業特化CRM',
          'コミュニケーションプラットフォーム',
          '営業自動化',
          'パフォーマンス分析'
        ],
        analysis: '営業活動に必要な機能を統合したオールインワンソリューション'
      },
      strategy: {
        shortTerm: [
          'AI機能の導入',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新規機能の開発'
        ],
        longTerm: [
          '営業特化CRM分野でのリーダーポジション確立',
          '次世代営業プラットフォームの構築',
          '新規サービス領域の開拓'
        ]
      }
    }
  },
  'proposify': {
    company: {
      name: 'Proposify',
      foundedDate: '2013年',
      employeeCount: '約150人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '4,000社以上',
      notableCustomers: [
        'Shopify',
        'Buffer',
        'Hootsuite',
        'Unbounce',
        'Freshbooks'
      ],
      headquarters: 'ハリファックス、ノバスコシア州、カナダ',
      website: 'https://www.proposify.com'
    },
    products: [
      {
        name: 'Proposify',
        description: '営業提案書作成・管理プラットフォーム',
        features: [
          'ドラッグ&ドロップエディター',
          'テンプレートライブラリ',
          'デジタル署名',
          '提案書追跡',
          'CRM統合',
          'チーム協力機能',
          'レポート・分析',
          'ブランドカスタマイゼーション'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Team',
              price: '¥2,200',
              description: '基本的な提案書作成機能'
            },
            {
              name: 'Business',
              price: '¥4,400',
              description: 'CRM統合、高度なテンプレート'
            },
            {
              name: 'Enterprise',
              price: '要問い合わせ',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          '営業チーム',
          'マーケティングエージェンシー',
          'コンサルティング会社'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '美しい提案書の作成',
          '効率的なワークフロー',
          '提案書の追跡・分析',
          'チーム協力の向上'
        ],
        analysis: '提案書の品質と効率性を重視する営業チームやサービス企業に最適'
      },
      competitor: {
        points: [
          'PandaDoc、Better Proposalsとの競合',
          'デザイン性での差別化',
          '使いやすさの優位性',
          'カナダ発の企業'
        ],
        analysis: 'デザイン性と使いやすさに焦点を当てた提案書作成ツールとして差別化'
      },
      company: {
        points: [
          '提案書作成に特化',
          'デザイン重視のアプローチ',
          '継続的な機能改善',
          '顧客成功への注力'
        ],
        analysis: '提案書作成に特化した専門性とデザイン性で差別化'
      },
      commodity: {
        points: [
          '提案書作成ツール',
          'ドキュメント管理',
          '営業支援',
          'デジタル署名'
        ],
        analysis: '提案書作成から署名まで一貫したワークフローを提供'
      },
      strategy: {
        shortTerm: [
          'AI機能の導入',
          'テンプレートの拡充',
          'ユーザー体験の改善'
        ],
        midTerm: [
          '新規統合の追加',
          'グローバル展開',
          '新機能の開発'
        ],
        longTerm: [
          '提案書作成分野でのリーダーポジション確立',
          '次世代ドキュメント作成プラットフォームの構築',
          '新規市場セグメントの開拓'
        ]
      }
    }
  },
  'mixmax': {
    company: {
      name: 'Mixmax',
      foundedDate: '2013年',
      employeeCount: '約200人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '10万人以上',
      notableCustomers: ['Uber', 'Airbnb', 'Stripe', 'Segment', 'Twilio'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://mixmax.com'
    },
    products: [
      {
        name: 'Mixmax',
        description: 'Gmail統合型営業エンゲージメントプラットフォーム',
        features: [
          'メールシーケンス',
          'メールトラッキング',
          'テンプレート管理',
          'カレンダー統合',
          'ライブポーリング',
          'CRM統合',
          'チーム分析',
          'A/Bテスト'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '基本トラッキング、テンプレート' },
            { name: 'SMB', price: '¥3,300', description: 'シーケンス、スケジューリング' },
            { name: 'Growth', price: '¥6,600', description: '高度な分析、チーム機能' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム統合、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'Gmail完全統合',
          '直感的なユーザー体験',
          '豊富な機能セット',
          '手頃な価格設定'
        ],
        analysis: 'Gmailユーザーにとって最も自然な営業ツールとして、シームレスな体験を提供'
      },
      competitor: {
        points: [
          'Outreach、SalesLoftとの競合',
          'Gmail特化の差別化',
          'ユーザビリティの優位性',
          '価格競争力'
        ],
        analysis: 'Gmail統合に特化することで、大手営業自動化ツールとは異なるポジションを確立'
      },
      company: {
        points: [
          'Y Combinator卒業生',
          '安定した成長',
          'プロダクト主導の開発',
          '強固な技術基盤'
        ],
        analysis: 'Gmail統合のパイオニアとして、ユーザー中心のプロダクト開発を継続'
      },
      commodity: {
        points: [
          '営業エンゲージメントツール',
          'メール自動化プラットフォーム',
          'Gmail拡張機能',
          '営業生産性ツール'
        ],
        analysis: 'Gmail統合型の営業エンゲージメントプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'Gmail統合の深化',
          'AI機能の強化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ機能の拡充',
          '他メールクライアント対応',
          'グローバル展開'
        ],
        longTerm: [
          'Gmail営業ツール市場のリーダーポジション',
          '包括的な営業プラットフォームへの進化',
          '新規チャネルへの展開'
        ]
      }
    }
  },
  'woodpecker': {
    company: {
      name: 'Woodpecker.co',
      foundedDate: '2015年',
      employeeCount: '約80人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: ['Shopify', 'Zendesk', 'Typeform', 'Hotjar', 'Buffer'],
      headquarters: 'ワルシャワ、ポーランド',
      website: 'https://woodpecker.co'
    },
    products: [
      {
        name: 'Woodpecker',
        description: 'コールドメールアウトリーチ自動化プラットフォーム',
        features: [
          'メールシーケンス',
          'パーソナライゼーション',
          'A/Bテスト',
          'メール配信最適化',
          'レスポンス管理',
          'CRM統合',
          'チーム管理',
          '詳細分析'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Cold Email', price: '¥5,500', description: '月間1,000メール、基本機能' },
            { name: 'Cold Email Pro', price: '¥11,000', description: '月間5,000メール、高度な機能' },
            { name: 'Agency', price: '¥22,000', description: '複数アカウント、チーム機能' },
            { name: 'Custom', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エージェンシー']
      }
    ],
    fourC: {
      customer: {
        points: [
          'コールドメール特化',
          '高い配信率',
          '使いやすいインターフェース',
          '優れたサポート'
        ],
        analysis: 'コールドメールアウトリーチに特化した専門ツールとして、高い配信率と効果を実現'
      },
      competitor: {
        points: [
          'Lemlist、Reply.ioとの競合',
          'コールドメール特化の強み',
          '配信率の優位性',
          'ヨーロッパ市場での強さ'
        ],
        analysis: 'コールドメール市場で配信率と使いやすさを武器に競合他社と差別化'
      },
      company: {
        points: [
          'ポーランド発のスタートアップ',
          '安定した成長',
          'カスタマーサクセス重視',
          'ヨーロッパ市場に強み'
        ],
        analysis: 'コールドメール専門ツールとして、顧客満足度を重視した成長戦略を展開'
      },
      commodity: {
        points: [
          'コールドメールツール',
          'アウトリーチ自動化',
          'メール配信プラットフォーム',
          '営業支援ツール'
        ],
        analysis: 'コールドメールアウトリーチに特化した専門プラットフォーム'
      },
      strategy: {
        shortTerm: [
          '配信率の向上',
          'AI機能の追加',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'グローバル展開の加速',
          'エンタープライズ機能の追加',
          'パートナーシップの拡大'
        ],
        longTerm: [
          'コールドメール市場のリーダーポジション',
          '包括的なアウトリーチプラットフォームへの進化',
          '新規チャネルへの展開'
        ]
      }
    }
  },
  'reply': {
    company: {
      name: 'Reply.io',
      foundedDate: '2014年',
      employeeCount: '約150人（2023年）',
      revenue: '約40億円（2023年度）',
      customerCount: '3万社以上',
      notableCustomers: ['Uber', 'Pipedrive', 'Lemlist', 'Outreach', 'Salesforce'],
      headquarters: 'サンディエゴ、カリフォルニア州、アメリカ',
      website: 'https://reply.io'
    },
    products: [
      {
        name: 'Reply',
        description: 'AI搭載マルチチャネル営業エンゲージメントプラットフォーム',
        features: [
          'メールシーケンス',
          'LinkedIn自動化',
          'コールダイヤラー',
          'AI返信検出',
          'CRM統合',
          'チーム管理',
          'A/Bテスト',
          'レポート分析'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥6,600', description: '月間1,000メール、基本機能' },
            { name: 'Professional', price: '¥11,000', description: '月間5,000メール、LinkedIn統合' },
            { name: 'Enterprise', price: '¥22,000', description: '無制限メール、高度な機能' },
            { name: 'Agency', price: '要相談', description: '複数アカウント、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'マルチチャネル対応',
          'AI機能の充実',
          '使いやすいインターフェース',
          '豊富な統合オプション'
        ],
        analysis: 'メール、LinkedIn、電話を統合したマルチチャネルアプローチで営業効率を大幅に向上'
      },
      competitor: {
        points: [
          'Outreach、SalesLoftとの競合',
          'マルチチャネル対応の強み',
          'AI機能の差別化',
          'コストパフォーマンスの優位性'
        ],
        analysis: 'マルチチャネル営業自動化市場で、AI機能と使いやすさを武器に競合他社と差別化'
      },
      company: {
        points: [
          'ウクライナ発のスタートアップ',
          '急速な成長軌道',
          'AI技術への投資',
          'グローバル展開'
        ],
        analysis: 'マルチチャネル営業自動化のパイオニアとして、AI技術を活用した革新的なソリューションを提供'
      },
      commodity: {
        points: [
          '営業エンゲージメントツール',
          'マルチチャネル自動化',
          'AI営業アシスタント',
          '営業生産性プラットフォーム'
        ],
        analysis: 'AI搭載マルチチャネル営業エンゲージメントプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          '新規統合の追加'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          'パートナーシップの拡大'
        ],
        longTerm: [
          'マルチチャネル営業自動化市場のリーダーポジション',
          'AI営業アシスタントの進化',
          '新規チャネルへの展開'
        ]
      }
    }
  },
  'lemlist': {
    company: {
      name: 'Lemlist',
      foundedDate: '2018年',
      employeeCount: '約100人（2023年）',
      revenue: '約25億円（2023年度）',
      customerCount: '10万人以上',
      notableCustomers: ['Uber', 'Microsoft', 'Shopify', 'Zendesk', 'Pipedrive'],
      headquarters: 'パリ、フランス',
      website: 'https://lemlist.com'
    },
    products: [
      {
        name: 'Lemlist',
        description: 'パーソナライゼーション特化型コールドアウトリーチプラットフォーム',
        features: [
          'パーソナライズ画像',
          'パーソナライズ動画',
          'LinkedIn自動化',
          'メールシーケンス',
          'CRM統合',
          'A/Bテスト',
          'レポート分析',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Email Outreach', price: '¥8,800', description: 'メールアウトリーチ、基本機能' },
            { name: 'Sales Engagement', price: '¥13,200', description: 'LinkedIn統合、高度な機能' },
            { name: 'Lemwarm', price: '¥4,400', description: 'メールウォームアップ専用' },
            { name: 'All-in-one', price: '¥17,600', description: '全機能、無制限アクセス' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エージェンシー']
      }
    ],
    fourC: {
      customer: {
        points: [
          'パーソナライゼーション特化',
          '高い返信率',
          'クリエイティブな機能',
          '使いやすいインターフェース'
        ],
        analysis: 'パーソナライズ画像・動画機能で他社と大きく差別化し、高い返信率を実現'
      },
      competitor: {
        points: [
          'Woodpecker、Reply.ioとの競合',
          'パーソナライゼーション特化の強み',
          'クリエイティブ機能の差別化',
          'ヨーロッパ市場での強さ'
        ],
        analysis: 'パーソナライゼーション機能に特化することで、従来のコールドメールツールとは一線を画す'
      },
      company: {
        points: [
          'フランス発のスタートアップ',
          '急速な成長',
          'クリエイティブ重視',
          'ユーザーコミュニティ強化'
        ],
        analysis: 'パーソナライゼーションのパイオニアとして、クリエイティブな営業手法を推進'
      },
      commodity: {
        points: [
          'コールドアウトリーチツール',
          'パーソナライゼーションプラットフォーム',
          '営業エンゲージメントツール',
          'マルチチャネル自動化'
        ],
        analysis: 'パーソナライゼーション特化型コールドアウトリーチプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'パーソナライゼーション機能の強化',
          'AI機能の追加',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'グローバル展開の加速',
          'エンタープライズ機能の追加',
          '新規チャネルの統合'
        ],
        longTerm: [
          'パーソナライゼーション市場のリーダーポジション',
          'AI駆動パーソナライゼーションの実現',
          '包括的な営業プラットフォームへの進化'
        ]
      }
    }
  },
  'instantly': {
    company: {
      name: 'Instantly',
      foundedDate: '2020年',
      employeeCount: '約50人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '5万人以上',
      notableCustomers: ['Shopify', 'Typeform', 'Calendly', 'Notion', 'Airtable'],
      headquarters: 'デラウェア州、アメリカ',
      website: 'https://instantly.ai'
    },
    products: [
      {
        name: 'Instantly',
        description: 'AI搭載コールドメール自動化プラットフォーム',
        features: [
          'メールウォームアップ',
          'AI返信生成',
          'メールシーケンス',
          'リード検証',
          'CRM統合',
          'A/Bテスト',
          'レポート分析',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Growth', price: '¥5,500', description: '月間5,000メール、基本機能' },
            { name: 'Hypergrowth', price: '¥11,000', description: '月間25,000メール、高度な機能' },
            { name: 'Light Speed', price: '¥22,000', description: '月間100,000メール、全機能' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'AI機能の充実',
          '高い配信率',
          'メールウォームアップ機能',
          'コストパフォーマンス'
        ],
        analysis: 'AI技術とメールウォームアップ機能で高い配信率と返信率を実現'
      },
      competitor: {
        points: [
          'Lemlist、Woodpeckerとの競合',
          'AI機能の差別化',
          'メールウォームアップの強み',
          '価格競争力'
        ],
        analysis: 'AI技術とメールウォームアップ機能を武器に、新興プレイヤーとして急成長'
      },
      company: {
        points: [
          '新興スタートアップ',
          'AI技術重視',
          '急速な成長',
          'ユーザー中心の開発'
        ],
        analysis: 'AI技術を活用した次世代コールドメールツールとして、急速に市場シェアを拡大'
      },
      commodity: {
        points: [
          'コールドメールツール',
          'AI営業アシスタント',
          'メール配信プラットフォーム',
          '営業自動化ツール'
        ],
        analysis: 'AI搭載コールドメール自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー獲得の加速',
          '機能拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          'パートナーシップの構築'
        ],
        longTerm: [
          'AI駆動営業自動化市場のリーダーポジション',
          '包括的な営業プラットフォームへの進化',
          '新規技術領域への展開'
        ]
      }
    }
  },
  'smartlead': {
    company: {
      name: 'Smartlead',
      foundedDate: '2021年',
      employeeCount: '約30人（2023年）',
      revenue: '約10億円（2023年度）',
      customerCount: '2万人以上',
      notableCustomers: ['Shopify', 'HubSpot', 'Calendly', 'Typeform', 'Notion'],
      headquarters: 'デラウェア州、アメリカ',
      website: 'https://smartlead.ai'
    },
    products: [
      {
        name: 'Smartlead',
        description: 'AI搭載コールドメール自動化プラットフォーム',
        features: [
          'メールウォームアップ',
          'AI返信生成',
          'メールシーケンス',
          'リード検証',
          'CRM統合',
          'A/Bテスト',
          'レポート分析',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Basic', price: '¥5,500', description: '月間2,000メール、基本機能' },
            { name: 'Popular', price: '¥11,000', description: '月間6,000メール、高度な機能' },
            { name: 'Pro', price: '¥22,000', description: '月間15,000メール、全機能' },
            { name: 'Custom', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'AI機能の充実',
          '高い配信率',
          'メールウォームアップ機能',
          'コストパフォーマンス'
        ],
        analysis: 'AI技術とメールウォームアップ機能で高い配信率と返信率を実現'
      },
      competitor: {
        points: [
          'Instantly、Lemlistとの競合',
          'AI機能の差別化',
          'メールウォームアップの強み',
          '価格競争力'
        ],
        analysis: 'AI技術とメールウォームアップ機能を武器に、新興プレイヤーとして急成長'
      },
      company: {
        points: [
          '新興スタートアップ',
          'AI技術重視',
          '急速な成長',
          'ユーザー中心の開発'
        ],
        analysis: 'AI技術を活用した次世代コールドメールツールとして、急速に市場シェアを拡大'
      },
      commodity: {
        points: [
          'コールドメールツール',
          'AI営業アシスタント',
          'メール配信プラットフォーム',
          '営業自動化ツール'
        ],
        analysis: 'AI搭載コールドメール自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー獲得の加速',
          '機能拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          'パートナーシップの構築'
        ],
        longTerm: [
          'AI駆動営業自動化市場のリーダーポジション',
          '包括的な営業プラットフォームへの進化',
          '新規技術領域への展開'
        ]
      }
    }
  },
  'klenty': {
    company: {
      name: 'Klenty',
      foundedDate: '2015年',
      employeeCount: '約80人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '5万人以上',
      notableCustomers: ['Freshworks', 'Chargebee', 'Zoho', 'Razorpay', 'Unacademy'],
      headquarters: 'チェンナイ、インド',
      website: 'https://klenty.com'
    },
    products: [
      {
        name: 'Klenty',
        description: 'セールスエンゲージメント自動化プラットフォーム',
        features: [
          'メールシーケンス',
          'LinkedIn自動化',
          'コールダイヤラー',
          'CRM統合',
          'A/Bテスト',
          'レポート分析',
          'チーム管理',
          'カスタムフィールド'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Startup', price: '¥4,400', description: '月間1,000メール、基本機能' },
            { name: 'Growth', price: '¥8,800', description: '月間5,000メール、LinkedIn統合' },
            { name: 'Pro', price: '¥17,600', description: '月間12,000メール、高度な機能' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'マルチチャネル対応',
          '使いやすいインターフェース',
          '豊富な統合オプション',
          'コストパフォーマンス'
        ],
        analysis: 'メール、LinkedIn、電話を統合したマルチチャネルアプローチで営業効率を向上'
      },
      competitor: {
        points: [
          'Outreach、SalesLoftとの競合',
          'マルチチャネル対応の強み',
          'コストパフォーマンスの優位性',
          'インド市場での強さ'
        ],
        analysis: 'マルチチャネル営業自動化市場で、コストパフォーマンスと使いやすさを武器に競合'
      },
      company: {
        points: [
          'インド発のスタートアップ',
          '安定した成長軌道',
          'グローバル展開',
          'プロダクト主導の成長'
        ],
        analysis: 'インド発のセールスエンゲージメントツールとして、グローバル市場で存在感を発揮'
      },
      commodity: {
        points: [
          '営業エンゲージメントツール',
          'マルチチャネル自動化',
          '営業生産性プラットフォーム',
          'CRM統合ツール'
        ],
        analysis: 'セールスエンゲージメント自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'ユーザー体験の向上',
          '新機能の追加',
          'グローバル展開の加速'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'AI機能の強化',
          'パートナーシップの拡大'
        ],
        longTerm: [
          'グローバル営業自動化市場での地位確立',
          'AI駆動営業プラットフォームへの進化',
          '新規市場への展開'
        ]
      }
    }
  },
  'mailshake': {
    company: {
      name: 'Mailshake',
      foundedDate: '2015年',
      employeeCount: '約40人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '3万人以上',
      notableCustomers: ['Shopify', 'Uber', 'Airbnb', 'Typeform', 'Buffer'],
      headquarters: 'シカゴ、イリノイ州、アメリカ',
      website: 'https://mailshake.com'
    },
    products: [
      {
        name: 'Mailshake',
        description: 'シンプルなコールドメールアウトリーチツール',
        features: [
          'メールシーケンス',
          'パーソナライゼーション',
          'A/Bテスト',
          'CRM統合',
          'レポート分析',
          'チーム管理',
          'リード管理',
          'フォローアップ自動化'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Email Outreach', price: '¥8,800', description: 'メールアウトリーチ、基本機能' },
            { name: 'Sales Engagement', price: '¥17,600', description: 'コール機能、高度な機能' },
            { name: 'Lead Catcher', price: '¥4,400', description: 'リード生成専用' },
            { name: 'All-in-one', price: '¥22,000', description: '全機能、無制限アクセス' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エージェンシー']
      }
    ],
    fourC: {
      customer: {
        points: [
          'シンプルで使いやすい',
          '高い配信率',
          '豊富なテンプレート',
          'コストパフォーマンス'
        ],
        analysis: 'シンプルさと使いやすさに特化したコールドメールツールとして、中小企業に人気'
      },
      competitor: {
        points: [
          'Lemlist、Woodpeckerとの競合',
          'シンプルさの差別化',
          'コストパフォーマンスの優位性',
          '使いやすさの強み'
        ],
        analysis: 'シンプルさと使いやすさを武器に、複雑な機能よりも基本機能の充実を重視'
      },
      company: {
        points: [
          'アメリカ発のスタートアップ',
          '安定した成長',
          'シンプルさ重視',
          'ユーザー中心の開発'
        ],
        analysis: 'シンプルで効果的なコールドメールツールとして、使いやすさを追求'
      },
      commodity: {
        points: [
          'コールドメールツール',
          'アウトリーチプラットフォーム',
          '営業自動化ツール',
          'リード生成ツール'
        ],
        analysis: 'シンプルなコールドメールアウトリーチツール'
      },
      strategy: {
        shortTerm: [
          'ユーザー体験の向上',
          '新機能の追加',
          'テンプレートの拡充'
        ],
        midTerm: [
          'エンタープライズ機能の追加',
          'グローバル展開',
          'パートナーシップの構築'
        ],
        longTerm: [
          'シンプルなコールドメール市場のリーダーポジション',
          '包括的な営業ツールへの進化',
          '新規市場への展開'
        ]
      }
    }
  },
  'yesware': {
    company: {
      name: 'Yesware',
      foundedDate: '2010年',
      employeeCount: '約100人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '100万人以上',
      notableCustomers: ['Salesforce', 'HubSpot', 'Zendesk', 'Shopify', 'Uber'],
      headquarters: 'ボストン、マサチューセッツ州、アメリカ',
      website: 'https://yesware.com'
    },
    products: [
      {
        name: 'Yesware',
        description: 'Gmail/Outlook統合型営業生産性プラットフォーム',
        features: [
          'メールトラッキング',
          'メールテンプレート',
          'メールシーケンス',
          'カレンダー統合',
          'CRM同期',
          'レポート分析',
          'チーム管理',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Pro', price: '¥4,400', description: 'メールトラッキング、テンプレート' },
            { name: 'Premium', price: '¥8,800', description: 'シーケンス、高度な分析' },
            { name: 'Enterprise', price: '¥17,600', description: 'チーム機能、カスタム統合' },
            { name: 'Custom', price: '要相談', description: 'エンタープライズ機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', '営業チーム']
      }
    ],
    fourC: {
      customer: {
        points: [
          'Gmail/Outlook完全統合',
          'シンプルで使いやすい',
          '豊富なテンプレート',
          '詳細な分析機能'
        ],
        analysis: 'メールクライアント統合に特化し、営業担当者の日常業務を効率化'
      },
      competitor: {
        points: [
          'Mixmax、Mailtrackとの競合',
          'メール統合の深さで差別化',
          '老舗としての信頼性',
          'エンタープライズ機能の充実'
        ],
        analysis: 'メールトラッキング市場のパイオニアとして、深いメール統合で競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発の老舗企業',
          '安定した成長',
          'メール統合特化',
          'エンタープライズ重視'
        ],
        analysis: 'メールトラッキングツールのパイオニアとして、長年の実績と信頼性を武器に市場をリード'
      },
      commodity: {
        points: [
          'メールトラッキングツール',
          '営業生産性プラットフォーム',
          'メール統合ツール',
          '営業支援ツール'
        ],
        analysis: 'Gmail/Outlook統合型営業生産性プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          'モバイル機能の強化'
        ],
        midTerm: [
          '新規統合の追加',
          'グローバル展開の加速',
          'エンタープライズ機能の拡充'
        ],
        longTerm: [
          'メール統合市場のリーダーポジション維持',
          'AI駆動営業プラットフォームへの進化',
          '包括的な営業ツールへの展開'
        ]
      }
    }
  },
  'insightly-crm': {
    company: {
      name: 'Insightly',
      foundedDate: '2009年',
      employeeCount: '約300人（2023年）',
      revenue: '約80億円（2023年度）',
      customerCount: '150万人以上',
      notableCustomers: ['Jill\'s Steals & Deals', 'RedBull', 'Yamaha', 'Samsung', 'Spotify'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://insightly.com'
    },
    products: [
      {
        name: 'Insightly CRM',
        description: 'CRM・プロジェクト管理統合プラットフォーム',
        features: [
          'CRM管理',
          'プロジェクト管理',
          'リード追跡',
          'パイプライン管理',
          'メール統合',
          'タスク自動化',
          'レポート分析',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '2ユーザー、基本機能' },
            { name: 'Plus', price: '¥3,900', description: 'カスタムフィールド、統合機能' },
            { name: 'Professional', price: '¥7,700', description: 'ワークフロー、高度な分析' },
            { name: 'Enterprise', price: '¥13,200', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'プロジェクト重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'CRM・プロジェクト管理統合',
          '使いやすいインターフェース',
          '豊富な統合オプション',
          'コストパフォーマンス'
        ],
        analysis: 'CRMとプロジェクト管理を統合した独自のアプローチで、営業から案件実行まで一貫した管理を実現'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          'プロジェクト管理統合の差別化',
          'フリーミアムモデルの優位性',
          '中小企業特化の強み'
        ],
        analysis: 'CRM市場で、プロジェクト管理統合とコストパフォーマンスを武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のCRM企業',
          'プロジェクト管理重視',
          '安定した成長',
          '中小企業フォーカス'
        ],
        analysis: 'CRM・プロジェクト管理統合のパイオニアとして、中小企業市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'CRM・プロジェクト管理ツール',
          '営業管理プラットフォーム',
          '顧客管理システム',
          'ワークフロー自動化ツール'
        ],
        analysis: 'CRM・プロジェクト管理統合プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'CRM・プロジェクト管理統合市場のリーダーポジション維持',
          'AI駆動プロジェクト管理の実現',
          '包括的なビジネス管理プラットフォームへの進化'
        ]
      }
    }
  },
  'nimble-crm': {
    company: {
      name: 'Nimble',
      foundedDate: '2009年',
      employeeCount: '約50人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '10万人以上',
      notableCustomers: ['RE/MAX', 'Keller Williams', 'Century 21', 'Coldwell Banker', 'Sotheby\'s'],
      headquarters: 'ロサンゼルス、カリフォルニア州、アメリカ',
      website: 'https://nimble.com'
    },
    products: [
      {
        name: 'Nimble',
        description: 'ソーシャル統合CRMプラットフォーム',
        features: [
          'ソーシャルメディア統合',
          'コンタクト管理',
          'パイプライン管理',
          'メール追跡',
          'タスク管理',
          'レポート分析',
          'モバイルアプリ',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Contact', price: '¥2,640', description: 'コンタクト管理、基本機能' },
            { name: 'Business', price: '¥3,960', description: 'パイプライン、高度な機能' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', '営業チーム', 'ソーシャル重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'ソーシャルメディア深度統合',
          '自動データ収集',
          '使いやすいインターフェース',
          'リアルタイム更新'
        ],
        analysis: 'ソーシャルメディアとの深度統合により、顧客の最新情報を自動収集し、営業活動を効率化'
      },
      competitor: {
        points: [
          'HubSpot、Salesforceとの競合',
          'ソーシャル統合の差別化',
          '自動データ収集の優位性',
          '中小企業特化の強み'
        ],
        analysis: 'CRM市場で、ソーシャルメディア統合と自動データ収集を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のソーシャルCRM企業',
          'ソーシャル特化戦略',
          '安定した成長',
          'ユーザビリティ重視'
        ],
        analysis: 'ソーシャル統合CRMのパイオニアとして、ソーシャル重視の営業市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'ソーシャル統合CRM',
          '営業管理プラットフォーム',
          'コンタクト管理システム',
          'ソーシャルリスニングツール'
        ],
        analysis: 'ソーシャル統合CRMプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ソーシャル統合の深化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          '新しいソーシャルプラットフォーム統合',
          'グローバル展開'
        ],
        longTerm: [
          'ソーシャル統合CRM市場のリーダーポジション維持',
          'AI駆動ソーシャルインテリジェンスの実現',
          '包括的なソーシャル営業プラットフォームへの進化'
        ]
      }
    }
  },
  'capsule-crm': {
    company: {
      name: 'Capsule',
      foundedDate: '2009年',
      employeeCount: '約30人（2023年）',
      revenue: '約10億円（2023年度）',
      customerCount: '5万社以上',
      notableCustomers: ['Mailchimp', 'Xero', 'FreshBooks', 'Zapier', 'Buffer'],
      headquarters: 'マンチェスター、イギリス',
      website: 'https://capsulecrm.com'
    },
    products: [
      {
        name: 'Capsule CRM',
        description: 'シンプル・使いやすさ重視CRMプラットフォーム',
        features: [
          'コンタクト管理',
          'パイプライン管理',
          'タスク管理',
          'メール統合',
          'レポート機能',
          'モバイルアプリ',
          'API統合',
          'チーム管理'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '250コンタクト、基本機能' },
            { name: 'Starter', price: '¥2,400', description: '50,000コンタクト、高度な機能' },
            { name: 'Growth', price: '¥4,800', description: 'カスタムフィールド、統合機能' },
            { name: 'Advanced', price: '¥9,600', description: 'ワークフロー、高度な分析' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'シンプル重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'シンプルで直感的',
          '迅速なセットアップ',
          '使いやすいインターフェース',
          'コストパフォーマンス'
        ],
        analysis: 'シンプルさと使いやすさを重視した設計で、CRM初心者でも迅速に導入・運用を開始可能'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          'シンプルさの差別化',
          'フリーミアムモデルの優位性',
          'セットアップの簡単さ'
        ],
        analysis: 'CRM市場で、シンプルさと使いやすさを武器に、複雑な機能を求めない企業をターゲットに差別化'
      },
      company: {
        points: [
          'イギリス発のCRM企業',
          'シンプルさ重視',
          '安定した成長',
          'ユーザビリティ特化'
        ],
        analysis: 'シンプルCRMのリーダーとして、使いやすさを重視する中小企業市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'シンプルCRM',
          '営業管理プラットフォーム',
          'コンタクト管理システム',
          '中小企業向けツール'
        ],
        analysis: 'シンプル・使いやすさ重視CRMプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'ユーザー体験の向上',
          '統合機能の拡充',
          'モバイル機能の強化'
        ],
        midTerm: [
          '新機能の追加',
          'グローバル展開',
          'パートナーシップの拡充'
        ],
        longTerm: [
          'シンプルCRM市場のリーダーポジション維持',
          'AI機能の段階的導入',
          '包括的でありながらシンプルな営業プラットフォームへの進化'
        ]
      }
    }
  },
  'salesmate-crm': {
    company: {
      name: 'Salesmate',
      foundedDate: '2016年',
      employeeCount: '約100人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '3万社以上',
      notableCustomers: ['Vodafone', 'Hyundai', 'Panasonic', 'Philips', 'Lenovo'],
      headquarters: 'アーメダバード、インド',
      website: 'https://salesmate.io'
    },
    products: [
      {
        name: 'Salesmate',
        description: 'モダンデザイン・豊富機能CRMプラットフォーム',
        features: [
          'パイプライン管理',
          'メール自動化',
          'タスク管理',
          'レポート分析',
          'モバイルアプリ',
          'API統合',
          'チーム管理',
          'ワークフロー自動化'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥1,600', description: '基本CRM、メール統合' },
            { name: 'Growth', price: '¥3,200', description: 'ワークフロー、高度な機能' },
            { name: 'Boost', price: '¥5,300', description: 'カスタムフィールド、高度な分析' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'モダン重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'モダンなデザイン',
          '豊富な機能セット',
          'コストパフォーマンス',
          '直感的なインターフェース'
        ],
        analysis: 'モダンなデザインと豊富な機能を手頃な価格で提供し、営業プロセスの効率化を実現'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          'デザインの差別化',
          'コストパフォーマンスの優位性',
          '機能の豊富さ'
        ],
        analysis: 'CRM市場で、モダンなデザインとコストパフォーマンスを武器に競合他社と差別化'
      },
      company: {
        points: [
          'インド発のCRM企業',
          'モダンデザイン重視',
          '急速な成長',
          'グローバル展開'
        ],
        analysis: 'モダンCRMのリーダーとして、デザインと機能性を重視する企業市場で存在感を発揮'
      },
      commodity: {
        points: [
          'モダンCRM',
          '営業管理プラットフォーム',
          'ワークフロー自動化ツール',
          '顧客管理システム'
        ],
        analysis: 'モダンデザイン・豊富機能CRMプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新機能の追加'
        ],
        longTerm: [
          'モダンCRM市場のリーダーポジション確立',
          'AI駆動CRMの実現',
          '包括的な営業プラットフォームへの進化'
        ]
      }
    }
  },
  'streak-crm': {
    company: {
      name: 'Streak',
      foundedDate: '2011年',
      employeeCount: '約50人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '75万人以上',
      notableCustomers: ['Netflix', 'Airbnb', 'Uber', 'Spotify', 'Dropbox'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://streak.com'
    },
    products: [
      {
        name: 'Streak',
        description: 'Gmail統合CRMプラットフォーム',
        features: [
          'Gmail完全統合',
          'パイプライン管理',
          'メール追跡',
          'タスク管理',
          'レポート機能',
          'チーム管理',
          'ワークフロー',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '基本機能、個人利用' },
            { name: 'Solo', price: '¥6,600', description: '高度な機能、個人向け' },
            { name: 'Pro', price: '¥13,200', description: 'チーム機能、高度な分析' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'Gmailユーザー']
      }
    ],
    fourC: {
      customer: {
        points: [
          'Gmail完全統合',
          'シームレスなワークフロー',
          '学習コストの低さ',
          '使い慣れたインターフェース'
        ],
        analysis: 'Gmail内で直接CRM機能を利用でき、既存のメールワークフローを活用した営業管理を実現'
      },
      competitor: {
        points: [
          'Copper、HubSpotとの競合',
          'Gmail統合の深さで差別化',
          'フリーミアムモデルの優位性',
          'セットアップの簡単さ'
        ],
        analysis: 'Gmail統合CRM市場で、完全統合とシームレスなワークフローを武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のGmail特化企業',
          'Gmail統合重視',
          '安定した成長',
          'ユーザビリティ特化'
        ],
        analysis: 'Gmail統合CRMのパイオニアとして、Gmailユーザー市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'Gmail統合CRM',
          'メール管理プラットフォーム',
          '営業管理システム',
          'ワークフロー自動化ツール'
        ],
        analysis: 'Gmail統合CRMプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'Gmail統合の深化',
          'AI機能の追加',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          '新機能の追加',
          'Google Workspace統合の拡充'
        ],
        longTerm: [
          'Gmail統合CRM市場のリーダーポジション維持',
          'AI駆動メール営業の実現',
          '包括的なGmail営業プラットフォームへの進化'
        ]
      }
    }
  },
  'bitrix24-crm': {
    company: {
      name: 'Bitrix24',
      foundedDate: '2012年',
      employeeCount: '約500人（2023年）',
      revenue: '約100億円（2023年度）',
      customerCount: '1,200万社以上',
      notableCustomers: ['BMW', 'Hyundai', 'Mitsubishi', 'Suzuki', 'Kawasaki'],
      headquarters: 'アレクサンドリア、バージニア州、アメリカ',
      website: 'https://bitrix24.com'
    },
    products: [
      {
        name: 'Bitrix24',
        description: 'オールインワン・ビジネス統合プラットフォーム',
        features: [
          'CRM管理',
          'プロジェクト管理',
          'コミュニケーション',
          'ドキュメント管理',
          'タスク管理',
          'ワークフロー',
          'レポート分析',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '12ユーザー、基本機能' },
            { name: 'Basic', price: '¥6,600', description: '5ユーザー、高度な機能' },
            { name: 'Standard', price: '¥13,200', description: '50ユーザー、ワークフロー' },
            { name: 'Professional', price: '¥26,400', description: '100ユーザー、カスタム機能' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', 'オールインワン重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'オールインワン機能',
          '豊富な無料機能',
          '包括的なビジネス管理',
          'コストパフォーマンス'
        ],
        analysis: 'CRM、プロジェクト管理、コミュニケーションを統合したオールインワンプラットフォームで包括的なビジネス管理を実現'
      },
      competitor: {
        points: [
          'Monday.com、Notionとの競合',
          'オールインワンの差別化',
          '無料プランの充実',
          '機能の包括性'
        ],
        analysis: 'ビジネスプラットフォーム市場で、オールインワン機能と充実した無料プランを武器に競合他社と差別化'
      },
      company: {
        points: [
          'ロシア発のビジネスプラットフォーム企業',
          'オールインワン戦略',
          'グローバル展開',
          'ユーザー数重視'
        ],
        analysis: 'オールインワンビジネスプラットフォームのリーダーとして、包括的なビジネス管理市場で存在感を発揮'
      },
      commodity: {
        points: [
          'オールインワンプラットフォーム',
          'CRM・プロジェクト管理ツール',
          'ビジネス統合システム',
          'コラボレーションプラットフォーム'
        ],
        analysis: 'オールインワン・ビジネス統合プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の強化'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新機能の追加'
        ],
        longTerm: [
          'オールインワンプラットフォーム市場のリーダーポジション維持',
          'AI駆動ビジネス管理の実現',
          '包括的なデジタルワークスペースへの進化'
        ]
      }
    }
  },
  'beautiful-ai': {
    company: {
      name: 'Beautiful.AI',
      foundedDate: '2015年',
      employeeCount: '約100人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '3万社以上',
      notableCustomers: ['Uber', 'Salesforce', 'Cisco', 'Adobe', 'Microsoft'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://beautiful.ai'
    },
    products: [
      {
        name: 'Beautiful.AI',
        description: 'AI搭載プレゼンテーション作成プラットフォーム',
        features: [
          'AI搭載デザイン',
          'スマートテンプレート',
          'リアルタイムコラボレーション',
          'ブランドキット',
          'データ可視化',
          'アニメーション',
          'エクスポート機能',
          'チーム管理'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '基本機能、限定テンプレート' },
            { name: 'Pro', price: '¥1,600', description: '無制限スライド、高度な機能' },
            { name: 'Team', price: '¥1,600', description: 'チーム機能、ブランドキット' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'AI搭載デザイン自動化',
          '美しいテンプレート',
          '使いやすいインターフェース',
          'リアルタイムコラボレーション'
        ],
        analysis: 'AI技術を活用したデザイン自動化により、デザインスキルがなくても美しいプレゼンテーションを迅速に作成可能'
      },
      competitor: {
        points: [
          'PowerPoint、Canvaとの競合',
          'AI自動化の差別化',
          'デザイン品質の優位性',
          'プレゼンテーション特化の強み'
        ],
        analysis: 'プレゼンテーション作成市場で、AI搭載デザイン自動化とテンプレート品質を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のAIデザイン企業',
          'プレゼンテーション特化',
          '急速な成長',
          'AI技術重視'
        ],
        analysis: 'AI搭載プレゼンテーション作成のパイオニアとして、ビジネスプレゼンテーション市場で存在感を発揮'
      },
      commodity: {
        points: [
          'AIプレゼンテーション作成ツール',
          'デザイン自動化プラットフォーム',
          'ビジネスプレゼンテーションツール',
          'コラボレーションプラットフォーム'
        ],
        analysis: 'AI搭載プレゼンテーション作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'テンプレートの拡充',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新機能の追加'
        ],
        longTerm: [
          'AIプレゼンテーション作成市場のリーダーポジション確立',
          'AI駆動デザイン自動化の実現',
          '包括的なビジネスコミュニケーションプラットフォームへの進化'
        ]
      }
    }
  },
  'canva': {
    company: {
      name: 'Canva',
      foundedDate: '2012年',
      employeeCount: '約4,000人（2023年）',
      revenue: '約2,000億円（2023年度）',
      customerCount: '1億3,000万人以上',
      notableCustomers: ['Netflix', 'Salesforce', 'American Express', 'Zoom', 'Marriott'],
      headquarters: 'シドニー、オーストラリア',
      website: 'https://canva.com'
    },
    products: [
      {
        name: 'Canva',
        description: 'オンライン・グラフィックデザイン・プラットフォーム',
        features: [
          '豊富なテンプレート',
          'ドラッグ&ドロップエディター',
          'ブランドキット',
          'チームコラボレーション',
          'ストック素材',
          'アニメーション',
          'プレゼンテーション',
          'ソーシャルメディア投稿'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '基本機能、限定テンプレート' },
            { name: 'Pro', price: '¥1,500', description: 'プレミアム機能、無制限ストレージ' },
            { name: 'Teams', price: '¥1,800', description: 'チーム機能、ブランド管理' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['個人', 'スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          '豊富なテンプレート',
          '直感的な操作性',
          'コストパフォーマンス',
          '幅広い用途対応'
        ],
        analysis: '豊富なテンプレートと直感的な操作性により、デザインスキルがなくても高品質なビジュアルコンテンツを作成可能'
      },
      competitor: {
        points: [
          'Adobe Creative Suite、Figmaとの競合',
          'アクセシビリティの差別化',
          'テンプレート豊富さの優位性',
          'フリーミアムモデルの強み'
        ],
        analysis: 'グラフィックデザイン市場で、アクセシビリティとテンプレートの豊富さを武器に競合他社と差別化'
      },
      company: {
        points: [
          'オーストラリア発のデザイン企業',
          'デモクラタイゼーション重視',
          '急速な成長',
          'グローバル展開'
        ],
        analysis: 'デザインの民主化を推進するリーダーとして、グラフィックデザイン市場で圧倒的な存在感を発揮'
      },
      commodity: {
        points: [
          'グラフィックデザインプラットフォーム',
          'ビジュアルコンテンツ作成ツール',
          'プレゼンテーション作成ツール',
          'ソーシャルメディアデザインツール'
        ],
        analysis: 'オンライン・グラフィックデザイン・プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'テンプレートの拡充',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          '新機能の追加',
          'グローバル展開の加速'
        ],
        longTerm: [
          'グラフィックデザイン市場のリーダーポジション維持',
          'AI駆動デザイン自動化の実現',
          '包括的なビジュアルコミュニケーションプラットフォームへの進化'
        ]
      }
    }
  },
  'pitch': {
    company: {
      name: 'Pitch',
      foundedDate: '2019年',
      employeeCount: '約150人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '10万社以上',
      notableCustomers: ['Spotify', 'Uber', 'Airbnb', 'Netflix', 'Shopify'],
      headquarters: 'ベルリン、ドイツ',
      website: 'https://pitch.com'
    },
    products: [
      {
        name: 'Pitch',
        description: 'チームコラボレーション・プレゼンテーション作成プラットフォーム',
        features: [
          'リアルタイムコラボレーション',
          'スマートテンプレート',
          'ブランドキット',
          'アニメーション',
          'プレゼンテーションモード',
          'コメント機能',
          'バージョン管理',
          'API統合'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Starter', price: '無料', description: '個人利用、基本機能' },
            { name: 'Pro', price: '¥1,200', description: 'チーム機能、高度な機能' },
            { name: 'Business', price: '¥2,400', description: 'ブランドキット、高度な分析' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'リアルタイムコラボレーション',
          'モダンなデザイン',
          '使いやすいインターフェース',
          '高速パフォーマンス'
        ],
        analysis: 'リアルタイムコラボレーション機能により、チームでの効率的なプレゼンテーション作成とフィードバック収集を実現'
      },
      competitor: {
        points: [
          'PowerPoint、Google Slidesとの競合',
          'コラボレーション機能の差別化',
          'モダンデザインの優位性',
          'パフォーマンスの強み'
        ],
        analysis: 'プレゼンテーション作成市場で、リアルタイムコラボレーションとモダンデザインを武器に競合他社と差別化'
      },
      company: {
        points: [
          'ドイツ発のプレゼンテーション企業',
          'コラボレーション重視',
          '急速な成長',
          'モダンデザイン特化'
        ],
        analysis: 'チームコラボレーション・プレゼンテーションのリーダーとして、モダンなビジネスコミュニケーション市場で存在感を発揮'
      },
      commodity: {
        points: [
          'コラボレーションプレゼンテーションツール',
          'チームプレゼンテーション作成プラットフォーム',
          'ビジネスコミュニケーションツール',
          'デザインコラボレーションツール'
        ],
        analysis: 'チームコラボレーション・プレゼンテーション作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'コラボレーション機能の強化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新機能の追加'
        ],
        longTerm: [
          'コラボレーションプレゼンテーション市場のリーダーポジション確立',
          'AI駆動プレゼンテーション作成の実現',
          '包括的なチームコミュニケーションプラットフォームへの進化'
        ]
      }
    }
  },
  'prezi': {
    company: {
      name: 'Prezi',
      foundedDate: '2009年',
      employeeCount: '約300人（2023年）',
      revenue: '約100億円（2023年度）',
      customerCount: '10万社以上',
      notableCustomers: ['IBM', 'Cisco', 'Accenture', 'Deloitte', 'McKinsey'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://prezi.com'
    },
    products: [
      {
        name: 'Prezi',
        description: 'ズーミング・インタラクティブプレゼンテーション作成プラットフォーム',
        features: [
          'ズーミングインターフェース',
          'インタラクティブプレゼンテーション',
          'ビデオプレゼンテーション',
          'リアルタイムコラボレーション',
          'アニメーション',
          'テンプレート',
          'ブランドキット',
          'アナリティクス'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Basic', price: '無料', description: '基本機能、公開プレゼンテーション' },
            { name: 'Standard', price: '¥660', description: 'プライベート、高度な機能' },
            { name: 'Plus', price: '¥2,000', description: 'ブランドキット、アナリティクス' },
            { name: 'Premium', price: '¥7,900', description: 'チーム機能、専用サポート' }
          ]
        },
        targetMarket: ['教育機関', 'スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'ユニークなズーミング体験',
          'インタラクティブ性',
          '視覚的インパクト',
          '記憶に残るプレゼンテーション'
        ],
        analysis: 'ズーミングインターフェースとインタラクティブ機能により、従来のスライド形式を超えた印象的なプレゼンテーションを作成可能'
      },
      competitor: {
        points: [
          'PowerPoint、Keynoteとの競合',
          'ズーミング機能の差別化',
          'インタラクティブ性の優位性',
          'ビジュアルインパクトの強み'
        ],
        analysis: 'プレゼンテーション作成市場で、ユニークなズーミング体験とインタラクティブ性を武器に競合他社と差別化'
      },
      company: {
        points: [
          'ハンガリー発のプレゼンテーション企業',
          'イノベーション重視',
          '安定した成長',
          'ビジュアル特化'
        ],
        analysis: 'インタラクティブプレゼンテーションのパイオニアとして、ビジュアルコミュニケーション市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'インタラクティブプレゼンテーションツール',
          'ズーミングプレゼンテーション作成プラットフォーム',
          'ビジュアルコミュニケーションツール',
          'ストーリーテリングプラットフォーム'
        ],
        analysis: 'ズーミング・インタラクティブプレゼンテーション作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ビデオ機能の強化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新機能の追加'
        ],
        longTerm: [
          'インタラクティブプレゼンテーション市場のリーダーポジション維持',
          'AI駆動ストーリーテリングの実現',
          '包括的なビジュアルコミュニケーションプラットフォームへの進化'
        ]
      }
    }
  },
  'demodesk': {
    company: {
      name: 'Demodesk',
      foundedDate: '2017年',
      employeeCount: '約200人（2023年）',
      revenue: '約40億円（2023年度）',
      customerCount: '1,000社以上',
      notableCustomers: ['Salesforce', 'HubSpot', 'Zoom', 'Slack', 'Notion'],
      headquarters: 'ミュンヘン、ドイツ',
      website: 'https://demodesk.com'
    },
    products: [
      {
        name: 'Demodesk',
        description: 'AI搭載営業デモ・ミーティングプラットフォーム',
        features: [
          'AI搭載デモ自動化',
          'スクリーン共有',
          'インタラクティブデモ',
          'CRM統合',
          'レコーディング',
          'アナリティクス',
          'カレンダー統合',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥6,600', description: '基本デモ機能、CRM統合' },
            { name: 'Professional', price: '¥13,200', description: 'AI機能、高度な分析' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'AI搭載デモ自動化',
          'インタラクティブ体験',
          'CRM統合',
          '詳細なアナリティクス'
        ],
        analysis: 'AI技術を活用したデモ自動化により、営業担当者の効率を向上させ、より効果的な製品デモンストレーションを実現'
      },
      competitor: {
        points: [
          'Zoom、Teams、Gongとの競合',
          'デモ特化の差別化',
          'AI自動化の優位性',
          'インタラクティブ性の強み'
        ],
        analysis: '営業デモ市場で、AI搭載自動化とインタラクティブ機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'ドイツ発の営業テック企業',
          'デモ特化戦略',
          '急速な成長',
          'AI技術重視'
        ],
        analysis: 'AI搭載営業デモのリーダーとして、セールステクノロジー市場で存在感を発揮'
      },
      commodity: {
        points: [
          'AI営業デモプラットフォーム',
          'インタラクティブデモツール',
          '営業ミーティングプラットフォーム',
          'セールスイネーブルメントツール'
        ],
        analysis: 'AI搭載営業デモ・ミーティングプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'CRM統合の拡充',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新機能の追加'
        ],
        longTerm: [
          'AI営業デモ市場のリーダーポジション確立',
          'AI駆動営業自動化の実現',
          '包括的な営業イネーブルメントプラットフォームへの進化'
        ]
      }
    }
  },
  'cloudapp': {
    company: {
      name: 'CloudApp',
      foundedDate: '2010年',
      employeeCount: '約100人（2023年）',
      revenue: '約25億円（2023年度）',
      customerCount: '400万人以上',
      notableCustomers: ['Uber', 'Adobe', 'Zendesk', 'Buffer', 'Hootsuite'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://getcloudapp.com'
    },
    products: [
      {
        name: 'CloudApp',
        description: 'ビジュアルコミュニケーション・画面録画プラットフォーム',
        features: [
          '画面録画',
          'スクリーンショット',
          'GIF作成',
          'アノテーション',
          'ファイル共有',
          'チーム管理',
          'アナリティクス',
          'API統合'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '基本機能、限定ストレージ' },
            { name: 'Pro', price: '¥1,200', description: '無制限録画、高度な機能' },
            { name: 'Team', price: '¥1,600', description: 'チーム機能、ブランドキット' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          '簡単な画面録画',
          '迅速な共有',
          '直感的な操作',
          '豊富な注釈機能'
        ],
        analysis: '画面録画とスクリーンショット機能により、視覚的なコミュニケーションを通じて効率的な情報共有を実現'
      },
      competitor: {
        points: [
          'Loom、Snagitとの競合',
          'シンプルさの差別化',
          'フリーミアムモデルの優位性',
          '迅速な共有機能の強み'
        ],
        analysis: 'ビジュアルコミュニケーション市場で、シンプルさと迅速な共有機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のビジュアルコミュニケーション企業',
          'シンプルさ重視',
          '安定した成長',
          'ユーザビリティ特化'
        ],
        analysis: 'ビジュアルコミュニケーションのパイオニアとして、画面共有・録画市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          '画面録画ツール',
          'ビジュアルコミュニケーションプラットフォーム',
          'スクリーンショットツール',
          'ファイル共有プラットフォーム'
        ],
        analysis: 'ビジュアルコミュニケーション・画面録画プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'ビジュアルコミュニケーション市場のリーダーポジション維持',
          'AI駆動コンテンツ作成の実現',
          '包括的なビジュアルコラボレーションプラットフォームへの進化'
        ]
      }
    }
  },
  'loom': {
    company: {
      name: 'Loom',
      foundedDate: '2015年',
      employeeCount: '約300人（2023年）',
      revenue: '約100億円（2023年度）',
      customerCount: '2,100万人以上',
      notableCustomers: ['HubSpot', 'Atlassian', 'Shopify', 'Zendesk', 'Intercom'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://loom.com'
    },
    products: [
      {
        name: 'Loom',
        description: '非同期ビデオコミュニケーション・画面録画プラットフォーム',
        features: [
          '画面録画',
          'ウェブカメラ録画',
          'ビデオメッセージ',
          'コメント機能',
          'アナリティクス',
          'チーム管理',
          'CRM統合',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Starter', price: '無料', description: '25動画、基本機能' },
            { name: 'Business', price: '¥1,200', description: '無制限動画、高度な機能' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          '非同期ビデオコミュニケーション',
          '簡単な録画・共有',
          '高品質な動画',
          '豊富な統合オプション'
        ],
        analysis: '非同期ビデオコミュニケーションにより、時間と場所を選ばない効率的な情報共有とコラボレーションを実現'
      },
      competitor: {
        points: [
          'CloudApp、Camtasiaとの競合',
          'ビデオ品質の差別化',
          '非同期コミュニケーションの優位性',
          'ユーザー体験の強み'
        ],
        analysis: 'ビデオコミュニケーション市場で、非同期性と高品質なビデオ体験を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のビデオコミュニケーション企業',
          '非同期コミュニケーション重視',
          '急速な成長',
          'ユーザー体験特化'
        ],
        analysis: '非同期ビデオコミュニケーションのリーダーとして、リモートワーク市場で圧倒的な存在感を発揮'
      },
      commodity: {
        points: [
          'ビデオコミュニケーションプラットフォーム',
          '画面録画ツール',
          '非同期コラボレーションツール',
          'ビデオメッセージングプラットフォーム'
        ],
        analysis: '非同期ビデオコミュニケーション・画面録画プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          '新機能の追加'
        ],
        longTerm: [
          '非同期ビデオコミュニケーション市場のリーダーポジション維持',
          'AI駆動ビデオ作成の実現',
          '包括的なビデオコラボレーションプラットフォームへの進化'
        ]
      }
    }
  },
  'navattic': {
    company: {
      name: 'Navattic',
      foundedDate: '2020年',
      employeeCount: '約50人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '500社以上',
      notableCustomers: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Notion'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://navattic.com'
    },
    products: [
      {
        name: 'Navattic',
        description: 'インタラクティブ製品デモ作成プラットフォーム',
        features: [
          'インタラクティブデモ',
          'ノーコードエディター',
          'アナリティクス',
          'リード生成',
          'CRM統合',
          'カスタマイズ',
          'ブランディング',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Growth', price: '¥6,600', description: '基本デモ機能、アナリティクス' },
            { name: 'Scale', price: '¥19,800', description: '高度な機能、CRM統合' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'SaaS企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'インタラクティブデモ体験',
          'ノーコード作成',
          '詳細なアナリティクス',
          'リード生成機能'
        ],
        analysis: 'インタラクティブな製品デモにより、見込み客に実際の製品体験を提供し、コンバージョン率を大幅に向上'
      },
      competitor: {
        points: [
          'Demodesk、Storylaneとの競合',
          'インタラクティブ性の差別化',
          'ノーコード作成の優位性',
          'アナリティクスの強み'
        ],
        analysis: '製品デモ市場で、インタラクティブ性とノーコード作成機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発の製品デモ企業',
          'インタラクティブ特化',
          '急速な成長',
          'SaaS重視'
        ],
        analysis: 'インタラクティブ製品デモのリーダーとして、SaaS営業市場で存在感を発揮'
      },
      commodity: {
        points: [
          'インタラクティブデモプラットフォーム',
          '製品デモ作成ツール',
          'セールスイネーブルメントツール',
          'リード生成プラットフォーム'
        ],
        analysis: 'インタラクティブ製品デモ作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'インタラクティブデモ市場のリーダーポジション確立',
          'AI駆動デモ作成の実現',
          '包括的な営業イネーブルメントプラットフォームへの進化'
        ]
      }
    }
  },
  'qwilr-proposal': {
    company: {
      name: 'Qwilr',
      foundedDate: '2014年',
      employeeCount: '約100人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '3万社以上',
      notableCustomers: ['Deloitte', 'WeWork', 'Shopify', 'Zendesk', 'Buffer'],
      headquarters: 'シドニー、オーストラリア',
      website: 'https://qwilr.com'
    },
    products: [
      {
        name: 'Qwilr',
        description: 'インタラクティブ提案書・見積書作成プラットフォーム',
        features: [
          'インタラクティブ提案書',
          'ウェブベース見積書',
          'デジタル署名',
          'アナリティクス',
          'CRM統合',
          'テンプレート',
          'ブランディング',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Business', price: '¥4,400', description: '基本機能、テンプレート' },
            { name: 'Enterprise', price: '¥8,800', description: '高度な機能、CRM統合' },
            { name: 'Custom', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'インタラクティブ提案書',
          'ウェブベース体験',
          '詳細なアナリティクス',
          'ブランド統一性'
        ],
        analysis: 'インタラクティブなウェブベース提案書により、従来のPDF提案書を超えた魅力的な顧客体験を提供'
      },
      competitor: {
        points: [
          'PandaDoc、Proposifyとの競合',
          'インタラクティブ性の差別化',
          'ウェブベース体験の優位性',
          'デザイン品質の強み'
        ],
        analysis: '提案書作成市場で、インタラクティブ性とウェブベース体験を武器に競合他社と差別化'
      },
      company: {
        points: [
          'オーストラリア発の提案書企業',
          'インタラクティブ重視',
          '安定した成長',
          'デザイン特化'
        ],
        analysis: 'インタラクティブ提案書のリーダーとして、営業プロセス改善市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'インタラクティブ提案書ツール',
          'ウェブベース見積書プラットフォーム',
          '営業資料作成ツール',
          'デジタル署名プラットフォーム'
        ],
        analysis: 'インタラクティブ提案書・見積書作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'インタラクティブ提案書市場のリーダーポジション維持',
          'AI駆動提案書作成の実現',
          '包括的な営業資料プラットフォームへの進化'
        ]
      }
    }
  },
  'better-proposals': {
    company: {
      name: 'Better Proposals',
      foundedDate: '2014年',
      employeeCount: '約50人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '1万5,000社以上',
      notableCustomers: ['Disney', 'Netflix', 'Airbnb', 'Uber', 'Shopify'],
      headquarters: 'ロンドン、イギリス',
      website: 'https://betterproposals.io'
    },
    products: [
      {
        name: 'Better Proposals',
        description: '美しい提案書作成・管理プラットフォーム',
        features: [
          '美しいテンプレート',
          'デジタル署名',
          'アナリティクス',
          'CRM統合',
          'オンライン支払い',
          'ブランディング',
          'チーム管理',
          'モバイル対応'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥2,640', description: '基本機能、テンプレート' },
            { name: 'Premium', price: '¥6,600', description: '高度な機能、CRM統合' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['フリーランサー', 'スタートアップ', '中小企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          '美しいデザインテンプレート',
          '簡単な作成プロセス',
          '詳細なアナリティクス',
          'オンライン支払い統合'
        ],
        analysis: '美しいデザインテンプレートと簡単な作成プロセスにより、プロフェッショナルな提案書を迅速に作成可能'
      },
      competitor: {
        points: [
          'PandaDoc、Proposifyとの競合',
          'デザイン品質の差別化',
          'シンプルさの優位性',
          'コストパフォーマンスの強み'
        ],
        analysis: '提案書作成市場で、美しいデザインとシンプルな操作性を武器に競合他社と差別化'
      },
      company: {
        points: [
          'イギリス発の提案書企業',
          'デザイン重視',
          '安定した成長',
          'ユーザビリティ特化'
        ],
        analysis: '美しい提案書作成のリーダーとして、デザイン重視の営業資料市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          '提案書作成ツール',
          'デザインテンプレートプラットフォーム',
          '営業資料作成ツール',
          'デジタル署名プラットフォーム'
        ],
        analysis: '美しい提案書作成・管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'テンプレートの拡充',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          '美しい提案書作成市場のリーダーポジション維持',
          'AI駆動デザイン自動化の実現',
          '包括的な営業資料プラットフォームへの進化'
        ]
      }
    }
  },
  'adobe-sign': {
    company: {
      name: 'Adobe',
      foundedDate: '1982年',
      employeeCount: '約26,000人（2023年）',
      revenue: '約2兆円（2023年度）',
      customerCount: '数百万社',
      notableCustomers: ['Microsoft', 'IBM', 'Salesforce', 'Oracle', 'SAP'],
      headquarters: 'サンノゼ、カリフォルニア州、アメリカ',
      website: 'https://acrobat.adobe.com/jp/ja/sign.html'
    },
    products: [
      {
        name: 'Adobe Sign',
        description: 'エンタープライズ電子署名・文書管理プラットフォーム',
        features: [
          '電子署名',
          '文書ワークフロー',
          'テンプレート管理',
          'モバイル署名',
          'API統合',
          'セキュリティ機能',
          'コンプライアンス',
          'アナリティクス'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Acrobat Sign Solutions for individuals', price: '¥1,980', description: '個人向け、基本機能' },
            { name: 'Acrobat Sign Solutions for small business', price: '¥3,960', description: '小規模企業向け、高度な機能' },
            { name: 'Acrobat Sign Solutions for business', price: '¥7,920', description: '企業向け、ワークフロー機能' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', '大企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'エンタープライズグレードセキュリティ',
          '豊富な統合オプション',
          'グローバルコンプライアンス',
          'Adobe製品との連携'
        ],
        analysis: 'Adobe製品エコシステムとの深度統合により、既存のAdobe環境を活用した包括的な文書管理を実現'
      },
      competitor: {
        points: [
          'DocuSign、HelloSignとの競合',
          'Adobe製品統合の差別化',
          'エンタープライズ機能の優位性',
          'グローバル展開の強み'
        ],
        analysis: '電子署名市場で、Adobe製品エコシステムとエンタープライズ機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のソフトウェア大手',
          'クリエイティブ・文書管理重視',
          '安定した成長',
          'エンタープライズ特化'
        ],
        analysis: 'Adobe製品エコシステムのリーダーとして、エンタープライズ文書管理市場で圧倒的な存在感を発揮'
      },
      commodity: {
        points: [
          'エンタープライズ電子署名プラットフォーム',
          '文書管理システム',
          'ワークフロー自動化ツール',
          'コンプライアンス管理ツール'
        ],
        analysis: 'エンタープライズ電子署名・文書管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          '新興市場への展開',
          'AI駆動ワークフローの実現',
          '新機能の追加'
        ],
        longTerm: [
          'エンタープライズ電子署名市場のリーダーポジション維持',
          'AI駆動文書管理の実現',
          '包括的なデジタルワークスペースへの進化'
        ]
      }
    }
  },
  'hellosign': {
    company: {
      name: 'Dropbox',
      foundedDate: '2007年',
      employeeCount: '約3,000人（2023年）',
      revenue: '約3,000億円（2023年度）',
      customerCount: '7億人以上',
      notableCustomers: ['Spotify', 'Under Armour', 'Expedia', 'Hyatt', 'National Geographic'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://hellosign.com'
    },
    products: [
      {
        name: 'HelloSign',
        description: 'シンプル・使いやすい電子署名プラットフォーム',
        features: [
          '電子署名',
          'テンプレート',
          'API統合',
          'モバイル対応',
          'チーム管理',
          'ワークフロー',
          'セキュリティ',
          'アナリティクス'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '無料', description: '月3文書、基本機能' },
            { name: 'Essentials', price: '¥2,000', description: '無制限文書、テンプレート' },
            { name: 'Standard', price: '¥4,000', description: 'チーム機能、高度な機能' },
            { name: 'Premium', price: '¥8,000', description: 'API、カスタム機能' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'エンタープライズ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'シンプルで直感的',
          '迅速なセットアップ',
          'Dropbox統合',
          'コストパフォーマンス'
        ],
        analysis: 'シンプルさと使いやすさを重視した設計で、電子署名初心者でも迅速に導入・運用を開始可能'
      },
      competitor: {
        points: [
          'DocuSign、Adobe Signとの競合',
          'シンプルさの差別化',
          'フリーミアムモデルの優位性',
          'Dropbox統合の強み'
        ],
        analysis: '電子署名市場で、シンプルさとDropbox統合を武器に、複雑な機能を求めない企業をターゲットに差別化'
      },
      company: {
        points: [
          'アメリカ発の電子署名企業（Dropbox傘下）',
          'シンプルさ重視',
          '安定した成長',
          'ユーザビリティ特化'
        ],
        analysis: 'シンプル電子署名のリーダーとして、使いやすさを重視する中小企業市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'シンプル電子署名ツール',
          '文書管理プラットフォーム',
          'ワークフロー自動化ツール',
          '中小企業向けツール'
        ],
        analysis: 'シンプル・使いやすい電子署名プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'Dropbox統合の深化',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'シンプル電子署名市場のリーダーポジション維持',
          'AI機能の段階的導入',
          '包括的でありながらシンプルな文書管理プラットフォームへの進化'
        ]
      }
    }
  },
  'signnow': {
    company: {
      name: 'airSlate',
      foundedDate: '2008年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約200億円（2023年度）',
      customerCount: '10万社以上',
      notableCustomers: ['NASA', 'DHL', 'Deloitte', 'PWC', 'Ernst & Young'],
      headquarters: 'ボストン、マサチューセッツ州、アメリカ',
      website: 'https://signnow.com'
    },
    products: [
      {
        name: 'SignNow',
        description: 'ビジネス向け電子署名・文書ワークフロープラットフォーム',
        features: [
          '電子署名',
          '文書ワークフロー',
          'フォーム作成',
          'API統合',
          'モバイルアプリ',
          'セキュリティ',
          'コンプライアンス',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Business', price: '¥1,200', description: '基本機能、電子署名' },
            { name: 'Business Premium', price: '¥2,500', description: 'ワークフロー、高度な機能' },
            { name: 'Enterprise', price: '¥6,000', description: 'API、カスタム機能' },
            { name: 'airSlate Business Cloud', price: '要相談', description: '包括的なワークフロー自動化' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', 'ワークフロー重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'ワークフロー自動化',
          'コストパフォーマンス',
          '豊富な統合オプション',
          'airSlateエコシステム'
        ],
        analysis: 'ワークフロー自動化に特化した設計により、電子署名を含む包括的なビジネスプロセス自動化を実現'
      },
      competitor: {
        points: [
          'DocuSign、HelloSignとの競合',
          'ワークフロー特化の差別化',
          'コストパフォーマンスの優位性',
          'airSlate統合の強み'
        ],
        analysis: '電子署名市場で、ワークフロー自動化とコストパフォーマンスを武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のワークフロー企業',
          'ワークフロー自動化重視',
          '安定した成長',
          'ビジネスプロセス特化'
        ],
        analysis: 'ワークフロー統合電子署名のリーダーとして、ビジネスプロセス自動化市場で存在感を発揮'
      },
      commodity: {
        points: [
          'ワークフロー統合電子署名ツール',
          'ビジネスプロセス自動化プラットフォーム',
          '文書管理システム',
          'フォーム作成ツール'
        ],
        analysis: 'ビジネス向け電子署名・文書ワークフロープラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          'airSlate統合の強化'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'ワークフロー統合電子署名市場のリーダーポジション確立',
          'AI駆動ワークフロー自動化の実現',
          '包括的なビジネスプロセス自動化プラットフォームへの進化'
        ]
      }
    }
  },
  'esign-genie': {
    company: {
      name: 'eSign Genie',
      foundedDate: '2011年',
      employeeCount: '約100人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: ['RE/MAX', 'Keller Williams', 'Century 21', 'Coldwell Banker', 'Berkshire Hathaway'],
      headquarters: 'ニューヨーク、ニューヨーク州、アメリカ',
      website: 'https://esigngenie.com'
    },
    products: [
      {
        name: 'eSign Genie',
        description: '中小企業向け電子署名・文書管理プラットフォーム',
        features: [
          '電子署名',
          'テンプレート管理',
          'ワークフロー',
          'API統合',
          'モバイルアプリ',
          'セキュリティ',
          'レポート',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Professional', price: '¥1,200', description: '基本機能、電子署名' },
            { name: 'Business', price: '¥2,400', description: 'ワークフロー、高度な機能' },
            { name: 'Business Plus', price: '¥4,800', description: 'API、カスタム機能' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', '不動産業界', 'フリーランサー']
      }
    ],
    fourC: {
      customer: {
        points: [
          '中小企業特化',
          'コストパフォーマンス',
          '業界特化機能',
          '使いやすいインターフェース'
        ],
        analysis: '中小企業と特定業界（特に不動産）に特化した機能により、ニッチ市場での効率的な電子署名運用を実現'
      },
      competitor: {
        points: [
          'DocuSign、HelloSignとの競合',
          '中小企業特化の差別化',
          'コストパフォーマンスの優位性',
          '業界特化の強み'
        ],
        analysis: '電子署名市場で、中小企業特化と業界特化機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発の電子署名企業',
          '中小企業重視',
          '安定した成長',
          '業界特化戦略'
        ],
        analysis: '中小企業向け電子署名のリーダーとして、ニッチ市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          '中小企業向け電子署名ツール',
          '業界特化文書管理プラットフォーム',
          'ワークフロー自動化ツール',
          '不動産業界向けツール'
        ],
        analysis: '中小企業向け電子署名・文書管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '業界特化機能の強化'
        ],
        midTerm: [
          '新業界への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          '中小企業電子署名市場のリーダーポジション維持',
          'AI駆動業界特化機能の実現',
          '包括的な中小企業向け文書管理プラットフォームへの進化'
        ]
      }
    }
  },
  'salesforce-cpq': {
    company: {
      name: 'Salesforce',
      foundedDate: '1999年',
      employeeCount: '約73,000人（2023年）',
      revenue: '約4兆円（2023年度）',
      customerCount: '15万社以上',
      notableCustomers: ['Amazon', 'American Express', 'Spotify', 'T-Mobile', 'Adidas'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://salesforce.com/products/cpq'
    },
    products: [
      {
        name: 'Salesforce CPQ',
        description: 'エンタープライズ見積・価格・契約管理プラットフォーム',
        features: [
          '見積作成',
          '価格設定',
          '契約管理',
          'Salesforce統合',
          'ワークフロー自動化',
          'レポート分析',
          'モバイル対応',
          'API統合'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥9,900', description: '基本CPQ機能' },
            { name: 'Professional', price: '¥19,800', description: '高度な機能、ワークフロー' },
            { name: 'Enterprise', price: '¥39,600', description: 'カスタム機能、高度な分析' },
            { name: 'Unlimited', price: '要相談', description: '無制限機能、専用サポート' }
          ]
        },
        targetMarket: ['エンタープライズ', '大企業', 'Salesforceユーザー']
      }
    ],
    fourC: {
      customer: {
        points: [
          'Salesforce完全統合',
          'エンタープライズグレード機能',
          '複雑な価格設定対応',
          '包括的なワークフロー'
        ],
        analysis: 'Salesforceエコシステムとの完全統合により、営業プロセス全体を通じた一貫したCPQ管理を実現'
      },
      competitor: {
        points: [
          'Oracle CPQ、SAP CPQとの競合',
          'Salesforce統合の差別化',
          'エコシステムの優位性',
          'エンタープライズ機能の強み'
        ],
        analysis: 'CPQ市場で、Salesforceエコシステムとエンタープライズ機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のCRM大手',
          'クラウド重視',
          '急速な成長',
          'エンタープライズ特化'
        ],
        analysis: 'Salesforceエコシステムのリーダーとして、エンタープライズCPQ市場で圧倒的な存在感を発揮'
      },
      commodity: {
        points: [
          'エンタープライズCPQプラットフォーム',
          '見積・価格・契約管理システム',
          'Salesforce統合ツール',
          '営業プロセス自動化ツール'
        ],
        analysis: 'エンタープライズ見積・価格・契約管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          'Salesforce統合の深化'
        ],
        midTerm: [
          '新興市場への展開',
          'AI駆動価格最適化の実現',
          '新機能の追加'
        ],
        longTerm: [
          'エンタープライズCPQ市場のリーダーポジション維持',
          'AI駆動営業プロセス自動化の実現',
          '包括的な営業プラットフォームへの進化'
        ]
      }
    }
  },
  'insightsquared': {
    company: {
      name: 'InsightSquared',
      foundedDate: '2010年',
      employeeCount: '約200人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '2,000社以上',
      notableCustomers: ['Zendesk', 'New Relic', 'Okta', 'Drift', 'Outreach'],
      headquarters: 'ボストン、マサチューセッツ州、アメリカ',
      website: 'https://insightsquared.com'
    },
    products: [
      {
        name: 'InsightSquared',
        description: '営業予測・分析プラットフォーム',
        features: [
          '営業予測',
          'パイプライン分析',
          'レポート・ダッシュボード',
          'CRM統合',
          'AI予測分析',
          'チーム管理',
          'モバイル対応',
          'カスタムレポート'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Professional', price: '¥13,200', description: '基本分析機能、CRM統合' },
            { name: 'Enterprise', price: '¥26,400', description: '高度な予測、カスタムレポート' },
            { name: 'Custom', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', 'SaaS企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          '正確な営業予測',
          '詳細なパイプライン分析',
          'CRM統合',
          'AI駆動インサイト'
        ],
        analysis: 'AI駆動の営業予測分析により、営業チームの成果予測精度を向上させ、データに基づいた意思決定を支援'
      },
      competitor: {
        points: [
          'Tableau、Power BIとの競合',
          '営業特化の差別化',
          'AI予測の優位性',
          'CRM統合の強み'
        ],
        analysis: '営業予測分析市場で、営業特化機能とAI予測を武器に汎用BIツールと差別化'
      },
      company: {
        points: [
          'アメリカ発の営業分析企業',
          '営業予測特化',
          '安定した成長',
          'SaaS重視'
        ],
        analysis: '営業予測分析のリーダーとして、セールステクノロジー市場で専門性を発揮'
      },
      commodity: {
        points: [
          '営業予測分析プラットフォーム',
          'セールスアナリティクスツール',
          'パイプライン管理システム',
          'CRM分析ツール'
        ],
        analysis: '営業予測・分析プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          'CRM統合の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          '営業予測分析市場のリーダーポジション維持',
          'AI駆動営業最適化の実現',
          '包括的な営業インテリジェンスプラットフォームへの進化'
        ]
      }
    }
  },
  'tableau-forecast': {
    company: {
      name: 'Salesforce (Tableau)',
      foundedDate: '2003年',
      employeeCount: '約5,000人（2023年）',
      revenue: '約2,000億円（2023年度）',
      customerCount: '8万6,000社以上',
      notableCustomers: ['Netflix', 'Lenovo', 'Charles Schwab', 'Audi', 'Nissan'],
      headquarters: 'シアトル、ワシントン州、アメリカ',
      website: 'https://tableau.com'
    },
    products: [
      {
        name: 'Tableau',
        description: 'エンタープライズビジネスインテリジェンス・データ可視化プラットフォーム',
        features: [
          'データ可視化',
          '予測分析',
          'ダッシュボード',
          'セルフサービスBI',
          'データ統合',
          'モバイル対応',
          'コラボレーション',
          'エンタープライズセキュリティ'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Tableau Viewer', price: '¥1,980', description: 'ダッシュボード閲覧' },
            { name: 'Tableau Explorer', price: '¥5,280', description: '基本分析機能' },
            { name: 'Tableau Creator', price: '¥9,240', description: '完全機能、データ作成' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['エンタープライズ', '大企業', 'データアナリスト']
      }
    ],
    fourC: {
      customer: {
        points: [
          '強力なデータ可視化',
          'セルフサービスBI',
          'エンタープライズグレード',
          'Salesforce統合'
        ],
        analysis: '直感的なドラッグ&ドロップインターフェースにより、技術者でなくても高度なデータ分析と予測を実現'
      },
      competitor: {
        points: [
          'Power BI、Qlik Senseとの競合',
          'データ可視化の差別化',
          'セルフサービスの優位性',
          'エンタープライズ機能の強み'
        ],
        analysis: 'BI市場で、データ可視化の直感性とセルフサービス機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のBI企業（Salesforce傘下）',
          'データ可視化重視',
          '急速な成長',
          'エンタープライズ特化'
        ],
        analysis: 'データ可視化BIのリーダーとして、エンタープライズデータ分析市場で圧倒的な存在感を発揮'
      },
      commodity: {
        points: [
          'エンタープライズBIプラットフォーム',
          'データ可視化ツール',
          '予測分析プラットフォーム',
          'セルフサービスBIツール'
        ],
        analysis: 'エンタープライズビジネスインテリジェンス・データ可視化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'Salesforce統合の深化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          '新興市場への展開',
          'AI駆動分析の実現',
          '新機能の追加'
        ],
        longTerm: [
          'エンタープライズBI市場のリーダーポジション維持',
          'AI駆動データインサイトの実現',
          '包括的なデータプラットフォームへの進化'
        ]
      }
    }
  },
  'power-bi-forecast': {
    company: {
      name: 'Microsoft',
      foundedDate: '1975年',
      employeeCount: '約221,000人（2023年）',
      revenue: '約28兆円（2023年度）',
      customerCount: '数百万社',
      notableCustomers: ['Coca-Cola', 'BMW', 'H&R Block', 'Heathrow Airport', 'Adobe'],
      headquarters: 'レドモンド、ワシントン州、アメリカ',
      website: 'https://powerbi.microsoft.com'
    },
    products: [
      {
        name: 'Power BI',
        description: 'Microsoft統合ビジネスインテリジェンス・分析プラットフォーム',
        features: [
          'データ可視化',
          '予測分析',
          'ダッシュボード',
          'セルフサービスBI',
          'Office 365統合',
          'AI機能',
          'モバイル対応',
          'クラウド・オンプレミス対応'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Power BI Pro', price: '¥1,320', description: '基本BI機能、共有' },
            { name: 'Power BI Premium Per User', price: '¥2,640', description: '高度な機能、大容量' },
            { name: 'Power BI Premium Per Capacity', price: '要相談', description: 'エンタープライズ機能' },
            { name: 'Power BI Embedded', price: '要相談', description: 'アプリケーション組み込み' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', 'Microsoft環境企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'Microsoft製品統合',
          'コストパフォーマンス',
          'AI機能',
          'クラウド・オンプレミス対応'
        ],
        analysis: 'Microsoft製品エコシステムとの深度統合により、既存のOffice環境を活用した包括的なBI分析を実現'
      },
      competitor: {
        points: [
          'Tableau、Qlik Senseとの競合',
          'Microsoft統合の差別化',
          'コストパフォーマンスの優位性',
          'AI機能の強み'
        ],
        analysis: 'BI市場で、Microsoft製品統合とコストパフォーマンスを武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のソフトウェア大手',
          'クラウド・AI重視',
          '安定した成長',
          'エンタープライズ特化'
        ],
        analysis: 'Microsoft製品エコシステムのリーダーとして、エンタープライズBI市場で圧倒的な存在感を発揮'
      },
      commodity: {
        points: [
          'Microsoft統合BIプラットフォーム',
          'エンタープライズ分析ツール',
          '予測分析プラットフォーム',
          'セルフサービスBIツール'
        ],
        analysis: 'Microsoft統合ビジネスインテリジェンス・分析プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'Microsoft統合の深化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          '新興市場への展開',
          'AI駆動分析の実現',
          '新機能の追加'
        ],
        longTerm: [
          'Microsoft統合BI市場のリーダーポジション維持',
          'AI駆動データインサイトの実現',
          '包括的なMicrosoft データプラットフォームへの進化'
        ]
      }
    }
  },
  'looker-forecast': {
    company: {
      name: 'Google Cloud (Looker)',
      foundedDate: '2012年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約300億円（2023年度）',
      customerCount: '2,000社以上',
      notableCustomers: ['Spotify', 'BuzzFeed', 'Warby Parker', 'Kickstarter', 'Yahoo'],
      headquarters: 'サンタクルーズ、カリフォルニア州、アメリカ',
      website: 'https://looker.com'
    },
    products: [
      {
        name: 'Looker',
        description: 'クラウドネイティブビジネスインテリジェンス・データプラットフォーム',
        features: [
          'データモデリング',
          '予測分析',
          'ダッシュボード',
          'セルフサービスBI',
          'Google Cloud統合',
          'API統合',
          'モバイル対応',
          'エンベッド分析'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Looker', price: '¥6,600', description: '基本BI機能、データモデリング' },
            { name: 'Looker Studio Pro', price: '¥1,320', description: 'セルフサービスBI' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['スタートアップ', '中小企業', 'データドリブン企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'データモデリング重視',
          'Google Cloud統合',
          'API優先設計',
          'エンベッド分析'
        ],
        analysis: 'データモデリング中心のアプローチにより、一貫性のあるデータ定義と信頼性の高い分析を実現'
      },
      competitor: {
        points: [
          'Tableau、Power BIとの競合',
          'データモデリングの差別化',
          'API優先の優位性',
          'Google Cloud統合の強み'
        ],
        analysis: 'BI市場で、データモデリング中心アプローチとAPI優先設計を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のBI企業（Google傘下）',
          'データモデリング重視',
          '急速な成長',
          'クラウドネイティブ特化'
        ],
        analysis: 'データモデリングBIのリーダーとして、クラウドネイティブデータ分析市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'クラウドネイティブBIプラットフォーム',
          'データモデリングツール',
          '予測分析プラットフォーム',
          'エンベッド分析ツール'
        ],
        analysis: 'クラウドネイティブビジネスインテリジェンス・データプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'Google Cloud統合の深化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'AI駆動分析の実現',
          '新機能の追加'
        ],
        longTerm: [
          'データモデリングBI市場のリーダーポジション維持',
          'AI駆動データインサイトの実現',
          '包括的なGoogle Cloudデータプラットフォームへの進化'
        ]
      }
    }
  },
  'qlik-sense-forecast': {
    company: {
      name: 'Qlik',
      foundedDate: '1993年',
      employeeCount: '約3,000人（2023年）',
      revenue: '約1,000億円（2023年度）',
      customerCount: '5万社以上',
      notableCustomers: ['Cisco', 'Raymond James', 'Subaru', 'Lenovo', 'Red Cross'],
      headquarters: 'キング・オブ・プルシア、ペンシルベニア州、アメリカ',
      website: 'https://qlik.com'
    },
    products: [
      {
        name: 'Qlik Sense',
        description: 'アソシエイティブ分析・ビジネスインテリジェンスプラットフォーム',
        features: [
          'アソシエイティブ分析',
          '予測分析',
          'セルフサービスBI',
          'データ統合',
          'AI機能',
          'モバイル対応',
          'クラウド・オンプレミス対応',
          'コラボレーション'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Qlik Sense Business', price: '¥2,640', description: '基本BI機能、セルフサービス' },
            { name: 'Qlik Sense Enterprise', price: '¥6,600', description: '高度な機能、ガバナンス' },
            { name: 'Qlik Sense Enterprise SaaS', price: '¥3,960', description: 'クラウド版、管理機能' },
            { name: 'Custom', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', 'データアナリスト']
      }
    ],
    fourC: {
      customer: {
        points: [
          'アソシエイティブ分析エンジン',
          '直感的なデータ探索',
          'AI機能',
          'ハイブリッド展開'
        ],
        analysis: 'アソシエイティブ分析エンジンにより、従来のクエリベース分析を超えた自由なデータ探索と発見を実現'
      },
      competitor: {
        points: [
          'Tableau、Power BIとの競合',
          'アソシエイティブ分析の差別化',
          'データ探索の優位性',
          'ハイブリッド展開の強み'
        ],
        analysis: 'BI市場で、独自のアソシエイティブ分析エンジンとデータ探索機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'スウェーデン発のBI企業',
          'アソシエイティブ分析重視',
          '安定した成長',
          'イノベーション特化'
        ],
        analysis: 'アソシエイティブ分析BIのリーダーとして、データ探索・発見市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'アソシエイティブ分析プラットフォーム',
          'データ探索ツール',
          '予測分析プラットフォーム',
          'セルフサービスBIツール'
        ],
        analysis: 'アソシエイティブ分析・ビジネスインテリジェンスプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          'クラウド機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'AI駆動分析の実現',
          '新機能の追加'
        ],
        longTerm: [
          'アソシエイティブ分析市場のリーダーポジション維持',
          'AI駆動データ発見の実現',
          '包括的なデータ探索プラットフォームへの進化'
        ]
      }
    }
  },
  'userpilot': {
    company: {
      name: 'Userpilot',
      foundedDate: '2017年',
      employeeCount: '約100人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '1,000社以上',
      notableCustomers: ['Typeform', 'Hotjar', 'Segment', 'Calendly', 'Miro'],
      headquarters: 'ニューヨーク、ニューヨーク州、アメリカ',
      website: 'https://userpilot.com'
    },
    products: [
      {
        name: 'Userpilot',
        description: 'プロダクト体験・ユーザーオンボーディング最適化プラットフォーム',
        features: [
          'ユーザーオンボーディング',
          'プロダクトツアー',
          'インアプリメッセージング',
          'ユーザー分析',
          'A/Bテスト',
          'セグメンテーション',
          'フィードバック収集',
          'ユーザー行動追跡'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥32,000', description: '基本オンボーディング機能' },
            { name: 'Growth', price: '¥64,000', description: '高度な分析、A/Bテスト' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['SaaS企業', 'プロダクトチーム', 'スタートアップ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'ノーコードオンボーディング',
          'リアルタイム分析',
          'パーソナライゼーション',
          'プロダクト体験最適化'
        ],
        analysis: 'ノーコードでプロダクト体験を最適化し、ユーザーのアクティベーションと定着率を向上させる包括的なソリューション'
      },
      competitor: {
        points: [
          'Pendo、WalkMeとの競合',
          'ノーコードの差別化',
          'プロダクト特化の優位性',
          'SaaS特化の強み'
        ],
        analysis: 'ユーザーオンボーディング市場で、ノーコードとプロダクト体験特化を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のプロダクト体験企業',
          'SaaS重視',
          '急速な成長',
          'ユーザー体験特化'
        ],
        analysis: 'プロダクト体験最適化のリーダーとして、SaaS企業のユーザーオンボーディング市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'プロダクト体験最適化プラットフォーム',
          'ユーザーオンボーディングツール',
          'インアプリエンゲージメントツール',
          'SaaS分析プラットフォーム'
        ],
        analysis: 'プロダクト体験・ユーザーオンボーディング最適化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'プロダクト体験最適化市場のリーダーポジション確立',
          'AI駆動パーソナライゼーションの実現',
          '包括的なプロダクト成長プラットフォームへの進化'
        ]
      }
    }
  },
  'intercom-onboarding': {
    company: {
      name: 'Intercom',
      foundedDate: '2011年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約300億円（2023年度）',
      customerCount: '2万5,000社以上',
      notableCustomers: ['Shopify', 'New Relic', 'Sotheby\'s', 'Atlassian', 'Amazon'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://intercom.com'
    },
    products: [
      {
        name: 'Intercom',
        description: 'カスタマーコミュニケーション・オンボーディングプラットフォーム',
        features: [
          'ライブチャット',
          'ユーザーオンボーディング',
          'インアプリメッセージング',
          'ヘルプデスク',
          'ナレッジベース',
          'チャットボット',
          'カスタマーデータ',
          'オートメーション'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥9,900', description: 'ライブチャット、基本機能' },
            { name: 'Pro', price: '¥132,000', description: 'オンボーディング、高度な機能' },
            { name: 'Premium', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['SaaS企業', 'Eコマース', 'スタートアップ']
      }
    ],
    fourC: {
      customer: {
        points: [
          '統合カスタマーコミュニケーション',
          'リアルタイムサポート',
          'パーソナライズドメッセージング',
          'オムニチャネル対応'
        ],
        analysis: '統合されたカスタマーコミュニケーションプラットフォームにより、ユーザーオンボーディングからサポートまで一貫した体験を提供'
      },
      competitor: {
        points: [
          'Zendesk、Freshworksとの競合',
          '統合プラットフォームの差別化',
          'リアルタイム性の優位性',
          'SaaS特化の強み'
        ],
        analysis: 'カスタマーコミュニケーション市場で、統合プラットフォームとリアルタイム性を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アイルランド発のカスタマーコミュニケーション企業',
          'SaaS重視',
          '急速な成長',
          'ユーザー体験特化'
        ],
        analysis: 'カスタマーコミュニケーションのリーダーとして、SaaS企業のカスタマーエンゲージメント市場で存在感を発揮'
      },
      commodity: {
        points: [
          'カスタマーコミュニケーションプラットフォーム',
          'ユーザーオンボーディングツール',
          'ライブチャットツール',
          'カスタマーサポートプラットフォーム'
        ],
        analysis: 'カスタマーコミュニケーション・オンボーディングプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'カスタマーコミュニケーション市場のリーダーポジション維持',
          'AI駆動カスタマーエンゲージメントの実現',
          '包括的なカスタマー体験プラットフォームへの進化'
        ]
      }
    }
  },
  'zendesk-onboarding': {
    company: {
      name: 'Zendesk',
      foundedDate: '2007年',
      employeeCount: '約6,000人（2023年）',
      revenue: '約2,000億円（2023年度）',
      customerCount: '16万社以上',
      notableCustomers: ['Airbnb', 'Uber', 'Shopify', 'Slack', 'Box'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://zendesk.com'
    },
    products: [
      {
        name: 'Zendesk',
        description: 'エンタープライズカスタマーサービス・オンボーディングプラットフォーム',
        features: [
          'チケット管理',
          'ユーザーオンボーディング',
          'ナレッジベース',
          'ライブチャット',
          'コミュニティフォーラム',
          'アナリティクス',
          'ワークフロー自動化',
          'マルチチャネルサポート'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Suite Team', price: '¥6,900', description: '基本サポート機能' },
            { name: 'Suite Growth', price: '¥11,500', description: '高度な機能、オンボーディング' },
            { name: 'Suite Professional', price: '¥14,900', description: 'エンタープライズ機能' },
            { name: 'Suite Enterprise', price: '¥20,700', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['エンタープライズ', '大企業', 'カスタマーサービス重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'エンタープライズグレード機能',
          'マルチチャネル対応',
          'スケーラビリティ',
          '豊富な統合オプション'
        ],
        analysis: 'エンタープライズグレードのカスタマーサービスプラットフォームにより、大規模なユーザーオンボーディングとサポートを実現'
      },
      competitor: {
        points: [
          'Freshworks、Intercomとの競合',
          'エンタープライズ特化の差別化',
          'スケーラビリティの優位性',
          'マルチチャネルの強み'
        ],
        analysis: 'カスタマーサービス市場で、エンタープライズ特化とスケーラビリティを武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のカスタマーサービス企業',
          'エンタープライズ重視',
          '安定した成長',
          'カスタマー体験特化'
        ],
        analysis: 'エンタープライズカスタマーサービスのリーダーとして、大企業のカスタマーサポート市場で圧倒的な存在感を発揮'
      },
      commodity: {
        points: [
          'エンタープライズカスタマーサービスプラットフォーム',
          'ユーザーオンボーディングツール',
          'チケット管理システム',
          'ナレッジベースプラットフォーム'
        ],
        analysis: 'エンタープライズカスタマーサービス・オンボーディングプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の向上',
          '統合機能の拡充'
        ],
        midTerm: [
          '新興市場への展開',
          'AI駆動サポートの実現',
          '新機能の追加'
        ],
        longTerm: [
          'エンタープライズカスタマーサービス市場のリーダーポジション維持',
          'AI駆動カスタマー体験の実現',
          '包括的なカスタマー体験プラットフォームへの進化'
        ]
      }
    }
  },
  'freshworks-onboarding': {
    company: {
      name: 'Freshworks',
      foundedDate: '2010年',
      employeeCount: '約5,000人（2023年）',
      revenue: '約700億円（2023年度）',
      customerCount: '6万社以上',
      notableCustomers: ['Honda', 'Klarna', 'Bridgestone', 'Nucor', 'Toshiba'],
      headquarters: 'サンマテオ、カリフォルニア州、アメリカ',
      website: 'https://freshworks.com'
    },
    products: [
      {
        name: 'Freshworks',
        description: '統合ビジネスソフトウェア・オンボーディングプラットフォーム',
        features: [
          'カスタマーサポート',
          'ユーザーオンボーディング',
          'CRM',
          'マーケティング自動化',
          'IT サービス管理',
          'ライブチャット',
          'ナレッジベース',
          'アナリティクス'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Freshdesk Starter', price: '¥2,200', description: '基本サポート機能' },
            { name: 'Freshdesk Growth', price: '¥3,500', description: '高度な機能、オンボーディング' },
            { name: 'Freshdesk Pro', price: '¥6,900', description: 'エンタープライズ機能' },
            { name: 'Freshdesk Enterprise', price: '¥11,500', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', 'エンタープライズ', '統合ソリューション重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          '統合ビジネスソフトウェア',
          'コストパフォーマンス',
          '使いやすいインターフェース',
          '豊富な機能セット'
        ],
        analysis: '統合されたビジネスソフトウェアスイートにより、カスタマーサポートからオンボーディングまで一元管理を実現'
      },
      competitor: {
        points: [
          'Zendesk、Salesforceとの競合',
          '統合スイートの差別化',
          'コストパフォーマンスの優位性',
          '中小企業特化の強み'
        ],
        analysis: 'ビジネスソフトウェア市場で、統合スイートとコストパフォーマンスを武器に競合他社と差別化'
      },
      company: {
        points: [
          'インド発のビジネスソフトウェア企業',
          '統合ソリューション重視',
          '急速な成長',
          '中小企業特化'
        ],
        analysis: '統合ビジネスソフトウェアのリーダーとして、中小企業のデジタル変革市場で存在感を発揮'
      },
      commodity: {
        points: [
          '統合ビジネスソフトウェアスイート',
          'ユーザーオンボーディングツール',
          'カスタマーサポートプラットフォーム',
          'CRM・マーケティング統合ツール'
        ],
        analysis: '統合ビジネスソフトウェア・オンボーディングプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の向上',
          '統合機能の強化'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          '統合ビジネスソフトウェア市場のリーダーポジション確立',
          'AI駆動ビジネス自動化の実現',
          '包括的なビジネスプラットフォームへの進化'
        ]
      }
    }
  },
  'gainsight-onboarding': {
    company: {
      name: 'Gainsight',
      foundedDate: '2013年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約200億円（2023年度）',
      customerCount: '1,000社以上',
      notableCustomers: ['Adobe', 'Box', 'DocuSign', 'Okta', 'Zoom'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://gainsight.com'
    },
    products: [
      {
        name: 'Gainsight',
        description: 'カスタマーサクセス・オンボーディング管理プラットフォーム',
        features: [
          'カスタマーサクセス管理',
          'ユーザーオンボーディング',
          'ヘルススコア',
          'チャーン予測',
          'プロダクト分析',
          'カスタマージャーニー',
          'アカウント管理',
          'レポート・ダッシュボード'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Essentials', price: '¥19,800', description: '基本カスタマーサクセス機能' },
            { name: 'Growth', price: '¥39,600', description: '高度な分析、オンボーディング' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['SaaS企業', 'エンタープライズ', 'カスタマーサクセス重視企業']
      }
    ],
    fourC: {
      customer: {
        points: [
          'カスタマーサクセス特化',
          'AI駆動インサイト',
          'プロダクト分析統合',
          'チャーン予測'
        ],
        analysis: 'カスタマーサクセスに特化したプラットフォームにより、ユーザーオンボーディングから継続利用まで包括的に管理'
      },
      competitor: {
        points: [
          'ChurnZero、Totangoとの競合',
          'カスタマーサクセス特化の差別化',
          'AI分析の優位性',
          'SaaS特化の強み'
        ],
        analysis: 'カスタマーサクセス市場で、AI駆動分析とSaaS特化機能を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のカスタマーサクセス企業',
          'SaaS重視',
          '急速な成長',
          'カスタマーサクセス特化'
        ],
        analysis: 'カスタマーサクセスのリーダーとして、SaaS企業のカスタマーリテンション市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'カスタマーサクセス管理プラットフォーム',
          'ユーザーオンボーディングツール',
          'チャーン予測ツール',
          'プロダクト分析プラットフォーム'
        ],
        analysis: 'カスタマーサクセス・オンボーディング管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'プロダクト分析の深化',
          'ユーザー体験の向上'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'カスタマーサクセス市場のリーダーポジション維持',
          'AI駆動カスタマーインテリジェンスの実現',
          '包括的なカスタマー体験プラットフォームへの進化'
        ]
      }
    }
  },
  'apollo': {
    company: {
      name: 'Apollo',
      foundedDate: '2015年',
      employeeCount: '約500人（2023年）',
      revenue: '約150億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: ['Zoom', 'Copper', 'Outreach', 'Gong', 'Calendly'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://apollo.io'
    },
    products: [
      {
        name: 'Apollo',
        description: 'セールスインテリジェンス・リードジェネレーションプラットフォーム',
        features: [
          'リードジェネレーション',
          'セールスインテリジェンス',
          'メールシーケンス',
          'CRM統合',
          'データエンリッチメント',
          'プロスペクティング',
          'セールス分析',
          'コンタクト管理'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '¥0', description: '基本機能、月1,000コンタクト' },
            { name: 'Basic', price: '¥6,900', description: '高度な検索、月5,000コンタクト' },
            { name: 'Professional', price: '¥13,800', description: 'メールシーケンス、無制限コンタクト' },
            { name: 'Organization', price: '要相談', description: 'エンタープライズ機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', 'スタートアップ', 'セールスチーム']
      }
    ],
    fourC: {
      customer: {
        points: [
          '包括的なセールスプラットフォーム',
          '豊富なデータベース',
          'フリーミアムモデル',
          '使いやすいインターフェース'
        ],
        analysis: '包括的なセールスインテリジェンスプラットフォームにより、リードジェネレーションからクロージングまで一元管理を実現'
      },
      competitor: {
        points: [
          'ZoomInfo、Outreachとの競合',
          '統合プラットフォームの差別化',
          'フリーミアムの優位性',
          '中小企業特化の強み'
        ],
        analysis: 'セールスインテリジェンス市場で、統合プラットフォームとフリーミアムモデルを武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のセールステック企業',
          '急速な成長',
          'セールス特化',
          '中小企業重視'
        ],
        analysis: 'セールスインテリジェンスのリーダーとして、中小企業のセールス効率化市場で存在感を発揮'
      },
      commodity: {
        points: [
          'セールスインテリジェンスプラットフォーム',
          'リードジェネレーションツール',
          'セールス自動化ツール',
          'CRM統合プラットフォーム'
        ],
        analysis: 'セールスインテリジェンス・リードジェネレーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'データ品質の向上',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'セールスインテリジェンス市場のリーダーポジション確立',
          'AI駆動セールス自動化の実現',
          '包括的なセールスプラットフォームへの進化'
        ]
      }
    }
  },
  'clearbit': {
    company: {
      name: 'Clearbit',
      foundedDate: '2014年',
      employeeCount: '約200人（2023年）',
      revenue: '約100億円（2023年度）',
      customerCount: '5,000社以上',
      notableCustomers: ['Segment', 'Asana', 'Zendesk', 'Stripe', 'Intercom'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://clearbit.com'
    },
    products: [
      {
        name: 'Clearbit',
        description: 'B2Bデータエンリッチメント・リードジェネレーションプラットフォーム',
        features: [
          'データエンリッチメント',
          'リードジェネレーション',
          'プロスペクティング',
          'API統合',
          'リアルタイムデータ',
          'セグメンテーション',
          'データ検証',
          'CRM統合'
        ],
        pricing: {
          model: 'API課金',
          plans: [
            { name: 'Starter', price: '¥6,900', description: '基本データエンリッチメント' },
            { name: 'Growth', price: '¥20,700', description: '高度な機能、大量データ' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['SaaS企業', 'マーケティングチーム', 'セールスチーム']
      }
    ],
    fourC: {
      customer: {
        points: [
          'リアルタイムデータエンリッチメント',
          '高品質なB2Bデータ',
          'API優先設計',
          '豊富な統合オプション'
        ],
        analysis: 'リアルタイムデータエンリッチメントにより、顧客データの品質向上とセールス効率化を実現'
      },
      competitor: {
        points: [
          'ZoomInfo、Lusha との競合',
          'API優先の差別化',
          'データ品質の優位性',
          'SaaS特化の強み'
        ],
        analysis: 'データエンリッチメント市場で、API優先設計と高品質データを武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のデータ企業',
          'API重視',
          '安定した成長',
          'データ品質特化'
        ],
        analysis: 'B2Bデータエンリッチメントのリーダーとして、SaaS企業のデータ活用市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'B2Bデータエンリッチメントプラットフォーム',
          'リードジェネレーションツール',
          'データ検証ツール',
          'API統合プラットフォーム'
        ],
        analysis: 'B2Bデータエンリッチメント・リードジェネレーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'データ品質の向上',
          'API機能の拡充'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新データソースの追加'
        ],
        longTerm: [
          'B2Bデータエンリッチメント市場のリーダーポジション維持',
          'AI駆動データインテリジェンスの実現',
          '包括的なデータプラットフォームへの進化'
        ]
      }
    }
  },
  'hunter': {
    company: {
      name: 'Hunter',
      foundedDate: '2015年',
      employeeCount: '約50人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '4百万人以上',
      notableCustomers: ['Google', 'Microsoft', 'Adobe', 'IBM', 'Shopify'],
      headquarters: 'リヨン、フランス',
      website: 'https://hunter.io'
    },
    products: [
      {
        name: 'Hunter',
        description: 'メールファインダー・リードジェネレーションツール',
        features: [
          'メールファインダー',
          'ドメイン検索',
          'メール検証',
          'リードジェネレーション',
          'Chrome拡張機能',
          'API統合',
          'バルク検索',
          'CRM統合'
        ],
        pricing: {
          model: 'フリーミアム',
          plans: [
            { name: 'Free', price: '¥0', description: '月25回検索' },
            { name: 'Starter', price: '¥6,900', description: '月500回検索' },
            { name: 'Growth', price: '¥13,800', description: '月5,000回検索' },
            { name: 'Business', price: '¥69,000', description: '月50,000回検索' }
          ]
        },
        targetMarket: ['中小企業', 'フリーランサー', 'マーケティングチーム']
      }
    ],
    fourC: {
      customer: {
        points: [
          'シンプルなメールファインダー',
          '高い検索精度',
          'フリーミアムモデル',
          '使いやすいインターフェース'
        ],
        analysis: 'シンプルで高精度なメールファインダーにより、効率的なリードジェネレーションを実現'
      },
      competitor: {
        points: [
          'Lusha、Voila Norbert との競合',
          'シンプルさの差別化',
          'フリーミアムの優位性',
          '中小企業特化の強み'
        ],
        analysis: 'メールファインダー市場で、シンプルさとフリーミアムモデルを武器に競合他社と差別化'
      },
      company: {
        points: [
          'フランス発のメールツール企業',
          'シンプル重視',
          '安定した成長',
          'メール特化'
        ],
        analysis: 'メールファインダーのリーダーとして、中小企業のリードジェネレーション市場で存在感を発揮'
      },
      commodity: {
        points: [
          'メールファインダーツール',
          'リードジェネレーションツール',
          'メール検証ツール',
          'プロスペクティングツール'
        ],
        analysis: 'メールファインダー・リードジェネレーションツール'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          '検索精度の向上',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'メールファインダー市場のリーダーポジション維持',
          'AI駆動プロスペクティングの実現',
          '包括的なリードジェネレーションプラットフォームへの進化'
        ]
      }
    }
  },
  'leadiq': {
    company: {
      name: 'LeadIQ',
      foundedDate: '2015年',
      employeeCount: '約100人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '2,000社以上',
      notableCustomers: ['Zoom', 'Okta', 'Snowflake', 'Databricks', 'Confluent'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://leadiq.com'
    },
    products: [
      {
        name: 'LeadIQ',
        description: 'セールスプロスペクティング・リードジェネレーションプラットフォーム',
        features: [
          'プロスペクティング',
          'リードジェネレーション',
          'CRM統合',
          'メールシーケンス',
          'データエンリッチメント',
          'セールス分析',
          'Chrome拡張機能',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Starter', price: '¥6,900', description: '基本プロスペクティング機能' },
            { name: 'Professional', price: '¥13,800', description: '高度な機能、メールシーケンス' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['中小企業', 'セールスチーム', 'スタートアップ']
      }
    ],
    fourC: {
      customer: {
        points: [
          'セールス特化プロスペクティング',
          'CRM統合',
          'チーム協働機能',
          'データ品質重視'
        ],
        analysis: 'セールス特化のプロスペクティングプラットフォームにより、効率的なリードジェネレーションとチーム協働を実現'
      },
      competitor: {
        points: [
          'Outreach、SalesLoft との競合',
          'プロスペクティング特化の差別化',
          'チーム機能の優位性',
          '中小企業特化の強み'
        ],
        analysis: 'セールスプロスペクティング市場で、チーム協働機能と中小企業特化を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のセールステック企業',
          'プロスペクティング重視',
          '安定した成長',
          'セールス特化'
        ],
        analysis: 'セールスプロスペクティングのリーダーとして、中小企業のセールス効率化市場で存在感を発揮'
      },
      commodity: {
        points: [
          'セールスプロスペクティングプラットフォーム',
          'リードジェネレーションツール',
          'CRM統合ツール',
          'セールス分析ツール'
        ],
        analysis: 'セールスプロスペクティング・リードジェネレーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'データ品質の向上',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新機能の追加'
        ],
        longTerm: [
          'セールスプロスペクティング市場のリーダーポジション確立',
          'AI駆動セールス自動化の実現',
          '包括的なセールスプラットフォームへの進化'
        ]
      }
    }
  },
  'datanyze': {
    company: {
      name: 'Datanyze',
      foundedDate: '2012年',
      employeeCount: '約50人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '1,000社以上',
      notableCustomers: ['Salesforce', 'HubSpot', 'Marketo', 'Pardot', 'Eloqua'],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://datanyze.com'
    },
    products: [
      {
        name: 'Datanyze',
        description: 'テクノロジーインテリジェンス・リードジェネレーションプラットフォーム',
        features: [
          'テクノロジー検出',
          'リードジェネレーション',
          'プロスペクティング',
          'CRM統合',
          'データエンリッチメント',
          'Chrome拡張機能',
          'API統合',
          'セールス分析'
        ],
        pricing: {
          model: 'サブスクリプション',
          plans: [
            { name: 'Basic', price: '¥13,800', description: '基本テクノロジー検出機能' },
            { name: 'Professional', price: '¥27,600', description: '高度な機能、大量データ' },
            { name: 'Enterprise', price: '要相談', description: 'カスタム機能、専用サポート' }
          ]
        },
        targetMarket: ['テクノロジー企業', 'セールスチーム', 'マーケティングチーム']
      }
    ],
    fourC: {
      customer: {
        points: [
          'テクノロジー特化インテリジェンス',
          'リアルタイム検出',
          'CRM統合',
          '豊富なテクノロジーデータ'
        ],
        analysis: 'テクノロジー特化のインテリジェンスプラットフォームにより、技術スタックベースのターゲティングを実現'
      },
      competitor: {
        points: [
          'BuiltWith、Wappalyzer との競合',
          'テクノロジー特化の差別化',
          'セールス統合の優位性',
          'B2B特化の強み'
        ],
        analysis: 'テクノロジーインテリジェンス市場で、セールス統合とB2B特化を武器に競合他社と差別化'
      },
      company: {
        points: [
          'アメリカ発のテクノロジーインテリジェンス企業',
          'テクノロジー重視',
          '安定した成長',
          'B2B特化'
        ],
        analysis: 'テクノロジーインテリジェンスのリーダーとして、B2Bセールスのテクノロジーターゲティング市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'テクノロジーインテリジェンスプラットフォーム',
          'リードジェネレーションツール',
          'プロスペクティングツール',
          'セールス分析ツール'
        ],
        analysis: 'テクノロジーインテリジェンス・リードジェネレーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'テクノロジー検出精度の向上',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          '新テクノロジーの追加'
        ],
        longTerm: [
          'テクノロジーインテリジェンス市場のリーダーポジション維持',
          'AI駆動テクノロジー分析の実現',
          '包括的なテクノロジーインテリジェンスプラットフォームへの進化'
        ]
      }
    }
  }
};                                                                                   