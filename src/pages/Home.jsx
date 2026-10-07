import Hero from '../components/Hero.jsx';
import AIDemo from '../components/AIDemo.jsx';
import { Solutions, Services, Technology, Process, Security, SecurityDept, Industries, Trust, CertPreview, FAQ, CTA } from '../components/Sections.jsx';
import { usePageMeta } from '../hooks.js';
import { staticMeta } from '../data/siteData.js';
export default function Home() {
  usePageMeta(staticMeta['/'], '/');
  return (<><Hero /><Solutions /><Services /><AIDemo /><Technology /><Process /><Security /><SecurityDept /><Industries /><Trust /><CertPreview /><FAQ /><CTA /></>);
}
