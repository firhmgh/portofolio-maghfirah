import React from 'react';
import { ArrowRight, Code2, MapPin, Sparkles, Terminal, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Positioning & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Information Systems Specialist & Full-Stack Developer</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">Spatial Intelligence</span> & Scalable Enterprise Systems.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Hello, I'm <strong className="font-semibold text-slate-900 dark:text-white">Maghfirah</strong>. I build high-integrity web platforms, geospatial analytics dashboards (WebGIS), machine learning models, and system utility tooling designed for real-world enterprise and agricultural operations.
            </p>

            {/* Micro Badge Highlights */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                Agro-GIS & PostGIS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                AI & Reinforcement Learning
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                Safe Windows Tooling
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-emerald-400 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
              >
                <Code2 className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column - Editorial Portrait Frame & Stat Capsule */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-lg -z-10" />

              {/* Main Portrait Container */}
              <div className="relative bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Developer Profile
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Indonesia</span>
                  </div>
                </div>

                {/* Elegant Fallback Avatar Frame (Ready for Real Photo) */}
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex flex-col items-center justify-center p-6 text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-700 flex items-center justify-center text-white text-2xl font-black shadow-md mb-3 group-hover:scale-105 transition-transform duration-300">
                    FM
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Maghfirah
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    Information Systems Specialist
                  </p>
                </div>

                {/* Quick Tech Snapshot */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="block text-[11px] text-slate-400 font-mono">Specialization</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">WebGIS & Full-Stack</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                    <span className="block text-[11px] text-slate-400 font-mono">Core Stack</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Laravel, React, Python</span>
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
