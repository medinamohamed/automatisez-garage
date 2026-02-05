
import React, { useState } from 'react';

const faqs = [
  {
    question: "What if the AI doesn't understand something?",
    answer: "The system is trained specifically for automotive services. If a request is too complex or ambiguous, the call transfers directly to your phone or a fallback number. However, this is rare—AutoBot handles 95%+ of typical calls successfully."
  },
  {
    question: "How long does setup take?",
    answer: "One week maximum. We handle the training, voice setup, and calendar integration. You just need to provide your service list and pricing (if applicable), and you're operational fast."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes, there is no long-term penalty. We operate on a month-to-month basis with a 30-day notice requirement. We're confident the results will speak for themselves."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden border border-white/5 transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
