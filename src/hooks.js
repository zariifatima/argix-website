import { useEffect, useRef, useState } from 'react';
import { SITE } from './data/siteData.js';
export const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export function useInView(opts = { threshold: 0.2 }) {
  const ref = useRef(null); const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (reduced() || !('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, opts);
    io.observe(el); return () => io.disconnect();
  }, []);
  return [ref, seen];
}
// Keeps <title>, description, canonical and social tags in step with the current route (client-side navigation).
export function usePageMeta(meta, path, opts = {}) {
  useEffect(() => {
    const [title, desc] = meta; document.title = title;
    const set = (sel, attr, v) => document.querySelector(sel)?.setAttribute(attr, v);
    set('meta[name="description"]', 'content', desc);
    if (opts.noindex) document.querySelector('link[rel="canonical"]')?.remove(); else set('link[rel="canonical"]', 'href', SITE + path);
    set('meta[property="og:title"]', 'content', title); set('meta[property="og:description"]', 'content', desc);
    set('meta[property="og:url"]', 'content', SITE + path); set('meta[name="twitter:title"]', 'content', title);
    set('meta[property="og:type"]', 'content', opts.article ? 'article' : 'website');
    set('meta[name="robots"]', 'content', opts.noindex ? 'noindex' : 'index,follow');
  }, [path]);
}
