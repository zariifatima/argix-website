import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { notFoundMeta } from '../data/siteData.js';
export default function NotFound() {
  usePageMeta(notFoundMeta, location.pathname, { noindex: true });
  return (
    <section className="phero wrap nf">
      <p className="pill">Error 404</p>
      <h1 className="h2">This page could not be found</h1>
      <p className="lead">The link may be out of date, or the page may have moved. Head back to the homepage, or browse our services.</p>
      <div className="row"><Link to="/" className="btn primary">Back to homepage</Link><Link to="/services/" className="btn ghost">See all services</Link></div>
    </section>);
}
