import { Link } from 'react-router-dom';
import { services, industries, otherIndustries, EMAIL, WHATSAPP, LINKEDIN, INSTAGRAM, servicePath } from '../data/siteData.js';
import Logo from './Logo.jsx';
import { openCookieSettings } from './CookieSettings.jsx';
const list = (g) => services.filter((s) => s.group === g && !s.hubOnly).map((s) => [s.title, servicePath(s)]);
const Col = ({ t, items }) => <div><h2 className="fh">{t}</h2><ul>{items.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul></div>;
export default function Footer() {
  return (
    <footer className="foot"><div className="wrap">
      <Link to="/" className="logo" aria-label="Argix home"><Logo /></Link>
      <p className="fdesc">Custom software, AI and cybersecurity for healthcare, SaaS, e-commerce, startups and fintech teams. Built secure, tested and ready for audit.</p>
      <p className="muted small">Offices in Islamabad, Pakistan and Ottawa, Canada</p>
      <div className="fgrid">
        <Col t="Build and run" items={list('Build and run')} />
        <Col t="Secure and comply" items={list('Secure and comply')} />
        <Col t="Industries" items={[...industries, ...otherIndustries].map((i) => [i.title, `/${i.slug}/`])} />
        <div><h2 className="fh">Company</h2><ul>
          {[['About', '/about/'], ['Blog', '/blog/'], ['Certifications', '/certifications/'], ['Contact', '/contact/'], ['Privacy policy', '/privacy/']].map(([l, t]) => <li key={l}><Link to={t}>{l}</Link></li>)}
          <li><button className="linkbtn" onClick={openCookieSettings}>Cookie settings</button></li></ul></div>
        <div><h2 className="fh">Get in touch</h2><ul>
          <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><a href={WHATSAPP.url} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">Instagram</a></li></ul></div>
      </div>
      <p className="muted small">&copy; {new Date().getFullYear()} Argix. All rights reserved. Certification names, framework names and logos belong to their respective owners.</p>
    </div></footer>
  );
}
