import { z } from 'zod';

// データソースの型定義
export const DataSourceTypeEnum = z.enum(['WEBSITE', 'RSS']);
export type DataSourceType = z.infer<typeof DataSourceTypeEnum>;

// データソースのスキーマ
export const DataSourceSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string().url(),
  type: DataSourceTypeEnum,
  isActive: z.boolean(),
  lastUpdated: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  toolId: z.string().optional(),
  companyId: z.string().optional()
});
export type DataSource = z.infer<typeof DataSourceSchema>;

// ツール更新のスキーマ
export const ToolUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  features: z.array(z.string()).optional(),
  languages: z.array(z.string()).optional(),
  pricingModel: z.string().optional()
});
export type ToolUpdate = z.infer<typeof ToolUpdateSchema>;

// 更新結果のスキーマ
export const UpdateResultSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  changes: ToolUpdateSchema.optional(),
  error: z.unknown().optional()
});
export type UpdateResult = z.infer<typeof UpdateResultSchema>; 