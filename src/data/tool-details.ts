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
        description: '企業・担当者データのエンリッチメントに特化したプラットフォーム',
        features: [
          '85以上のソースからのデータ収集',
          'リアルタイムデータエンリッチメント',
          'API統合',
          'プロスペクティング機能',
          'ウェブサイト訪問者特定',
          'メールファインダー',
          'CRM統合',
          'データ品質管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '月間100エンリッチメント、基本機能'
            },
            {
              name: 'Growth',
              price: '¥11,000',
              description: '月間2,500エンリッチメント、API統合'
            },
            {
              name: 'Pro',
              price: '¥22,000',
              description: '月間10,000エンリッチメント、高度な機能'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          'SaaS企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '高品質なデータエンリッチメント',
          'リアルタイム処理',
          '豊富なAPI統合',
          '使いやすいインターフェース'
        ],
        analysis: 'データ品質に重点を置き、営業チームが必要とする正確な企業・担当者情報を効率的に提供'
      },
      competitor: {
        points: [
          'ZoomInfo、Apolloとの競合',
          'データエンリッチメント特化',
          'API統合の優位性',
          '開発者フレンドリー'
        ],
        analysis: 'データエンリッチメント市場で、API統合と開発者体験を重視したアプローチで差別化'
      },
      company: {
        points: [
          'データエンリッチメントのパイオニア',
          '技術重視の企業文化',
          'API-first アプローチ',
          '継続的なイノベーション'
        ],
        analysis: 'データエンリッチメント分野のリーダーとして、技術革新を通じて市場をリード'
      },
      commodity: {
        points: [
          'データエンリッチメントプラットフォーム',
          'B2Bデータインテリジェンス',
          'プロスペクティングツール',
          'CRM統合ソリューション'
        ],
        analysis: 'データエンリッチメント・プロスペクティングプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'データ品質の向上',
          'API機能の拡張',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'AI機能の強化',
          'グローバル展開',
          '新データソースの追加'
        ],
        longTerm: [
          'データインテリジェンス市場のリーダーポジション確立',
          'AI駆動データプラットフォームの構築',
          '包括的なセールスインテリジェンスへの進化'
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
      customerCount: '5,000社以上',
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
        description: 'LinkedInに特化したリード情報収集とプロスペクティング自動化ツール',
        features: [
          'LinkedIn統合',
          'リアルタイム連絡先検証',
          'CRM自動同期',
          'メールファインダー',
          'プロスペクティング自動化',
          'チーム協業機能',
          'Chrome拡張機能',
          'データエクスポート'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '月間40クレジット、基本機能'
            },
            {
              name: 'Essential',
              price: '¥6,600',
              description: '月間200クレジット、CRM統合'
            },
            {
              name: 'Pro',
              price: '¥11,000',
              description: '月間500クレジット、高度な機能'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
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
          'LinkedIn特化の強み',
          '高精度な連絡先検証',
          '使いやすいインターフェース',
          'CRM統合の簡単さ'
        ],
        analysis: 'LinkedInを中心としたプロスペクティングに特化し、営業チームの効率を大幅に向上'
      },
      competitor: {
        points: [
          'Apollo、ZoomInfoとの競合',
          'LinkedIn特化の差別化',
          'ユーザビリティの優位性',
          '中小企業向け価格設定'
        ],
        analysis: 'LinkedIn特化とユーザビリティを武器に、中小企業市場で競合他社と差別化'
      },
      company: {
        points: [
          'プロスペクティング特化企業',
          'ユーザー体験重視',
          '急成長スタートアップ',
          'LinkedIn生態系活用'
        ],
        analysis: 'LinkedIn生態系を活用したプロスペクティング市場で独自のポジションを確立'
      },
      commodity: {
        points: [
          'プロスペクティング自動化ツール',
          'LinkedIn統合プラットフォーム',
          'リード情報収集ツール',
          'CRM統合ソリューション'
        ],
        analysis: 'LinkedIn特化プロスペクティング・リード情報収集プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'LinkedIn統合の深化',
          'データ精度の向上',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'AI機能の追加',
          'エンタープライズ市場への展開',
          '新機能の開発'
        ],
        longTerm: [
          'プロスペクティング市場でのリーダーポジション確立',
          'AI駆動営業インテリジェンスの実現',
          '包括的な営業プラットフォームへの進化'
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
  'datanyze': {
    company: {
      name: 'Datanyze',
      foundedDate: '2012年',
      employeeCount: '約100人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '3,000社以上',
      notableCustomers: [
        'Oracle',
        'IBM',
        'Salesforce',
        'Microsoft',
        'Adobe'
      ],
      headquarters: 'サンマテオ、カリフォルニア州、アメリカ',
      website: 'https://datanyze.com'
    },
    products: [
      {
        name: 'Datanyze',
        description: '企業が使用している技術スタックを特定し、リード獲得に活用するツール',
        features: [
          'テクノグラフィックデータ',
          'ウェブサイト技術検出',
          'リード獲得自動化',
          'CRM統合',
          'Chrome拡張機能',
          'API統合',
          'データエクスポート',
          'アラート機能'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '月間25クレジット、基本機能'
            },
            {
              name: 'Starter',
              price: '¥8,800',
              description: '月間500クレジット、CRM統合'
            },
            {
              name: 'Professional',
              price: '¥17,600',
              description: '月間2,000クレジット、高度な機能'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'ミッドマーケット',
          'テクノロジー企業'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'テクノグラフィックデータの専門性',
          '技術スタック特定の精度',
          '使いやすいインターフェース',
          'CRM統合の簡単さ'
        ],
        analysis: 'テクノグラフィックデータに特化し、技術製品の営業チームに特に有効なリード獲得を実現'
      },
      competitor: {
        points: [
          'BuiltWith、Wappalyzerとの競合',
          'テクノグラフィック特化の差別化',
          '営業向け機能の充実',
          'B2B特化アプローチ'
        ],
        analysis: 'テクノグラフィック市場で、営業特化機能とB2Bアプローチで競合他社と差別化'
      },
      company: {
        points: [
          'テクノグラフィック分野のパイオニア',
          '技術重視の企業文化',
          'B2B営業特化',
          '継続的なデータ品質向上'
        ],
        analysis: 'テクノグラフィック分野のリーダーとして、B2B営業に特化したソリューションを提供'
      },
      commodity: {
        points: [
          'テクノグラフィックデータプラットフォーム',
          '技術スタック検出ツール',
          'B2Bリード獲得ツール',
          'CRM統合ソリューション'
        ],
        analysis: 'テクノグラフィック・リード獲得プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'データ精度の向上',
          '新技術の検出追加',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'AI機能の強化',
          'グローバル展開',
          '新データソースの追加'
        ],
        longTerm: [
          'テクノグラフィック市場のリーダーポジション維持',
          'AI駆動インテリジェンスの実現',
          '包括的なセールスインテリジェンスへの進化'
        ]
      }
    }
  },
  'lusha': {
    company: {
      name: 'Lusha',
      foundedDate: '2016年',
      employeeCount: '約300人（2023年）',
      revenue: '約80億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Airbnb',
        'Uber',
        'WeWork',
        'Dropbox',
        'Zendesk'
      ],
      headquarters: 'テルアビブ、イスラエル',
      website: 'https://lusha.com'
    },
    products: [
      {
        name: 'Lusha',
        description: 'B2Bの連絡先情報を収集・検証するプラットフォーム',
        features: [
          'リアルタイム連絡先検証',
          'Chrome拡張機能',
          'LinkedIn統合',
          'CRM自動同期',
          'バルクエンリッチメント',
          'API統合',
          'データエクスポート',
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
              price: '¥6,600',
              description: '月間480クレジット、CRM統合'
            },
            {
              name: 'Premium',
              price: '¥11,000',
              description: '月間960クレジット、高度な機能'
            },
            {
              name: 'Scale',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
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
          '高精度な連絡先検証',
          'リアルタイム処理',
          '使いやすいChrome拡張',
          'GDPR準拠の安心感'
        ],
        analysis: 'リアルタイム連絡先検証とGDPR準拠により、営業チームに信頼性の高いデータを提供'
      },
      competitor: {
        points: [
          'Apollo、ZoomInfoとの競合',
          'リアルタイム検証の差別化',
          'GDPR準拠の優位性',
          'ユーザビリティの強み'
        ],
        analysis: 'リアルタイム検証とGDPR準拠を武器に、データ品質重視の市場で競合他社と差別化'
      },
      company: {
        points: [
          'イスラエル発のテクノロジー企業',
          'データプライバシー重視',
          '急成長スタートアップ',
          'グローバル展開'
        ],
        analysis: 'イスラエルの技術力とデータプライバシー重視のアプローチで、グローバル市場で成長'
      },
      commodity: {
        points: [
          'B2B連絡先検証プラットフォーム',
          'リード情報収集ツール',
          'CRM統合ソリューション',
          'データエンリッチメントツール'
        ],
        analysis: 'B2B連絡先検証・リード情報収集プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'データ精度の向上',
          'リアルタイム処理の最適化',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'AI機能の追加',
          'アジア市場への展開',
          '新機能の開発'
        ],
        longTerm: [
          'B2B連絡先検証市場でのリーダーポジション確立',
          'AI駆動データインテリジェンスの実現',
          '包括的な営業プラットフォームへの進化'
        ]
      }
    }
  },
  'outreach': {
    company: {
      name: 'Outreach',
      foundedDate: '2014年',
      employeeCount: '約1,500人（2023年）',
      revenue: '約300億円（2023年度）',
      customerCount: '6,000社以上',
      notableCustomers: [
        'Adobe',
        'Okta',
        'Zoom',
        'DocuSign',
        'Snowflake'
      ],
      headquarters: 'シアトル、ワシントン州、アメリカ',
      website: 'https://outreach.io'
    },
    products: [
      {
        name: 'Outreach',
        description: '営業チームのためのセールスエンゲージメントプラットフォーム',
        features: [
          'マルチチャネルシーケンス',
          'AI駆動インサイト',
          'メール自動化',
          '電話統合',
          'CRM統合',
          '営業分析',
          'A/Bテスト',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥13,200',
              description: '基本シーケンス、メール自動化'
            },
            {
              name: 'Professional',
              price: '¥22,000',
              description: '高度な分析、A/Bテスト'
            },
            {
              name: 'Enterprise',
              price: '¥33,000',
              description: 'カスタム機能、専用サポート'
            },
            {
              name: 'Ultimate',
              price: '要相談',
              description: 'フルカスタマイゼーション'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'マルチチャネル統合',
          'AI駆動インサイト',
          '包括的な営業自動化',
          '豊富な分析機能'
        ],
        analysis: 'マルチチャネル営業自動化により、営業チームの生産性を大幅に向上させる包括的なプラットフォーム'
      },
      competitor: {
        points: [
          'SalesLoft、HubSpotとの競合',
          'AI機能の優位性',
          'エンタープライズ特化',
          '包括的な機能セット'
        ],
        analysis: 'セールスエンゲージメント市場で、AI機能とエンタープライズ向け機能で競合他社をリード'
      },
      company: {
        points: [
          'セールスエンゲージメントのパイオニア',
          'エンタープライズ重視',
          '継続的なイノベーション',
          '強力な資金調達'
        ],
        analysis: 'セールスエンゲージメント分野のリーダーとして、エンタープライズ市場で強固なポジションを確立'
      },
      commodity: {
        points: [
          'セールスエンゲージメントプラットフォーム',
          '営業自動化ツール',
          'マルチチャネル統合ソリューション',
          'AI駆動営業インサイト'
        ],
        analysis: 'セールスエンゲージメント・営業自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '統合機能の拡張'
        ],
        midTerm: [
          'グローバル展開の加速',
          '新機能の追加',
          'パートナーエコシステムの構築'
        ],
        longTerm: [
          'セールスエンゲージメント市場のリーダーポジション維持',
          'AI駆動営業プラットフォームの構築',
          '包括的な営業オペレーションへの進化'
        ]
      }
    }
  },
  'salesloft': {
    company: {
      name: 'SalesLoft',
      foundedDate: '2011年',
      employeeCount: '約800人（2023年）',
      revenue: '約200億円（2023年度）',
      customerCount: '5,000社以上',
      notableCustomers: [
        'IBM',
        'Shopify',
        'Square',
        'Twilio',
        'Tableau'
      ],
      headquarters: 'アトランタ、ジョージア州、アメリカ',
      website: 'https://salesloft.com'
    },
    products: [
      {
        name: 'SalesLoft',
        description: '営業活動のリズムと効率性を向上させるプラットフォーム',
        features: [
          'Cadence機能',
          'メール自動化',
          '電話統合',
          'CRM統合',
          '営業分析',
          'A/Bテスト',
          'チーム管理',
          'コーチング機能'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Essentials',
              price: '¥11,000',
              description: '基本Cadence、メール自動化'
            },
            {
              name: 'Advanced',
              price: '¥19,800',
              description: '高度な分析、A/Bテスト'
            },
            {
              name: 'Premier',
              price: '¥33,000',
              description: 'カスタム機能、専用サポート'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'フルカスタマイゼーション'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'Cadence機能の優秀性',
          '営業リズムの最適化',
          '包括的な営業自動化',
          '豊富なコーチング機能'
        ],
        analysis: 'Cadence機能により営業活動のリズムを最適化し、営業チームの生産性を大幅に向上'
      },
      competitor: {
        points: [
          'Outreach、HubSpotとの競合',
          'Cadence機能の差別化',
          'コーチング機能の優位性',
          'ミッドマーケット特化'
        ],
        analysis: 'セールスエンゲージメント市場で、Cadence機能とコーチング機能で競合他社と差別化'
      },
      company: {
        points: [
          'セールスエンゲージメントの老舗',
          'ミッドマーケット重視',
          '継続的なイノベーション',
          '強力なパートナーシップ'
        ],
        analysis: 'セールスエンゲージメント分野の老舗として、ミッドマーケット市場で強固なポジションを確立'
      },
      commodity: {
        points: [
          'セールスエンゲージメントプラットフォーム',
          '営業自動化ツール',
          'Cadence管理ソリューション',
          '営業コーチングツール'
        ],
        analysis: 'セールスエンゲージメント・営業自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'Cadence機能の強化',
          'ユーザー体験の改善',
          'AI機能の追加'
        ],
        midTerm: [
          'グローバル展開の加速',
          '新機能の追加',
          'エンタープライズ市場への展開'
        ],
        longTerm: [
          'セールスエンゲージメント市場での競争力維持',
          'AI駆動営業プラットフォームの構築',
          '包括的な営業オペレーションへの進化'
        ]
      }
    }
  },
  'pipedrive': {
    company: {
      name: 'Pipedrive',
      foundedDate: '2010年',
      employeeCount: '約1,000人（2023年）',
      revenue: '約150億円（2023年度）',
      customerCount: '10万社以上',
      notableCustomers: [
        'Amazon',
        'Skype',
        'RE/MAX',
        'Vimeo',
        'Heineken'
      ],
      headquarters: 'タリン、エストニア',
      website: 'https://pipedrive.com'
    },
    products: [
      {
        name: 'Pipedrive',
        description: '直感的な営業パイプライン管理に特化したCRMツール',
        features: [
          'ビジュアルパイプライン',
          'ドラッグ&ドロップ操作',
          '活動管理',
          'メール統合',
          '営業レポート',
          'モバイルアプリ',
          'API統合',
          'ワークフロー自動化'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Essential',
              price: '¥1,650',
              description: '基本パイプライン、活動管理'
            },
            {
              name: 'Advanced',
              price: '¥2,750',
              description: 'メール統合、レポート機能'
            },
            {
              name: 'Professional',
              price: '¥5,500',
              description: '自動化、高度なレポート'
            },
            {
              name: 'Enterprise',
              price: '¥11,000',
              description: 'カスタム機能、専用サポート'
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
          'ビジュアルパイプラインの使いやすさ',
          '直感的なインターフェース',
          '手頃な価格設定',
          '豊富な統合機能'
        ],
        analysis: 'ビジュアルパイプライン管理により、営業プロセスを直感的に管理し、中小企業の営業効率を向上'
      },
      competitor: {
        points: [
          'HubSpot、Salesforceとの競合',
          'ビジュアル特化の差別化',
          '価格競争力',
          '使いやすさの優位性'
        ],
        analysis: 'CRM市場で、ビジュアルパイプライン管理と使いやすさを武器に中小企業市場で競合他社と差別化'
      },
      company: {
        points: [
          'エストニア発のグローバル企業',
          '中小企業重視',
          'ユーザー体験重視',
          '継続的な成長'
        ],
        analysis: 'エストニア発のテクノロジー企業として、中小企業向けCRM市場でグローバルに成長'
      },
      commodity: {
        points: [
          'ビジュアルCRMプラットフォーム',
          'パイプライン管理ツール',
          '営業自動化ソリューション',
          '中小企業向けCRM'
        ],
        analysis: 'ビジュアルパイプライン管理・CRMプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'ビジュアル機能の強化',
          'ユーザー体験の改善',
          '統合機能の拡張'
        ],
        midTerm: [
          'AI機能の追加',
          'アジア市場への展開',
          '新機能の開発'
        ],
        longTerm: [
          '中小企業CRM市場でのリーダーポジション維持',
          'AI駆動CRMプラットフォームの構築',
          '包括的な営業プラットフォームへの進化'
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
        'Klarna',
        'Bridgestone',
        'Delivery Hero',
        'Porsche'
      ],
      headquarters: 'サンマテオ、カリフォルニア州、アメリカ',
      website: 'https://freshsales.io'
    },
    products: [
      {
        name: 'Freshsales',
        description: 'AI機能を搭載した使いやすいCRMソリューション',
        features: [
          'AIアシスタント「Freddy」',
          'リード管理',
          '取引管理',
          'メール統合',
          '電話統合',
          '営業レポート',
          'ワークフロー自動化',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本CRM、3ユーザーまで'
            },
            {
              name: 'Growth',
              price: '¥1,980',
              description: 'メール統合、レポート機能'
            },
            {
              name: 'Pro',
              price: '¥5,280',
              description: 'AI機能、高度な自動化'
            },
            {
              name: 'Enterprise',
              price: '¥10,560',
              description: 'カスタム機能、専用サポート'
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
          'AIアシスタント「Freddy」',
          '使いやすいインターフェース',
          '手頃な価格設定',
          '包括的な機能セット'
        ],
        analysis: 'AI機能と使いやすさを両立し、中小企業から大企業まで幅広い営業チームの効率を向上'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          'AI機能の差別化',
          '価格競争力',
          'Freshworksエコシステム'
        ],
        analysis: 'CRM市場で、AI機能とFreshworksエコシステムを活用して競合他社と差別化'
      },
      company: {
        points: [
          'インド発のグローバル企業',
          'SaaS統合プラットフォーム',
          '急成長企業',
          '上場企業'
        ],
        analysis: 'インド発のSaaS企業として、統合プラットフォーム戦略でグローバル市場で成長'
      },
      commodity: {
        points: [
          'AI搭載CRMプラットフォーム',
          '営業自動化ツール',
          '統合ビジネスソリューション',
          'クラウドCRM'
        ],
        analysis: 'AI搭載CRM・営業自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '統合機能の拡張'
        ],
        midTerm: [
          'グローバル展開の加速',
          '新AI機能の開発',
          'エンタープライズ市場への展開'
        ],
        longTerm: [
          'AI駆動CRM市場でのリーダーポジション確立',
          '統合ビジネスプラットフォームの構築',
          '包括的な顧客体験プラットフォームへの進化'
        ]
      }
    }
  },
  'close': {
    company: {
      name: 'Close',
      foundedDate: '2013年',
      employeeCount: '約150人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '8,000社以上',
      notableCustomers: [
        'Twilio',
        'MongoDB',
        'Segment',
        'AngelList',
        'Typeform'
      ],
      headquarters: 'パロアルト、カリフォルニア州、アメリカ',
      website: 'https://close.com'
    },
    products: [
      {
        name: 'Close',
        description: 'インサイドセールスに特化した効率的なCRMツール',
        features: [
          '統合コミュニケーション',
          'メール自動化',
          '電話機能',
          'SMS統合',
          'ビデオ通話',
          '営業レポート',
          'ワークフロー自動化',
          'API統合'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥3,300',
              description: '基本CRM、メール機能'
            },
            {
              name: 'Basic',
              price: '¥8,800',
              description: '電話機能、SMS統合'
            },
            {
              name: 'Professional',
              price: '¥13,200',
              description: 'ビデオ通話、高度な自動化'
            },
            {
              name: 'Business',
              price: '¥22,000',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'インサイドセールスチーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'インサイドセールス特化',
          '統合コミュニケーション',
          'シンプルなインターフェース',
          '高い生産性向上'
        ],
        analysis: 'インサイドセールスに特化した統合コミュニケーション機能により、営業チームの効率を最大化'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          'インサイドセールス特化の差別化',
          '統合コミュニケーションの優位性',
          'スタートアップ向け価格設定'
        ],
        analysis: 'CRM市場で、インサイドセールス特化と統合コミュニケーション機能で競合他社と差別化'
      },
      company: {
        points: [
          'インサイドセールス特化企業',
          'スタートアップ重視',
          'シンプルさ追求',
          '継続的な機能改善'
        ],
        analysis: 'インサイドセールス市場に特化し、シンプルさと効率性を追求する企業文化'
      },
      commodity: {
        points: [
          'インサイドセールスCRM',
          '統合コミュニケーションプラットフォーム',
          '営業自動化ツール',
          'スタートアップ向けCRM'
        ],
        analysis: 'インサイドセールス特化CRM・統合コミュニケーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'コミュニケーション機能の強化',
          'ユーザー体験の改善',
          'AI機能の追加'
        ],
        midTerm: [
          'グローバル展開',
          '新機能の開発',
          'ミッドマーケット市場への展開'
        ],
        longTerm: [
          'インサイドセールスCRM市場でのリーダーポジション確立',
          'AI駆動営業プラットフォームの構築',
          '包括的な営業コミュニケーションプラットフォームへの進化'
        ]
      }
    }
  },
  'woodpecker': {
    company: {
      name: 'Woodpecker.co',
      foundedDate: '2015年',
      employeeCount: '約30人（2023年）',
      revenue: '約8億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Uber',
        'Microsoft',
        'Shopify',
        'Buffer',
        'Typeform'
      ],
      headquarters: 'ワルシャワ、ポーランド',
      website: 'https://woodpecker.co'
    },
    products: [
      {
        name: 'Woodpecker',
        description: 'コールドメール自動化に特化したアウトリーチプラットフォーム',
        features: [
          'コールドメール自動化',
          'パーソナライゼーション',
          'フォローアップシーケンス',
          'A/Bテスト',
          'メール配信性最適化',
          'CRM統合',
          'レポート・分析',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Cold Email',
              price: '¥4,400',
              description: '月間1,000通、基本機能'
            },
            {
              name: 'Cold Email Pro',
              price: '¥8,800',
              description: '月間5,000通、高度な機能'
            },
            {
              name: 'Cold Email & Agency',
              price: '¥17,600',
              description: '月間10,000通、代理店機能'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'マーケティング代理店'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'コールドメール特化',
          '高い配信性',
          'シンプルなUI',
          '手頃な価格設定'
        ],
        analysis: 'コールドメールに特化し、高い配信性と使いやすさで営業チームの効率を向上'
      },
      competitor: {
        points: [
          'Outreach、SalesLoftとの競合',
          'コールドメール特化の差別化',
          '価格競争力',
          'ヨーロッパ市場での強み'
        ],
        analysis: 'コールドメール特化と価格競争力を武器に、大手プラットフォームと差別化'
      },
      company: {
        points: [
          'ポーランド発の企業',
          'コールドメール特化戦略',
          '配信性重視',
          '継続的な機能改善'
        ],
        analysis: 'ヨーロッパ発でコールドメールに特化し、配信性を重視した企業文化'
      },
      commodity: {
        points: [
          'コールドメール自動化ツール',
          'アウトリーチプラットフォーム',
          'メール配信性ツール',
          '営業自動化ソリューション'
        ],
        analysis: 'コールドメール自動化・アウトリーチプラットフォーム'
      },
      strategy: {
        shortTerm: [
          '配信性の向上',
          'ユーザー体験の改善',
          'AI機能の追加'
        ],
        midTerm: [
          'グローバル展開',
          '新機能の開発',
          'エンタープライズ市場への展開'
        ],
        longTerm: [
          'コールドメール市場でのリーダーポジション確立',
          'AI駆動パーソナライゼーションの実現',
          '包括的なアウトリーチプラットフォームへの進化'
        ]
      }
    }
  },
  'reply': {
    company: {
      name: 'Reply',
      foundedDate: '2014年',
      employeeCount: '約200人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '3,000社以上',
      notableCustomers: [
        'Uber',
        'Shopify',
        'Pipedrive',
        'Zendesk',
        'Typeform'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://reply.io'
    },
    products: [
      {
        name: 'Reply',
        description: 'AI駆動のマルチチャネル営業エンゲージメントプラットフォーム',
        features: [
          'マルチチャネル自動化',
          'AI搭載パーソナライゼーション',
          'メール・LinkedIn・電話統合',
          'リード獲得',
          'CRM統合',
          'A/Bテスト',
          '営業分析',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥6,600',
              description: '基本機能、1,000通/月'
            },
            {
              name: 'Professional',
              price: '¥11,000',
              description: '高度な機能、5,000通/月'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'マルチチャネル対応',
          'AI駆動パーソナライゼーション',
          '包括的な機能セット',
          '高い自動化レベル'
        ],
        analysis: 'マルチチャネル対応とAI機能により、営業チームの効率を大幅に向上'
      },
      competitor: {
        points: [
          'Outreach、SalesLoftとの競合',
          'AI機能の差別化',
          'マルチチャネル対応',
          '価格競争力'
        ],
        analysis: 'AI機能とマルチチャネル対応を武器に、競合他社と差別化'
      },
      company: {
        points: [
          'AI技術重視',
          'マルチチャネル戦略',
          '急成長企業',
          '継続的なイノベーション'
        ],
        analysis: 'AI技術とマルチチャネル戦略により、急速に成長する企業'
      },
      commodity: {
        points: [
          'マルチチャネル営業プラットフォーム',
          'AI駆動エンゲージメントツール',
          '営業自動化ソリューション',
          'リード獲得プラットフォーム'
        ],
        analysis: 'AI駆動マルチチャネル営業エンゲージメント・自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新チャネルの追加'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'AI駆動営業プラットフォーム市場でのリーダーポジション確立',
          '次世代営業技術の開発',
          '包括的な営業オペレーションプラットフォームへの進化'
        ]
      }
    }
  },
  'lemlist': {
    company: {
      name: 'Lemlist',
      foundedDate: '2018年',
      employeeCount: '約80人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Uber',
        'Microsoft',
        'Shopify',
        'Zendesk',
        'Typeform'
      ],
      headquarters: 'パリ、フランス',
      website: 'https://lemlist.com'
    },
    products: [
      {
        name: 'lemlist',
        description: 'パーソナライゼーションに特化したコールドアウトリーチプラットフォーム',
        features: [
          'パーソナライズド画像・動画',
          'マルチチャネル自動化',
          'LinkedIn統合',
          'メール配信性最適化',
          'CRM統合',
          'A/Bテスト',
          'リード獲得',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Email Outreach',
              price: '¥6,600',
              description: 'メールアウトリーチ、基本機能'
            },
            {
              name: 'Sales Engagement',
              price: '¥11,000',
              description: 'マルチチャネル、高度な機能'
            },
            {
              name: 'Outreach Scale',
              price: '¥16,500',
              description: 'エージェンシー機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'マーケティング代理店'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'パーソナライゼーション特化',
          '画像・動画カスタマイズ',
          'マルチチャネル対応',
          'クリエイティブな機能'
        ],
        analysis: 'パーソナライゼーションに特化し、クリエイティブなアプローチで営業効率を向上'
      },
      competitor: {
        points: [
          'Outreach、Woodpeckerとの競合',
          'パーソナライゼーション特化の差別化',
          'クリエイティブ機能',
          'ヨーロッパ市場での強み'
        ],
        analysis: 'パーソナライゼーション特化とクリエイティブ機能で競合他社と差別化'
      },
      company: {
        points: [
          'フランス発の企業',
          'パーソナライゼーション重視',
          'クリエイティブ文化',
          '急成長企業'
        ],
        analysis: 'フランス発でパーソナライゼーションとクリエイティビティを重視する企業文化'
      },
      commodity: {
        points: [
          'パーソナライズドアウトリーチツール',
          'マルチチャネル営業プラットフォーム',
          'クリエイティブ営業ツール',
          'コールドメール自動化'
        ],
        analysis: 'パーソナライズドアウトリーチ・マルチチャネル営業プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'パーソナライゼーション機能の強化',
          'ユーザー体験の改善',
          'AI機能の追加'
        ],
        midTerm: [
          'グローバル展開',
          '新機能の開発',
          'エンタープライズ市場への展開'
        ],
        longTerm: [
          'パーソナライズドアウトリーチ市場でのリーダーポジション確立',
          'AI駆動クリエイティブプラットフォームの構築',
          '包括的な営業クリエイティブプラットフォームへの進化'
        ]
      }
    }
  },
  'instantly': {
    company: {
      name: 'Instantly',
      foundedDate: '2020年',
      employeeCount: '約50人（2023年）',
      revenue: '約12億円（2023年度）',
      customerCount: '5,000社以上',
      notableCustomers: [
        'Shopify',
        'Typeform',
        'Buffer',
        'Zendesk',
        'Pipedrive'
      ],
      headquarters: 'デラウェア州、アメリカ',
      website: 'https://instantly.ai'
    },
    products: [
      {
        name: 'Instantly',
        description: 'コールドメール配信性に特化したアウトリーチプラットフォーム',
        features: [
          '無制限メールアカウント',
          '高い配信性',
          'AI搭載ライティング',
          'メールウォームアップ',
          'CRM統合',
          'A/Bテスト',
          'リアルタイム分析',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Growth',
              price: '¥4,400',
              description: '1,000リード/月、基本機能'
            },
            {
              name: 'Hypergrowth',
              price: '¥11,000',
              description: '5,000リード/月、高度な機能'
            },
            {
              name: 'Light Speed',
              price: '¥22,000',
              description: '12,000リード/月、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '配信性重視',
          '無制限メールアカウント',
          'AI搭載機能',
          '手頃な価格設定'
        ],
        analysis: '配信性に特化し、無制限メールアカウントで営業チームのスケーラビリティを向上'
      },
      competitor: {
        points: [
          'Woodpecker、Lemlistとの競合',
          '配信性特化の差別化',
          '価格競争力',
          'AI機能の統合'
        ],
        analysis: '配信性特化と価格競争力を武器に、競合他社と差別化'
      },
      company: {
        points: [
          '新興企業',
          '配信性特化戦略',
          'AI技術重視',
          '急成長企業'
        ],
        analysis: '配信性とAI技術に特化し、急速に成長する新興企業'
      },
      commodity: {
        points: [
          'コールドメール配信プラットフォーム',
          'メール配信性ツール',
          'AI搭載アウトリーチツール',
          '営業自動化ソリューション'
        ],
        analysis: 'コールドメール配信性・AI搭載アウトリーチプラットフォーム'
      },
      strategy: {
        shortTerm: [
          '配信性の向上',
          'AI機能の強化',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'グローバル展開',
          '新機能の開発',
          'エンタープライズ市場への展開'
        ],
        longTerm: [
          'コールドメール配信性市場でのリーダーポジション確立',
          'AI駆動営業プラットフォームの構築',
          '包括的な営業自動化プラットフォームへの進化'
        ]
      }
    }
  },
  'capsule': {
    company: {
      name: 'Capsule CRM',
      foundedDate: '2009年',
      employeeCount: '約50人（2023年）',
      revenue: '約10億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Virgin',
        'Spotify',
        'Airbnb',
        'Buffer',
        'Typeform'
      ],
      headquarters: 'マンチェスター、イギリス',
      website: 'https://capsulecrm.com'
    },
    products: [
      {
        name: 'Capsule CRM',
        description: 'シンプルで使いやすい中小企業向けCRM',
        features: [
          'コンタクト管理',
          '営業パイプライン',
          'タスク管理',
          'メール統合',
          'レポート機能',
          'モバイルアプリ',
          'API統合',
          'カスタムフィールド'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '2ユーザー、250コンタクト'
            },
            {
              name: 'Professional',
              price: '¥2,200',
              description: '無制限コンタクト、高度な機能'
            },
            {
              name: 'Teams',
              price: '¥4,400',
              description: 'チーム機能、カスタムフィールド'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'スタートアップ',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'シンプルなインターフェース',
          '使いやすさ重視',
          '手頃な価格設定',
          '迅速な導入'
        ],
        analysis: 'シンプルさと使いやすさを重視し、中小企業の営業チームに最適化されたCRM'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          'シンプルさの差別化',
          '価格競争力',
          'イギリス市場での強み'
        ],
        analysis: 'シンプルさと価格競争力を武器に、複雑なCRMとの差別化を実現'
      },
      company: {
        points: [
          'イギリス発の企業',
          'シンプルさ重視',
          '中小企業特化',
          '継続的な改善'
        ],
        analysis: 'イギリス発でシンプルさを重視し、中小企業市場に特化した企業文化'
      },
      commodity: {
        points: [
          'シンプルCRMプラットフォーム',
          '中小企業向けCRM',
          'コンタクト管理ツール',
          '営業パイプライン管理'
        ],
        analysis: 'シンプル・中小企業向けCRMプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'ユーザー体験の改善',
          '新機能の追加',
          'モバイル機能の強化'
        ],
        midTerm: [
          'グローバル展開',
          'AI機能の統合',
          'エンタープライズ機能の追加'
        ],
        longTerm: [
          'シンプルCRM市場でのリーダーポジション確立',
          'AI駆動営業プラットフォームの構築',
          '包括的な中小企業向け営業ソリューションへの進化'
        ]
      }
    }
  },
  'salesmate': {
    company: {
      name: 'Salesmate',
      foundedDate: '2016年',
      employeeCount: '約100人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '5,000社以上',
      notableCustomers: [
        'Shopify',
        'Buffer',
        'Typeform',
        'Zendesk',
        'Pipedrive'
      ],
      headquarters: 'アーメダバード、インド',
      website: 'https://salesmate.io'
    },
    products: [
      {
        name: 'Salesmate CRM',
        description: '営業チーム向けの包括的なCRMプラットフォーム',
        features: [
          'ビジュアルパイプライン',
          'コンタクト管理',
          'メール統合',
          '営業自動化',
          'レポート・分析',
          'モバイルアプリ',
          'API統合',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥1,650',
              description: '基本CRM機能、メール統合'
            },
            {
              name: 'Growth',
              price: '¥3,300',
              description: '自動化、高度なレポート'
            },
            {
              name: 'Boost',
              price: '¥5,500',
              description: 'カスタムフィールド、API統合'
            },
            {
              name: 'Enterprise',
              price: '要相談',
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
          '包括的な機能セット',
          '使いやすいインターフェース',
          '手頃な価格設定',
          '豊富な統合機能'
        ],
        analysis: '包括的な機能と使いやすさを両立し、営業チームの生産性を向上'
      },
      competitor: {
        points: [
          'HubSpot、Pipedriveとの競合',
          '価格競争力',
          '包括的機能セット',
          'インド市場での強み'
        ],
        analysis: '価格競争力と包括的機能セットを武器に、競合他社と差別化'
      },
      company: {
        points: [
          'インド発の企業',
          '急成長企業',
          'テクノロジー重視',
          'グローバル展開'
        ],
        analysis: 'インド発でテクノロジーを重視し、グローバル市場で急成長する企業'
      },
      commodity: {
        points: [
          '包括的CRMプラットフォーム',
          '営業自動化ツール',
          'パイプライン管理システム',
          'チーム管理ソリューション'
        ],
        analysis: '包括的CRM・営業自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の統合',
          'ユーザー体験の改善',
          '新機能の追加'
        ],
        midTerm: [
          'グローバル展開の加速',
          'エンタープライズ市場への展開',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'CRM市場でのグローバルプレイヤーとしての地位確立',
          'AI駆動営業プラットフォームの構築',
          '包括的な営業オペレーションプラットフォームへの進化'
        ]
      }
    }
  },
  'streak': {
    company: {
      name: 'Streak',
      foundedDate: '2011年',
      employeeCount: '約50人（2023年）',
      revenue: '約12億円（2023年度）',
      customerCount: '75万ユーザー以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Buffer',
        'Typeform'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://streak.com'
    },
    products: [
      {
        name: 'Streak',
        description: 'Gmail統合型のCRMプラットフォーム',
        features: [
          'Gmail統合',
          'パイプライン管理',
          'メール追跡',
          'スニペット機能',
          'メール配信予約',
          'CRM統合',
          'チーム共有',
          'モバイルアプリ'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本機能、個人利用'
            },
            {
              name: 'Pro',
              price: '¥5,500',
              description: '高度な機能、チーム利用'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'Gmail統合の使いやすさ',
          'シンプルなインターフェース',
          '無料プランの充実',
          '迅速な導入'
        ],
        analysis: 'Gmail統合により、既存のワークフローを変えることなくCRM機能を提供'
      },
      competitor: {
        points: [
          'Mixmax、HubSpotとの競合',
          'Gmail統合特化の差別化',
          '無料プランの競争力',
          'シンプルさの優位性'
        ],
        analysis: 'Gmail統合特化とシンプルさを武器に、複雑なCRMとの差別化を実現'
      },
      company: {
        points: [
          'Gmail統合特化企業',
          'シンプルさ重視',
          'フリーミアムモデル',
          '継続的な改善'
        ],
        analysis: 'Gmail統合に特化し、シンプルさとフリーミアムモデルで成長する企業'
      },
      commodity: {
        points: [
          'Gmail統合CRM',
          'メール管理ツール',
          'パイプライン管理システム',
          'チームコラボレーションツール'
        ],
        analysis: 'Gmail統合CRM・メール管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'Gmail統合の深化',
          'ユーザー体験の改善',
          'AI機能の追加'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          '新機能の開発',
          'グローバル展開'
        ],
        longTerm: [
          'Gmail統合CRM市場でのリーダーポジション確立',
          'AI駆動メール管理プラットフォームの構築',
          '包括的なメールベース営業ソリューションへの進化'
        ]
      }
    }
  },
  'bitrix24': {
    company: {
      name: 'Bitrix24',
      foundedDate: '2012年',
      employeeCount: '約500人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '1,200万社以上',
      notableCustomers: [
        'BMW',
        'Coca-Cola',
        'Hyundai',
        'Toyota',
        'Samsung'
      ],
      headquarters: 'アレクサンドリア、バージニア州、アメリカ',
      website: 'https://bitrix24.com'
    },
    products: [
      {
        name: 'Bitrix24',
        description: 'オールインワンビジネスプラットフォーム',
        features: [
          'CRM機能',
          'プロジェクト管理',
          'チャット・ビデオ会議',
          'ドキュメント管理',
          'ウェブサイトビルダー',
          'オンラインストア',
          'HR管理',
          'タスク管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '12ユーザー、基本機能'
            },
            {
              name: 'Basic',
              price: '¥5,500',
              description: '5ユーザー、24GB'
            },
            {
              name: 'Standard',
              price: '¥11,000',
              description: '50ユーザー、100GB'
            },
            {
              name: 'Professional',
              price: '¥22,000',
              description: '100ユーザー、1TB'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'ミッドマーケット',
          '全業界'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'オールインワンソリューション',
          '豊富な無料機能',
          '包括的な機能セット',
          'コストパフォーマンス'
        ],
        analysis: 'オールインワンプラットフォームにより、複数ツールの統合コストを削減'
      },
      competitor: {
        points: [
          'Microsoft 365、Google Workspaceとの競合',
          'オールインワンの差別化',
          '価格競争力',
          'ロシア・CIS市場での強み'
        ],
        analysis: 'オールインワンアプローチと価格競争力を武器に、大手プラットフォームと差別化'
      },
      company: {
        points: [
          'ロシア発の企業',
          'オールインワン戦略',
          'グローバル展開',
          '継続的な機能拡張'
        ],
        analysis: 'ロシア発でオールインワン戦略により、グローバル市場で成長する企業'
      },
      commodity: {
        points: [
          'オールインワンビジネスプラットフォーム',
          'CRM・プロジェクト管理統合',
          'コラボレーションツール',
          'ビジネス管理ソリューション'
        ],
        analysis: 'オールインワンビジネス・コラボレーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の統合',
          'ユーザー体験の改善',
          '新機能の追加'
        ],
        midTerm: [
          'グローバル展開の加速',
          'エンタープライズ機能の強化',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'オールインワンビジネスプラットフォーム市場でのリーダーポジション確立',
          'AI駆動ビジネスプラットフォームの構築',
          '包括的なデジタルワークプレイスへの進化'
        ]
      }
    }
  },
  'proposify': {
    company: {
      name: 'Proposify',
      foundedDate: '2013年',
      employeeCount: '約100人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '4,000社以上',
      notableCustomers: [
        'Shopify',
        'Buffer',
        'Typeform',
        'Zendesk',
        'Pipedrive'
      ],
      headquarters: 'ハリファックス、ノバスコシア州、カナダ',
      website: 'https://proposify.com'
    },
    products: [
      {
        name: 'Proposify',
        description: '営業提案書作成・管理プラットフォーム',
        features: [
          '提案書テンプレート',
          'ドラッグ&ドロップエディター',
          'デジタル署名',
          '提案書追跡',
          'CRM統合',
          'チーム管理',
          'レポート・分析',
          'モバイル対応'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Team',
              price: '¥2,750',
              description: '基本機能、5ユーザー'
            },
            {
              name: 'Business',
              price: '¥5,500',
              description: '高度な機能、15ユーザー'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
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
          '使いやすいエディター',
          '豊富なテンプレート',
          '提案書追跡機能',
          'CRM統合'
        ],
        analysis: '営業提案書作成に特化し、営業チームの提案プロセスを効率化'
      },
      competitor: {
        points: [
          'PandaDoc、Qwilrとの競合',
          '提案書特化の差別化',
          'デザイン性の優位性',
          'カナダ市場での強み'
        ],
        analysis: '提案書作成に特化し、デザイン性と使いやすさで競合他社と差別化'
      },
      company: {
        points: [
          'カナダ発の企業',
          '提案書特化戦略',
          'デザイン重視',
          '継続的な機能改善'
        ],
        analysis: 'カナダ発で提案書作成に特化し、デザインと使いやすさを重視する企業文化'
      },
      commodity: {
        points: [
          '提案書作成プラットフォーム',
          'ドキュメント管理ツール',
          '営業支援ソリューション',
          'デジタル署名ツール'
        ],
        analysis: '営業提案書作成・管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の改善',
          '新テンプレートの追加'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          '新機能の開発'
        ],
        longTerm: [
          '提案書作成市場でのリーダーポジション確立',
          'AI駆動提案書プラットフォームの構築',
          '包括的な営業ドキュメントプラットフォームへの進化'
        ]
      }
    }
  },
  'beautiful-ai': {
    company: {
      name: 'Beautiful.AI',
      foundedDate: '2015年',
      employeeCount: '約80人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '3万社以上',
      notableCustomers: [
        'Microsoft',
        'Shopify',
        'Buffer',
        'Typeform',
        'Zendesk'
      ],
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
          'プレゼンテーション分析',
          'モバイル対応',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本機能、3プレゼンテーション'
            },
            {
              name: 'Pro',
              price: '¥1,650',
              description: '無制限プレゼンテーション、高度な機能'
            },
            {
              name: 'Team',
              price: '¥1,650',
              description: 'チーム機能、ブランドキット'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'AI搭載デザイン',
          'プロフェッショナルなテンプレート',
          '使いやすいインターフェース',
          '手頃な価格設定'
        ],
        analysis: 'AI技術により、デザインスキルがなくてもプロフェッショナルなプレゼンテーションを作成可能'
      },
      competitor: {
        points: [
          'PowerPoint、Canvaとの競合',
          'AI機能の差別化',
          'デザイン自動化',
          'プレゼンテーション特化'
        ],
        analysis: 'AI搭載デザイン機能を武器に、従来のプレゼンテーションツールと差別化'
      },
      company: {
        points: [
          'AI技術重視',
          'デザイン自動化',
          'プレゼンテーション特化',
          '継続的なイノベーション'
        ],
        analysis: 'AI技術とデザイン自動化に特化し、プレゼンテーション市場で革新を推進'
      },
      commodity: {
        points: [
          'AI搭載プレゼンテーションツール',
          'デザイン自動化プラットフォーム',
          'ビジネスプレゼンテーション作成',
          'チームコラボレーションツール'
        ],
        analysis: 'AI搭載プレゼンテーション作成・デザイン自動化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'テンプレートの拡充',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          '新機能の開発'
        ],
        longTerm: [
          'AI搭載プレゼンテーション市場でのリーダーポジション確立',
          '次世代デザイン自動化技術の開発',
          '包括的なビジュアルコミュニケーションプラットフォームへの進化'
        ]
      }
    }
  },
  'canva': {
    company: {
      name: 'Canva',
      foundedDate: '2013年',
      employeeCount: '約4,000人（2023年）',
      revenue: '約200億円（2023年度）',
      customerCount: '1億3千万ユーザー以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'シドニー、オーストラリア',
      website: 'https://canva.com'
    },
    products: [
      {
        name: 'Canva',
        description: 'オンラインデザインプラットフォーム',
        features: [
          'ドラッグ&ドロップエディター',
          '豊富なテンプレート',
          'ストック写真・イラスト',
          'チームコラボレーション',
          'ブランドキット',
          'プレゼンテーション作成',
          'ソーシャルメディア投稿',
          'プリント機能'
        ],
        pricing: {
          model: 'フリーミアム（月額）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本機能、限定テンプレート'
            },
            {
              name: 'Pro',
              price: '¥1,650',
              description: 'プレミアムテンプレート、ブランドキット'
            },
            {
              name: 'Teams',
              price: '¥2,200',
              description: 'チーム機能、管理者権限'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          '全業界',
          '中小企業',
          'マーケティングチーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '使いやすいインターフェース',
          '豊富なテンプレート',
          '手頃な価格設定',
          '幅広い用途'
        ],
        analysis: 'デザインスキルがなくても、プロフェッショナルなデザインを簡単に作成可能'
      },
      competitor: {
        points: [
          'Adobe Creative Suite、Figmaとの競合',
          '使いやすさの差別化',
          '価格競争力',
          'テンプレートの豊富さ'
        ],
        analysis: '使いやすさと価格競争力を武器に、プロ向けデザインツールとの差別化を実現'
      },
      company: {
        points: [
          'オーストラリア発のユニコーン企業',
          'デザイン民主化',
          'グローバル展開',
          '継続的なイノベーション'
        ],
        analysis: 'デザインの民主化を推進し、グローバル市場で急成長するユニコーン企業'
      },
      commodity: {
        points: [
          'オンラインデザインプラットフォーム',
          'グラフィックデザインツール',
          'マーケティング素材作成',
          'チームコラボレーションツール'
        ],
        analysis: 'オンラインデザイン・グラフィック作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'テンプレートの拡充',
          'ユーザー体験の改善'
        ],
        midTerm: [
          '動画編集機能の強化',
          'エンタープライズ市場への展開',
          '新機能の開発'
        ],
        longTerm: [
          'オンラインデザイン市場でのリーダーポジション維持',
          'AI駆動デザインプラットフォームの構築',
          '包括的なビジュアルコンテンツプラットフォームへの進化'
        ]
      }
    }
  },
  'pitch': {
    company: {
      name: 'Pitch',
      foundedDate: '2019年',
      employeeCount: '約100人（2023年）',
      revenue: '約10億円（2023年度）',
      customerCount: '1万社以上',
      notableCustomers: [
        'Shopify',
        'Buffer',
        'Typeform',
        'Zendesk',
        'Pipedrive'
      ],
      headquarters: 'ベルリン、ドイツ',
      website: 'https://pitch.com'
    },
    products: [
      {
        name: 'Pitch',
        description: 'チーム向けプレゼンテーション作成プラットフォーム',
        features: [
          'リアルタイムコラボレーション',
          'プロフェッショナルテンプレート',
          'ブランドキット',
          'プレゼンテーション分析',
          'コメント・フィードバック',
          'バージョン管理',
          'モバイル対応',
          'API統合'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本機能、5プレゼンテーション'
            },
            {
              name: 'Pro',
              price: '¥1,100',
              description: '無制限プレゼンテーション、高度な機能'
            },
            {
              name: 'Business',
              price: '¥2,200',
              description: 'チーム機能、ブランドキット'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'リアルタイムコラボレーション',
          'プロフェッショナルなデザイン',
          '使いやすいインターフェース',
          'チーム機能'
        ],
        analysis: 'チームでのプレゼンテーション作成に特化し、コラボレーション機能を強化'
      },
      competitor: {
        points: [
          'PowerPoint、Google Slidesとの競合',
          'コラボレーション機能の差別化',
          'デザイン性の優位性',
          'ヨーロッパ市場での強み'
        ],
        analysis: 'リアルタイムコラボレーションとデザイン性を武器に、従来のプレゼンテーションツールと差別化'
      },
      company: {
        points: [
          'ドイツ発の企業',
          'チームコラボレーション重視',
          'デザイン性追求',
          '急成長企業'
        ],
        analysis: 'ドイツ発でチームコラボレーションとデザイン性を重視する企業文化'
      },
      commodity: {
        points: [
          'チーム向けプレゼンテーションツール',
          'コラボレーションプラットフォーム',
          'デザインツール',
          'ビジネスプレゼンテーション作成'
        ],
        analysis: 'チーム向けプレゼンテーション作成・コラボレーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'コラボレーション機能の強化',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          '新機能の開発'
        ],
        longTerm: [
          'チーム向けプレゼンテーション市場でのリーダーポジション確立',
          'AI駆動コラボレーションプラットフォームの構築',
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
      revenue: '約50億円（2023年度）',
      customerCount: '10万社以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://prezi.com'
    },
    products: [
      {
        name: 'Prezi',
        description: 'ズーミングプレゼンテーションプラットフォーム',
        features: [
          'ズーミングインターフェース',
          'インタラクティブプレゼンテーション',
          'リアルタイムコラボレーション',
          'プレゼンテーション分析',
          'モバイル対応',
          'オフライン機能',
          'ブランドキット',
          'チーム管理'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Basic',
              price: '無料',
              description: '基本機能、公開プレゼンテーション'
            },
            {
              name: 'Plus',
              price: '¥660',
              description: 'プライベート機能、高度なエディター'
            },
            {
              name: 'Premium',
              price: '¥2,200',
              description: 'プレミアム機能、分析'
            },
            {
              name: 'Teams',
              price: '¥6,600',
              description: 'チーム機能、管理者権限'
            }
          ]
        },
        targetMarket: [
          '教育機関',
          '中小企業',
          'マーケティングチーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'ユニークなズーミング機能',
          'インタラクティブ性',
          '視覚的インパクト',
          '手頃な価格設定'
        ],
        analysis: 'ズーミング機能により、従来のスライド形式とは異なる視覚的インパクトのあるプレゼンテーションを提供'
      },
      competitor: {
        points: [
          'PowerPoint、Canvaとの競合',
          'ズーミング機能の差別化',
          'インタラクティブ性の優位性',
          'クリエイティブ表現力'
        ],
        analysis: 'ズーミング機能とインタラクティブ性を武器に、従来のプレゼンテーションツールと差別化'
      },
      company: {
        points: [
          'ハンガリー発の企業',
          'イノベーション重視',
          'クリエイティブ文化',
          'グローバル展開'
        ],
        analysis: 'ハンガリー発でイノベーションとクリエイティビティを重視し、グローバル市場で成長'
      },
      commodity: {
        points: [
          'ズーミングプレゼンテーションツール',
          'インタラクティブプレゼンテーション',
          'ビジュアルコミュニケーション',
          'クリエイティブプレゼンテーション'
        ],
        analysis: 'ズーミング・インタラクティブプレゼンテーションプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の改善',
          '新機能の開発'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'VR/AR機能の統合',
          'グローバル展開の加速'
        ],
        longTerm: [
          'インタラクティブプレゼンテーション市場でのリーダーポジション確立',
          '次世代ビジュアルコミュニケーション技術の開発',
          '包括的なビジュアルストーリーテリングプラットフォームへの進化'
        ]
      }
    }
  },
  'demodesk': {
    company: {
      name: 'Demodesk',
      foundedDate: '2017年',
      employeeCount: '約150人（2023年）',
      revenue: '約25億円（2023年度）',
      customerCount: '1,000社以上',
      notableCustomers: [
        'Shopify',
        'Buffer',
        'Typeform',
        'Zendesk',
        'Pipedrive'
      ],
      headquarters: 'ミュンヘン、ドイツ',
      website: 'https://demodesk.com'
    },
    products: [
      {
        name: 'Demodesk',
        description: '営業デモ・ミーティング最適化プラットフォーム',
        features: [
          'インテリジェントスケジューリング',
          'デモ録画・分析',
          'リアルタイムコーチング',
          'CRM統合',
          'カスタマイズ可能なデモ環境',
          'チーム管理',
          'パフォーマンス分析',
          'モバイル対応'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥6,600',
              description: '基本機能、デモ録画'
            },
            {
              name: 'Professional',
              price: '¥11,000',
              description: '高度な分析、コーチング機能'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'デモ特化機能',
          'インテリジェントスケジューリング',
          'リアルタイムコーチング',
          '包括的な分析'
        ],
        analysis: '営業デモに特化し、スケジューリングから分析まで包括的にサポート'
      },
      competitor: {
        points: [
          'Zoom、Gongとの競合',
          'デモ特化の差別化',
          'インテリジェント機能',
          'ヨーロッパ市場での強み'
        ],
        analysis: 'デモ特化機能とインテリジェント機能を武器に、汎用ツールとの差別化を実現'
      },
      company: {
        points: [
          'ドイツ発の企業',
          'デモ特化戦略',
          'AI技術重視',
          '急成長企業'
        ],
        analysis: 'ドイツ発でデモ特化とAI技術を重視し、急速に成長する企業'
      },
      commodity: {
        points: [
          '営業デモプラットフォーム',
          'ミーティング最適化ツール',
          '営業コーチングソリューション',
          'パフォーマンス分析ツール'
        ],
        analysis: '営業デモ・ミーティング最適化プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新機能の追加'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          '営業デモ市場でのリーダーポジション確立',
          'AI駆動営業コーチングプラットフォームの構築',
          '包括的な営業パフォーマンス最適化プラットフォームへの進化'
        ]
      }
    }
  },
  'cloudapp': {
    company: {
      name: 'CloudApp',
      foundedDate: '2010年',
      employeeCount: '約50人（2023年）',
      revenue: '約8億円（2023年度）',
      customerCount: '400万ユーザー以上',
      notableCustomers: [
        'Uber',
        'Airbnb',
        'Shopify',
        'Buffer',
        'Typeform'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://getcloudapp.com'
    },
    products: [
      {
        name: 'CloudApp',
        description: 'ビジュアルコミュニケーション・画面共有プラットフォーム',
        features: [
          'スクリーンショット・録画',
          'GIF作成',
          'アノテーション機能',
          'インスタント共有',
          'チーム管理',
          'ブランドカスタマイズ',
          'セキュリティ機能',
          'API統合'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本機能、25アイテム/月'
            },
            {
              name: 'Pro',
              price: '¥1,100',
              description: '無制限アイテム、高度な機能'
            },
            {
              name: 'Team',
              price: '¥1,100',
              description: 'チーム機能、管理者権限'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'サポートチーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'シンプルな操作性',
          'インスタント共有',
          '豊富な機能セット',
          '手頃な価格設定'
        ],
        analysis: 'ビジュアルコミュニケーションに特化し、簡単操作でプロフェッショナルなコンテンツを作成'
      },
      competitor: {
        points: [
          'Loom、Snagitとの競合',
          'オールインワン機能の差別化',
          '価格競争力',
          'シンプルさの優位性'
        ],
        analysis: 'オールインワン機能とシンプルさを武器に、専門ツールとの差別化を実現'
      },
      company: {
        points: [
          'ビジュアルコミュニケーション特化',
          'シンプルさ重視',
          'フリーミアムモデル',
          '継続的な機能改善'
        ],
        analysis: 'ビジュアルコミュニケーションに特化し、シンプルさとフリーミアムモデルで成長'
      },
      commodity: {
        points: [
          'ビジュアルコミュニケーションツール',
          'スクリーンキャプチャソリューション',
          'チームコラボレーションツール',
          'コンテンツ共有プラットフォーム'
        ],
        analysis: 'ビジュアルコミュニケーション・画面共有プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の改善',
          '新機能の開発'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'ビジュアルコミュニケーション市場でのリーダーポジション確立',
          'AI駆動コンテンツ作成プラットフォームの構築',
          '包括的なビジュアルワークフロープラットフォームへの進化'
        ]
      }
    }
  },
  'loom': {
    company: {
      name: 'Loom',
      foundedDate: '2015年',
      employeeCount: '約300人（2023年）',
      revenue: '約50億円（2023年度）',
      customerCount: '2,100万ユーザー以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'HubSpot'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://loom.com'
    },
    products: [
      {
        name: 'Loom',
        description: '非同期ビデオコミュニケーションプラットフォーム',
        features: [
          'ワンクリック録画',
          'インスタント共有',
          'ビデオ編集',
          'コメント・反応機能',
          'チーム管理',
          'セキュリティ機能',
          'API統合',
          'モバイル対応'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '無料',
              description: '基本機能、25ビデオ/月'
            },
            {
              name: 'Business',
              price: '¥1,100',
              description: '無制限ビデオ、高度な機能'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'スタートアップ',
          '中小企業',
          'リモートチーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'ワンクリック録画',
          '非同期コミュニケーション',
          'シンプルな操作性',
          '豊富な無料機能'
        ],
        analysis: '非同期ビデオコミュニケーションにより、リモートワークの効率を大幅に向上'
      },
      competitor: {
        points: [
          'Zoom、CloudAppとの競合',
          '非同期特化の差別化',
          'シンプルさの優位性',
          '無料プランの競争力'
        ],
        analysis: '非同期ビデオコミュニケーション特化とシンプルさを武器に、汎用ツールとの差別化を実現'
      },
      company: {
        points: [
          '非同期コミュニケーション重視',
          'リモートワーク文化',
          'フリーミアムモデル',
          '急成長企業'
        ],
        analysis: '非同期コミュニケーションとリモートワーク文化を重視し、急速に成長する企業'
      },
      commodity: {
        points: [
          '非同期ビデオプラットフォーム',
          'スクリーン録画ツール',
          'リモートコミュニケーション',
          'チームコラボレーションツール'
        ],
        analysis: '非同期ビデオコミュニケーション・録画プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新機能の追加'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          '非同期ビデオコミュニケーション市場でのリーダーポジション維持',
          'AI駆動ビデオプラットフォームの構築',
          '包括的な非同期ワークプラットフォームへの進化'
        ]
      }
    }
  },
  'navattic': {
    company: {
      name: 'Navattic',
      foundedDate: '2020年',
      employeeCount: '約30人（2023年）',
      revenue: '約5億円（2023年度）',
      customerCount: '500社以上',
      notableCustomers: [
        'Shopify',
        'Buffer',
        'Typeform',
        'Zendesk',
        'Pipedrive'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://navattic.com'
    },
    products: [
      {
        name: 'Navattic',
        description: 'インタラクティブプロダクトデモ作成プラットフォーム',
        features: [
          'ノーコードデモ作成',
          'インタラクティブツアー',
          'デモ分析',
          'リード獲得',
          'CRM統合',
          'カスタムブランディング',
          'A/Bテスト',
          'チーム管理'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Starter',
              price: '¥11,000',
              description: '基本機能、3デモ'
            },
            {
              name: 'Growth',
              price: '¥22,000',
              description: '高度な機能、10デモ'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'SaaS企業',
          'ミッドマーケット',
          'マーケティングチーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'ノーコードデモ作成',
          'インタラクティブ体験',
          'リード獲得機能',
          '詳細な分析'
        ],
        analysis: 'インタラクティブプロダクトデモにより、見込み客の関心を高め、コンバージョン率を向上'
      },
      competitor: {
        points: [
          'Storylane、Demoboothとの競合',
          'ノーコード特化の差別化',
          'インタラクティブ性の優位性',
          'SaaS特化'
        ],
        analysis: 'ノーコードでのデモ作成とインタラクティブ性を武器に、競合他社と差別化'
      },
      company: {
        points: [
          '新興企業',
          'プロダクトデモ特化',
          'SaaS重視',
          '急成長企業'
        ],
        analysis: 'プロダクトデモに特化し、SaaS企業向けに最適化された新興企業'
      },
      commodity: {
        points: [
          'インタラクティブデモプラットフォーム',
          'プロダクトツアー作成',
          'リード獲得ツール',
          'マーケティング自動化'
        ],
        analysis: 'インタラクティブプロダクトデモ・ツアー作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の改善',
          '新機能の開発'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'インタラクティブデモ市場でのリーダーポジション確立',
          'AI駆動デモプラットフォームの構築',
          '包括的なプロダクトマーケティングプラットフォームへの進化'
        ]
      }
    }
  },
  'qwilr': {
    company: {
      name: 'Qwilr',
      foundedDate: '2014年',
      employeeCount: '約100人（2023年）',
      revenue: '約20億円（2023年度）',
      customerCount: '3万社以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'シドニー、オーストラリア',
      website: 'https://qwilr.com'
    },
    products: [
      {
        name: 'Qwilr',
        description: 'インタラクティブ提案書・見積書作成プラットフォーム',
        features: [
          'インタラクティブ提案書',
          'デジタル署名',
          '決済統合',
          '提案書追跡',
          'CRM統合',
          'テンプレート管理',
          'チーム管理',
          'レポート・分析'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Business',
              price: '¥4,400',
              description: '基本機能、無制限提案書'
            },
            {
              name: 'Enterprise',
              price: '¥8,800',
              description: '高度な機能、チーム管理'
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
          'インタラクティブ提案書',
          '美しいデザイン',
          '決済統合',
          '提案書追跡'
        ],
        analysis: 'インタラクティブな提案書により、従来の静的な提案書を革新し、成約率を向上'
      },
      competitor: {
        points: [
          'Proposify、PandaDocとの競合',
          'インタラクティブ性の差別化',
          'デザイン性の優位性',
          'オーストラリア市場での強み'
        ],
        analysis: 'インタラクティブ性とデザイン性を武器に、従来の提案書ツールと差別化'
      },
      company: {
        points: [
          'オーストラリア発の企業',
          'デザイン重視',
          'インタラクティブ特化',
          '継続的なイノベーション'
        ],
        analysis: 'オーストラリア発でデザインとインタラクティブ性を重視する企業文化'
      },
      commodity: {
        points: [
          'インタラクティブ提案書プラットフォーム',
          'デジタル営業ツール',
          '見積書作成ソリューション',
          'クロージング支援ツール'
        ],
        analysis: 'インタラクティブ提案書・見積書作成プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の改善',
          '新機能の開発'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'インタラクティブ提案書市場でのリーダーポジション確立',
          'AI駆動営業プラットフォームの構築',
          '包括的な営業クロージングプラットフォームへの進化'
        ]
      }
    }
  },
  'better-proposals': {
    company: {
      name: 'Better Proposals',
      foundedDate: '2014年',
      employeeCount: '約50人（2023年）',
      revenue: '約12億円（2023年度）',
      customerCount: '1万5千社以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'ロンドン、イギリス',
      website: 'https://betterproposals.io'
    },
    products: [
      {
        name: 'Better Proposals',
        description: '営業提案書作成・管理プラットフォーム',
        features: [
          '美しい提案書テンプレート',
          'デジタル署名',
          '決済統合',
          '提案書追跡',
          'CRM統合',
          'チーム管理',
          'レポート・分析',
          'モバイル対応'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Starter',
              price: '¥2,200',
              description: '基本機能、5提案書/月'
            },
            {
              name: 'Premium',
              price: '¥4,400',
              description: '無制限提案書、高度な機能'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'カスタム機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          '中小企業',
          'フリーランサー',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '美しいデザインテンプレート',
          'シンプルな操作性',
          '決済統合',
          '手頃な価格設定'
        ],
        analysis: '美しいデザインとシンプルな操作性により、プロフェッショナルな提案書を簡単に作成'
      },
      competitor: {
        points: [
          'Proposify、Qwilrとの競合',
          'デザイン性の差別化',
          '価格競争力',
          'イギリス市場での強み'
        ],
        analysis: 'デザイン性と価格競争力を武器に、競合他社と差別化'
      },
      company: {
        points: [
          'イギリス発の企業',
          'デザイン重視',
          'シンプルさ追求',
          '継続的な改善'
        ],
        analysis: 'イギリス発でデザインとシンプルさを重視する企業文化'
      },
      commodity: {
        points: [
          '提案書作成プラットフォーム',
          'デザインツール',
          '営業支援ソリューション',
          'ドキュメント管理システム'
        ],
        analysis: '営業提案書作成・デザインプラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'テンプレートの拡充',
          'ユーザー体験の改善'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          '新機能の開発'
        ],
        longTerm: [
          '提案書作成市場でのリーダーポジション確立',
          'AI駆動デザインプラットフォームの構築',
          '包括的な営業ドキュメントプラットフォームへの進化'
        ]
      }
    }
  },
  'calendly': {
    company: {
      name: 'Calendly',
      foundedDate: '2013年',
      employeeCount: '約800人（2023年）',
      revenue: '約100億円（2023年度）',
      customerCount: '2,000万ユーザー以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'HubSpot'
      ],
      headquarters: 'アトランタ、ジョージア州、アメリカ',
      website: 'https://calendly.com'
    },
    products: [
      {
        name: 'Calendly',
        description: 'スケジューリング自動化プラットフォーム',
        features: [
          'スケジューリング自動化',
          'カレンダー統合',
          'ミーティングタイプ管理',
          'リマインダー機能',
          'CRM統合',
          'チーム管理',
          'レポート・分析',
          'モバイル対応'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Basic',
              price: '無料',
              description: '基本機能、1ミーティングタイプ'
            },
            {
              name: 'Essentials',
              price: '¥1,100',
              description: '無制限ミーティングタイプ、統合機能'
            },
            {
              name: 'Professional',
              price: '¥1,650',
              description: '高度な機能、レポート'
            },
            {
              name: 'Teams',
              price: '¥2,200',
              description: 'チーム機能、管理者権限'
            }
          ]
        },
        targetMarket: [
          '全業界',
          '中小企業',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'スケジューリング自動化',
          'シンプルな操作性',
          '豊富な統合機能',
          '無料プランの充実'
        ],
        analysis: 'スケジューリング自動化により、ミーティング調整の手間を大幅に削減'
      },
      competitor: {
        points: [
          'Acuity、Doodleとの競合',
          'ユーザビリティの優位性',
          '無料プランの競争力',
          'ブランド認知度の高さ'
        ],
        analysis: 'ユーザビリティとブランド力を武器に、スケジューリング市場をリード'
      },
      company: {
        points: [
          'スケジューリング特化企業',
          'ユーザビリティ重視',
          'フリーミアムモデル',
          '急成長企業'
        ],
        analysis: 'スケジューリングに特化し、ユーザビリティとフリーミアムモデルで急成長'
      },
      commodity: {
        points: [
          'スケジューリング自動化プラットフォーム',
          'ミーティング管理ツール',
          'カレンダー統合ソリューション',
          '生産性向上ツール'
        ],
        analysis: 'スケジューリング自動化・ミーティング管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新機能の追加'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'スケジューリング市場でのリーダーポジション維持',
          'AI駆動スケジューリングプラットフォームの構築',
          '包括的な生産性プラットフォームへの進化'
        ]
      }
    }
  },
  'acuity-scheduling': {
    company: {
      name: 'Acuity Scheduling',
      foundedDate: '2006年',
      employeeCount: '約100人（2023年）',
      revenue: '約15億円（2023年度）',
      customerCount: '5万社以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'ニューヨーク、ニューヨーク州、アメリカ',
      website: 'https://acuityscheduling.com'
    },
    products: [
      {
        name: 'Acuity Scheduling',
        description: '高度なスケジューリング・予約管理プラットフォーム',
        features: [
          '高度なスケジューリング機能',
          'カスタマイズ可能な予約フォーム',
          '決済統合',
          'リマインダー・通知',
          'CRM統合',
          'チーム管理',
          'レポート・分析',
          'モバイル対応'
        ],
        pricing: {
          model: 'サブスクリプション（月額）',
          plans: [
            {
              name: 'Emerging',
              price: '¥1,650',
              description: '基本機能、1カレンダー'
            },
            {
              name: 'Growing',
              price: '¥2,750',
              description: '複数カレンダー、高度な機能'
            },
            {
              name: 'Powerhouse',
              price: '¥4,950',
              description: 'プレミアム機能、無制限カレンダー'
            }
          ]
        },
        targetMarket: [
          'サービス業',
          '中小企業',
          'フリーランサー'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          '高度なカスタマイズ性',
          '決済統合',
          '豊富な機能セット',
          'プロフェッショナルな外観'
        ],
        analysis: '高度なカスタマイズ機能により、ビジネスニーズに合わせた予約システムを構築'
      },
      competitor: {
        points: [
          'Calendly、Doodleとの競合',
          'カスタマイズ性の優位性',
          '決済統合の差別化',
          'サービス業特化'
        ],
        analysis: 'カスタマイズ性と決済統合を武器に、サービス業向けに特化した差別化を実現'
      },
      company: {
        points: [
          'スケジューリング特化企業',
          'カスタマイズ重視',
          'サービス業フォーカス',
          '長期運営実績'
        ],
        analysis: 'スケジューリングに特化し、カスタマイズ性を重視して長期間運営する企業'
      },
      commodity: {
        points: [
          '高度スケジューリングプラットフォーム',
          '予約管理システム',
          'サービス業向けソリューション',
          'カスタマイズ可能な予約ツール'
        ],
        analysis: '高度なスケジューリング・予約管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の改善',
          '新機能の開発'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'サービス業向けスケジューリング市場でのリーダーポジション確立',
          'AI駆動予約最適化プラットフォームの構築',
          '包括的なサービス業向け管理プラットフォームへの進化'
        ]
      }
    }
  },
  'doodle': {
    company: {
      name: 'Doodle',
      foundedDate: '2007年',
      employeeCount: '約200人（2023年）',
      revenue: '約30億円（2023年度）',
      customerCount: '3,000万ユーザー以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'チューリッヒ、スイス',
      website: 'https://doodle.com'
    },
    products: [
      {
        name: 'Doodle',
        description: 'グループスケジューリング・投票プラットフォーム',
        features: [
          'グループ投票機能',
          'スケジューリング自動化',
          'カレンダー統合',
          'ミーティング管理',
          'チーム管理',
          'レポート・分析',
          'モバイル対応',
          'ブランドカスタマイズ'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本機能、広告表示'
            },
            {
              name: 'Premium',
              price: '¥660',
              description: '広告なし、高度な機能'
            },
            {
              name: 'Professional',
              price: '¥1,100',
              description: 'ブランドカスタマイズ、統合機能'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          '全業界',
          '中小企業',
          'チーム・グループ'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'グループ投票機能',
          'シンプルな操作性',
          '無料プランの充実',
          'グローバルブランド'
        ],
        analysis: 'グループでのスケジューリングに特化し、投票機能により最適な時間を効率的に決定'
      },
      competitor: {
        points: [
          'Calendly、When2meetとの競合',
          'グループ投票の差別化',
          '無料プランの競争力',
          'ヨーロッパ市場での強み'
        ],
        analysis: 'グループ投票機能を武器に、個人向けスケジューリングツールとの差別化を実現'
      },
      company: {
        points: [
          'スイス発の企業',
          'グループスケジューリング特化',
          'フリーミアムモデル',
          '長期運営実績'
        ],
        analysis: 'スイス発でグループスケジューリングに特化し、フリーミアムモデルで長期間運営'
      },
      commodity: {
        points: [
          'グループスケジューリングプラットフォーム',
          '投票・意思決定ツール',
          'ミーティング調整ソリューション',
          'チームコラボレーションツール'
        ],
        analysis: 'グループスケジューリング・投票プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の強化',
          'ユーザー体験の改善',
          '新機能の追加'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開の加速',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'グループスケジューリング市場でのリーダーポジション維持',
          'AI駆動意思決定プラットフォームの構築',
          '包括的なチームコラボレーションプラットフォームへの進化'
        ]
      }
    }
  },
  'hellosign': {
    company: {
      name: 'HelloSign (Dropbox Sign)',
      foundedDate: '2010年',
      employeeCount: '約150人（2023年）',
      revenue: '約25億円（2023年度）',
      customerCount: '8万社以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'サンフランシスコ、カリフォルニア州、アメリカ',
      website: 'https://hellosign.com'
    },
    products: [
      {
        name: 'HelloSign (Dropbox Sign)',
        description: '電子署名・ドキュメント管理プラットフォーム',
        features: [
          '電子署名機能',
          'ドキュメント管理',
          'テンプレート作成',
          'API統合',
          'チーム管理',
          'セキュリティ機能',
          'レポート・分析',
          'モバイル対応'
        ],
        pricing: {
          model: 'フリーミアム（月額/ユーザー）',
          plans: [
            {
              name: 'Free',
              price: '無料',
              description: '基本機能、3署名/月'
            },
            {
              name: 'Essentials',
              price: '¥2,200',
              description: '無制限署名、テンプレート'
            },
            {
              name: 'Standard',
              price: '¥4,400',
              description: 'チーム機能、高度な統合'
            },
            {
              name: 'Premium',
              price: '¥8,800',
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
          'シンプルな操作性',
          'Dropbox統合',
          '豊富な無料機能',
          '開発者フレンドリー'
        ],
        analysis: 'シンプルな操作性とDropbox統合により、電子署名を身近で使いやすいものに変革'
      },
      competitor: {
        points: [
          'DocuSign、Adobe Signとの競合',
          'シンプルさの差別化',
          '価格競争力',
          'Dropboxエコシステム'
        ],
        analysis: 'シンプルさと価格競争力を武器に、複雑な電子署名ツールとの差別化を実現'
      },
      company: {
        points: [
          'Dropbox傘下',
          'シンプルさ重視',
          '開発者重視',
          'フリーミアムモデル'
        ],
        analysis: 'Dropbox傘下でシンプルさと開発者体験を重視し、フリーミアムモデルで成長'
      },
      commodity: {
        points: [
          '電子署名プラットフォーム',
          'ドキュメント管理ソリューション',
          'デジタル契約ツール',
          'ワークフロー自動化'
        ],
        analysis: '電子署名・ドキュメント管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'Dropbox統合の強化',
          'ユーザー体験の改善',
          '新機能の開発'
        ],
        midTerm: [
          'エンタープライズ市場への展開',
          'グローバル展開',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'シンプル電子署名市場でのリーダーポジション確立',
          'Dropboxエコシステム内での統合深化',
          '包括的なドキュメントワークフロープラットフォームへの進化'
        ]
      }
    }
  },
  'signnow': {
    company: {
      name: 'SignNow',
      foundedDate: '2011年',
      employeeCount: '約200人（2023年）',
      revenue: '約35億円（2023年度）',
      customerCount: '10万社以上',
      notableCustomers: [
        'Netflix',
        'Airbnb',
        'Uber',
        'Shopify',
        'Buffer'
      ],
      headquarters: 'ボストン、マサチューセッツ州、アメリカ',
      website: 'https://signnow.com'
    },
    products: [
      {
        name: 'SignNow',
        description: 'エンタープライズ電子署名・ドキュメント管理プラットフォーム',
        features: [
          '高度な電子署名機能',
          'ドキュメントワークフロー',
          'テンプレート管理',
          'API統合',
          'チーム管理',
          'セキュリティ・コンプライアンス',
          'レポート・分析',
          'モバイル対応'
        ],
        pricing: {
          model: 'サブスクリプション（月額/ユーザー）',
          plans: [
            {
              name: 'Business',
              price: '¥1,100',
              description: '基本機能、無制限署名'
            },
            {
              name: 'Business Premium',
              price: '¥2,200',
              description: '高度な機能、チーム管理'
            },
            {
              name: 'Enterprise',
              price: '要相談',
              description: 'エンタープライズ機能、専用サポート'
            }
          ]
        },
        targetMarket: [
          'ミッドマーケット',
          'エンタープライズ',
          '営業チーム'
        ]
      }
    ],
    fourC: {
      customer: {
        points: [
          'エンタープライズ機能',
          '高度なワークフロー',
          'コンプライアンス対応',
          '手頃な価格設定'
        ],
        analysis: 'エンタープライズレベルの機能を手頃な価格で提供し、中堅企業の電子署名ニーズに対応'
      },
      competitor: {
        points: [
          'DocuSign、HelloSignとの競合',
          'エンタープライズ機能の差別化',
          '価格競争力',
          'ワークフロー特化'
        ],
        analysis: 'エンタープライズ機能と価格競争力を武器に、競合他社との差別化を実現'
      },
      company: {
        points: [
          'エンタープライズ重視',
          'ワークフロー特化',
          'コンプライアンス重視',
          '継続的な機能改善'
        ],
        analysis: 'エンタープライズとワークフローに特化し、コンプライアンスを重視する企業'
      },
      commodity: {
        points: [
          'エンタープライズ電子署名プラットフォーム',
          'ドキュメントワークフローソリューション',
          'デジタル契約管理システム',
          'コンプライアンス対応ツール'
        ],
        analysis: 'エンタープライズ電子署名・ドキュメント管理プラットフォーム'
      },
      strategy: {
        shortTerm: [
          'AI機能の追加',
          'ユーザー体験の改善',
          '新機能の開発'
        ],
        midTerm: [
          'グローバル展開',
          'エンタープライズ機能の強化',
          'パートナーエコシステムの拡張'
        ],
        longTerm: [
          'エンタープライズ電子署名市場でのリーダーポジション確立',
          'AI駆動ドキュメントワークフロープラットフォームの構築',
          '包括的なデジタル契約管理プラットフォームへの進化'
        ]
      }
    }
  }
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      