import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'pricing', 'reviews', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Highlight the section if it is in the upper third of the viewport
          // and the bottom of the section hasn't completely scrolled past the navbar
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      // Clear the active state if the user scrolls all the way back to the absolute top
      if (window.scrollY < 50) {
        current = '';
      }

      setActiveSection(current);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Trigger it once on mount to catch the initial load position
    handleScroll();

    // Cleanup the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to handle link clicks smoothly
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Closes mobile menu if it's open
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Left: Company Image Logo */}
          <div className="flex-shrink-0 flex items-center md:w-48">
            <a href="#" onClick={() => handleNavClick('')}>
              <img 
                src="/logo.png" 
                alt="BWR Services Logo" 
                width="417" 
                height="249" 
                className="h-14 w-auto object-contain" 
              />
            </a>
          </div>
          
          {/* Middle: Desktop Pill Menu */}
          <div className="hidden md:flex flex-1 justify-center">
            {/* Reduced container padding (p-1.5) and spacing (space-x-1) so the inner pills fit snugly */}
            <div className="bg-structure/40 border border-structure/80 p-1.5 rounded-full flex space-x-1 shadow-sm">
              <a 
                href="#services" 
                onClick={() => handleNavClick('services')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'services' 
                    ? 'bg-brand text-white shadow-md' 
                    : 'text-base-dark hover:text-brand hover:bg-structure/50'
                }`}
              >
                Services
              </a>
              <a 
                href="#pricing" 
                onClick={() => handleNavClick('pricing')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'pricing' 
                    ? 'bg-brand text-white shadow-md' 
                    : 'text-base-dark hover:text-brand hover:bg-structure/50'
                }`}
              >
                Pricing
              </a>
              <a 
                href="#reviews" 
                onClick={() => handleNavClick('reviews')}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeSection === 'reviews' 
                    ? 'bg-brand text-white shadow-md' 
                    : 'text-base-dark hover:text-brand hover:bg-structure/50'
                }`}
              >
                Reviews
              </a>
            </div>
          </div>

          {/* Right: Contact Button & Mobile Toggle */}
          <div className="flex items-center md:w-48 justify-end">
            <div className="hidden md:block">
              <a 
                href="#contact" 
                onClick={() => handleNavClick('contact')}
                className="px-6 py-3 bg-brand text-white font-bold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center ml-4">
              <button onClick={() => setIsOpen(!isOpen)} className="text-base-dark hover:text-brand focus:outline-none p-2 bg-structure/30 rounded-lg">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-structure shadow-lg pb-4 rounded-b-2xl">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <a 
              href="#services" 
              onClick={() => handleNavClick('services')} 
              className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                activeSection === 'services' ? 'bg-brand text-white' : 'text-base-dark hover:text-brand hover:bg-structure/50'
              }`}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              onClick={() => handleNavClick('pricing')} 
              className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                activeSection === 'pricing' ? 'bg-brand text-white' : 'text-base-dark hover:text-brand hover:bg-structure/50'
              }`}
            >
              Pricing
            </a>
            <a 
              href="#reviews" 
              onClick={() => handleNavClick('reviews')} 
              className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${
                activeSection === 'reviews' ? 'bg-brand text-white' : 'text-base-dark hover:text-brand hover:bg-structure/50'
              }`}
            >
              Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => handleNavClick('contact')} 
              className="block px-4 py-3 mt-4 text-base font-bold text-white bg-brand text-center rounded-xl shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;