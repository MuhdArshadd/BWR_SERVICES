import React from 'react';

const Pricing = () => {
  const tiers = [
    { title: 'General Servicing', price: 'RM 80', desc: 'Standard cleaning for 1.0HP - 1.5HP units.' },
    { title: 'Chemical Wash', price: 'RM 150', desc: 'Deep chemical cleaning for heavily soiled units.' },
    { title: 'Repair & Parts', price: 'Custom Quote', desc: 'Contact us for an exact diagnostic and parts replacement quote.' },
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-base-dark mb-4">Transparent Pricing</h2>
          <p className="text-lg text-base-dark/70">No hidden fees. Honest work.</p>
        </div>

        <div className="flex flex-col gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 bg-structure/20 border border-structure rounded-2xl hover:border-brand transition-colors">
              <div>
                <h3 className="text-2xl font-bold text-base-dark mb-2">{tier.title}</h3>
                <p className="text-base-dark/70">{tier.desc}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="text-sm font-semibold text-base-dark/50 uppercase">Starts From</span>
                <div className="text-3xl font-black text-brand">{tier.price}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-base-dark/50 italic">*Prices vary based on horsepower and condition.</p>
      </div>
    </section>
  );
};

export default Pricing;