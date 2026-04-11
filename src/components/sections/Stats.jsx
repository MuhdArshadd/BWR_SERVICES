import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ endValue, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 2000;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const currentCount = Math.min(Math.floor((progress / duration) * endValue), endValue);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [endValue, start]);

  return <span>{count}</span>;
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { target: 100, label: 'Residential' },
    { target: 500, label: 'Units Serviced' },
    { target: 3, label: 'Area Covered' },
  ];

  const companies = [
    "COMPANY ONE", "TECH CORP", "BUILDERS INC", "MEGA MALL", "KL HOLDINGS", "APEX RETAIL"
  ];

  return (
    <section className="pt-8 pb-4 bg-white overflow-hidden relative z-20">
      
      {/* --- Part 1: Trusted By (Marquee) --- */}
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        
        <div className="inline-block mb-6">
          {/* Enhanced Shadow: Pushed 4px to the right, darker opacity (0.3) */}
          <h3 className="text-sm md:text-lg font-bold tracking-wide [text-shadow:_2px_2px_5px_rgba(0,0,0,0.1)]">
            - Trusted by Businesses & Homeowners -
          </h3>
        </div>

        <div className="relative flex overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]">
          <div className="flex animate-marquee whitespace-nowrap opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {companies.map((company, idx) => (
              <span key={idx} className="text-lg md:text-2xl font-black text-base-dark mx-8 md:mx-12">
                {company}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" aria-hidden="true">
            {companies.map((company, idx) => (
              <span key={`duplicate-${idx}`} className="text-lg md:text-2xl font-black text-base-dark mx-8 md:mx-12">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- Part 2: Animated Stats --- */}
      <div ref={statsRef} className="max-w-7xl mx-auto px-2 md:px-4 grid grid-cols-3 gap-2 md:gap-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-2 md:p-6">
            {/* Enhanced Shadow: Pushed massive 8px to the right, increased blue opacity (0.4) */}
            <div className="text-3xl sm:text-4xl md:text-7xl font-black text-brand mb-1 md:mb-4 tabular-nums [text-shadow:_2px_2px_4px_rgba(0,70,255,0.15)]">
                <AnimatedCounter endValue={stat.target} start={isVisible} />+
            </div>
            {/* Enhanced Shadow: Pushed 3px to the right */}
            <div className="text-[10px] sm:text-xs md:text-xl font-bold text-base-dark/80 tracking-wider md:tracking-wide uppercase leading-tight [text-shadow:_3px_1px_4px_rgba(0,0,0,0.25)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Stats;