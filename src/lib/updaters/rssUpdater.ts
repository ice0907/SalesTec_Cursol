import axios from 'axios';
import * as cheerio from 'cheerio';
import { BaseUpdater } from './baseUpdater';
import { ToolUpdate } from './types';

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

export class RSSUpdater extends BaseUpdater {
  protected async fetchData(): Promise<RSSItem[] | null> {
    try {
      const response = await axios.get(this.dataSource.url, {
        headers: {
          'User-Agent': 'SalesTech-Cursol/1.0 (https://salestec-cursol.com)',
        },
      });
      const $ = cheerio.load(response.data, { xmlMode: true });
      
      const items: RSSItem[] = [];
      $('item').each((_, el) => {
        const title = $(el).find('title').text();
        const link = $(el).find('link').text();
        const description = $(el).find('description').text();
        const pubDate = $(el).find('pubDate').text();

        if (title && link) {
          items.push({
            title,
            link,
            description,
            pubDate,
          });
        }
      });

      return items;
    } catch (error) {
      console.error(`Error fetching RSS feed ${this.dataSource.url}:`, error);
      return null;
    }
  }

  protected async transformData(items: RSSItem[]): Promise<ToolUpdate> {
    const update: ToolUpdate = {};
    const features: string[] = [];
    let hasJapaneseSupport = false;
    let hasEnglishSupport = false;

    // 最新の記事から情報を抽出
    for (const item of items) {
      // 機能の追加に関する記事
      if (item.title.includes('新機能') || item.title.includes('機能追加')) {
        const $ = cheerio.load(item.description);
        const featureText = $('p').first().text().trim();
        if (featureText) {
          features.push(featureText);
        }
      }

      // 言語対応に関する記事
      if (item.title.includes('日本語') || item.description.includes('日本語')) {
        hasJapaneseSupport = true;
      }
      if (item.title.includes('English') || item.description.includes('English')) {
        hasEnglishSupport = true;
      }

      // 価格変更に関する記事
      if (item.title.includes('価格') || item.title.includes('料金')) {
        if (item.description.includes('無料')) {
          update.pricingModel = '無料プランあり';
        } else if (item.description.includes('サブスクリプション')) {
          update.pricingModel = 'サブスクリプション';
        } else if (item.description.includes('従量課金')) {
          update.pricingModel = '従量課金';
        } else if (item.description.includes('エンタープライズ')) {
          update.pricingModel = 'エンタープライズ';
        }
      }
    }

    // 言語対応の更新
    const languages: string[] = [];
    if (hasJapaneseSupport) languages.push('ja');
    if (hasEnglishSupport) languages.push('en');
    if (languages.length > 0) {
      update.languages = languages;
    }

    // 機能の更新
    if (features.length > 0) {
      update.features = features;
    }

    return update;
  }
} 