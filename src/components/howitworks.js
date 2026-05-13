import React from 'react';
import { motion } from 'framer-motion';

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
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-3">The Process</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From your first inquiry to delivery at your doorstep — here is how we make it happen.
          </p>
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
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-100 z-0"></div>
              )}

              {/* Step Number */}
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full text-2xl mb-6 shadow-lg">
                {step.icon}
              </div>

              <div className="text-blue-200 font-bold text-5xl absolute top-0 left-4 z-0 select-none">
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
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition font-semibold shadow-lg text-lg">
            Get Started Today
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default HowItWorks;