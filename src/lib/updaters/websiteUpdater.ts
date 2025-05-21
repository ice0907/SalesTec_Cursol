import axios from 'axios';
import * as cheerio from 'cheerio';
import { BaseUpdater } from './baseUpdater';
import { ToolUpdate } from './types';

export class WebsiteUpdater extends BaseUpdater {
  protected async fetchData(): Promise<string | null> {
    try {
      const response = await axios.get(this.dataSource.url, {
        headers: {
          'User-Agent': 'SalesTech-Cursol/1.0 (https://salestec-cursol.com)',
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching website ${this.dataSource.url}:`, error);
      return null;
    }
  }

  protected async transformData(html: string): Promise<ToolUpdate> {
    const $ = cheerio.load(html);
    const update: ToolUpdate = {};

    // サイトの構造に応じて情報を抽出
    // これは例であり、実際のサイト構造に合わせて調整が必要
    const name = $('h1').first().text().trim();
    if (name) update.name = name;

    const description = $('meta[name="description"]').attr('content');
    if (description) update.description = description;

    // 価格情報の抽出
    const pricingText = $('.pricing-section').text();
    if (pricingText) {
      if (pricingText.includes('無料')) {
        update.pricingModel = '無料プランあり';
      } else if (pricingText.includes('サブスクリプション')) {
        update.pricingModel = 'サブスクリプション';
      } else if (pricingText.includes('従量課金')) {
        update.pricingModel = '従量課金';
      } else if (pricingText.includes('エンタープライズ')) {
        update.pricingModel = 'エンタープライズ';
      }
    }

    // 言語対応の確認
    const languages: string[] = [];
    if ($('html').attr('lang') === 'ja' || $('body').text().includes('日本語')) {
      languages.push('ja');
    }
    if ($('body').text().includes('English')) {
      languages.push('en');
    }
    if (languages.length > 0) {
      update.languages = languages;
    }

    // 機能の抽出
    const features: string[] = [];
    $('.features-section li').each((_, el) => {
      const feature = $(el).text().trim();
      if (feature) features.push(feature);
    });
    if (features.length > 0) {
      update.features = features;
    }

    return update;
  }
} 