import React from "react";
import { WhatsAppIcon } from "../Icons";

const Hero = () => {
  return (
    // Changed bg-white to bg-gray-900 for that "a bit black" premium look
    <section className="relative w-full min-h-[90vh] bg-gray-900 overflow-hidden flex items-center pt-24">
      {/* Background GIF Container */}
      <div className="absolute inset-0 lg:left-[40%] w-full lg:w-[60%] h-full">
        <img
          src="/hero.gif"
          alt="Professional Aircon Servicing"
          className="w-full h-full object-cover brightness-[0.65]"
        />
      </div>

      {/* --- Gradient Blending Overlays (Now Dark) --- */}

      {/* Mobile & Tablet Overlay: Solid semi-transparent dark */}
      <div className="absolute inset-0 bg-gray-900/70 lg:hidden z-0"></div>

      {/* Desktop Overlay 1: Base fade from left to right (Dark) */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-0"></div>

      {/* Desktop Overlay 2: The "Magic" Blend edge (Dark) */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-[40%] w-48 bg-gradient-to-r from-gray-900 to-transparent z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Changed text color to white for contrast against the dark background */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Reliable Aircon Servicing at Your Doorstep
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-10 font-medium max-w-lg mx-auto lg:mx-0">
            Professional cooling solutions for residential and commercial
            spaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {/* Upgraded WhatsApp Button */}
            <a
              href={`https://wa.me/+60182122817?text=${encodeURIComponent("Hi BWR Services! I'd like to book an aircon service. Can you help me?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="text-2xl" />
              Book via WhatsApp
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-brand text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
