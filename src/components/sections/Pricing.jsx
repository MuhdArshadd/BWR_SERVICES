import React, { useState } from 'react';

const Pricing = () => {
  // State to track which pricing card is expanded
  const [expandedTier, setExpandedTier] = useState(null);

  const toggleExpand = (tierId) => {
    if (expandedTier === tierId) {
      setExpandedTier(null); // Close if already open
    } else {
      setExpandedTier(tierId); // Open clicked tier
    }
  };

  const tiers = [
    { 
      id: 'general',
      title: 'General Servicing', 
      price: 'RM 80', 
      desc: 'Standard cleaning for optimum airflow and cooling efficiency.',
      hasDetails: false
    },
    { 
      id: 'chemical',
      title: 'Chemical Service Package', 
      price: 'RM 140', 
      desc: 'Deep cleaning chemical wash, flushing, and complete system check.',
      hasDetails: true 
    },
    { 
      id: 'repair',
      title: 'Diagnosis & Repair', 
      price: 'Custom Quote', 
      desc: 'Expert troubleshooting, leak fixing, and parts replacement.',
      hasDetails: false
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-4 tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-lg text-accent font-bold tracking-widest uppercase mb-6">
            No hidden fees. Honest work.
          </p>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-6">
          {tiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`flex flex-col p-6 md:p-8 bg-base-dark rounded-[2rem] transition-all duration-300 shadow-lg ${tier.hasDetails ? 'cursor-pointer hover:ring-2 hover:ring-brand' : 'hover:-translate-y-1'}`}
              onClick={() => tier.hasDetails && toggleExpand(tier.id)}
            >
              
              {/* Main Card Header (Always Visible) */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-6 md:mb-0 flex-1 md:pr-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                  <p className="text-white/70 leading-relaxed">{tier.desc}</p>
                  
                  {/* Click to expand hint */}
                  {tier.hasDetails && (
                    <div className="mt-4 flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest">
                      {expandedTier === tier.id ? 'Close Details' : 'View HP Breakdown'}
                      <svg className={`w-4 h-4 transition-transform duration-300 ${expandedTier === tier.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* The White Price Badge */}
                <div className="flex flex-col items-center justify-center w-full md:w-64 bg-white border-2 border-structure/30 rounded-2xl p-4 shadow-sm flex-shrink-0">
                  <span className="text-[10px] font-bold text-base-dark/40 uppercase tracking-widest mb-1">
                    {tier.id === 'chemical' ? 'Starting From' : 'Estimated'}
                  </span>
                  <div className="font-black text-accent text-center leading-tight text-3xl">
                    {tier.price}
                  </div>
                </div>
              </div>

              {/* --- EXPANDABLE DETAILS SECTION (Only for Chemical) --- */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedTier === tier.id ? 'max-h-[1000px] opacity-100 mt-8 pt-8 border-t border-white/10' : 'max-h-0 opacity-0 mt-0 pt-0 border-transparent'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  
                  {/* Left: What's Included */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">Package Inclusions:</h4>
                    <ul className="space-y-3">
                      {[
                        'Chemical service for indoor & outdoor units',
                        'Cover & filter deep cleaning',
                        'Drain pipe flushing to prevent leaks',
                        'Comprehensive gas checking'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                          <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Important Gas Note */}
                    <div className="mt-6 p-4 bg-brand/20 border border-brand/30 rounded-xl">
                      <p className="text-sm font-semibold text-white">
                        <span className="text-accent font-black uppercase text-xs tracking-widest block mb-1">Note on Gas Refill</span>
                        If gas is required after checking, an additional charge of <span className="text-accent font-black">RM2 per PSI</span> will apply.
                      </p>
                    </div>
                  </div>

                  {/* Right: Pricing Tables */}
                  <div className="space-y-6">
                    {/* Wall Mounted Table */}
                    <div>
                      <h4 className="text-accent font-black uppercase tracking-widest text-sm mb-3">Wall Mounted Units</h4>
                      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                        <div className="flex justify-between px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                          <span>Horsepower</span>
                          <span>Price</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 border-b border-white/5 text-white/80 text-sm">
                          <span>1.0 HP - 1.5 HP</span>
                          <span className="font-bold text-white">RM 140</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 border-b border-white/5 text-white/80 text-sm">
                          <span>2.0 HP - 2.5 HP</span>
                          <span className="font-bold text-white">RM 160</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 text-white/80 text-sm">
                          <span>3.0 HP & Above</span>
                          <span className="font-bold text-white">RM 190</span>
                        </div>
                      </div>
                    </div>

                    {/* Ceiling Cassette Table */}
                    <div>
                      <h4 className="text-accent font-black uppercase tracking-widest text-sm mb-3">Ceiling Cassette Units</h4>
                      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                        <div className="flex justify-between px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                          <span>Horsepower</span>
                          <span>Price</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 border-b border-white/5 text-white/80 text-sm">
                          <span>1.5 HP</span>
                          <span className="font-bold text-white">RM 200</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 border-b border-white/5 text-white/80 text-sm">
                          <span>2.0 HP - 2.5 HP</span>
                          <span className="font-bold text-white">RM 250</span>
                        </div>
                        <div className="flex justify-between px-4 py-3 text-white/80 text-sm">
                          <span>3.0 HP & Above</span>
                          <span className="font-bold text-white">RM 300 - RM 350</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center mt-10 text-sm text-base-dark/50 font-semibold leading-relaxed">
          *Prices shown are estimated base rates. Exact quotes may vary based on actual site conditions, unit accessibility, and necessary parts replacement.
        </p>
        
      </div>
    </section>
  );
};

export default Pricing;