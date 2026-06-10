import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { number: 500, suffix: '+', label: 'Verified Factories' },
  { number: 50, suffix: '+', label: 'Products Sourced' },
  { number: 100, suffix: '%', label: 'Quality Guaranteed' },
  { number: 24, suffix: '/7', label: 'Client Support' },
];

const reasons = [
  {
    icon: '🎯',
    title: 'Direct to Factory',
    description: 'We bypass middlemen and trading companies. You get factory prices, not inflated reseller margins.',
  },
  {
    icon: '🔍',
    title: 'Rigorous Vetting',
    description: 'Every supplier goes through our strict audit process. We only work with factories that meet international standards.',
  },
  {
    icon: '🌍',
    title: 'Local Expertise',
    description: 'Deep understanding of East African market demands combined with intimate knowledge of Asian manufacturing hubs.',
  },
  {
    icon: '📋',
    title: 'Full Transparency',
    description: 'Direct communication and honest reporting on factory capabilities, lead times and pricing. No hidden surprises.',
  },
];

function WhyChooseUs() {
  const primaryColor = '#4b797b';

  return (
    <section id="why" className="py-24" style={{ backgroundColor: 'rgba(75, 121, 123, 0.3)' }}>
      <div className="max-w-6xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-semibold tracking-widest uppercase mb-3" style={{ color: primaryColor }}>
            Why Merali VA
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">The Merali VA Advantage</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We are not just a sourcing agent. We are your dedicated ground partner!
          </p>
        </motion.div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <p className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>
                <CountUp
                  end={stat.number}
                  duration={2}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </p>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 flex space-x-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-500 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;