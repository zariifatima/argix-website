import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { PageHero } from '../components/ui.jsx';
import { privacy } from '../content/index.js';
import { EMAIL } from '../data/siteData.js';
import { openCookieSettings } from '../components/CookieSettings.jsx';
// Replaces {email} and {gprivacy} tokens and renders `code` spans from the policy text.
const inline = (t) => t.split(/(\{email\}|\{gprivacy\}|`[^`]+`)/g).map((x, i) => x === '{email}' ? <a key={i} href={`mailto:${EMAIL}`}>{EMAIL}</a> : x === '{gprivacy}' ? <a key={i} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a> : x.startsWith('`') ? <code key={i}>{x.slice(1, -1)}</code> : x);
export default function Privacy() {
  usePageMeta(privacy.meta, '/privacy/');
  return (<><PageHero title={privacy.h1} lead={privacy.lead} crumbs={[['Home', '/'], ['Privacy policy']]} noCta />
    <div className="wrap narrow prose pbot">{privacy.sections.map((s) => (<section key={s.h2}><h2>{s.h2}</h2>{s.body.map((b, i) => b.p ? <p key={i}>{inline(b.p)}</p> : <ul key={i} className="ticks">{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>)}
      {s.h2 === 'Analytics and cookies' && <p><button className="btn ghost sm" onClick={openCookieSettings}>Open cookie settings</button></p>}</section>))}</div></>);
}
