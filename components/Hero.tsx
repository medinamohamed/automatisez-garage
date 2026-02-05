
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] opacity-20 blur-[120px] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            24/7 AI Receptionist for Auto Shops
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Missing Customers Because <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Nobody Answers Your Phone?</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our AI receptionist answers 24/7, books appointments automatically, and never misses a call. 
            Keep your hands on the wrenches while we handle the phone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:shadow-2xl hover:shadow-indigo-500/40 transform hover:-translate-y-1">
              Book a Free Demo
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all">
              Watch How It Works
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-30"></div>
          <div className="relative bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl aspect-video flex items-center justify-center group cursor-pointer">
            <img 
              src="https://picsum.photos/seed/autoshop/1200/675" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              alt="Mockup background"
            />
            <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 text-white translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Watch AutoBot in Action</h3>
                <p className="text-slate-400">Mockup: Call → AI Answers → Appt Booked</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
