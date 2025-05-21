import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

// データソース作成用のバリデーションスキーマ
const DataSourceSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  type: z.enum(["WEBSITE", "API", "RSS"], {
    errorMap: () => ({ message: "タイプはWEBSITE、API、RSSのいずれかである必要があります" }),
  }),
  url: z.string().url("有効なURLを入力してください"),
  toolId: z.string().optional(),
  companyId: z.string().optional(),
  isActive: z.boolean().default(true),
});

// GET /api/datasources - すべてのデータソースを取得
export async function GET() {
  try {
    const dataSources = await prisma.dataSource.findMany({
      include: {
        tool: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        company: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
    
    return NextResponse.json(dataSources);
  } catch (error) {
    console.error('データソースの取得に失敗しました:', error);
    return NextResponse.json(
      { error: 'データソースの取得に失敗しました' },
      { status: 500 }
    );
  }
}

// POST /api/datasources - 新しいデータソースを作成
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // データのバリデーション
    const validationResult = DataSourceSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: '入力データが無効です', details: validationResult.error.format() },
        { status: 400 }
      );
    }
    
    const { name, type, url, toolId, companyId, isActive } = validationResult.data;
    
    // データソースの作成
    const dataSource = await prisma.dataSource.create({
      data: {
        name,
        type,
        url,
        toolId,
        companyId,
        isActive,
      },
    });
    
    return NextResponse.json(dataSource, { status: 201 });
  } catch (error) {
    console.error('データソースの作成に失敗しました:', error);
    return NextResponse.json(
      { error: 'データソースの作成に失敗しました' },
      { status: 500 }
    );
  }
} 