// Post-build step for GitHub Pages: one HTML file per public URL (so existing argix.net paths return 200 with correct
// <title>, description, canonical and Open Graph tags), plus sitemap.xml, robots.txt and a noindex 404.html.
import fs from 'fs'; import path from 'path';
import { staticMeta, notFoundMeta, SITE } from '../src/data/siteData.js';
const dist = 'dist'; const tpl = fs.readFileSync(`${dist}/index.html`, 'utf8');
const readDir = (d) => fs.readdirSync(d).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(fs.readFileSync(path.join(d, f), 'utf8')));
const pages = readDir('src/content'); const posts = readDir('src/content/blog');
const routes = Object.entries(staticMeta).map(([p, m]) => ({ path: p, meta: m }));
for (const p of pages) routes.push({ path: p.slug === 'privacy' ? '/privacy/' : `/${p.slug}/`, meta: p.meta, h1: p.h1, lead: p.lead });
for (const p of posts) routes.push({ path: `/blog/${p.slug}/`, meta: p.meta, article: true, h1: p.h1, lead: p.lead, date: p.date });
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const swap = (h, re, v) => { if (!re.test(h)) throw new Error('template tag missing: ' + re); return h.replace(re, (_, a, b) => `${a}${v}${b}`); };
function render(r, { noindex = false, url } = {}) {
  const [title, desc] = r.meta; let h = tpl;
  h = h.replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`);
  h = swap(h, /(<meta name="description" content=").*?(")/, esc(desc));
  h = swap(h, /(<link rel="canonical" href=").*?(")/, url);
  h = swap(h, /(<meta property="og:title" content=").*?(")/, esc(title));
  h = swap(h, /(<meta property="og:description" content=").*?(")/, esc(desc));
  h = swap(h, /(<meta property="og:url" content=").*?(")/, url);
  h = swap(h, /(<meta property="og:type" content=").*?(")/, r.article ? 'article' : 'website');
  h = swap(h, /(<meta name="twitter:title" content=").*?(")/, esc(title));
  h = swap(h, /(<meta name="robots" content=").*?(")/, noindex ? 'noindex' : 'index,follow');
  if (r.h1) h = h.replace('<div id="root"></div>', `<div id="root"></div><noscript><h1>${esc(r.h1)}</h1><p>${esc(r.lead || desc)}</p></noscript>`);
  return h;
}
for (const r of routes) {
  const html = render(r, { url: SITE + r.path });
  if (r.path === '/') { fs.writeFileSync(`${dist}/index.html`, html); continue; }
  fs.mkdirSync(path.join(dist, r.path), { recursive: true }); fs.writeFileSync(path.join(dist, r.path, 'index.html'), html);
}
fs.writeFileSync(`${dist}/404.html`, render({ meta: notFoundMeta }, { noindex: true, url: SITE + '/404.html' }));
const urls = routes.map((r) => `  <url><loc>${SITE}${r.path}</loc>${r.date ? `<lastmod>${r.date}</lastmod>` : ''}</url>`).join('\n');
fs.writeFileSync(`${dist}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log(`prerendered ${routes.length} routes + 404.html + sitemap.xml`);
