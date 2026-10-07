import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CookieSettings from './components/CookieSettings.jsx';
import { WhatsAppFab } from './components/ui.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Certifications from './pages/Certifications.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';
import { Blog, BlogPost } from './pages/Blog.jsx';
import { ServicesPage, IndustriesPage, Detail } from './pages/Catalog.jsx';
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (hash) { setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50); } else window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}
export default function App() {
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <ScrollManager /><Navbar />
    <main id="main"><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/:slug" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes></main>
    <Footer /><WhatsAppFab /><CookieSettings />
  </>);
}
