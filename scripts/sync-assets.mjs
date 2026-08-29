import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const assets = {
  'favicon.svg': '@makersbrain/ui/logo/favicon.svg',
  'favicon-32.png': '@makersbrain/ui/logo/favicon-32.png',
  'apple-touch-icon.png': '@makersbrain/ui/logo/favicon-180.png'
};

mkdirSync(`${root}/static`, { recursive: true });
for (const [destination, source] of Object.entries(assets)) {
  copyFileSync(require.resolve(source), `${root}/static/${destination}`);
}
console.log(`synced ${Object.keys(assets).length} UI assets`);
