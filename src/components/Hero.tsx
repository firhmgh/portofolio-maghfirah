import React, { useState } from 'react';
import { ArrowRight, Code2, MapPin, Sparkles, Terminal, Layers, FileText, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [profileImgExists, setProfileImgExists] = useState(true);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Positioning & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>S1 Sistem dan Teknologi Informasi • Pemrogram Web Muda BNSP</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">Web & Mobile Platforms</span>, Spatial GIS, and AI Systems.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Hello, I'm <strong className="font-semibold text-slate-900 dark:text-white">Maghfirah</strong>. Mahasiswi S1 Sistem dan Teknologi Informasi (IPK 3.86/4.00) dengan pengalaman pengembangan aplikasi Web & Mobile (Flutter, Laravel, PHP), analisis data spasial (ArcGIS Pro, QGIS, WebGIS), serta perancangan sistem kecerdasan terapan untuk industri dan operasional institusi.
            </p>

            {/* Micro Badge Highlights */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                Web & Mobile (Flutter/Laravel)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                GIS & Spatial (QGIS/ArcGIS/Leaflet)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                Magang BUMN (Nilai A 95.9/100)
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-emerald-400 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Maghfirah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
              >
                <Code2 className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column - Editorial Portrait Focal Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/25 to-cyan-500/25 rounded-3xl blur-xl -z-10" />

              {/* Main Portrait Card */}
              <div className="relative bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Official Profile
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Medan, Indonesia</span>
                  </div>
                </div>

                {/* Professional Photo Frame with Responsive Object-Position (Upper Torso & Face Protected) */}
                <div className="aspect-[3/4] rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 overflow-hidden relative shadow-inner group">
                  {profileImgExists ? (
                    <img
                      src="/images/profile.jpg"
                      alt="Maghfirah — S1 Sistem dan Teknologi Informasi"
                      className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105"
                      onError={() => setProfileImgExists(false)}
                      loading="eager"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-700 flex items-center justify-center text-white text-2xl font-black shadow-md mb-3">
                        FM
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        Maghfirah
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        Information Systems Specialist
                      </p>
                    </div>
                  )}

                  {/* Gradient Overlay at base */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-3 pointer-events-none">
                    <div className="text-white text-left">
                      <p className="font-bold text-sm leading-tight drop-shadow-sm">Maghfirah</p>
                      <p className="text-[11px] text-emerald-300 font-mono drop-shadow-sm">Software Dev & GIS Specialist</p>
                    </div>
                  </div>
                </div>

                {/* Verified Quick Facts */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800 text-left">
                    <span className="block text-[10px] text-slate-400 font-mono">Academic Track</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">ITSI • IPK 3.86/4.00</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800 text-left">
                    <span className="block text-[10px] text-slate-400 font-mono">Competency</span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">BNSP Junior Web Dev</span>
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
