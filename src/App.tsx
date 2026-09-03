import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#faf8fc] dark:bg-[#0b0c16] text-[#1e1b2e] dark:text-[#f5f3fa] font-sans selection:bg-violet-500 selection:text-white transition-colors duration-300 relative overflow-x-hidden">
        {/* Soft Ambient Aurora Gradient Layer */}
        <div className="fixed inset-0 pointer-events-none -z-20 bg-aurora-light dark:bg-aurora-dark opacity-80 transition-opacity duration-500" />
        
        <Navigation />
        <main id="main-content" className="relative z-10">
          <Hero />
          <SelectedWork />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
