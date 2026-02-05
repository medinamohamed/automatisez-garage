
import React from 'react';

const painPoints = [
  {
    icon: "📞",
    title: "After-Hours Calls",
    description: "Your customers call evenings and weekends when you're closed. Most won't leave a voicemail—they'll just keep dialing."
  },
  {
    icon: "⏰",
    title: "Too Busy to Answer",
    description: "When you're under a car or dealing with a customer in-person, you can't pick up. Every ringing phone is a distraction."
  },
  {
    icon: "💸",
    title: "Customers Go to Competitors",
    description: "If you don't answer, they call the shop down the street. You're paying for marketing only to send leads elsewhere."
  }
];

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">Every Missed Call = Lost Money</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Stop letting your hardest-earned leads slip through your fingers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="glass p-8 rounded-2xl hover:bg-white/5 transition-all group border border-white/5 hover:border-indigo-500/30"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-slate-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
