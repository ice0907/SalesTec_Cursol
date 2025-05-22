const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'PzK5LLbqPVut',
  host: 'db.juhqkifkqwjlehjdsydc.supabase.co',
  port: 5432,
  database: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('接続成功！');
    const result = await client.query('SELECT NOW()');
    console.log('現在のデータベース時刻:', result.rows[0].now);
    client.release();
  } catch (err) {
    console.error('接続エラー:', err);
  } finally {
    pool.end();
  }
}

testConnection(); 