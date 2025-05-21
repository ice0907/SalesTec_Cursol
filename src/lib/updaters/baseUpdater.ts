import { PrismaClient } from '@prisma/client';
import { DataSource, UpdateResult } from './types';

export abstract class BaseUpdater {
  protected prisma: PrismaClient;
  protected dataSource: DataSource;

  constructor(prisma: PrismaClient, dataSource: DataSource) {
    this.prisma = prisma;
    this.dataSource = dataSource;
  }

  // データソースから情報を取得する抽象メソッド
  protected abstract fetchData(): Promise<any>;

  // 取得した情報を更新データに変換する抽象メソッド
  protected abstract transformData(data: any): Promise<Record<string, any>>;

  // 更新を実行するメソッド
  public async update(): Promise<UpdateResult> {
    try {
      // データの取得
      const data = await this.fetchData();
      if (!data) {
        return {
          success: false,
          message: 'No data fetched',
        };
      }

      // データの変換
      const updateData = await this.transformData(data);
      if (!updateData || Object.keys(updateData).length === 0) {
        return {
          success: false,
          message: 'No changes detected',
        };
      }

      // 更新の実行
      const result = await this.applyUpdate(updateData);

      // 最終チェック日時の更新
      await this.updateLastChecked();

      return {
        success: true,
        message: 'Update completed successfully',
        changes: updateData,
      };
    } catch (error) {
      console.error(`Error updating ${this.dataSource.name}:`, error);
      return {
        success: false,
        message: 'Update failed',
        error: error as Error,
      };
    }
  }

  // 更新を適用するメソッド
  protected async applyUpdate(updateData: Record<string, any>): Promise<void> {
    if (this.dataSource.toolId) {
      await this.prisma.tool.update({
        where: { id: this.dataSource.toolId },
        data: {
          ...updateData,
          updatedAt: new Date(),
        },
      });
    } else if (this.dataSource.companyId) {
      await this.prisma.company.update({
        where: { id: this.dataSource.companyId },
        data: {
          ...updateData,
          updatedAt: new Date(),
        },
      });
    }
  }

  // 最終チェック日時を更新するメソッド
  protected async updateLastChecked(): Promise<void> {
    await this.prisma.dataSource.update({
      where: { id: this.dataSource.id },
      data: {
        lastChecked: new Date(),
      },
    });
  }

  // リソースの解放
  public async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
} 