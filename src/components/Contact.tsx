import React from 'react';
import { Mail, Github, ArrowUpRight, MapPin, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#0d0f14] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto space-y-12 text-left">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Interested in discussing full-stack development, geospatial/WebGIS projects, machine learning research, or software engineering opportunities? Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Main Direct Email Card (Left 7 Cols) */}
          <div className="md:col-span-7 p-8 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Send an Email
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                The fastest way to reach me for professional inquiries, project collaborations, and hiring discussions.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 select-all">
                firahmagh485@gmail.com
              </div>
            </div>

            <a
              href="mailto:firahmagh485@gmail.com?subject=Project%20Inquiry%20/%20Collaboration"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Compose Email Directly</span>
            </a>
          </div>

          {/* Social & Location Cards (Right 5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            {/* GitHub Card */}
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/80 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">GitHub Profile</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">github.com/firhmgh</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Location & Availability Note */}
            <div className="p-6 rounded-2xl bg-slate-100/70 dark:bg-[#12151c]/60 border border-slate-200 dark:border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Indonesia (WIB / UTC+7)</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Open for remote roles, on-site discussions in Indonesia, and technical collaborations worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
