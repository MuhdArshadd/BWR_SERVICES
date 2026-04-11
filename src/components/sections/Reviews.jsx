import React, { useState, useEffect } from "react";

const Reviews = () => {
  const reviews = [
    { id: 1, name: "Ahmad T.", type: "Homeowner", quote: "Very fast and polite! Fixed my leaking aircond in 30 minutes.", image: "/proof1.png" },
    { id: 2, name: "Sarah L.", type: "Homeowner", quote: "Professional service. The chemical wash made my AC feel brand new.", image: "/proof2.png" },
    { id: 3, name: "Michael C.", type: "Office Manager", quote: "Transparent pricing. Great B2B partner for our office.", image: "/proof3.png" },
    { id: 4, name: "Nurul H.", type: "Homeowner", quote: "Booking via WhatsApp was so easy. Technician arrived on time.", image: "/proof4.png" },
    { id: 5, name: "David W.", type: "Restaurant Owner", quote: "Literal lifesavers! Came within 2 hours during lunch rush.", image: "/proof5.png" },
  ];

  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImgIdx((prev) => (prev + 1) % reviews.length);
        setFade(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const scrollingReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <style>
        {`
          @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
          .animate-scroll-vertical {
            animation: scrollDown 30s linear infinite;
          }
          
          /* ENHANCEMENT: Only pause on hover for devices that actually have a mouse cursor */
          @media (hover: hover) {
            .animate-scroll-vertical:hover {
              animation-play-state: paused;
            }
          }

          .img-fade {
            transition: opacity 0.8s ease-in-out;
          }
        `}
      </style>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl w-full h-auto flex flex-col items-center">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-accent transition-colors font-light"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Enlarged Proof"
              className="max-h-[80vh] w-auto rounded-2xl shadow-2xl border-2 border-white/20"
            />
            <p className="mt-6 text-white/80 font-bold tracking-widest text-xs uppercase bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
              Tap anywhere to close
            </p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-4 tracking-tight">
            Real Results, Real Reviews
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-base-dark/70 font-medium">
            Hear from our satisfied customers across the region.
          </p>
        </div>

        {/* --- STYLISH GREY CONTAINER --- */}
        <div className="bg-slate-100 p-4 md:p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
            
            {/* --- LEFT SECTION: AUTO-SCROLLING FEED --- */}
            <div className="w-full lg:w-7/12 relative h-[600px] overflow-hidden rounded-3xl border-2 border-slate-200 bg-slate-50/50 backdrop-blur-sm">
              <div className="flex flex-col gap-4 p-4 animate-scroll-vertical">
                {scrollingReviews.map((review, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <img
                      src={review.image}
                      alt="Work Proof"
                      onClick={() => setSelectedImg(review.image)}
                      className="lg:hidden w-full h-52 object-cover rounded-xl mb-4 border border-slate-200 shadow-sm cursor-zoom-in hover:opacity-90 transition-all"
                    />

                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-base-dark text-lg leading-none">
                          {review.name}
                        </h4>
                        <span className="text-[10px] text-base-dark/50 uppercase tracking-widest font-black">
                          {review.type}
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex text-accent text-3xl">★★★★★</div>
                        <span className="text-[11px] font-black text-accent mt-0.5">
                          (5 STARS)
                        </span>
                      </div>
                    </div>

                    <p className="text-base-dark/80 italic text-sm leading-relaxed relative pl-4 border-l-4 border-accent">
                      "{review.quote}"
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-100 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-100 to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* --- RIGHT SECTION: AUTO-CYCLING LEGITIMACY --- */}
            <div className="hidden lg:block lg:w-5/12 h-[600px]">
              <div
                className="relative h-full group overflow-hidden rounded-3xl border-4 border-white shadow-lg bg-slate-200 cursor-zoom-in"
                onClick={() => setSelectedImg(reviews[currentImgIdx].image)}
              >
                <img
                  src={reviews[currentImgIdx].image}
                  alt="Verification Proof"
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 img-fade ${fade ? "opacity-100" : "opacity-0"}`}
                />

                <div className="absolute inset-0 bg-brand/5 group-hover:bg-transparent transition-colors"></div>

                <div className="absolute bottom-8 left-8 bg-white px-6 py-3 rounded-full font-black text-brand shadow-xl flex items-center gap-3 z-20">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                  WHATSAPP VERIFIED
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;