import { Link, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { PageHero, FinalCta, Reveal, Arrow } from '../components/ui.jsx';
import { services, industries, otherIndustries, staticMeta, servicePath } from '../data/siteData.js';
import { bySlug } from '../content/index.js';
import ContentPage from './ContentPage.jsx';
import NotFound from './NotFound.jsx';
const Card = ({ to, title, summary, bullets, cta }) => (<Reveal><article className="card"><h3>{title}</h3><p>{summary}</p><ul className="ticks">{bullets.map((b) => <li key={b}>{b}</li>)}</ul><Link to={to} className="more">{cta} <Arrow /></Link></article></Reveal>);
const Sec = ({ h2, lead, children }) => (<section className="sec wrap"><div className="head"><h2 className="h2">{h2}</h2>{lead && <p className="lead">{lead}</p>}</div><div className="grid3">{children}</div></section>);
export function ServicesPage() {
  usePageMeta(staticMeta['/services/'], '/services/');
  const grp = (g) => services.filter((s) => s.group === g).map((s) => <Card key={s.title} to={servicePath(s)} title={s.title} summary={s.summary} bullets={s.bullets} cta={`See ${s.title.replace(/^./, (c) => c.toLowerCase()).replace('vCISO', 'vCISO').replace(' (VAPT)', '')}`} />);
  return (<><PageHero title="All services" lead="Software development, cloud and AI on one side, security and compliance on the other. Use them together or on their own." crumbs={[['Home', '/'], ['Services']]} noSecondary />
    <Sec h2="Build and run" lead="Custom software, the cloud it runs on and the AI inside it.">{grp('Build and run')}</Sec>
    <Sec h2="Secure and comply" lead="Find weak points before attackers do, prove your controls to auditors and keep watch after launch.">{grp('Secure and comply')}</Sec>
    <Sec h2="Industry solutions" lead="Software and security tailored to the rules and risks of your sector.">{industries.map((i) => <Card key={i.slug} to={`/${i.slug}/`} title={i.title} summary={i.summary} bullets={i.bullets} cta={`See ${i.title.toLowerCase()}`} />)}</Sec>
    <FinalCta /></>);
}
export function IndustriesPage() {
  usePageMeta(staticMeta['/industries/'], '/industries/');
  return (<><PageHero title="Industries we serve" lead="Healthcare, SaaS, e-commerce, startups and financial services each have their own rules, data risks and integrations. We build and secure software for all of them." crumbs={[['Home', '/'], ['Industries']]} />
    <Sec h2="Where we focus" lead="Every project combines development with security testing and compliance support suited to the sector.">{industries.map((i) => <Card key={i.slug} to={`/${i.slug}/`} title={i.title} summary={i.summary} bullets={i.bullets} cta={`See ${i.title.toLowerCase()} solutions`} />)}</Sec>
    <Sec h2="Other industries we build for" lead="Our secure development process works in any industry that runs on software. We also build for:">{otherIndustries.map((i) => <Card key={i.slug} to={`/${i.slug}/`} title={i.title} summary={i.summary} bullets={i.bullets} cta={`See ${i.title.toLowerCase()}`} />)}</Sec>
    <FinalCta /></>);
}
export function Detail() {
  const { slug } = useParams(); const page = bySlug(slug);
  return page ? <ContentPage page={page} /> : <NotFound />;
}
