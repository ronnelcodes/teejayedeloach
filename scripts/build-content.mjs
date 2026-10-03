import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourceDirectory = path.join(root, 'content', 'posts');
const outputFile = path.join(root, 'content', 'posts.json');
const distributionDirectory = path.join(root, 'dist');

const filenames = (await readdir(sourceDirectory))
  .filter(filename => filename.endsWith('.json'))
  .sort();

const posts = [];

for (const filename of filenames) {
  const fullPath = path.join(sourceDirectory, filename);
  const post = JSON.parse(await readFile(fullPath, 'utf8'));
  const slug = path.basename(filename, '.json');

  if (!post.title || !post.date || !post.body) {
    throw new Error(`Blog post ${filename} is missing a title, date, or body.`);
  }

  posts.push({
    slug,
    title: post.title,
    category: post.category || 'Writing Life',
    date: post.date,
    featuredImage: post.featuredImage || '',
    excerpt: post.excerpt || '',
    published: post.published === true,
    content: post.body
  });
}

posts.sort((a, b) => new Date(b.date) - new Date(a.date));
await writeFile(outputFile, `${JSON.stringify({ posts }, null, 2)}\n`);

await rm(distributionDirectory, { recursive: true, force: true });
await mkdir(distributionDirectory, { recursive: true });

const ignored = new Set(['.git', 'dist', 'node_modules', 'scripts', 'README.md', 'package.json', 'package-lock.json', 'netlify.toml']);
for (const entry of await readdir(root, { withFileTypes: true })) {
  if (ignored.has(entry.name)) continue;
  await cp(path.join(root, entry.name), path.join(distributionDirectory, entry.name), { recursive: true });
}

await rm(path.join(distributionDirectory, 'content', 'posts'), { recursive: true, force: true });

console.log(`Built ${posts.length} blog posts into dist/content/posts.json.`);
