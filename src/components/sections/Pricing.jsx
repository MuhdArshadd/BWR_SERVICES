import React from 'react';

const Pricing = () => {
  const tiers = [
    { title: 'General Servicing', price: 'RM 80', desc: 'Standard cleaning for 1.0HP - 1.5HP units.' },
    { title: 'Chemical Wash', price: 'RM 150', desc: 'Deep chemical cleaning for heavily soiled units.' },
    { title: 'Repair & Parts', price: 'Custom Quote', desc: 'Contact us for an exact diagnostic and parts replacement quote.' },
  ];

  return (
    <section id="pricing" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-base-dark mb-4">Transparent Pricing</h2>
          <p className="text-lg text-accent font-semibold">No hidden fees. Honest work.</p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-6">
          {tiers.map((tier, idx) => (
            <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:p-8 bg-base-dark rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              
              {/* Left Side: Title & Description */}
              <div className="mb-6 md:mb-0 flex-1 md:pr-4">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                <p className="text-white/80">{tier.desc}</p>
              </div>
              
              {/* Right Side: The White Price Badge */}
              {/* Widened to md:w-64 lg:w-72 to comfortably fit the large "Custom Quote" text */}
              <div className="flex flex-col items-center justify-center w-full md:w-64 lg:w-72 bg-white border-2 border-structure/30 rounded-xl p-4 shadow-sm flex-shrink-0">
                <span className="text-xs font-bold text-base-dark/50 uppercase tracking-widest mb-1">
                  Starts From
                </span>
                
                {/* Text is now universally large across all pricing tiers */}
                <div className="font-black text-accent text-center leading-tight text-3xl lg:text-4xl">
                  {tier.price}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-8 text-sm text-accent font-bold italic tracking-wide">
          *Prices vary based on horsepower and condition.
        </p>
        
      </div>
    </section>
  );
};

export default Pricing;