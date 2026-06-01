import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function About() {
  return (
    <div style={{paddingTop: '80px'}}>

      {/* Hero Section */}
      <section style={{background: 'linear-gradient(135deg, #f0faea 0%, #ffffff 100%)', padding: '80px 16px'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto', textAlign: 'center'}}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{color: '#4b797b', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{fontSize: '48px', fontWeight: '700', color: '#1e293b', marginBottom: '24px', lineHeight: '1.2'}}
          >
            Bridging Asia and Africa Through <span style={{color: '#4b797b'}}>Strategic Trade</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8'}}
          >
            Merali VA stands as the premier strategic link between the industrial powerhouses of Vietnam and China and the burgeoning markets of Kenya and the wider East African region.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{padding: '80px 16px', background: 'white'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center'}}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{flex: '1', minWidth: '300px'}}
          >
            <p style={{color: '#4b797b', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}>Our Mission</p>
            <h2 style={{fontSize: '36px', fontWeight: '700', color: '#1e293b', marginBottom: '24px', lineHeight: '1.3'}}>
              Where Quality Meets Logistics
            </h2>
            <p style={{fontSize: '16px', color: '#64748b', lineHeight: '1.8', marginBottom: '16px'}}>
              In an era of global expansion, the distance between a vision and a finished product shouldn't be measured in miles, but in the strength of your partnerships.
            </p>
            <p style={{fontSize: '16px', color: '#64748b', lineHeight: '1.8'}}>
              We don't just find suppliers, we build the infrastructure for your commercial success. Our approach is defined by transparency, efficiency, and a deep understanding of both Asian manufacturing and East African market demands.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px'}}
          >
            {[
              { icon: '🎯', title: 'Transparency', desc: 'Direct communication and honest reporting on factory capabilities and lead times.' },
              { icon: '⚡', title: 'Efficiency', desc: 'Streamlining the procurement cycle to get your products to market faster.' },
              { icon: '🌍', title: 'Local Expertise, Global Vision', desc: 'Deep understanding of East African market demands with intimate knowledge of Asian manufacturing hubs.' },
            ].map((item, index) => (
              <div key={index} style={{display: 'flex', gap: '16px', padding: '20px', background: '#f0faea', borderRadius: '12px'}}>
                <span style={{fontSize: '28px'}}>{item.icon}</span>
                <div>
                  <h3 style={{fontWeight: '700', color: '#1e293b', marginBottom: '4px'}}>{item.title}</h3>
                  <p style={{color: '#64748b', fontSize: '14px', lineHeight: '1.6'}}>{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section style={{padding: '80px 16px', background: '#f0faea'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto', textAlign: 'center'}}>
          <p style={{color: '#4b797b', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}>The Merali VA Advantage</p>
          <h2 style={{fontSize: '36px', fontWeight: '700', color: '#1e293b', marginBottom: '48px'}}>Why Businesses Trust Us</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px'}}>
            {[
              { number: 500, suffix: '+', label: 'Verified Factories' },
              { number: 50, suffix: '+', label: 'Products Sourced' },
              { number: 100, suffix: '%', label: 'Quality Guaranteed' },
              { number: 24, suffix: '/7', label: 'Client Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{background: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'}}
              >
                <p style={{fontSize: '40px', fontWeight: '700', color: '#4b797b', marginBottom: '8px'}}>
                  <CountUp
                    end={stat.number}
                    duration={2}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </p>
                <p style={{color: '#64748b', fontWeight: '500'}}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;