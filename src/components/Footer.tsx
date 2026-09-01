import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0b0e] border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Info */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-emerald-500 flex items-center justify-center text-white font-bold text-[10px]">
            FM
          </div>
          <p className="font-mono">
            © {new Date().getFullYear()} Maghfirah. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/firhmgh/portofolio-maghfirah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors flex items-center gap-1 font-mono"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Portfolio Source</span>
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
