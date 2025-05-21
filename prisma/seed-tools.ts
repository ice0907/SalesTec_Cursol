import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // まず企業データを作成
  const companies = [
    {
      slug: 'salesforce',
      name: '株式会社セールスフォース・ジャパン',
      description: 'クラウドベースのCRMプラットフォームを提供する世界的企業。革新的なクラウドソリューションで顧客体験を向上させる。',
      logoUrl: 'https://example.com/logos/salesforce.png',
      employeeCount: 35000,
      fundingRound: 'Public',
      fundingAmount: null,
      website: 'https://www.salesforce.com/jp/',
      location: '東京',
      size: 'enterprise',
      industry: 'ソフトウェア',
      foundedYear: 1999
    },
    {
      slug: 'hubspot',
      name: 'HubSpot Japan株式会社',
      description: 'インバウンドマーケティングとセールスのプラットフォームを提供。マーケティング、セールス、カスタマーサービスのソリューションを統合。',
      logoUrl: 'https://example.com/logos/hubspot.png',
      employeeCount: 7000,
      fundingRound: 'Public',
      fundingAmount: null,
      website: 'https://www.hubspot.jp/',
      location: '東京',
      size: 'large',
      industry: 'マーケティング',
      foundedYear: 2006
    },
    {
      slug: 'zoho',
      name: 'Zoho Japan',
      description: '多様なビジネスアプリケーションを提供するSaaS企業。顧客管理や業務効率化を支援する。',
      logoUrl: 'https://example.com/logos/zoho.png',
      employeeCount: 13000,
      fundingRound: 'Bootstrapped',
      fundingAmount: null,
      website: 'https://www.zoho.com/jp/',
      location: '東京',
      size: 'large',
      industry: 'ソフトウェア',
      foundedYear: 1996
    },
    {
      slug: 'sansan',
      name: 'Sansan株式会社',
      description: '名刺管理から営業DXを推進する日本発のプラットフォーム企業。データ活用による事業成長を支援。',
      logoUrl: 'https://example.com/logos/sansan.png',
      employeeCount: 1000,
      fundingRound: 'Public',
      fundingAmount: null,
      website: 'https://jp.sansan.com/',
      location: '東京',
      size: 'large',
      industry: 'ビジネスサービス',
      foundedYear: 2007
    },
    {
      slug: 'shopify',
      name: 'Shopify Japan株式会社',
      description: 'eコマースプラットフォームを提供するグローバル企業。オンラインストアの構築から運営まで支援。',
      logoUrl: 'https://example.com/logos/shopify.png',
      employeeCount: 10000,
      fundingRound: 'Public',
      fundingAmount: null,
      website: 'https://www.shopify.jp/',
      location: '東京',
      size: 'large',
      industry: 'Eコマース',
      foundedYear: 2006
    },
    {
      slug: 'marketo',
      name: 'アドビ（旧マルケト）',
      description: 'B2Bマーケティングオートメーションを提供。現在はAdobeの一部として、包括的なマーケティングクラウドを展開。',
      logoUrl: 'https://example.com/logos/marketo.png',
      employeeCount: null, // Adobeの一部のため単独の従業員数は不明
      fundingRound: 'Acquired',
      fundingAmount: 4750000000, // 47.5億ドルでAdobeが買収
      website: 'https://business.adobe.com/jp/products/marketo/adobe-marketo.html',
      location: '東京',
      size: 'enterprise',
      industry: 'マーケティング',
      foundedYear: 2006
    },
    {
      slug: 'outreach',
      name: 'Outreach',
      description: '営業チームの生産性を向上させるセールスエンゲージメントプラットフォーム。顧客との効果的なコミュニケーションを実現。',
      logoUrl: 'https://example.com/logos/outreach.png',
      employeeCount: 1200,
      fundingRound: 'Series F',
      fundingAmount: 489000000, // 4.89億ドル
      website: 'https://www.outreach.io/',
      location: 'シアトル',
      size: 'large',
      industry: 'セールスエンゲージメント',
      foundedYear: 2014
    },
    {
      slug: 'docusign',
      name: 'DocuSign Japan株式会社',
      description: '電子署名と契約管理のグローバルリーダー。企業のデジタル変革を支援するDX基盤を提供。',
      logoUrl: 'https://example.com/logos/docusign.png',
      employeeCount: 7500,
      fundingRound: 'Public',
      fundingAmount: null,
      website: 'https://www.docusign.jp/',
      location: '東京',
      size: 'large',
      industry: '電子署名',
      foundedYear: 2003
    },
    {
      slug: 'zendesk',
      name: 'Zendesk Japan株式会社',
      description: 'カスタマーサービスソフトウェアを提供するグローバル企業。顧客体験の向上を支援。',
      logoUrl: 'https://example.com/logos/zendesk.png',
      employeeCount: 5000,
      fundingRound: 'Private',
      fundingAmount: null, // 非公開企業に戻った
      website: 'https://www.zendesk.co.jp/',
      location: '東京',
      size: 'large',
      industry: 'カスタマーサービス',
      foundedYear: 2007
    },
    {
      slug: 'gong',
      name: 'Gong.io',
      description: 'セールス会話を分析し、データ駆動型の営業支援を行うプラットフォーム。AIによる商談分析で成約率を向上。',
      logoUrl: 'https://example.com/logos/gong.png',
      employeeCount: 1000,
      fundingRound: 'Series E',
      fundingAmount: 584000000, // 5.84億ドル
      website: 'https://www.gong.io/',
      location: 'サンフランシスコ',
      size: 'large',
      industry: '会話インテリジェンス',
      foundedYear: 2015
    }
  ];

  // 企業を登録
  for (const company of companies) {
    await prisma.company.upsert({
      where: { slug: company.slug },
      update: company,
      create: company
    });
  }

  console.log('企業のシードデータを登録しました');

  // 企業IDを取得
  const companyMap = {};
  for (const company of companies) {
    const dbCompany = await prisma.company.findUnique({
      where: { slug: company.slug }
    });
    if (dbCompany) {
      companyMap[company.slug] = dbCompany.id;
    }
  }

  // カテゴリIDを取得
  const categoryMap = {};
  const allCategories = await prisma.category.findMany();
  for (const category of allCategories) {
    categoryMap[category.slug] = category.id;
  }

  // ツールデータを作成
  const tools = [
    // CRMプラットフォーム
    {
      slug: 'salesforce-sales-cloud',
      name: 'Salesforce Sales Cloud',
      description: '世界No.1のCRMプラットフォーム。顧客データを一元管理し、商談管理や予測分析機能を提供。',
      companySlug: 'salesforce',
      logoUrl: 'https://example.com/logos/salesforce-sales-cloud.png',
      url: 'https://www.salesforce.com/jp/products/sales-cloud/overview/',
      pricingModel: 'サブスクリプション',
      languages: ['ja', 'en', 'fr', 'de', 'es', 'it', 'pt', 'zh', 'ko'],
      targetSize: 'SMB-Enterprise',
      features: [
        '顧客データ管理',
        '商談管理',
        'モバイルアプリ',
        'リード管理',
        'カスタマイズ機能',
        'AI予測分析'
      ],
      categories: ['crm-platform'],
      isActive: true
    },
    {
      slug: 'hubspot-crm',
      name: 'HubSpot CRM',
      description: 'マーケティング、セールス、サービスを統合したCRMプラットフォーム。無料プランから利用可能。',
      companySlug: 'hubspot',
      logoUrl: 'https://example.com/logos/hubspot-crm.png',
      url: 'https://www.hubspot.jp/products/crm',
      pricingModel: 'フリーミアム',
      languages: ['ja', 'en', 'fr', 'de', 'es'],
      targetSize: 'SMB-Mid-Market',
      features: [
        '顧客管理',
        '商談パイプライン',
        'メール連携',
        '無料プラン',
        'マーケティング連携',
        'カスタマーサービス連携'
      ],
      categories: ['crm-platform'],
      isActive: true
    },
    {
      slug: 'zoho-crm',
      name: 'Zoho CRM',
      description: 'コストパフォーマンスに優れたCRMシステム。中小企業に人気のプラットフォーム。',
      companySlug: 'zoho',
      logoUrl: 'https://example.com/logos/zoho-crm.png',
      url: 'https://www.zoho.com/jp/crm/',
      pricingModel: 'サブスクリプション',
      languages: ['ja', 'en', 'fr', 'de', 'es', 'zh'],
      targetSize: 'SMB-Mid-Market',
      features: [
        '顧客管理',
        'リード管理',
        '商談管理',
        'マーケティングオートメーション',
        'ソーシャルメディア連携',
        'AI機能'
      ],
      categories: ['crm-platform'],
      isActive: true
    },

    // マーケティングオートメーション
    {
      slug: 'hubspot-marketing-hub',
      name: 'HubSpot Marketing Hub',
      description: 'インバウンドマーケティングに強みを持つマーケティングプラットフォーム。リード獲得からナーチャリングまで対応。',
      companySlug: 'hubspot',
      logoUrl: 'https://example.com/logos/hubspot-marketing.png',
      url: 'https://www.hubspot.jp/products/marketing',
      pricingModel: 'サブスクリプション',
      languages: ['ja', 'en', 'fr', 'de', 'es'],
      targetSize: 'SMB-Mid-Market',
      features: [
        'メールマーケティング',
        'リード獲得フォーム',
        'ランディングページ作成',
        'SEO最適化',
        'SNS管理',
        'ABMツール'
      ],
      categories: ['marketing-automation'],
      isActive: true
    },
    {
      slug: 'marketo-engage',
      name: 'Marketo Engage',
      description: 'B2B企業向けの高度なマーケティングオートメーションプラットフォーム。複雑なキャンペーン管理に対応。',
      companySlug: 'marketo',
      logoUrl: 'https://example.com/logos/marketo.png',
      url: 'https://business.adobe.com/jp/products/marketo/adobe-marketo.html',
      pricingModel: 'サブスクリプション',
      languages: ['ja', 'en'],
      targetSize: 'Mid-Market-Enterprise',
      features: [
        'リードマネジメント',
        'メールマーケティング',
        'アカウントベースドマーケティング',
        'マーケティングROI分析',
        '予測分析',
        'Adobe Experience Cloud連携'
      ],
      categories: ['marketing-automation'],
      isActive: true
    },

    // メールシーケンス
    {
      slug: 'outreach-io',
      name: 'Outreach',
      description: '営業チーム向けのセールスエンゲージメントプラットフォーム。メールシーケンスと効果測定機能を提供。',
      companySlug: 'outreach',
      logoUrl: 'https://example.com/logos/outreach.png',
      url: 'https://www.outreach.io/',
      pricingModel: 'サブスクリプション',
      languages: ['en'],
      targetSize: 'Mid-Market-Enterprise',
      features: [
        'メールシーケンス',
        '電話フォローアップ',
        'メッセージテンプレート',
        'A/Bテスト',
        'セールスインテリジェンス',
        'CRM連携'
      ],
      categories: ['email-sequence'],
      isActive: true
    },

    // 電子署名
    {
      slug: 'docusign',
      name: 'DocuSign',
      description: '世界中で利用されている電子署名ソリューション。契約書の電子化とワークフロー自動化を実現。',
      companySlug: 'docusign',
      logoUrl: 'https://example.com/logos/docusign.png',
      url: 'https://www.docusign.jp/',
      pricingModel: 'サブスクリプション',
      languages: ['ja', 'en', 'fr', 'de', 'es', 'it', 'pt', 'ru', 'zh'],
      targetSize: 'SMB-Enterprise',
      features: [
        '電子署名',
        '契約ワークフロー',
        'テンプレート管理',
        'モバイル署名',
        '監査証跡',
        'セキュリティ準拠'
      ],
      categories: ['esignature'],
      isActive: true
    },

    // カスタマーサクセス
    {
      slug: 'zendesk-suite',
      name: 'Zendesk Suite',
      description: '包括的なカスタマーサービスプラットフォーム。サポート、セルフサービス、チャットなどを統合。',
      companySlug: 'zendesk',
      logoUrl: 'https://example.com/logos/zendesk.png',
      url: 'https://www.zendesk.co.jp/suite/',
      pricingModel: 'サブスクリプション',
      languages: ['ja', 'en', 'fr', 'de', 'es', 'it', 'pt', 'zh'],
      targetSize: 'SMB-Enterprise',
      features: [
        'チケット管理',
        'ヘルプセンター',
        'ライブチャット',
        'コールセンター',
        'カスタマーポータル',
        '分析レポート'
      ],
      categories: ['customer-success'],
      isActive: true
    },

    // 会話インテリジェンス
    {
      slug: 'gong-io',
      name: 'Gong',
      description: 'AIによる商談会話の分析と洞察を提供。営業トークの改善とベストプラクティス共有を実現。',
      companySlug: 'gong',
      logoUrl: 'https://example.com/logos/gong.png',
      url: 'https://www.gong.io/',
      pricingModel: 'サブスクリプション',
      languages: ['en'],
      targetSize: 'Mid-Market-Enterprise',
      features: [
        '通話録音・分析',
        'トピック分析',
        '競合情報検出',
        'チームコーチング',
        '予測分析',
        'CRM連携'
      ],
      categories: ['sales-analytics'],
      isActive: true
    },

    // データエンリッチメント
    {
      slug: 'sansan',
      name: 'Sansan',
      description: '名刺管理から始まるビジネスデータプラットフォーム。正確なデータ化とCRM連携で営業を効率化。',
      companySlug: 'sansan',
      logoUrl: 'https://example.com/logos/sansan.png',
      url: 'https://jp.sansan.com/',
      pricingModel: 'サブスクリプション',
      languages: ['ja', 'en'],
      targetSize: 'SMB-Enterprise',
      features: [
        '名刺データ化',
        '企業データベース',
        'CRM連携',
        'メール署名からの連絡先取得',
        'オンライン名刺交換',
        '重複排除'
      ],
      categories: ['data-enrichment'],
      isActive: true
    }
  ];

  // ツールを登録し、カテゴリと関連付ける
  for (const tool of tools) {
    const { categories: categorySlugs, companySlug, ...toolData } = tool;
    
    // 企業IDを取得
    const companyId = companyMap[companySlug];
    
    if (!companyId) {
      console.log(`企業 ${companySlug} が見つかりませんでした`);
      continue;
    }

    // ツールを作成または更新
    const createdTool = await prisma.tool.upsert({
      where: { slug: tool.slug },
      update: {
        ...toolData,
        companyId
      },
      create: {
        ...toolData,
        companyId
      }
    });

    // カテゴリとの関連付けを登録
    for (const categorySlug of categorySlugs) {
      const categoryId = categoryMap[categorySlug];
      
      if (!categoryId) {
        console.log(`カテゴリ ${categorySlug} が見つかりませんでした`);
        continue;
      }

      await prisma.toolCategory.upsert({
        where: {
          toolId_categoryId: {
            toolId: createdTool.id,
            categoryId: categoryId
          }
        },
        update: {},
        create: {
          toolId: createdTool.id,
          categoryId: categoryId
        }
      });
    }
  }

  console.log('ツールのシードデータを登録しました');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 