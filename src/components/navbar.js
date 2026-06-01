import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/Contact' },
    { name: 'Gallery', path: '/Gallery' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: 'white',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{maxWidth: '1152px', margin: '0 auto', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        {/* Logo - UPDATED: MERALI black, VA teal, tagline teal */}
        <Link to="/" style={{textDecoration: 'none', flexShrink: 0}}>
          <div style={{fontSize: '18px', fontWeight: '700', letterSpacing: '2px', whiteSpace: 'nowrap'}}>
            <span style={{color: '#1a2e4a'}}>MERALI </span>
            <span style={{color: '#4b797b'}}>VA</span>
          </div>
          <div style={{fontSize: '7px', color: '#4b797b', letterSpacing: '1.5px', marginTop: '1px', whiteSpace: 'nowrap'}}>
            CONNECTING MARKETS. ELEVATING BUSINESSES
          </div>
        </Link>

        {/* Desktop Nav Links — only on desktop */}
        {!isMobile && (
          <ul style={{display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center'}}>
            {navLinks.map(link => (
              <li key={link.name}>
                <Link to={link.path} style={{color: '#4b5563', textDecoration: 'none', fontWeight: '500', fontSize: '15px'}}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA — only on desktop */}
        {!isMobile && (
          <Link to="/contact" style={{textDecoration: 'none'}}>
            <button style={{background: '#4b797b', color: 'white', padding: '10px 24px', borderRadius: '24px', fontWeight: '600', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap'}}>
              Start Sourcing
            </button>
          </Link>
        )}

        {/* Hamburger — only on mobile */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px'}}
          >
            <span style={{display: 'block', width: '24px', height: '2px', background: menuOpen ? '#4b797b' : '#1a2e4a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}}></span>
            <span style={{display: 'block', width: '24px', height: '2px', background: menuOpen ? '#4b797b' : '#1a2e4a', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1}}></span>
            <span style={{display: 'block', width: '24px', height: '2px', background: menuOpen ? '#4b797b' : '#1a2e4a', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'}}></span>
          </button>
        )}

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{background: 'white', borderTop: '1px solid #e2e8f0', overflow: 'hidden'}}
          >
            <div style={{padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '4px'}}>
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{color: '#4b5563', textDecoration: 'none', fontWeight: '500', padding: '12px 0', borderBottom: '1px solid #f1f5f9', fontSize: '16px'}}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMenuOpen(false)} style={{textDecoration: 'none', marginTop: '8px'}}>
                <button style={{background: '#4b797b', color: 'white', padding: '12px 24px', borderRadius: '24px', fontWeight: '600', border: 'none', cursor: 'pointer', width: '100%', fontSize: '16px'}}>
                  Start Sourcing
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;