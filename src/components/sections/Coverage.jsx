import React, { useState, useRef } from 'react';

const Coverage = () => {
  // Area data with honest, professional stats for a small mobile business
  const areasData = [
    { name: 'Kuala Lumpur', arrival: '45 - 60 Mins', popular: 'Chemical Wash', status: 'Active Daily' },
    { name: 'Petaling Jaya', arrival: '30 - 45 Mins', popular: 'General Service', status: 'High Availability' },
    { name: 'Subang Jaya', arrival: '30 - 50 Mins', popular: 'Diagnosis & Repair', status: 'Active Daily' },
    { name: 'Shah Alam', arrival: '40 - 60 Mins', popular: 'Chemical Wash', status: 'High Availability' },
    { name: 'Puchong', arrival: '35 - 55 Mins', popular: 'General Service', status: 'Active Daily' },
    { name: 'Klang', arrival: '50 - 90 Mins', popular: 'New Installation', status: 'Scheduled Visits' },
    { name: 'Cyberjaya', arrival: '45 - 60 Mins', popular: 'Chemical Wash', status: 'High Availability' },
    { name: 'Putrajaya', arrival: '45 - 60 Mins', popular: 'General Service', status: 'Active Daily' }
  ];

  // State to track which area is currently selected
  const [activeArea, setActiveArea] = useState(areasData[0]);
  
  // Ref to target the dashboard for auto-scrolling
  const dashboardRef = useRef(null);

  // WhatsApp Configuration
  const whatsappMessage = `Hi BWR Services, I'm looking for air conditioning service. I am located in ${activeArea.name}.`;
  const whatsappUrl = `https://wa.me/+60182122817?text=${encodeURIComponent(whatsappMessage)}`;

  // Handle location click and scroll
  const handleAreaClick = (area) => {
    setActiveArea(area);
    // Only auto-scroll if the screen width is less than 1024px (stacked layout)
    if (window.innerWidth < 1024 && dashboardRef.current) {
      setTimeout(() => {
        dashboardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <section id="coverage" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-16">
        
        {/* --- Left Side: Content & Clickable Area List --- */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-6 tracking-tight">
            Areas We Cover
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mb-8"></div>
          
          <p className="text-lg text-base-dark/70 mb-10 leading-relaxed max-w-xl">
            Select your location below to see our typical response times and local service details for your area.
          </p>
          
          {/* THE ONE BIG GREY CARD (Now Interactive) */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] border border-slate-200 shadow-xl flex-1 flex flex-col">
            
            {/* Areas List Grid - Interactive Buttons */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-4 mb-8">
              {areasData.map((area, idx) => {
                const isActive = activeArea.name === area.name;
                return (
                  <button
                    key={idx}
                    onClick={() => handleAreaClick(area)}
                    className={`flex items-center gap-2 md:gap-3 p-3 rounded-xl transition-all duration-300 text-left border-2 ${
                      isActive 
                        ? 'border-brand bg-white shadow-md transform -translate-y-0.5' 
                        : 'border-transparent hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300 flex-shrink-0 ${isActive ? 'bg-brand shadow-[0_0_8px_rgba(0,70,255,0.4)]' : 'bg-slate-300'}`}></div>
                    <span className={`text-sm md:text-lg font-bold ${isActive ? 'text-brand' : 'text-base-dark'}`}>
                      {area.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* WhatsApp Note */}
            <div className="pt-6 border-t border-slate-200 mt-auto">
              <p className="text-sm text-base-dark/60 font-semibold leading-relaxed">
                <span className="text-accent font-black mr-2 uppercase text-xs px-2 py-1 bg-accent/10 rounded">Note</span>
                Outside these areas? Contact us on WhatsApp to check availability for your location.
              </p>
            </div>
          </div>
        </div>

        {/* --- Right Side: Dynamic Stats Dashboard --- */}
        <div 
          ref={dashboardRef} 
          className="flex w-full lg:w-1/2 relative min-h-[578px] flex-col bg-slate-100 rounded-[2.5rem] border border-slate-200 p-6 md:p-10 shadow-inner scroll-mt-6"
        >
          
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
            <div>
              <p className="text-accent font-extrabold tracking-widest uppercase text-xs md:text-sm mb-1">
                Local Insights
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-base-dark">
                {activeArea.name}
              </h3>
            </div>
          </div>

          {/* Stats Grid (Updates and animates on click) */}
          <div key={activeArea.name} className="grid grid-cols-2 gap-4 md:gap-6 flex-1 animate-fade-in-up">
            
            {/* Stat 1: Arrival Time */}
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center text-center items-center">
              <p className="text-[10px] md:text-xs font-bold text-base-dark/50 uppercase tracking-widest mb-2 md:mb-3">Est. Arrival Time</p>
              <p className="text-xl md:text-3xl font-black text-brand leading-tight">{activeArea.arrival}</p>
            </div>

            {/* Stat 2: Dispatch Status */}
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center text-center items-center">
              <p className="text-[10px] md:text-xs font-bold text-base-dark/50 uppercase tracking-widest mb-2 md:mb-3">Dispatch Status</p>
              <p className="text-lg md:text-2xl font-black text-base-dark leading-tight">{activeArea.status}</p>
            </div>

            {/* Stat 3: Popular Service */}
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center text-center items-center">
              <p className="text-[10px] md:text-xs font-bold text-base-dark/50 uppercase tracking-widest mb-2 md:mb-3">Most Requested</p>
              <p className="text-base md:text-xl font-bold text-base-dark leading-tight">{activeArea.popular}</p>
            </div>

            {/* Stat 4: Satisfaction */}
            <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-center bg-gradient-to-br from-brand/5 to-transparent text-center items-center">
              <p className="text-[10px] md:text-xs font-bold text-base-dark/50 uppercase tracking-widest mb-2 md:mb-3">Local Rating</p>
              <div className="flex items-end justify-center gap-1 md:gap-2">
                <p className="text-2xl md:text-4xl font-black text-accent">5.0</p>
                <div className="flex text-accent text-sm md:text-xl pb-1 mb-0.5">★★★★★</div>
              </div>
            </div>
          </div>

          {/* Dynamic WhatsApp CTA Inside Dashboard */}
          <div className="mt-8">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand text-white py-3 md:py-4 rounded-xl font-black text-base md:text-lg tracking-wide text-center shadow-[0_4px_14px_0_rgba(0,70,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,70,255,0.23)] hover:-translate-y-1 transition-all duration-300"
            >
              Book Now in {activeArea.name}
            </a>
          </div>

        </div>

      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Coverage;