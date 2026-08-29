import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const build = resolve(root, 'build');
const pages = ['index.html', 'privacy/index.html', 'terms/index.html'];
for (const page of pages) {
  const path = join(build, page);
  if (!existsSync(path)) throw new Error(`missing generated page: ${page}`);
  const html = readFileSync(path, 'utf8');
  if (!html.includes('<main id="main"')) throw new Error(`${page} has no main landmark`);
  if (!html.includes('/privacy/') || !html.includes('/terms/')) {
    throw new Error(`${page} does not expose both legal links`);
  }
}

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const files = walk(build);
const javascript = files.filter((path) => /\.(?:js|mjs)$/.test(path));
if (javascript.length) throw new Error(`static site emitted JavaScript: ${javascript.join(', ')}`);

for (const page of pages) {
  const path = join(build, page);
  const html = readFileSync(path, 'utf8');
  for (const match of html.matchAll(/href="([^"#]+)(?:#[^"]*)?"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:)/.test(href)) continue;
    const target = href.endsWith('/') ? `${href.slice(1)}index.html` : href.slice(1);
    if (target && !existsSync(join(build, target))) {
      throw new Error(`${page} links to missing ${href}`);
    }
  }
}

console.log(`verified ${pages.length} pages, internal links, and zero JavaScript output`);
