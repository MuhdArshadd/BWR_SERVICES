import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import Pricing from './components/sections/Pricing';
import BookingFlow from './components/sections/BookingFlow';
import Reviews from './components/sections/Reviews';
import Coverage from './components/sections/Coverage'; // <-- Import it here

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <BookingFlow />
        <Reviews />
        <Coverage />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;