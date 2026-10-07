import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Consent is stored in this browser only (localStorage: "accepted" | "declined"). It holds no personal data.
// Analytics loads ONLY if a Google Analytics ID is configured (VITE_GA_ID) AND the visitor accepts.
const KEY = 'argix-analytics-consent'; const GA = import.meta.env.VITE_GA_ID;
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
function loadGA() {
  if (!GA || !/^G-[A-Z0-9]+$/.test(GA) || document.getElementById('ga-script')) return;
  window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date()); window.gtag('config', GA);
  const s = document.createElement('script'); s.id = 'ga-script'; s.async = true; s.src = `https://www.googletagmanager.com/gtag/js?id=${GA}`; document.head.appendChild(s);
}
export const openCookieSettings = () => window.dispatchEvent(new Event('argix:cookies'));
export default function CookieSettings() {
  const [open, setOpen] = useState(false); const [choice, setChoice] = useState(read());
  useEffect(() => { if (choice === 'accepted') loadGA(); }, [choice]);
  useEffect(() => { const f = () => setOpen(true); addEventListener('argix:cookies', f); return () => removeEventListener('argix:cookies', f); }, []);
  useEffect(() => { const k = (e) => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, []);
  if (!open) return null;
  const pick = (v) => { try { localStorage.setItem(KEY, v); } catch { /* storage unavailable: choice applies to this visit only */ } setChoice(v); setOpen(false); };
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="ck-t">
      <div className="mbox"><h2 id="ck-t">Cookie settings</h2>
        {GA ? <p>With your consent, we use Google Analytics to understand how visitors use this site. Analytics cookies are only set if you accept. If you decline, no analytics cookies are set. See our <Link to="/privacy/" onClick={() => setOpen(false)}>privacy policy</Link>.</p>
          : <p>This website does not currently use analytics and does not set analytics cookies. You can record your choice below. It is saved in this browser only and will apply if analytics is turned on in future. See our <Link to="/privacy/" onClick={() => setOpen(false)}>privacy policy</Link>.</p>}
        <p className="muted small">Current choice: {choice === 'accepted' ? 'accepted' : choice === 'declined' ? 'declined' : 'not chosen yet'}.</p>
        <div className="row"><button className="btn primary" onClick={() => pick('accepted')}>Accept analytics</button><button className="btn ghost" onClick={() => pick('declined')}>Decline</button></div>
      </div></div>);
}
