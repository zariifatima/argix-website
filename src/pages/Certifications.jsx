import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { PageHero, Head, Arrow, FinalCta } from '../components/ui.jsx';
import { certGroups, frameworks, staticMeta } from '../data/siteData.js';
const LABEL = { '/grc-compliance/': 'See GRC and compliance', '/cybersecurity/': 'See cybersecurity services', '/penetration-testing/': 'See penetration testing' };
export default function Certifications() {
  usePageMeta(staticMeta['/certifications/'], '/certifications/');
  return (<>
    <PageHero title="Certifications and frameworks" lead="The credentials our engineers hold, and the standards our work is built around." crumbs={[['Home', '/'], ['Certifications']]} />
    <section className="sec wrap"><Head title="Credentials held by our team" lead="Grouped by area of work. Each certification is held by an individual member of our team, and the issuing bodies are shown for reference." />
      {certGroups.map(([g, list]) => (<div key={g} className="grp"><h3 className="gt">{g}</h3><div className="grid4">{list.map(([n, full, org]) => (<div key={n} className="card"><h3>{n}</h3><p>{full}</p><p className="small">{org}</p></div>))}</div></div>))}
      <p className="muted small">Certifications belong to individual engineers, not to Argix as a company. Verification of individual credentials is available on request. Names and logos belong to their respective owners.</p></section>
    <section className="sec wrap"><Head title="Frameworks and standards we work to" lead="We help you meet these standards. Certification or attestation is issued by the relevant independent body." />
      <div className="grid4">{frameworks.map(([t, d, to]) => (<div key={t} className="card"><h3>{t}</h3><p>{d}</p><Link to={to} className="more">{LABEL[to]} <Arrow /></Link></div>))}</div></section>
    <FinalCta />
  </>);
}
