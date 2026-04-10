import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-dark text-white pt-16 pb-8 border-t-4 border-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <span className="font-black text-2xl text-white tracking-tighter mb-4 block">BWR<span className="text-accent">SERVICES</span></span>
          <p className="text-structure/80 mb-4">Professional, reliable, and transparent air conditioner servicing across the Klang Valley.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4 text-structure">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="text-structure/80 hover:text-accent transition-colors">Our Services</a></li>
            <li><a href="#pricing" className="text-structure/80 hover:text-accent transition-colors">Pricing</a></li>
            <li><a href="#reviews" className="text-structure/80 hover:text-accent transition-colors">Customer Reviews</a></li>
          </ul>
        </div>
        <div id="contact">
          <h4 className="text-lg font-bold mb-4 text-structure">Contact Us</h4>
          <p className="text-structure/80 mb-2"><strong>Phone:</strong> +60 12-345 6789</p>
          <p className="text-structure/80 mb-2"><strong>Email:</strong> hello@bwrservices.com</p>
          <p className="text-structure/80"><strong>Hours:</strong> Mon - Sat (9am - 6pm)</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-structure/60 text-sm">
        &copy; {new Date().getFullYear()} BWR Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;