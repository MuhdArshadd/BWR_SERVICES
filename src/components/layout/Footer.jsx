import React from 'react';
import { WhatsAppIcon, TikTokIcon, InstagramIcon } from '../Icons'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-base-dark text-white pt-16 pb-8 border-t-4 border-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand & Socials (Takes up more space) */}
        <div className="md:col-span-2">
          <span className="font-black text-2xl text-white tracking-tighter mb-4 block">BWR SERVICES</span>
          <p className="text-structure/80 mb-6 max-w-sm">
            Professional, reliable, and transparent air conditioner services across the Klang Valley.
          </p>
          
          <p className="text-xs font-bold uppercase tracking-widest text-structure/50 mb-3">
            Follow Our Work
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.tiktok.com/@bwr_services" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand hover:-translate-y-1 transition-all duration-300">
              <TikTokIcon className="text-lg" />
            </a>
            <a href="https://www.instagram.com/bwr_services/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand hover:-translate-y-1 transition-all duration-300">
              <InstagramIcon className="text-lg" />
            </a>
            <a href="https://wa.me/+60182122817" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-green-500 hover:-translate-y-1 transition-all duration-300">
              <WhatsAppIcon className="text-lg" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-structure">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#services" className="text-structure/80 hover:text-accent transition-colors">Our Services</a></li>
            <li><a href="#pricing" className="text-structure/80 hover:text-accent transition-colors">Pricing</a></li>
            <li><a href="#reviews" className="text-structure/80 hover:text-accent transition-colors">Customer Reviews</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div id="contact">
          <h4 className="text-lg font-bold mb-4 text-structure">Contact Us</h4>
          <p className="text-structure/80 mb-2"><strong>Phone:</strong> +60 18-212 2817</p>
          <p className="text-structure/80 mb-2"><strong>Email:</strong> hello@bwrservices.com</p>
          <p className="text-structure/80"><strong>Hours:</strong> Mon - Sunday (9am - 6pm)</p>
        </div>

      </div>

      {/* Copyright Bar (No Developer Credit) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-structure/60 text-sm">
        &copy; {new Date().getFullYear()} BWR Services. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;