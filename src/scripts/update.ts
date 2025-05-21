import { runUpdate } from '../lib/updaters/runUpdate';

async function main() {
  try {
    await runUpdate();
    process.exit(0);
  } catch (error) {
    console.error('Update script failed:', error);
    process.exit(1);
  }
}

main(); 