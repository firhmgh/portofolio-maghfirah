import React from 'react';
import { ArrowRight, Code2, MapPin, Sparkles, Terminal, Layers, FileText, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#80808018_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[250px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column - Headline & Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>S1 Sistem & Teknologi Informasi • Pemrogram Web Muda BNSP</span>
            </div>

            {/* Concise Powerful Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Membangun <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">Web & Mobile Platforms</span>, Geospasial WebGIS, dan Sistem Terapan.
            </h1>

            {/* Short Clear Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Halo, saya <strong className="font-semibold text-slate-900 dark:text-white">Maghfirah</strong>. Lulusan/Mahasiswi S1 Sistem dan Teknologi Informasi Institut Teknologi Sawit Indonesia (IPK 3.86/4.00) dengan pengalaman magang di Sekretariat Jenderal DPR RI dan PT Perkebunan Nusantara IV Regional 1. Berpengalaman membangun aplikasi web, mobile Flutter, analisis data spasial (QGIS/ArcGIS/WebGIS), dan model kecerdasan terapan.
            </p>

            {/* Key Stack Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                Laravel & Flutter
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                ArcGIS, QGIS & Leaflet
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                Python & MySQL
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-emerald-400 shadow-sm transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="Maghfirah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="https://github.com/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column - Authentic Profile Photo (Focal Point) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl -z-10" />

              {/* Main Card */}
              <div className="relative bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xl space-y-3">
                {/* Header Tag */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      Maghfirah
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Medan, Indonesia</span>
                  </div>
                </div>

                {/* Photo Frame (Aspect 3:4 with object-[center_15%] ensuring face & hijab are fully visible) */}
                <div className="aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 relative shadow-inner">
                  <img
                    src="images/profile.jpg"
                    alt="Maghfirah — Software Developer"
                    className="w-full h-full object-cover object-[center_15%]"
                    loading="eager"
                  />
                  {/* Subtle Gradient Shade at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-3 pointer-events-none">
                    <div className="text-white text-left">
                      <p className="font-bold text-sm leading-none drop-shadow">Maghfirah</p>
                      <p className="text-[11px] text-emerald-300 font-mono mt-0.5 drop-shadow">Software Dev & GIS Specialist</p>
                    </div>
                  </div>
                </div>

                {/* Quick Academic Tag */}
                <div className="grid grid-cols-2 gap-2 text-left pt-0.5">
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="block text-[10px] text-slate-400 font-mono">Academic Track</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">ITSI • IPK 3.86</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="block text-[10px] text-slate-400 font-mono">Certification</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">BNSP Web Dev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
