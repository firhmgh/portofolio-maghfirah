import React from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, MapPin, Send, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#0d0f14] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto space-y-10 text-left">
        {/* Section Header */}
        <div className="space-y-2.5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi & Berkolaborasi
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Terbuka untuk peluang magang, posisi software engineer, web/mobile development, maupun kolaborasi proyek geospasial GIS.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch">
          {/* Main Direct Email Card */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Kirim Email Langsung
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1">
                  Respon cepat untuk pertanyaan profesional, tawaran kerja, dan diskusi teknis.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 select-all">
                firahmagh485@gmail.com
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:firahmagh485@gmail.com?subject=Inquiry%20from%20Portfolio%20-%20Maghfirah"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </a>
              <a
                href="Maghfirah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/80 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">LinkedIn</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">linkedin.com/in/firhmgh</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/80 transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">GitHub</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">github.com/firhmgh</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </a>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-slate-100/70 dark:bg-[#12151c]/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Medan, Sumatera Utara, Indonesia</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Tersedia untuk peluang kerja remote maupun on-site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
