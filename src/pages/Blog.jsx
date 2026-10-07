import { Link, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { PageHero, FinalCta, CtaRow, Reveal, Arrow } from '../components/ui.jsx';
import { Rich } from '../components/Blocks.jsx';
import { blogPosts } from '../content/index.js';
import { staticMeta } from '../data/siteData.js';
import NotFound from './NotFound.jsx';
export function Blog() {
  usePageMeta(staticMeta['/blog/'], '/blog/');
  return (<><PageHero title="Blog" lead="Practical guides on security, compliance and building secure software, for the people who buy and build it." crumbs={[['Home', '/'], ['Blog']]} noCta />
    <section className="sec wrap"><div className="grid3">{blogPosts.map((p) => (<Reveal key={p.slug}><article className="card"><p className="muted small">{p.category} &middot; <time dateTime={p.date}>{p.dateLabel}</time> &middot; {p.read}</p><h2 className="h3"><Link to={`/blog/${p.slug}/`}>{p.h1}</Link></h2><p>{p.lead}</p><Link to={`/blog/${p.slug}/`} className="more">Read article <Arrow /></Link></article></Reveal>))}</div></section>
    <FinalCta /></>);
}
export function BlogPost() {
  const { slug } = useParams(); const p = blogPosts.find((x) => x.slug === slug);
  usePageMeta(p ? p.meta : ['', ''], `/blog/${slug}/`, { article: true });
  if (!p) return <NotFound />;
  return (<><article>
    <PageHero title={p.h1} lead={p.lead} crumbs={[['Home', '/'], ['Blog', '/blog/'], [p.h1]]} noCta>
      <p className="muted small">{p.category} &middot; <time dateTime={p.date}>{p.dateLabel}</time> &middot; {p.read}</p></PageHero>
    <div className="wrap narrow prose">
      {p.intro.map((t) => <p key={t}><Rich text={t} /></p>)}
      {p.sections.map((s) => (<section key={s.h2}><h2>{s.h2}</h2>{s.body.map((b, i) => b.p ? <p key={i}><Rich text={b.p} /></p> : b.ul ? <ul key={i} className="ticks">{b.ul.map((x) => <li key={x}><Rich text={x} /></li>)}</ul> : <ol key={i} className="olist">{b.ol.map((x) => <li key={x}><Rich text={x} /></li>)}</ol>)}</section>))}
    </div>
    <section className="sec wrap narrow"><div className="card"><h2 className="h3">{p.cta.h2}</h2><p>{p.cta.text}</p><CtaRow secondary={<Link className="btn ghost" to={`/${p.cta.link[1]}/`}>{p.cta.link[0]}</Link>} /></div></section>
  </article><FinalCta /></>);
}
