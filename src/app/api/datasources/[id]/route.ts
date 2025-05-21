import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

// データソース更新用のバリデーションスキーマ
const DataSourceUpdateSchema = z.object({
  name: z.string().min(1, "名前は必須です").optional(),
  type: z.enum(["WEBSITE", "API", "RSS"], {
    errorMap: () => ({ message: "タイプはWEBSITE、API、RSSのいずれかである必要があります" }),
  }).optional(),
  url: z.string().url("有効なURLを入力してください").optional(),
  toolId: z.string().optional().nullable(),
  companyId: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  lastChecked: z.string().optional().nullable().transform(val => val ? new Date(val) : null),
});

// GET /api/datasources/[id] - 指定されたIDのデータソースを取得
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const dataSource = await prisma.dataSource.findUnique({
      where: { id },
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

    if (!dataSource) {
      return NextResponse.json(
        { error: 'データソースが見つかりません' },
        { status: 404 }
      );
    }

    return NextResponse.json(dataSource);
  } catch (error) {
    console.error('データソースの取得に失敗しました:', error);
    return NextResponse.json(
      { error: 'データソースの取得に失敗しました' },
      { status: 500 }
    );
  }
}

// PATCH /api/datasources/[id] - 指定されたIDのデータソースを更新
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();

    // データのバリデーション
    const validationResult = DataSourceUpdateSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: '入力データが無効です', details: validationResult.error.format() },
        { status: 400 }
      );
    }

    // データソースの存在確認
    const existingDataSource = await prisma.dataSource.findUnique({
      where: { id },
    });

    if (!existingDataSource) {
      return NextResponse.json(
        { error: 'データソースが見つかりません' },
        { status: 404 }
      );
    }

    // lastCheckedがstring型で渡された場合はDate型に変換
    let updateData = { ...validationResult.data };
    // if (updateData.lastChecked) {
    //   updateData.lastChecked = new Date(updateData.lastChecked);
    // }

    // データソースの更新
    const updatedDataSource = await prisma.dataSource.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(updatedDataSource);
  } catch (error) {
    console.error('データソースの更新に失敗しました:', error);
    return NextResponse.json(
      { error: 'データソースの更新に失敗しました' },
      { status: 500 }
    );
  }
}

// DELETE /api/datasources/[id] - 指定されたIDのデータソースを削除
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // データソースの存在確認
    const existingDataSource = await prisma.dataSource.findUnique({
      where: { id },
    });

    if (!existingDataSource) {
      return NextResponse.json(
        { error: 'データソースが見つかりません' },
        { status: 404 }
      );
    }

    // データソースの削除
    await prisma.dataSource.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'データソースが正常に削除されました' },
      { status: 200 }
    );
  } catch (error) {
    console.error('データソースの削除に失敗しました:', error);
    return NextResponse.json(
      { error: 'データソースの削除に失敗しました' },
      { status: 500 }
    );
  }
} 