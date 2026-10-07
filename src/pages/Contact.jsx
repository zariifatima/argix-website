import { useState } from 'react';
import { usePageMeta } from '../hooks.js';
import { Crumbs } from '../components/ui.jsx';
import { EMAIL, WHATSAPP, LINKEDIN, INSTAGRAM, needs, staticMeta } from '../data/siteData.js';

// Static hosting has no server. Set VITE_FORM_ENDPOINT to a form/email service URL to enable real submission.
// Until then the form only prepares an email in the visitor's own mail app, and says so.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
export default function Contact() {
  usePageMeta(staticMeta['/contact/'], '/contact/');
  const [f, setF] = useState({ name: '', email: '', company: '', need: needs[0], msg: '', website: '' });
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault(); if (f.website) return; // honeypot
    if (!ENDPOINT) {
      const body = `Name: ${f.name}\nWork email: ${f.email}\nCompany: ${f.company}\nNeed: ${f.need}\n\n${f.msg}`;
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Consultation request: ' + f.need)}&body=${encodeURIComponent(body)}`; return;
    }
    setState('sending');
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: f.name, email: f.email, company: f.company, need: f.need, message: f.msg }) });
      setState(r.ok ? 'sent' : 'error');
    } catch { setState('error'); }
  };
  return (
    <section className="phero wrap">
      <Crumbs items={[['Home', '/'], ['Contact']]} />
      <h1 className="h2">Book a consultation</h1>
      <p className="lead">Tell us what you are building or protecting. An engineer will reply within one business day to set up a free 30-minute call.</p>
      <div className="grid2 cgrid">
        <div><h2 className="h3">Talk to an engineer</h2><p className="lead sm">Share a few details about your project. The more you tell us, the more useful the first call will be.</p>
          <ul className="clist"><li><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><b>WhatsApp</b><a href={WHATSAPP.url} target="_blank" rel="noopener noreferrer">{WHATSAPP.label} (chat on WhatsApp)</a></li>
            <li><b>LinkedIn</b><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">linkedin.com/company/argix-net</a></li>
            <li><b>Instagram</b><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@argix_net</a></li>
            <li><b>Offices</b>Islamabad, Pakistan (head office) and Ottawa, Canada</li></ul>
          <h3>What happens next</h3><ol className="olist num-l"><li>We reply within one business day.</li><li>A 30-minute call to understand your goals and constraints.</li><li>A written proposal with scope, timeline and price.</li></ol></div>
        {state === 'sent' ? <div className="form" role="status"><h2 className="h3">Message sent</h2><p>Thank you. An engineer will reply within one business day.</p></div> :
        <form className="form" onSubmit={submit} noValidate={false}>
          <label>Your name<input name="name" required value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Work email<input name="email" required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
          <label>Company<input name="company" value={f.company} onChange={set('company')} autoComplete="organization" /></label>
          <label>What do you need?<select name="need" value={f.need} onChange={set('need')}>{needs.map((n) => <option key={n}>{n}</option>)}</select></label>
          <label>What are you working on?<textarea name="message" rows="5" value={f.msg} onChange={set('msg')} /></label>
          <label className="hp" aria-hidden="true">Leave this field empty<input tabIndex="-1" autoComplete="off" value={f.website} onChange={set('website')} /></label>
          <button className="btn primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending...' : ENDPOINT ? 'Send message' : 'Open email draft'}</button>
          {state === 'error' && <p role="alert" className="err">The message could not be sent. Please email {EMAIL} or use WhatsApp.</p>}
          {!ENDPOINT && <p className="notice" role="note">Setup needed before launch: no email or form service is connected yet, so this form does not send anything on its own. It opens a draft in your email app addressed to {EMAIL}.</p>}
        </form>}
      </div>
    </section>);
}
