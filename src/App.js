import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Services from './components/services';
import WhyChooseUs from './components/whychooseus';
import HowItWorks from './components/howitworks';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Contact from './pages/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;