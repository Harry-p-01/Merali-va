import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import img7 from '../assets/7.jpeg';
import img8 from '../assets/8.jpeg';

const images = [
  { id: 1, src: img1, title: 'Factory Visit', category: 'Sourcing' },
  { id: 2, src: img2, title: 'Product Inspection', category: 'Factory Verification' },
  { id: 3, src: img3, title: 'Logistics Operations', category: 'Trade Expo' },
  { id: 4, src: img4, title: 'Client Meeting', category: 'Trade Expo' },
  { id: 5, src: img5, title: 'Manufacturing Floor', category: 'Sourcing' },
  { id: 6, src: img6, title: 'Shipment Ready', category: 'Trade Expo' },
  { id: 7, src: img7, title: 'Quality Check', category: 'Factory Verification' },
  { id: 8, src: img8, title: 'Team at Work', category: 'Trade Expo' },
];

const categories = ['All', 'Sourcing', 'Factory Verification', 'Trade Expo'];

function Gallery() {
  const [selected, setSelected] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = selected === 'All' ? images : images.filter(img => img.category === selected);

  return (
    <div style={{paddingTop: '80px'}}>

      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #f0faea 0%, #ffffff 100%)', padding: '80px 16px', textAlign: 'center'}}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{color: '#4b797b', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}
        >
          Our Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{fontSize: '48px', fontWeight: '700', color: '#1e293b', marginBottom: '24px', lineHeight: '1.2'}}
        >
          Proof of Our <span style={{color: '#4b797b'}}>Excellence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8'}}
        >
          A glimpse into our operations across Asia and Africa. Real work, real results.
        </motion.p>
      </section>

      {/* Filter Buttons */}
      <section style={{padding: '40px 16px 0', background: 'white'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center'}}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '24px',
                border: selected === cat ? 'none' : '1px solid #e2e8f0',
                background: selected === cat ? '#4b797b' : 'white',
                color: selected === cat ? 'white' : '#64748b',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{padding: '40px 16px 80px', background: 'white'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
          {filtered.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setLightbox(image)}
              style={{borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', position: 'relative'}}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{width: '100%', height: '260px', objectFit: 'cover', display: 'block'}}
              />
              <div style={{padding: '16px', background: 'white'}}>
                <p style={{fontWeight: '700', color: '#1e293b', marginBottom: '4px'}}>{image.title}</p>
                <span style={{fontSize: '12px', background: '#f0faea', color: '#4b797b', padding: '4px 10px', borderRadius: '12px', fontWeight: '600'}}>{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', boxSizing: 'border-box'}}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{background: 'white', borderRadius: '16px', overflow: 'hidden', maxWidth: '800px', width: '100%'}}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                style={{width: '100%', maxHeight: '500px', objectFit: 'cover'}}
              />
              <div style={{padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <p style={{fontWeight: '700', color: '#1e293b', fontSize: '18px', marginBottom: '4px'}}>{lightbox.title}</p>
                  <span style={{fontSize: '12px', background: '#f0faea', color: '#4b797b', padding: '4px 10px', borderRadius: '12px', fontWeight: '600'}}>{lightbox.category}</span>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  style={{background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', fontSize: '18px'}}
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Gallery;