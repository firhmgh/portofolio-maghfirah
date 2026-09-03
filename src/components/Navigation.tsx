import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Home, Layers, Compass, Mail, Sun, Moon, FileText, Github, Linkedin, Menu, X, Sparkles } from 'lucide-react';
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
        className={`fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-300 ${
          scrolled ? 'top-3' : 'top-5'
        }`}
      >
        <div className="w-full max-w-5xl flex items-center justify-between pointer-events-auto">
          {/* Brand Monogram Pill */}
          <a
            href="#home"
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl glass-panel shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-sky-400 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-white dark:bg-[#131524] rounded-[10px] flex items-center justify-center">
                <span className="text-xs font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent font-mono">
                  FM
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 tracking-tight leading-none group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Maghfirah
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Software & GIS
              </span>
            </div>
          </a>

          {/* Center Floating Dock (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl glass-panel shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-violet-900 dark:text-violet-100'
                      : 'text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-300'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDockIndicator"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-200/80 via-fuchsia-100/80 to-sky-100/80 dark:from-violet-900/50 dark:via-fuchsia-950/40 dark:to-sky-950/40 -z-10 shadow-inner"
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
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-200 hover:scale-105 transition-transform shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-violet-600" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="Maghfirah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-violet-500/15 via-fuchsia-500/15 to-sky-500/15 border border-violet-300/40 dark:border-violet-700/50 text-violet-800 dark:text-violet-200 text-xs font-bold hover:shadow-md transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>Resume</span>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden lg:inline-flex w-10 h-10 rounded-2xl glass-panel items-center justify-center text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-200 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Bottom Sheet / Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-3xl glass-panel shadow-2xl border border-violet-200/50 dark:border-violet-800/50 md:hidden space-y-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs font-bold transition-colors text-left ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-violet-700 dark:text-violet-300'
                      : 'bg-slate-100/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
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
                className="flex-1 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold text-center shadow-sm"
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
