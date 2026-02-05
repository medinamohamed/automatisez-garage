
import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Already Working for Auto Shops in Montreal
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="bg-white text-slate-900 p-10 md:p-16 rounded-[2rem] shadow-2xl relative">
              <div className="absolute -top-6 left-12 text-6xl text-indigo-200 font-serif">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
                Since launching AutoBot, we've recovered at least 15 service bookings every single weekend that we used to just lose. It paid for itself in the first 48 hours.
              </blockquote>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/owner/80/80" className="w-16 h-16 rounded-full border-4 border-indigo-50" alt="Owner" />
                <div>
                  <div className="text-xl font-bold">Jean-François Roy</div>
                  <div className="text-slate-500">Owner, Garage MTL Performance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-4xl font-extrabold text-white mb-2">450+</div>
              <div className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Calls Answered Monthly</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-4xl font-extrabold text-white mb-2">82%</div>
              <div className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Automated Bookings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-4xl font-extrabold text-white mb-2">24/7</div>
              <div className="text-indigo-100 font-medium uppercase tracking-wider text-sm">Availability Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
