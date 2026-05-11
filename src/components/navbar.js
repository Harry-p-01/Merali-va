import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{fontSize: '22px', fontWeight: '700', color: '#1a2e4a', letterSpacing: '2px'}}>MERALI VA</div>
          <div style={{fontSize: '9px', color: '#4a6280', letterSpacing: '2px', marginTop: '2px'}}>CONNECTING MARKETS. ELEVATING BUSINESSES</div>
        </motion.div>

        <ul className="hidden md:flex space-x-8 list-none m-0">
          <li><a href="#home" className="text-gray-600 hover:text-blue-600 transition font-medium">Home</a></li>
          <li><a href="#services" className="text-gray-600 hover:text-blue-600 transition font-medium">Services</a></li>
          <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition font-medium">About</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition font-medium">Contact</a></li>
        </ul>

        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Start Sourcing
        </motion.button>

      </div>
    </nav>
  );
}

export default Navbar;