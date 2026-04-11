import React from 'react';

const Coverage = () => {
  const areas = [
    'Kuala Lumpur',
    'Petaling Jaya',
    'Subang Jaya',
    'Shah Alam',
    'Puchong',
    'Klang',
    'Cyberjaya',
    'Putrajaya'
  ];

  return (
    <section id="coverage" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Content & One Big Card */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-6 tracking-tight">
            Areas We Cover
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-8"></div>
          
          <p className="text-lg text-base-dark/70 mb-10 leading-relaxed max-w-xl">
            As a dedicated mobile service team, we bring professional air conditioning solutions directly to your doorstep across the major metropolitan regions.
          </p>
          
          {/* --- THE ONE BIG GREY CARD --- */}
          <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-xl">
            
            {/* Areas List Grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8">
              {areas.map((area, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,128,64,0.4)]"></div>
                  <span className="text-base md:text-lg font-bold text-base-dark">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            {/* WhatsApp Note (Inside the Card) */}
            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm text-base-dark/60 font-semibold leading-relaxed">
                <span className="text-accent font-black mr-2 uppercase text-xs px-2 py-1 bg-accent/10 rounded">Note</span>
                Outside these areas? Contact us on WhatsApp to check availability for your location.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Map & Glowing Points */}
        <div className="hidden lg:flex w-full lg:w-1/2 relative min-h-[578px] items-center justify-center bg-slate-100 rounded-[2.5rem] border border-slate-200 p-8 shadow-inner">
          <div className="w-full aspect-video bg-slate-200 rounded-3xl flex items-center justify-center text-slate-400 font-black tracking-widest uppercase text-xs relative overflow-hidden shadow-lg border-4 border-white">
            [Malaysia Map Image Placeholder]
            
            {/* Glowing Map Points */}
            <div className="absolute top-[40%] left-[25%]">
              <div className="relative flex items-center justify-center">
                <div className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-accent opacity-60"></div>
                <div className="relative inline-flex rounded-full h-3 w-3 bg-accent shadow-[0_0_10px_#FF8040]"></div>
              </div>
            </div>

            <div className="absolute top-[25%] left-[20%]">
              <div className="relative flex items-center justify-center">
                <div className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-brand opacity-60"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_10px_#0046FF]"></div>
              </div>
            </div>

            <div className="absolute top-[70%] left-[35%]">
              <div className="relative flex items-center justify-center">
                <div className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-brand opacity-60"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-brand shadow-[0_0_10px_#0046FF]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Coverage;