
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center font-bold text-white text-xs">A</div>
            <span className="font-bold tracking-tight">automatisez<span className="text-indigo-500">.ca</span></span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          
          <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} automatisez.ca. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
