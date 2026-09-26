import React from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { useRouter } from '../router';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 dark:border-slate-800/60 relative bg-white/40 dark:bg-slate-950/40 backdrop-blur-xs">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* Brand Info */}
          <div className="space-y-3 sm:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-pink-400 p-[1.5px] shadow-xs flex-shrink-0">
                <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-[10px] flex items-center justify-center">
                  <span className="text-xs font-extrabold text-blue-600 dark:text-sky-400 font-mono">
                    FM
                  </span>
                </div>
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-base">
                Maghfirah
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Software & GIS Developer. Menyediakan solusi rekayasa teknologi, portal WebGIS terapan, sistem dashboard analitik, dan produk software komersial siap pakai.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-xl glass-panel flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-xl glass-panel flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-sky-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:firahmagh485@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-xl glass-panel flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-rose-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6282285189397"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-xl glass-panel flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Pathways */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Main Pathways
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button
                  onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Portfolio Utama
                </button>
              </li>
              <li>
                <button
                  onClick={() => { navigate('/products'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Digital Products</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-sky-300 font-mono">
                    Store
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { navigate('/services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Freelance Services</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 font-mono">
                    Hire
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-mono">
              Services Offered
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              <li>Web Application & SaaS</li>
              <li>Interactive Dashboards</li>
              <li>WebGIS & Spatial Data</li>
              <li>Cross-Platform Flutter</li>
              <li>Database & API Integration</li>
              <li>Data Automation Scripts</li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
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
      </div>
    </footer>
  );
};
