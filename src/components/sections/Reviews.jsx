import React from 'react';

const Reviews = () => {
  const reviews = [
    { 
      id: 1, 
      name: 'Ahmad T.', 
      type: 'Homeowner',
      quote: 'Very fast and polite! Fixed my leaking aircon in 30 minutes. Highly recommended for anyone in the Klang area.',
      rating: 5
    },
    { 
      id: 2, 
      name: 'Sarah L.', 
      type: 'Homeowner',
      quote: 'Professional service from start to finish. The chemical wash made my 5-year-old AC unit feel brand new again.',
      rating: 5
    },
    { 
      id: 3, 
      name: 'Michael C.', 
      type: 'Office Manager',
      quote: 'Transparent pricing. He told me exactly what was wrong with our office units before fixing them. Great B2B partner.',
      rating: 5
    },
    { 
      id: 4, 
      name: 'Nurul H.', 
      type: 'Homeowner',
      quote: 'Booking via WhatsApp was so easy. Technician arrived on time and cleaned up everything after the installation.',
      rating: 4
    },
    { 
      id: 5, 
      name: 'David W.', 
      type: 'Restaurant Owner',
      quote: 'When the AC broke down during lunch rush, they came within 2 hours. Literal lifesavers for our business!',
      rating: 5
    },
    { 
      id: 6, 
      name: 'Priya M.', 
      type: 'Homeowner',
      quote: 'Very honest assessment. Didn\'t try to upsell me on parts I didn\'t need. Will definitely use BWR again.',
      rating: 5
    },
  ];

  // Helper to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <span key={idx} className={`text-xl ${idx < rating ? 'text-accent' : 'text-structure'}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-base-dark mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-base-dark/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what homeowners and businesses across the region have to say about our service.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-structure p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-base-dark/80 italic mb-6 leading-relaxed">
                  "{review.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-structure rounded-full flex items-center justify-center font-bold text-base-dark/50">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-base-dark">{review.name}</h4>
                  <span className="text-sm text-base-dark/50">{review.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;