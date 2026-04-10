import React from 'react';

const serviceData = [
  { id: 1, title: 'General Service', desc: 'Routine cleaning for optimal airflow and cooling efficiency.', icon: '💧' },
  { id: 2, title: 'Chemical Wash', desc: 'Deep cleaning to remove stubborn dirt, mold, and odors.', icon: '🧪' },
  { id: 3, title: 'Diagnosis & Repair', desc: 'Fixing water leaks, strange noises, and faulty circuit boards.', icon: '🔧' },
  { id: 4, title: 'New Installation', desc: 'Professional mounting and secure piping for brand new units.', icon: '🏗️' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-structure/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-4">AC Not Cooling? We Can Help.</h2>
          <div className="w-24 h-1.5 bg-brand mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl border border-structure hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="text-5xl mb-6 bg-structure/50 w-20 h-20 flex items-center justify-center rounded-xl">{service.icon}</div>
              <h3 className="text-2xl font-bold text-base-dark mb-3">{service.title}</h3>
              <p className="text-base-dark/70 mb-6 font-medium leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;