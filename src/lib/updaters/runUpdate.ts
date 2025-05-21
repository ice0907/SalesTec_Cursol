import { PrismaClient } from '@prisma/client';
import { WebsiteUpdater } from './websiteUpdater';
import { RSSUpdater } from './rssUpdater';
import { DataSourceType, DataSource } from './types';

const prisma = new PrismaClient();

async function runUpdate() {
  try {
    // アクティブなデータソースを取得
    const dataSources = await prisma.dataSource.findMany({
      where: {
        isActive: true,
      },
    });

    console.log(`Found ${dataSources.length} active data sources`);

    // 各データソースに対して更新を実行
    for (const source of dataSources) {
      console.log(`Processing data source: ${source.name}`);

      const dataSource: DataSource = {
        id: source.id,
        name: source.name,
        url: source.url,
        type: source.type as DataSourceType,
        isActive: source.isActive,
        createdAt: source.createdAt,
        updatedAt: source.updatedAt,
        toolId: source.toolId || undefined,
        companyId: source.companyId || undefined,
        lastUpdated: source.lastChecked || undefined
      };

      let updater;
      switch (dataSource.type) {
        case 'WEBSITE':
          updater = new WebsiteUpdater(prisma, dataSource);
          break;
        case 'RSS':
          updater = new RSSUpdater(prisma, dataSource);
          break;
        default:
          console.warn(`Unsupported data source type: ${dataSource.type}`);
          continue;
      }

      try {
        const result = await updater.update();
        if (result.success) {
          console.log(`Successfully updated ${dataSource.name}`);
          if (result.changes) {
            console.log('Changes:', result.changes);
          }
        } else {
          console.warn(`Failed to update ${dataSource.name}: ${result.message}`);
          if (result.error) {
            console.error(result.error);
          }
        }
      } catch (error) {
        console.error(`Error processing ${dataSource.name}:`, error);
      } finally {
        await updater.disconnect();
      }

      // データソース間で少し待機
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('Update process completed');
  } catch (error) {
    console.error('Error in update process:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// スクリプトが直接実行された場合
if (require.main === module) {
  runUpdate().catch(console.error);
}

export { runUpdate }; 