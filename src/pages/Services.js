import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🏭',
    title: 'Product Sourcing',
    description: 'Direct-to-factory relationships in Vietnam and China. We bypass middlemen and connect you to verified manufacturers.',
    details: [
      'Verified supplier networks',
      'Direct factory relationships',
      'Factory Audit',
      'Price Negotiation',
      'Sample Development',
      'RFQs & Quoting'
    ],
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    description: 'From factory audits to pre-shipment inspections, every unit meets international standards before it leaves the port. Your brand reputation is our responsibility.',
    details: [
      'Factory audits and vetting',
      'Pre-shipment inspections',
      'International standards compliance',
      'Brand requirement verification',
      'Risk mitigation strategies',
    ],
  },
  {
    icon: '🚢',
    title: 'Logistics & Compliance',
    description: 'We handle export documentation, certificates of conformity and shipping logistics. Seamless delivery from Hanoi or Guangzhou to Kenya and EastAfrica.',
    details: [
      'Export documentation',
      'Certificates of conformity',
      'Shipping logistics management',
      'Kenya and East-Africa delivery',
      'Customs clearance support',
    ],
  },
  {
    icon: '📊',
    title: 'Sales Representation',
    description: 'For Asian manufacturers entering East Africa, we act as your dedicated regional representative with market entry services and localized sales strategies.',
    details: [
      'Regional market representation',
      'Market intelligence reports',
      'Lead generation',
      'Localized sales strategies',
      'African consumer insights',
    ],
  },
  {
    icon: '👥',
    title: 'Talent Sourcing',
    description: 'We identify and recruit top-tier talent across the trade corridor; regional sales managers, technical consultants and administrative professionals.',
    details: [
      'Regional sales managers',
      'Technical consultants',
      'Renewable energy specialists',
      'Administrative support',
      'Trade corridor professionals',
    ],
  },
  {
    icon: '✉️',
    title: 'Communication & Language',
    description: 'Professional business correspondence, Zalo outreach, email negotiations and contract drafting in culturally nuanced English.',
    details: [
      'Professional correspondence',
      'Zalo outreach management',
      'Email negotiation support',
      'Contract drafting',
      'English language instruction',
    ],
  },
];

function Services() {
  const primaryColor = '#4b797b';

  return (
    <div style={{paddingTop: '80px'}}>

      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #f0faea 0%, #ffffff 100%)', padding: '80px 16px', textAlign: 'center'}}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{color: primaryColor, fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}
        >
          What We Offer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{fontSize: '48px', fontWeight: '700', color: '#1e293b', marginBottom: '24px', lineHeight: '1.2'}}
        >
          Comprehensive <span style={{color: primaryColor}}>Trade Solutions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{fontSize: '18px', color: '#64748b', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8'}}
        >
          Everything you need to source, ship and sell across the Asia-Africa trade corridor, all under one roof.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section style={{padding: '80px 16px', background: 'white'}}>
        <div style={{maxWidth: '1152px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px'}}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: primaryColor,
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '32px',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease, background-color 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                // Change text colors
                const title = e.currentTarget.querySelector('h3');
                const desc = e.currentTarget.querySelector('p');
                const listItems = e.currentTarget.querySelectorAll('li');
                if (title) title.style.color = '#1e293b';
                if (desc) desc.style.color = '#64748b';
                listItems.forEach(li => {
                  li.style.color = '#475569';
                  const checkSpan = li.querySelector('span');
                  if (checkSpan) checkSpan.style.color = primaryColor;
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor;
                const title = e.currentTarget.querySelector('h3');
                const desc = e.currentTarget.querySelector('p');
                const listItems = e.currentTarget.querySelectorAll('li');
                if (title) title.style.color = 'white';
                if (desc) desc.style.color = 'white';
                listItems.forEach(li => {
                  li.style.color = 'white';
                  const checkSpan = li.querySelector('span');
                  if (checkSpan) checkSpan.style.color = 'white';
                });
              }}
            >
              <div style={{fontSize: '40px', marginBottom: '16px'}}>{service.icon}</div>
              <h3 style={{fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: 'white'}}>{service.title}</h3>
              <p style={{lineHeight: '1.8', marginBottom: '20px', color: 'white'}}>{service.description}</p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {service.details.map((detail, i) => (
                  <li key={i} style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '8px', color: 'white'}}>
                    <span style={{color: 'white', fontWeight: '700'}}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Updated with #4b797b background */}
      <section style={{padding: '80px 16px', background: primaryColor, textAlign: 'center'}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 style={{fontSize: '36px', fontWeight: '700', color: 'white', marginBottom: '16px'}}>
            Ready to Scale Your Sourcing?
          </h2>
          <p style={{color: '#e0efef', fontSize: '18px', marginBottom: '32px'}}>
            Partner with Merali VA and transform the way you do business across the Indian Ocean.
          </p>
          <Link to="/contact" style={{textDecoration: 'none'}}>
            <button style={{background: 'white', color: primaryColor, padding: '16px 40px', borderRadius: '32px', fontSize: '16px', fontWeight: '600', border: 'none', cursor: 'pointer'}}>
              Get Started Today
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}

export default Services;