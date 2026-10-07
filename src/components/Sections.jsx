import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as D from '../data/siteData.js';
import { useInView, reduced } from '../hooks.js';
import { Reveal, Head, Arrow, FinalCta } from './ui.jsx';

export const Solutions = () => (
  <section className="sec wrap" id="solutions"><Head title="One technology partner. Every stage." lead="Software, cloud and security from one team, so the people who build your system also understand how it can fail." />
    <div className="grid3">{D.solutions.map((s) => (
      <Reveal key={s.id}><article className="card big"><h3>{s.title}</h3><p>{s.text}</p>
        <ul className="tags">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <Link to={s.to} className="more">{s.cta} <Arrow /></Link></article></Reveal>))}</div>
  </section>);

export const Services = () => (
  <section className="sec wrap" id="services"><Head title="Technology built around your business." />
    {['Build and run', 'Secure and comply'].map((g) => (<div key={g} className="grp"><h3 className="gt">{g}</h3>
      <div className="grid4">{D.services.filter((s) => s.group === g && !s.hubOnly).map((s) => (
        <Reveal key={s.title}><Link to={D.servicePath(s)} className="card lift"><h3>{s.title}</h3><p>{s.summary}</p><Arrow /></Link></Reveal>))}</div></div>))}
  </section>);

export const Technology = () => (
  <section className="sec" id="technology"><div className="wrap"><Head title="Built with modern technology." lead="The stacks and platforms named across our services." /></div>
    <div className="marq" aria-label={D.tech.join(', ')}><div className="track">{[...D.tech, ...D.tech].map((t, i) => <span key={i} className="chip2" aria-hidden={i >= D.tech.length}>{t}</span>)}</div></div>
  </section>);

export const Process = () => (
  <section className="sec wrap" id="process"><Head title="How we work: every stage has a build task and a security task." lead="Security is not a checkpoint at the end. It runs through the whole project, from the first workshop to monitoring after launch." />
    <ol className="steps">{D.process.map(([t, b, s], i) => (<li key={t}><Reveal><span className="num">Step {i + 1}</span><h3>{t}</h3>
      <p><b>Build</b> {b}</p><p><b>Secure</b> {s}</p></Reveal></li>))}</ol>
  </section>);

export const Security = () => (
  <section className="sec wrap" id="security"><div className="secbox">
    <Head title="Security isn't an afterthought." lead="Security is not a checkpoint at the end. It runs through the whole project, from the first workshop to monitoring after launch." />
    <div className="shield" role="img" aria-label="Lifecycle: Plan, Design, Build, Test, Deploy, Monitor, wrapped in security">
      <span className="sh-label">Security</span><ol>{D.lifecycle.map((l) => <li key={l}>{l}</li>)}</ol></div>
    <div className="grid2 gap-t">
      <div><h3>Secure coding while we build</h3><ul className="ticks">{D.codingList.map((x) => <li key={x}>{x}</li>)}</ul></div>
      <div><h3>A report your auditor can use after</h3><ul className="ticks">{D.reportList.map((x) => <li key={x}>{x}</li>)}</ul></div>
    </div><p className="muted small">{D.reportNote}</p>
  </div></section>);

export const SecurityDept = () => (
  <section className="sec wrap"><Head title="A security department, without building one." lead="Hiring a full security team is slow and expensive. Argix can provide the leadership, the process and the people, at the level you need." />
    <div className="grid4">{D.securityDept.map(([t, d, to]) => (<Reveal key={t}><article className="card"><h3>{t}</h3><p>{d}</p>{to && <Link to={to} className="more">Learn more <Arrow /></Link>}</article></Reveal>))}</div>
  </section>);

export const Industries = () => (
  <section className="sec wrap" id="industries"><Head title="Built for industries where security matters." lead="Each sector has its own rules, data risks and integrations. These are the five we focus on." />
    <div className="grid5">{D.industries.map((i) => (<Reveal key={i.slug}><Link to={`/${i.slug}/`} className="card lift"><h3>{i.title}</h3><p>{i.summary}</p><Arrow /></Link></Reveal>))}</div>
    <p className="more-l"><Link to="/industries/" className="more">See all industries <Arrow /></Link></p>
  </section>);

function Counter({ to, suffix }) {
  const [r, seen] = useInView(); const [n, setN] = useState(0);
  useEffect(() => { if (!seen) return; if (reduced()) { setN(to); return; } let t0; const f = (t) => { t0 ??= t; const p = Math.min((t - t0) / 1200, 1); setN(Math.round(to * (1 - (1 - p) ** 3))); if (p < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }, [seen]);
  return <span ref={r}>{n}{suffix}</span>;
}
export const Trust = () => (
  <section className="sec wrap" id="trust"><Head title="Organizations we work with." lead="Teams in healthcare and technology trust Argix with their software and security." />
    <div className="stats">{D.stats.map((s) => <div key={s.label}><b><Counter to={s.value} suffix={s.suffix} /></b><span>{s.label}</span></div>)}</div>
    <ul className="tags clients" aria-label="Organizations">{D.clients.map((c) => <li key={c}>{c}</li>)}</ul>
  </section>);

export const CertPreview = () => (
  <section className="sec wrap"><Head title="Certified people behind the work." lead="Our engineers hold recognized credentials across governance, offensive security and incident response. Certifications belong to individual team members, not to Argix as a company." />
    <ul className="tags">{D.certNames.map((c) => <li key={c}>{c}</li>)}</ul>
    <p className="more-l"><Link to="/certifications/" className="more">See all certifications and issuers <Arrow /></Link></p>
  </section>);

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec wrap narrow" id="faq"><Head title="Questions we hear before every project." lead="Something missing? Ask on the consultation call and we will answer it straight." />
      {D.faq.map(([q, a], i) => (<div key={q} className={`qa ${open === i ? 'open' : ''}`}>
        <h3><button aria-expanded={open === i} aria-controls={`f${i}`} onClick={() => setOpen(open === i ? -1 : i)}>{q}<span aria-hidden="true">+</span></button></h3>
        <div className="ans" id={`f${i}`} role="region"><p>{a}</p></div></div>))}
    </section>);
}

export const CTA = FinalCta;
