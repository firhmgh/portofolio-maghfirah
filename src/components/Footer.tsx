import React from 'react';
import { Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 dark:border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-800 dark:text-slate-200">Maghfirah</span>
          <span>•</span>
          <span>© 2026 All Rights Reserved</span>
        </div>

        <div className="flex items-center gap-1.5">
          <span>Crafted with React, TypeScript & Framer Motion</span>
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
        </div>
      </div>
    </footer>
  );
};
