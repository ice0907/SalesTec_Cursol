import { PrismaClient } from '@prisma/client';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);
const prisma = new PrismaClient();

async function main() {
  console.log('データベースのシード処理を開始します...');

  try {
    // 順番にシードファイルを実行
    console.log('カテゴリデータを登録中...');
    await execPromise('npx ts-node prisma/seed-categories.ts');
    
    console.log('企業・ツールデータを登録中...');
    await execPromise('npx ts-node prisma/seed-tools.ts');
    
    console.log('全てのシード処理が完了しました！');
  } catch (error) {
    console.error('シード処理中にエラーが発生しました:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 