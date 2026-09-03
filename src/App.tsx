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
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#090d16] text-[#0f172a] dark:text-[#f8fafc] font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300 relative overflow-x-hidden">
        {/* Continuous Animated Ambient Gradient Blobs (Blue & Soft Pink) */}
        <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
          {/* Top Left Deep Blue & Sky Aura Blob */}
          <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/20 via-sky-400/15 to-transparent dark:from-blue-600/15 dark:via-sky-600/10 rounded-full blur-[120px] animate-blob-1" />
          
          {/* Center Right Blush Pink Aura Blob */}
          <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-pink-400/15 via-rose-300/10 to-transparent dark:from-pink-600/10 dark:via-rose-600/10 rounded-full blur-[130px] animate-blob-2" />
          
          {/* Bottom Center Indigo/Navy Floating Blob */}
          <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-gradient-to-t from-blue-600/15 via-pink-300/10 to-transparent dark:from-blue-800/15 dark:via-pink-900/10 rounded-full blur-[140px] animate-blob-3" />
        </div>
        
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
