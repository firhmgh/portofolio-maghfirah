import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useRouter } from '../router';
import { Home, Layers, Compass, Mail, Sun, Moon, FileText, Github, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { path, navigate } = useRouter();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isProjectDetailPage = path.startsWith('/projects/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isProjectDetailPage) return;

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
  }, [isProjectDetailPage]);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" />, href: '/#home' },
    { id: 'projects', label: 'Projects', icon: <Layers className="w-4 h-4" />, href: '/#projects' },
    { id: 'journey', label: 'Journey', icon: <Compass className="w-4 h-4" />, href: '/#journey' },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" />, href: '/#contact' },
  ];

  const handleNavClick = (href: string, sectionId: string) => {
    setMobileMenuOpen(false);
    if (isProjectDetailPage) {
      navigate(href.replace('/#', '#'));
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Floating Modern Dock Navigation */}
      <header
        className={`fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none transition-all duration-300 ${
          scrolled ? 'top-2 sm:top-3' : 'top-3 sm:top-5'
        }`}
      >
        <div className="w-full max-w-5xl flex items-center justify-between gap-2 pointer-events-auto">
          {/* Identity Monogram Pill */}
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl glass-panel hover:border-blue-400/50 dark:hover:border-sky-500/50 transition-all duration-200 shadow-xs cursor-pointer text-left"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-pink-400 p-[1.5px] shadow-xs flex-shrink-0">
              <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-[10px] flex items-center justify-center">
                <span className="text-xs font-extrabold text-blue-600 dark:text-sky-400 font-mono">
                  FM
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-100 tracking-tight leading-none truncate group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                Maghfirah
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-600 dark:text-slate-400 font-mono mt-0.5 leading-none truncate">
                Software & GIS
              </span>
            </div>
          </button>

          {/* Center Floating Dock (Desktop / Tablet) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl glass-panel shadow-xs">
            {navItems.map((item) => {
              const isActive = !isProjectDetailPage && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-blue-900 dark:text-sky-100 font-bold'
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
                </button>
              );
            })}
          </nav>

          {/* Right Utility Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 sm:p-2.5 rounded-2xl glass-panel text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-400/50 shadow-xs transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600 transition-transform rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href="/Maghfirah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-gradient-to-r from-blue-500/15 via-sky-500/15 to-pink-500/15 border border-blue-300/40 dark:border-blue-700/50 text-blue-800 dark:text-blue-200 text-xs font-bold hover:shadow-sm hover:scale-[1.02] active:scale-98 transition-all min-h-[44px]"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>Resume</span>
            </a>

            {/* GitHub Profile Icon */}
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 sm:p-2.5 rounded-2xl glass-panel text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-400/50 shadow-xs transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 sm:p-2.5 rounded-2xl glass-panel text-slate-700 dark:text-slate-300 md:hidden hover:text-blue-600 shadow-xs transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-16 z-40 p-4 sm:p-5 rounded-3xl glass-panel shadow-2xl border border-blue-200/50 dark:border-blue-800/50 md:hidden space-y-3 pointer-events-auto"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-2xl text-xs font-bold transition-colors text-left min-h-[44px] cursor-pointer ${
                    !isProjectDetailPage && activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-blue-700 dark:text-sky-300'
                      : 'bg-slate-100/60 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200/50 dark:border-slate-800/50 flex gap-2">
              <a
                href="/Maghfirah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-pink-600 text-white text-xs font-bold text-center shadow-xs min-h-[44px] flex items-center justify-center"
              >
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
