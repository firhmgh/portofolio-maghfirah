import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Home, Layers, Compass, Mail, Sun, Moon, FileText, Github, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" />, href: '#home' },
    { id: 'projects', label: 'Projects', icon: <Layers className="w-4 h-4" />, href: '#projects' },
    { id: 'journey', label: 'Journey', icon: <Compass className="w-4 h-4" />, href: '#journey' },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" />, href: '#contact' },
  ];

  return (
    <>
      {/* Floating Modern Dock Navigation */}
      <header
        className={`fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300 ${
          scrolled ? 'top-2 sm:top-3' : 'top-3 sm:top-5'
        }`}
      >
        <div className="w-full max-w-5xl flex items-center justify-between pointer-events-auto gap-2">
          {/* Brand Monogram Pill */}
          <a
            href="#home"
            className="flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl glass-panel shadow-xs hover:shadow-md transition-all group flex-shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-pink-400 p-[1.5px] shadow-xs">
              <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-[10px] flex items-center justify-center">
                <span className="text-xs font-extrabold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent font-mono">
                  FM
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                Maghfirah
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Software & GIS
              </span>
            </div>
          </a>

          {/* Center Floating Dock (Desktop / Tablet) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl glass-panel shadow-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-blue-900 dark:text-sky-100'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDockIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/90 via-sky-100/80 to-pink-100/80 dark:from-blue-900/60 dark:via-sky-950/50 dark:to-pink-950/40 -z-10 shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Utility Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-200 hover:scale-105 active:scale-95 transition-transform shadow-xs"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="Maghfirah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-gradient-to-r from-blue-500/15 via-sky-500/15 to-pink-500/15 border border-blue-300/40 dark:border-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-bold hover:shadow-sm hover:scale-[1.02] active:scale-98 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>Resume</span>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden lg:inline-flex w-10 h-10 rounded-2xl glass-panel items-center justify-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors shadow-xs hover:scale-105 active:scale-95"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-2xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-xs"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Bottom Sheet / Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-16 z-40 p-4 sm:p-5 rounded-3xl glass-panel shadow-2xl border border-blue-200/50 dark:border-blue-800/50 md:hidden space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs font-bold transition-colors text-left ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-blue-700 dark:text-sky-300'
                      : 'bg-slate-100/60 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex gap-2">
              <a
                href="Maghfirah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white text-xs font-bold text-center shadow-xs"
              >
                Download Resume (PDF)
              </a>
              <a
                href="https://github.com/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
