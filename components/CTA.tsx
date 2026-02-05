
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative glass p-12 md:p-20 rounded-[3rem] text-center border border-white/10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">See It In Action</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Book a 15-minute demo - we'll show you exactly how it works for your shop and walk you through a live sample call.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-indigo-500/30 transform hover:scale-105 active:scale-95">
                Book Your Free Demo
              </button>
              
              <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No commitment required
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up and running in 1 week
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
