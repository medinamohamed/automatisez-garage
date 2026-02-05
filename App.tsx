
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { SocialProof } from './components/SocialProof';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DemoWidget } from './components/DemoWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg selection:bg-indigo-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SocialProof />
        <CTA />
        <FAQ />
      </main>

      <Footer />
      <DemoWidget />
    </div>
  );
};

export default App;
