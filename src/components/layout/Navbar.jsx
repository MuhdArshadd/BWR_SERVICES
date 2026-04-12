import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'pricing', 'reviews', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      if (window.scrollY < 50) {
        current = '';
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); 
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur shadow-sm top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Left: Company Image Logo */}
          <div className="flex-shrink-0 flex items-center min-w-fit">
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
          <div className="hidden md:flex flex-1 justify-center px-4">
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

          {/* Right: Flag, Contact Button & Mobile Toggle */}
          <div className="flex items-center justify-end gap-3 md:gap-4 min-w-fit">
            
            {/* The Malaysia Flag (Visible on all dimensions) */}
            <div className="flex items-center justify-center p-1.5 bg-white rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-slate-200">
              <img 
                src="/MalaysiaFlag.png" 
                alt="Malaysia" 
                className="w-7 h-auto object-cover rounded-[2px]" 
              />
            </div>

            {/* Desktop Contact Us Button */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                onClick={() => handleNavClick('contact')}
                className="whitespace-nowrap px-6 py-3 bg-brand text-white font-bold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-base-dark hover:text-brand focus:outline-none p-2 bg-structure/30 rounded-lg transition-colors">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
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