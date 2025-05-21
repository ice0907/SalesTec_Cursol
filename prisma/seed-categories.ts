import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // メインカテゴリ（営業プロセスステージ）を作成
  const mainCategories = [
    {
      slug: 'lead-generation',
      name: 'リード獲得／データ整備',
      description: '見込み客やリードを獲得し、その情報を整備するプロセス。マーケティングと営業の連携ポイントとして重要です。',
      kpiExamples: '獲得リード数、リード獲得コスト（CPL）、リード品質スコア、SQLコンバージョン率',
      order: 1
    },
    {
      slug: 'outreach',
      name: 'アウトリーチ／商談化',
      description: '見込み客へのアプローチを行い、商談の機会を創出するプロセス。効率的なアウトリーチとフォローアップが重要です。',
      kpiExamples: 'メール開封率、返信率、商談設定率、商談設定までの平均時間',
      order: 2
    },
    {
      slug: 'crm',
      name: '商談管理・CRM',
      description: '顧客との関係を管理し、商談の進捗を追跡するプロセス。営業活動の中心となる重要なステージです。',
      kpiExamples: '商談勝率、平均商談サイズ、商談サイクル期間、パイプライン予測精度',
      order: 3
    },
    {
      slug: 'proposal',
      name: '提案・デモ',
      description: '顧客のニーズに合わせた提案とデモンストレーションを行うプロセス。顧客理解と価値提案が鍵となります。',
      kpiExamples: 'デモ実施率、デモ後の次ステップ移行率、提案資料の閲覧時間、顧客エンゲージメントスコア',
      order: 4
    },
    {
      slug: 'contract',
      name: '見積 / 契約・CPQ / eSignature',
      description: '見積書の作成、契約書の締結、決済プロセスを管理するステージ。スムーズな契約プロセスが重要です。',
      kpiExamples: '見積書作成から契約締結までの時間、契約締結率、契約書類の修正回数、電子署名使用率',
      order: 5
    },
    {
      slug: 'forecast',
      name: 'フォーキャスト・収益最適化',
      description: '売上予測と収益の最大化を図るプロセス。データに基づく精度の高い予測が経営判断の基盤となります。',
      kpiExamples: '予測精度、予測ズレ率、ダッシュボード利用率、データ入力コンプライアンス率',
      order: 6
    },
    {
      slug: 'onboarding',
      name: 'オンボーディング・CS（ポストセールス）',
      description: '契約後の顧客のオンボーディングとサポートを行うプロセス。顧客満足度と継続利用につながる重要なステージです。',
      kpiExamples: 'オンボーディング完了率、初期利用率、顧客満足度（CSAT/NPS）、更新率/解約率',
      order: 7
    }
  ];

  // メインカテゴリを登録
  for (const category of mainCategories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: category,
      create: category
    });
  }

  // サブカテゴリを作成
  const subCategories = [
    // リード獲得／データ整備のサブカテゴリ
    {
      slug: 'marketing-automation',
      name: 'マーケティングオートメーション',
      description: 'マーケティング活動を自動化し、リード獲得からナーチャリングまでを効率化するツール群です。',
      kpiExamples: 'キャンペーン効果測定、リードスコアリング精度、自動化されたワークフロー数',
      parentSlug: 'lead-generation',
      order: 1
    },
    {
      slug: 'data-enrichment',
      name: 'データエンリッチメント',
      description: '既存のリードデータを外部ソースから補完・強化し、より詳細な顧客プロファイルを構築するツール群です。',
      kpiExamples: 'データ補完率、データ鮮度、データ正確性、重複率',
      parentSlug: 'lead-generation',
      order: 2
    },
    
    // アウトリーチ／商談化のサブカテゴリ
    {
      slug: 'email-sequence',
      name: 'メールシーケンス',
      description: '複数のメールを自動的に送信し、見込み客とのエンゲージメントを高めるツール群です。',
      kpiExamples: 'シーケンス完了率、ステップごとのエンゲージメント率、A/Bテスト効果差',
      parentSlug: 'outreach',
      order: 1
    },
    {
      slug: 'call-dialer',
      name: 'コールダイヤラー',
      description: '電話アウトリーチを効率化し、通話内容の記録や分析を行うツール群です。',
      kpiExamples: '通話完了率、通話時間、通話あたりの成果率、フォローアップ率',
      parentSlug: 'outreach',
      order: 2
    },
    {
      slug: 'meeting-scheduler',
      name: 'オンライン商談予約',
      description: '顧客が営業担当者のカレンダーから適切な時間を選んで会議を予約できるツール群です。',
      kpiExamples: '予約完了率、ノーショー率、スケジュール調整時間削減量',
      parentSlug: 'outreach',
      order: 3
    },
    
    // 商談管理・CRMのサブカテゴリ
    {
      slug: 'crm-platform',
      name: 'CRMプラットフォーム',
      description: '顧客データと商談情報を一元管理し、営業活動を可視化・効率化するプラットフォームです。',
      kpiExamples: 'CRM利用率、データ入力率、レポート活用度、パイプライン可視性',
      parentSlug: 'crm',
      order: 1
    },
    {
      slug: 'sales-analytics',
      name: '営業分析',
      description: '営業活動のデータを分析し、パフォーマンス向上のための洞察を提供するツール群です。',
      kpiExamples: 'レポート利用率、データドリブンな意思決定数、改善アクション実施率',
      parentSlug: 'crm',
      order: 2
    },
    
    // 提案・デモのサブカテゴリ
    {
      slug: 'presentation-tools',
      name: 'プレゼンテーションツール',
      description: '効果的な提案資料を作成・共有し、顧客エンゲージメントを高めるツール群です。',
      kpiExamples: 'プレゼン資料利用率、資料閲覧時間、資料共有後のエンゲージメント率',
      parentSlug: 'proposal',
      order: 1
    },
    {
      slug: 'demo-automation',
      name: 'デモ自動化',
      description: '製品デモを自動化・パーソナライズし、効率的に価値提案を行うツール群です。',
      kpiExamples: 'デモ完了率、デモ後のコンバージョン率、デモあたりの所要時間',
      parentSlug: 'proposal',
      order: 2
    },
    
    // 見積/契約のサブカテゴリ
    {
      slug: 'cpq',
      name: 'CPQ（Configure, Price, Quote）',
      description: '複雑な製品やサービスの構成、価格設定、見積書作成を自動化するツール群です。',
      kpiExamples: '見積作成時間、見積精度、価格最適化率、割引管理効率',
      parentSlug: 'contract',
      order: 1
    },
    {
      slug: 'esignature',
      name: '電子署名',
      description: '契約書の電子署名を可能にし、契約プロセスを迅速化・効率化するツール群です。',
      kpiExamples: '署名完了率、署名までの時間、紙書類削減率、法的コンプライアンス率',
      parentSlug: 'contract',
      order: 2
    },
    
    // フォーキャスト・収益最適化のサブカテゴリ
    {
      slug: 'revenue-intelligence',
      name: '収益インテリジェンス',
      description: '売上データを分析し、収益の最大化と予測の精度向上を支援するツール群です。',
      kpiExamples: '予測精度、収益最適化率、リスク特定率、機会発見率',
      parentSlug: 'forecast',
      order: 1
    },
    {
      slug: 'sales-performance',
      name: '営業パフォーマンス管理',
      description: '営業チームのパフォーマンスを測定・管理し、モチベーション向上や効率改善を促進するツール群です。',
      kpiExamples: 'KPI達成率、インセンティブ最適化率、パフォーマンス改善率',
      parentSlug: 'forecast',
      order: 2
    },
    
    // オンボーディング・CSのサブカテゴリ
    {
      slug: 'customer-success',
      name: 'カスタマーサクセス',
      description: '契約後の顧客の成功を支援し、関係強化と継続利用を促進するツール群です。',
      kpiExamples: '顧客健全度スコア、チャーン予測精度、アップセル率、顧客満足度',
      parentSlug: 'onboarding',
      order: 1
    },
    {
      slug: 'customer-engagement',
      name: '顧客エンゲージメント',
      description: '顧客との継続的なコミュニケーションと関係構築を支援するツール群です。',
      kpiExamples: 'エンゲージメントスコア、コミュニケーション頻度、反応率、フィードバック収集率',
      parentSlug: 'onboarding',
      order: 2
    }
  ];

  // サブカテゴリを登録（親カテゴリを検索してIDを取得）
  for (const subCategory of subCategories) {
    const parentCategory = await prisma.category.findUnique({
      where: { slug: subCategory.parentSlug }
    });

    if (parentCategory) {
      const { parentSlug, ...subCategoryData } = subCategory;
      await prisma.category.upsert({
        where: { slug: subCategory.slug },
        update: {
          ...subCategoryData,
          parentId: parentCategory.id
        },
        create: {
          ...subCategoryData,
          parentId: parentCategory.id
        }
      });
    }
  }

  console.log('カテゴリのシードデータを登録しました');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 