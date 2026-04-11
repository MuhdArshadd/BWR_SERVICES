import React, { useState, useEffect } from 'react';
import { GeneralService, ChemicalWash, DiagnosisRepair, InstallationIcon } from '../Icons';

const serviceData = [
  { id: 1, title: 'General Service', desc: 'Routine cleaning for optimal airflow and cooling efficiency.', icon: <GeneralService className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: 2, title: 'Chemical Wash', desc: 'Deep cleaning to remove stubborn dirt, mold, and odors.', icon: <ChemicalWash className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: 3, title: 'Diagnosis & Repair', desc: 'Fixing water leaks, strange noises, and faulty boards.', icon: <DiagnosisRepair className="w-6 h-6 md:w-8 md:h-8" /> },
  { id: 4, title: 'New Installation', desc: 'Professional mounting and secure piping for brand new units.', icon: <InstallationIcon className="w-6 h-6 md:w-8 md:h-8" /> },
];

const Services = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    '/services1.png',
    '/services2.png',
    '/services3.png',
    '/services4.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); 

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="services" className="py-8 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* --- Left Side: Auto-Sliding Images --- */}
        <div className="hidden lg:block w-full lg:w-1/2 relative z-10">
          <div className="absolute -top-6 -left-6 w-full h-full bg-accent rounded-3xl -z-10"></div>          
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand/20 rounded-full blur-3xl -z-20"></div>
          
          <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Aircond Service Work ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-base-dark/40 via-transparent to-transparent"></div>
          </div>

          <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-1 z-20">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-accent">100%</span>
            </div>
            <p className="text-sm font-bold text-base-dark/80 uppercase tracking-wide">Satisfaction</p>
          </div>
        </div>

        {/* --- Right Side: Content & Service Cards --- */}
        <div className="w-full lg:w-1/2">
          <p className="text-accent font-extrabold tracking-widest uppercase mb-4 text-lg">
            Our Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-6 leading-tight">
            Cooling Solutions <br className="hidden md:block" /> for Every Space
          </h2>
          <p className="text-base-dark/70 text-lg mb-10 leading-relaxed max-w-2xl">
            We provide fast, reliable, and high-quality maintenance tailored to your home and business.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {serviceData.map((service) => (
              <div 
                key={service.id} 
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-row items-center gap-4 shadow-sm"
              >
                {/* Icon Container (Back on the left) */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center text-brand border border-slate-100 shadow-sm">
                  {service.icon}
                </div>
                
                {/* Text Container (Left aligned) */}
                <div>
                  <h4 className="text-xl font-bold text-base-dark mb-0.5">
                    {service.title}
                  </h4>
                  <p className="text-sm text-base-dark/60 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;