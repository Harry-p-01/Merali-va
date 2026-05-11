import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import WhyChooseUs from './components/whychooseus';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
    </div>
  );
}

export default App;