import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      background: 'white',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
      padding: scrolled ? '8px 0' : '16px 0',
      transition: 'all 0.3s ease'
    }}>
      <div style={{maxWidth: '1152px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" style={{textDecoration: 'none'}}>
            <div style={{fontSize: '22px', fontWeight: '700', color: '#1a2e4a', letterSpacing: '2px'}}>MERALI VA</div>
            <div style={{fontSize: '9px', color: '#4a6280', letterSpacing: '2px', marginTop: '2px'}}>CONNECTING MARKETS. ELEVATING BUSINESSES</div>
          </Link>
        </motion.div>

        <ul style={{display: 'flex', gap: '32px', listStyle: 'none', margin: 0, padding: 0}}>
          <li><Link to="/" style={{color: '#4b5563', textDecoration: 'none', fontWeight: '500'}}>Home</Link></li>
          <li><Link to="/about" style={{color: '#4b5563', textDecoration: 'none', fontWeight: '500'}}>About</Link></li>
          <li><Link to="/services" style={{color: '#4b5563', textDecoration: 'none', fontWeight: '500'}}>Services</Link></li>
          <li><Link to="/contact" style={{color: '#4b5563', textDecoration: 'none', fontWeight: '500'}}>Contact</Link></li>
          <li><Link to="/gallery" style={{color: '#4b5563', textDecoration: 'none', fontWeight: '500'}}>Gallery</Link></li>
        </ul>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/contact" style={{textDecoration: 'none'}}>
            <button style={{background: '#2563eb', color: 'white', padding: '10px 24px', borderRadius: '24px', fontWeight: '600', border: 'none', cursor: 'pointer'}}>
              Start Sourcing
            </button>
          </Link>
        </motion.div>

      </div>
    </nav>
  );
}

export default Navbar;