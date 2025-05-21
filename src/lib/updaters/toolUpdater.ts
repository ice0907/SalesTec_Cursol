import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { z } from 'zod';

const prisma = new PrismaClient();

// ツール情報のスキーマ定義
const ToolUpdateSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  pricingModel: z.string().optional(),
  languages: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  url: z.string().url().optional(),
});

type ToolUpdate = z.infer<typeof ToolUpdateSchema>;

// 公式サイトから情報を取得
async function fetchToolInfo(url: string): Promise<ToolUpdate | null> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    // サイトの構造に応じて情報を抽出
    // これは例であり、実際のサイト構造に合わせて調整が必要
    const name = $('h1').first().text().trim();
    const description = $('meta[name="description"]').attr('content');
    
    return {
      name,
      description,
      // 他の情報も同様に抽出
    };
  } catch (error) {
    console.error(`Error fetching tool info from ${url}:`, error);
    return null;
  }
}

// プレスリリースから情報を取得
async function fetchPressReleases(companyName: string): Promise<any[]> {
  // PR TIMESやCNET JapanなどのAPIを使用
  // 実際のAPIに合わせて実装
  return [];
}

// データベースの更新
async function updateToolInfo(toolId: string, update: ToolUpdate) {
  try {
    await prisma.tool.update({
      where: { id: toolId },
      data: {
        ...update,
        updatedAt: new Date(),
      },
    });
    
    // 更新履歴を記録
    await prisma.toolUpdateHistory.create({
      data: {
        toolId,
        updateType: 'AUTO',
        changes: update,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error(`Error updating tool ${toolId}:`, error);
  }
}

// メインの更新処理
export async function updateTools() {
  const tools = await prisma.tool.findMany({
    where: {
      isActive: true,
    },
  });

  for (const tool of tools) {
    // 公式サイトから情報を取得
    if (tool.url) {
      const toolInfo = await fetchToolInfo(tool.url);
      if (toolInfo) {
        await updateToolInfo(tool.id, toolInfo);
      }
    }

    // プレスリリースから情報を取得
    const pressReleases = await fetchPressReleases(tool.companyName);
    // プレスリリースの処理
  }
}

// 定期実行用のエントリーポイント
export async function runUpdate() {
  try {
    await updateTools();
    console.log('Tool update completed successfully');
  } catch (error) {
    console.error('Error in tool update:', error);
  } finally {
    await prisma.$disconnect();
  }
} 