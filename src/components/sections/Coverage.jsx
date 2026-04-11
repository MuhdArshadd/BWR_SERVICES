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
    <section id="coverage" className="py-24 px-4 bg-structure/20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Text & List */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-6">
            Areas We Cover
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-8"></div>
          <p className="text-lg text-base-dark/80 mb-8 leading-relaxed">
            As a dedicated mobile service team, we bring professional air conditioning solutions directly to your doorstep. Our primary service areas are concentrated around the major metropolitan regions.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {areas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-base-dark font-semibold">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-white border border-structure rounded-xl shadow-sm">
            <p className="text-base-dark/70 font-medium">
              <span className="text-accent font-bold">Outside these areas?</span> Contact us on WhatsApp to check if our technicians can reach your location.
            </p>
          </div>
        </div>

        {/* Right Side: Map & Glowing Points */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center bg-white rounded-3xl border border-structure p-8 shadow-sm">
          {/* Map Image Placeholder (Replace src with actual map image path) */}
          <div className="w-full aspect-video bg-structure/50 rounded-xl flex items-center justify-center text-base-dark/40 font-bold relative overflow-hidden">
            [Malaysia Map Image Placeholder]
            
            {/* Glowing Map Points (Simulated locations for Klang Valley, Penang, Johor) */}
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