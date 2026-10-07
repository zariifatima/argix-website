import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { staticMeta } from '../data/siteData.js';
import { PageHero, Head, Reveal, Arrow, FinalCta } from '../components/ui.jsx';
import { industries } from '../data/siteData.js';
const how = [['Security is part of the build', 'It is planned from the first design, not added at the end.'], ['Plain answers', 'We explain risks, timelines and costs in language decision-makers understand.'], ['Evidence over promises', 'We deliver reports, tests and documentation you can show auditors and customers.'], ['Accountable after launch', 'We stay involved through monitoring, support and fixes.']];
const team = ['Software engineers working with .NET, Angular and Python', 'Cloud and DevOps engineers', 'Penetration testers holding OSCP, OSWE, OSCE³ and CREST certifications', 'GRC and audit specialists holding CISSP, CISM, CISA and ISO 27001 Lead Auditor certifications', 'SOC analysts and incident responders'];
export default function About() {
  usePageMeta(staticMeta['/about/'], '/about/');
  return (<>
    <PageHero title="A software and security team, built as one" lead="Argix builds custom software and AI solutions, and protects them with penetration testing, compliance work and security monitoring." crumbs={[['Home', '/'], ['About']]} />
    <section className="sec wrap narrow"><Head title="Who we are" /><p className="lead">Most companies buy software from one vendor and security from another, and problems tend to appear in the gap between them. Argix brings both into one team, so the people who build a system work alongside the people who test and protect it.</p>
      <p className="lead">We work with organizations that handle sensitive data and answer to auditors, regulators or demanding customers, and we explain our work in plain language so decision-makers can act on it.</p></section>
    <section className="sec wrap"><Head title="Where we focus" /><div className="grid5">{industries.map((i) => <Reveal key={i.slug}><Link to={`/${i.slug}/`} className="card lift"><h3>{i.title}</h3><p>{i.summary}</p><Arrow /></Link></Reveal>)}</div></section>
    <section className="sec wrap"><Head title="How we work" /><div className="grid4">{how.map(([t, d]) => <div key={t} className="card"><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="sec wrap"><Head title="Our team" lead="Specialists across development and security, working as one team." /><ul className="ticks">{team.map((t) => <li key={t}>{t}</li>)}</ul>
      <p className="more-l"><Link to="/certifications/" className="more">See all certifications <Arrow /></Link></p></section>
    <section className="sec wrap"><Head title="Our offices" /><div className="grid2"><div className="card"><h3>Islamabad, Pakistan</h3><p>Head office</p></div><div className="card"><h3>Ottawa, Canada</h3><p>Office</p></div></div></section>
    <FinalCta />
  </>);
}
