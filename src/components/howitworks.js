import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: '🤝',
    title: 'Initial Consultation',
    description: 'Tell us what you need. We listen, understand your business requirements and define the exact product specifications you are looking for.',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'Supplier Identification',
    description: 'We tap into our verified factory network in Vietnam and China to identify the best manufacturers for your specific product and budget.',
  },
  {
    number: '03',
    icon: '✅',
    title: 'Quality Verification',
    description: 'Our team conducts factory audits and pre-shipment inspections to ensure every product meets international standards before it ships.',
  },
  {
    number: '04',
    icon: '🚢',
    title: 'Shipping & Delivery',
    description: 'We handle all documentation, export compliance and logistics. Your goods arrive at your Nairobi or Mombasa warehouse without the headache.',
  },
];

function HowItWorks() {
  const primaryColor = '#4b797b';
  const lightColor = '#e0efef';

  return (
    <section id="how" className="py-24 bg-white">
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
            The Process
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          {/* <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From your first inquiry to delivery at your doorstep — here is how we make it happen.
          </p> */}
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 z-0" style={{ backgroundColor: lightColor }}></div>
              )}

              {/* Step Circle */}
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full text-white mb-6 shadow-lg" style={{ backgroundColor: primaryColor }}>
                {step.icon}
              </div>

              <div className="font-bold text-5xl absolute top-0 left-4 z-0 select-none" style={{ color: lightColor }}>
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-lg mb-6">Ready to start your sourcing journey?</p>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button
              className="text-white px-10 py-4 rounded-full transition font-semibold shadow-lg text-lg"
              style={{ backgroundColor: primaryColor }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3a6062'} // slightly darker on hover
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryColor}
            >
              Get Started Today
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default HowItWorks;