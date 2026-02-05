
import React from 'react';

const steps = [
  {
    number: "01",
    title: "AI Answers Instantly",
    description: "No more missed calls. AI picks up 24/7, introduces your shop, and asks about their vehicle issue."
  },
  {
    number: "02",
    title: "Customer Gets Booking Link",
    description: "Automated SMS with your available time slots. They pick what works for them in 30 seconds."
  },
  {
    number: "03",
    title: "Appointment Confirmed Automatically",
    description: "They get confirmation. You get all details (vehicle info, issue, contact) directly in your calendar."
  }
];

export const Solution: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
              <p className="text-slate-400 text-lg">
                We've built the most advanced AI voice engine specifically trained for the automotive industry. It understands the difference between a brake job and a transmission flush.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-full blur-[100px] opacity-10"></div>
            <div className="relative glass p-4 rounded-[2.5rem] border border-white/10">
              <img 
                src="https://picsum.photos/seed/dashboard/800/1000" 
                className="rounded-[2rem] shadow-2xl border border-white/5"
                alt="Dashboard Preview"
              />
              <div className="absolute -bottom-6 -left-6 bg-indigo-600 p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-sm font-semibold opacity-80">Booked Today</div>
                <div className="text-3xl font-bold">12 Appointments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
