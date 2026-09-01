import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, MapPin, Send, FileText } from 'lucide-react';

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
            Membuka kesempatan magang, posisi entry-level, riset kolaboratif, maupun diskusi teknis di bidang Software Development, Web/Mobile Development, dan GIS/Geospatial.
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
                Kanal komunikasi langsung untuk penawaran kerja, magang, kolaborasi riset sistem informasi, atau konsultasi teknis.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 select-all">
                firahmagh485@gmail.com
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:firahmagh485@gmail.com?subject=Inquiry%20from%20Portfolio%20-%20Maghfirah"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Compose Email</span>
              </a>
              <a
                href="/Maghfirah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social & Verification Cards (Right 5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/80 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">LinkedIn Profile</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">linkedin.com/in/firhmgh</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/80 transition-all group flex items-center justify-between"
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

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-slate-100/70 dark:bg-[#12151c]/60 border border-slate-200 dark:border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Medan, Sumatera Utara, Indonesia</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Tersedia untuk peluang kerja remote maupun on-site di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
