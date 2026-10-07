import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { PageHero, FinalCta } from '../components/ui.jsx';
import { Block } from '../components/Blocks.jsx';
export default function ContentPage({ page }) {
  usePageMeta(page.meta, `/${page.slug}/`);
  const industry = page.kind === 'industry';
  return (<>
    <PageHero eyebrow={page.eyebrow} title={page.h1} lead={page.lead}
      crumbs={[['Home', '/'], industry ? ['Industries', '/industries/'] : ['Services', '/services/'], [page.crumb]]}>
      {page.flow && <ol className="flowrow" aria-label="Process">{page.flow.map((f, i) => <li key={f}><span>{i + 1}</span>{f}</li>)}</ol>}
      {page.chipsTop && <div className="chiptop"><p className="muted small">{page.chipsTop.label}</p><ul className="tags">{page.chipsTop.items.map((c) => <li key={c}>{c}</li>)}</ul></div>}
    </PageHero>
    {page.blocks.map((b, i) => <Block key={i} b={b} />)}
    <FinalCta />
  </>);
}
