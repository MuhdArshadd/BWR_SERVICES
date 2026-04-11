import React, { useState, useEffect } from 'react';
import { GeneralService, ChemicalWash, DiagnosisRepair, InstallationIcon } from '../Icons';

const serviceData = [
  { id: 1, title: 'General Service', desc: 'Routine cleaning for optimal airflow and cooling efficiency.', icon: <GeneralService className="w-full h-full" /> },
  { id: 2, title: 'Chemical Wash', desc: 'Deep cleaning to remove stubborn dirt, mold, and odors.', icon: <ChemicalWash className="w-full h-full" /> },
  { id: 3, title: 'Diagnosis & Repair', desc: 'Fixing water leaks, strange noises, and faulty boards.', icon: <DiagnosisRepair className="w-full h-full" /> },
  { id: 4, title: 'New Installation', desc: 'Professional mounting and secure piping for brand new units.', icon: <InstallationIcon className="w-full h-full" /> },
];

const Services = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Array of your 3 images (ensure these exist in your public folder)
  const images = [
    '/services1.png',
    '/services2.png',
    '/services3.png',
    '/services4.png',
  ];

  // Auto-slide effect: Changes image every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); 

    // Cleanup timer on unmount
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="services" className="pt-8 pb-8 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* --- Left Side: Auto-Sliding Images --- */}
        {/* hidden lg:block ensures it vanishes completely on mobile and iPad */}
        <div className="hidden lg:block w-full lg:w-1/2 relative z-10">
          
          {/* Stylish Background Elements */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-accent rounded-3xl -z-10"></div>          
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand/20 rounded-full blur-3xl -z-20"></div>
          
          {/* Image Slider Container */}
          <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Aircon Service Work ${idx + 1}`}
                // The transition handles the smooth fade. scale-105 to scale-100 gives a slight zoom-out effect.
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            ))}
            {/* Soft dark gradient at the bottom so the image doesn't look flat */}
            <div className="absolute inset-0 bg-gradient-to-t from-base-dark/40 via-transparent to-transparent"></div>
          </div>

          {/* Stylish Floating Badge */}
          <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-structure flex flex-col gap-1 z-20 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-accent">100%</span>
            </div>
            <p className="text-sm font-bold text-base-dark/80 uppercase tracking-wide">Satisfaction</p>
          </div>
        </div>

        {/* --- Right Side: Content & Services (Visible on all devices) --- */}
        <div className="w-full lg:w-1/2">
          
          {/* Reference Image Layout: Eyebrow, Title, Paragraph */}
          <p className="text-accent font-extrabold tracking-widest uppercase mb-4 text-lg md:text-xl">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-base-dark mb-6 leading-tight">
            Cooling Solutions <br className="hidden md:block" /> for Every Space
          </h2>
          <p className="text-base-dark/80 text-lg mb-10 leading-relaxed max-w-2xl">
            At BWR Services, our mission is to provide fast, reliable, and high-quality air conditioning maintenance tailored to meet the unique needs of your home and business. We strive to be your trusted partner in keeping your environment comfortable.
          </p>

          {/* 2x2 Grid Layout for Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {serviceData.map((service) => (
              // Removed 'group' class here
              <div key={service.id} className="flex items-start gap-4">
                
                {/* Icon Circle: Removed hover classes, added text-brand */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-brand mt-1 block">
                  {service.icon}
                </div>
                
                {/* Service Text: Removed group-hover from the heading */}
                <div>
                  <h4 className="text-xl font-bold text-base-dark mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-base-dark/70 leading-relaxed font-medium">
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