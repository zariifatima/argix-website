import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { reduced } from '../hooks.js';
// Lightweight 2D canvas network. Static fallback on small screens / reduced motion.
function Network() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, x = c.getContext('2d'); let raf, w, h, mx = 0, my = 0;
    const small = window.innerWidth < 768, still = reduced();
    const N = small ? 22 : 48; let pts = [];
    const size = () => { const r = c.getBoundingClientRect(); const d = Math.min(devicePixelRatio, 2); w = c.width = r.width * d; h = c.height = r.height * d; pts = Array.from({ length: N }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25 * d, vy: (Math.random() - .5) * .25 * d, r: (1.2 + Math.random() * 1.8) * d })); };
    const draw = () => {
      x.clearRect(0, 0, w, h); const L = 150 * (w / 900 > 1 ? 1.4 : 1);
      for (const p of pts) { if (!still) { p.x += p.vx + mx * .02; p.y += p.vy + my * .02; } if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1; }
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) { const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y); if (d < L) { x.strokeStyle = `rgba(63,169,187,${(1 - d / L) * .35})`; x.lineWidth = 1; x.beginPath(); x.moveTo(a.x, a.y); x.lineTo(b.x, b.y); x.stroke(); } }
      for (const p of pts) { x.fillStyle = 'rgba(138,211,223,.9)'; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 6.3); x.fill(); }
      if (!still) raf = requestAnimationFrame(draw);
    };
    const mv = (e) => { mx = (e.clientX / innerWidth - .5) * 6; my = (e.clientY / innerHeight - .5) * 6; };
    size(); draw(); addEventListener('resize', size); if (!small) addEventListener('mousemove', mv);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('mousemove', mv); };
  }, []);
  return <canvas ref={ref} className="net" aria-hidden="true" />;
}
import { frameworksStrip } from '../data/siteData.js';
export default function Hero() {
  return (
    <section className="hero">
      <Network />
      <div className="wrap hero-in">
        <p className="pill">Build it. Run it. Secure it.</p>
        <h1>Custom software, AI and cybersecurity, with security built in from day one.</h1>
        <p className="lead">Argix builds custom software and AI solutions, then protects them with penetration testing, compliance work and security monitoring. One partner from first design to audit.</p>
        <div className="row">
          <Link to="/contact/" className="btn primary">Book a free consultation</Link>
          <Link to="/services/" className="btn ghost">See all services</Link>
        </div>
        <p className="muted small">A 30-minute call with an engineer. No obligation, no sales script.</p>
        <ul className="tags fw" aria-label="Frameworks we build and test to">{frameworksStrip.map((f) => <li key={f}>{f}</li>)}</ul>
      </div>
    </section>
  );
}
