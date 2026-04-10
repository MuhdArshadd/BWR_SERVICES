import React from 'react';

const BookingFlow = () => {
  const steps = [
    { num: '01', title: 'Reach Out', desc: 'Click the WhatsApp button or call us directly.' },
    { num: '02', title: 'Get a Quote', desc: 'Tell us your AC issue and get a transparent price instantly.' },
    { num: '03', title: 'We Fix It', desc: 'Our technician arrives at your location and solves the problem.' },
  ];

  return (
    <section className="py-24 px-4 bg-base-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">How It Works</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-8xl font-black text-white/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">{step.num}</div>
              <div className="relative z-10 pt-8">
                <h3 className="text-2xl font-bold text-accent mb-4">{step.title}</h3>
                <p className="text-structure/90 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingFlow;