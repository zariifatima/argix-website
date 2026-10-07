import { useEffect, useState } from 'react';
import { demoAnswers } from '../data/siteData.js';
import { reduced } from '../hooks.js';
const API = import.meta.env.VITE_AI_API_URL; // optional; your own server, never a secret key
async function getAnswer(item) {
  if (!API) return item.a;
  try { const r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: item.q }) }); const j = await r.json(); return typeof j.answer === 'string' ? j.answer : item.a; } catch { return item.a; }
}
export default function AIDemo() {
  const [i, setI] = useState(0); const [text, setText] = useState(''); const [busy, setBusy] = useState(false);
  useEffect(() => {
    let t, dead = false; setText(''); setBusy(true);
    getAnswer(demoAnswers[i]).then((a) => {
      if (dead) return; if (reduced()) { setText(a); setBusy(false); return; }
      let n = 0; const tick = () => { if (dead) return; n += 2; setText(a.slice(0, n)); if (n < a.length) t = setTimeout(tick, 18); else setBusy(false); }; tick();
    });
    return () => { dead = true; clearTimeout(t); };
  }, [i]);
  return (
    <section className="sec wrap" id="ai-demo">
      <h2 className="h2">See what AI can do for your business.</h2>
      <p className="lead">A front-end demo with pre-written sample answers based on our services. It is not connected to a backend or a live AI. Pick a question.</p>
      <div className="demo">
        <div className="chips" role="tablist" aria-label="Sample questions">{demoAnswers.map((d, k) => <button key={k} role="tab" aria-selected={k === i} className={`chip ${k === i ? 'on' : ''}`} onClick={() => setI(k)}>{d.q}</button>)}</div>
        <div className="bar"><span className="dot dot-s" aria-hidden="true" /> {API ? 'Ask Argix AI' : 'Argix AI demo'} {!API && <span className="badge">Sample answers, not a live assistant</span>} <span className="wave" aria-hidden="true">{Array.from({ length: 12 }, (_, k) => <i key={k} style={{ animationDelay: `${k * 80}ms` }} className={busy ? 'go' : ''} />)}</span></div>
        <p className="q">{demoAnswers[i].q}</p>
        <p className="a" aria-live="polite">{text}{busy && <span className="caret" />}</p>
        <p className="muted small">{API ? 'Response from the configured service.' : 'Sample response. Not a live AI.'}</p>
      </div>
    </section>
  );
}
