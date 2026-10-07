import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav } from '../data/siteData.js';
import Logo from './Logo.jsx';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false); const loc = useLocation();
  useEffect(() => { const f = () => setScrolled(window.scrollY > 24); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  useEffect(() => setOpen(false), [loc.pathname]);
  const L = ({ to, children, ...r }) => <NavLink to={to} className={({ isActive }) => (isActive ? 'act' : '')} {...r}>{children}</NavLink>;
  return (
    <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="wrap navin">
        <Link to="/" className="logo" aria-label="Argix home"><Logo /></Link>
        <nav aria-label="Primary" className="links">{nav.map(([l, h]) => <L key={l} to={h}>{l}</L>)}</nav>
        <Link to="/contact/" className="btn primary sm hide-m">Book a consultation</Link>
        <button className="burger" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
      {open && <div className="sheet" id="mobile-menu">{nav.map(([l, h]) => <L key={l} to={h}>{l}</L>)}<Link to="/contact/" className="btn primary">Book a consultation</Link></div>}
    </header>
  );
}
