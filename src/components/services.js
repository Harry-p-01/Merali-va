import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🏭',
    title: 'Product Sourcing',
    description: 'Direct-to-factory relationships in Vietnam and China. We bypass middlemen and connect you to verified manufacturers in Solar technology, Ceramic tiles, Sanitary ware and Textiles.',
  },
  {
    icon: '✅',
    title: 'Quality Assurance',
    description: 'From factory audits to pre-shipment inspections, every unit meets international standards before it leaves the port. Your brand reputation is our responsibility.',
  },
  {
    icon: '🚢',
    title: 'Logistics & Compliance',
    description: 'We handle export documentation, certificates of conformity and shipping logistics. Seamless delivery from Hanoi or Guangzhou to Nairobi or Mombasa.',
  },
  {
    icon: '📊',
    title: 'Sales Representation',
    description: 'For Asian manufacturers entering East Africa, we act as your dedicated regional representative. Market intelligence, lead generation and localized sales strategies.',
  },
  {
    icon: '👥',
    title: 'Talent Sourcing',
    description: 'We identify and recruit top-tier talent across the trade corridor — regional sales managers, technical consultants for renewable energy, and administrative professionals.',
  },
  {
    icon: '✉️',
    title: 'Communication & Language',
    description: 'Professional business correspondence, Zalo outreach, email negotiations and contract drafting. We eliminate the language barriers that cause costly trade misunderstandings.',
  },
];

function Services() {
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
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-3">What We Do</p>
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
              className="bg-white border border-gray-100 rounded-2xl p-8 cursor-pointer transition-all duration-300 shadow-sm hover:border-blue-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;