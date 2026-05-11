import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 font-semibold text-lg mb-4 tracking-widest uppercase"
          >
            Vietnam & China → Kenya & East Africa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-gray-800 leading-tight mb-6"
          >
            Your Gateway to <span className="text-blue-600">Asian Manufacturing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-lg mb-8"
          >
            We bridge the gap between the industrial powerhouses of Vietnam and China and the growing markets of Kenya and East Africa. Premium sourcing, quality assurance, and seamless logistics — all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex space-x-4"
          >
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold shadow-lg">
              Start Sourcing
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition font-semibold">
              Our Services
            </button>
          </motion.div>
        </div>

        {/* Right Side - Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10 w-full max-w-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-2xl">🏭</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Verified Factories</p>
                  <p className="text-gray-500 text-xs">Vietnam & China</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-2xl">✅</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Quality Assurance</p>
                  <p className="text-gray-500 text-xs">Pre-shipment inspections</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <span className="text-2xl">🚢</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Logistics & Compliance</p>
                  <p className="text-gray-500 text-xs">Nairobi & Mombasa delivery</p>
                </div>
              </div>
              <div className="h-10 bg-blue-600 rounded-lg flex items-center justify-center mt-2">
                <p className="text-white font-semibold text-sm">🌍 Asia to Africa, Seamlessly</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;