import React from 'react';
import { WhatsAppIcon, QuotationIcon, TechnicianIcon } from "../Icons";

const BookingFlow = () => {
  const steps = [
    { num: '01', title: 'Reach Out', desc: 'Click the WhatsApp button or call us directly.', icon: <WhatsAppIcon className="w-12 h-12 md:w-14 md:h-14" /> },
    { num: '02', title: 'Get a Quote', desc: 'Tell us your AC issue and get a transparent price instantly.', icon: <QuotationIcon className="w-12 h-12 md:w-14 md:h-14" /> },
    { num: '03', title: 'We Fix It', desc: 'Our technician arrives at your location and solves the problem.', icon: <TechnicianIcon className="w-12 h-12 md:w-14 md:h-14" /> },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-base-dark text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-white">How to Get Started with Us</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Flow Container */}
        <div className="flex flex-col md:flex-row relative gap-8 md:gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-row md:flex-col items-start md:items-center flex-1 z-10">

              {/* --- DESKTOP Connecting Line --- */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute top-14 left-[50%] w-full items-center justify-center z-0">
                  <div className="w-full border-t-4 border-dashed border-white/50"></div>
                  <div className="absolute bg-base-dark px-4 text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}

              {/* --- MOBILE Connecting Line --- */}
              {idx < steps.length - 1 && (
                <div className="md:hidden absolute top-24 left-12 bottom-[-2rem] flex flex-col items-center justify-center z-0 w-px">
                  <div className="h-full border-l-4 border-dashed border-white/50"></div>
                  <div className="absolute bg-base-dark py-2 text-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 13l-7 7-7-7M19 5l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}

              {/* --- Icon Circular Border --- */}
              <div className="relative flex-shrink-0 z-10 w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white bg-base-dark flex items-center justify-center shadow-lg">
                
                {/* The SVG Icon */}
                <div className="text-white">
                  {step.icon}
                </div>
                
                {/* Number Badge */}
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-white text-base-dark font-black w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base shadow-md border-4 border-base-dark">
                  {step.num}
                </div>
              </div>

              {/* --- Text Content --- */}
              <div className="ml-6 md:ml-0 md:mt-8 md:text-center pt-2 md:pt-0 max-w-[16rem]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default BookingFlow;