import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, Arrow } from './ui.jsx';

const to = (slug) => `/${slug}/`;
export const Rich = ({ text }) => text.split(/(\*\*[^*]+\*\*)/g).map((t, i) => (t.startsWith('**') ? <strong key={i}>{t.slice(2, -2)}</strong> : t));
const H = ({ b }) => b.h2 && (<div className="head"><h2 className="h2">{b.h2}</h2>{b.lead && <p className="lead">{b.lead}</p>}</div>);

function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return items.map(([q, a], i) => (<div key={q} className={`qa ${open === i ? 'open' : ''}`}>
    <h3><button aria-expanded={open === i} aria-controls={`q${i}-${q.length}`} onClick={() => setOpen(open === i ? -1 : i)}>{q}<span aria-hidden="true">+</span></button></h3>
    <div className="ans" id={`q${i}-${q.length}`} role="region"><p>{a}</p></div></div>));
}
export function Block({ b }) {
  const id = b.id;
  switch (b.t) {
    case 'cards': return (<section className="sec wrap" id={id}><H b={b} /><div className={`grid3 ${b.items.length % 4 === 0 ? 'g4' : ''}`}>{b.items.map((c) => (
      <Reveal key={c.h3}><article className="card"><h3>{c.h3}</h3><p>{c.p}</p>{c.link && <Link to={to(c.link[1])} className="more">{c.link[0]} <Arrow /></Link>}</article></Reveal>))}</div></section>);
    case 'chips': return (<section className="sec wrap" id={id}><H b={b} /><ul className="tags big2">{b.items.map((c) => <li key={c}>{c}</li>)}</ul>{b.link && <p className="more-l"><Link to={to(b.link[1])} className="more">{b.link[0]} <Arrow /></Link></p>}</section>);
    case 'lists': return (<section className="sec wrap" id={id}><H b={b} /><div className="grid2">{b.cols.map((c) => (
      <div key={c.h3} className="card"><h3>{c.h3}</h3>{c.p && <p>{c.p}</p>}<ul className="ticks">{c.items.map((x) => <li key={x}>{x}</li>)}</ul></div>))}</div></section>);
    case 'steps': return (<section className="sec wrap" id={id}><H b={b} /><ol className="steps">{b.items.map(([t, d], i) => (<li key={t}><Reveal><span className="num">Step {i + 1}</span><h3>{t}</h3><p>{d}</p></Reveal></li>))}</ol></section>);
    case 'bullets': return (<section className="sec wrap" id={id}><H b={b} /><ul className="ticks two">{b.items.map((x) => <li key={x}>{x}</li>)}</ul></section>);
    case 'note': return (<section className="wrap"><aside className="noteb"><p>{b.text}</p>{b.link && <Link to={to(b.link[1])} className="more">{b.link[0]} <Arrow /></Link>}</aside></section>);
    case 'faq': return (<section className="sec wrap narrow" id={id}><H b={b} /><Faq items={b.items} /></section>);
    case 'related': return (<section className="sec wrap" id={id}><H b={b} /><div className="grid3">{b.items.map((c) => (<Reveal key={c.h3}><article className="card"><h3>{c.h3}</h3><p>{c.p}</p><Link to={to(c.link[1])} className="more">{c.link[0]} <Arrow /></Link></article></Reveal>))}</div></section>);
    default: return null;
  }
}
