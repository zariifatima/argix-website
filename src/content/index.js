// All migrated page copy lives in JSON files next to this module. Add a file to add a page.
const pages = import.meta.glob('./*.json', { eager: true, import: 'default' });
const posts = import.meta.glob('./blog/*.json', { eager: true, import: 'default' });
export const content = Object.values(pages).filter((p) => p.blocks);
export const privacy = Object.values(pages).find((p) => p.slug === 'privacy');
export const blogPosts = Object.values(posts).sort((a, b) => b.date.localeCompare(a.date));
export const bySlug = (s) => content.find((p) => p.slug === s);
