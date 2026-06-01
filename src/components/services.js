import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🏭',
    title: 'Product Sourcing',
    description: 'Direct-to-factory relationships in Vietnam and China. We bypass middlemen and connect you to verified manufacturers, industries like Solar technology, Ceramic tiles, Sanitary ware, Textiles etc.',
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    description: 'From factory audits to pre-shipment inspections, every unit meets international standards before it leaves the port. Your brand reputation is our responsibility.',
  },
  {
    icon: '🚢',
    title: 'Logistics & Compliance',
    description: 'We handle export documentation, certificates of conformity and shipping logistics. Seamless delivery from Hanoi or Guangzhou to Kenya and East Africa.',
  },
  {
    icon: '📊',
    title: 'Sales Representation',
    description: 'For Asian manufacturers lookinf forward to invest in East Africa, we offer market entry services, Market intelligence, lead generation and localized sales strategies.',
  },
  {
    icon: '👥',
    title: 'Talent Sourcing',
    description: 'We identify and recruit top-tier talent across the trade corridor e.g regional sales managers, technical consultants and administrative professionals.',
  },
  {
    icon: '✉️',
    title: 'Communication & Language',
    description: 'Professional business correspondence, Zalo outreach, email negotiations and contract drafting. We eliminate the language barriers that cause costly trade misunderstandings.',
  },
];

function Services() {
  const primaryColor = '#4b797b';

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-semibold tracking-widest uppercase mb-3" style={{ color: primaryColor }}>
            What We Do
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Trade Solutions</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to source, ship and sell across the Asia-Africa trade corridor.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="rounded-2xl p-8 cursor-pointer transition-all duration-300 border border-gray-100"
              style={{
                backgroundColor: primaryColor,
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = 'inherit'; // revert to default text color (gray-800/500)
                // Change child text colors
                const title = e.currentTarget.querySelector('h3');
                const desc = e.currentTarget.querySelector('p');
                if (title) title.style.color = '#1f2937'; // gray-800
                if (desc) desc.style.color = '#6b7280'; // gray-500
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor;
                e.currentTarget.style.color = 'white';
                const title = e.currentTarget.querySelector('h3');
                const desc = e.currentTarget.querySelector('p');
                if (title) title.style.color = 'white';
                if (desc) desc.style.color = 'white';
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>{service.title}</h3>
              <p className="leading-relaxed" style={{ color: 'white' }}>{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;