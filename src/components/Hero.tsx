import React from 'react';
import { ArrowRight, MapPin, FileText, Github, Linkedin, Globe, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Responsive Grid: Stacks naturally on mobile/tablet, 2-column on desktop with balanced spacing */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column - Headline & Story */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-left"
          >
            {/* Status Pill / Credential Badge - Fully responsive, wrapping naturally on mobile (320px-430px) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1 rounded-2xl sm:rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 shadow-xs max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
              <span className="text-[11px] sm:text-xs font-semibold text-blue-800 dark:text-sky-300 leading-snug break-words">
                S1 Sistem & Teknologi Informasi • Pemrogram Web Muda BNSP
              </span>
            </motion.div>

            {/* Main Greeting Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-pink-500 bg-clip-text text-transparent">Maghfirah</span>.
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
                Software & GIS Developer
              </span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Lulusan / Mahasiswi S1 Sistem dan Teknologi Informasi ITSI (IPK 3.86/4.00) dengan pengalaman magang di{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Setjen DPR RI</strong> dan{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">PT Perkebunan Nusantara IV Regional 1</strong>. Fokus membangun platform web enterprise, sistem geospasial WebGIS terintegrasi, dan pemodelan kecerdasan terapan.
            </p>

            {/* Floating Tech Chips with subtle staggered float motion */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="px-3 py-1 rounded-xl glass-panel text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shadow-xs"
              >
                <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                Laravel & Flutter
              </motion.span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="px-3 py-1 rounded-xl glass-panel text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shadow-xs"
              >
                <Globe className="w-3.5 h-3.5 text-sky-500" />
                ArcGIS, QGIS & WebGIS
              </motion.span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="px-3 py-1 rounded-xl glass-panel text-slate-800 dark:text-slate-200 flex items-center gap-1.5 shadow-xs"
              >
                <Cpu className="w-3.5 h-3.5 text-pink-500" />
                Reinforcement Learning & LLMs
              </motion.span>
            </div>

            {/* Actions CTAs with Spring Hover */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="relative group inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 dark:from-blue-600 dark:via-sky-600 dark:to-blue-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-700/25 hover:shadow-blue-700/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all overflow-hidden border border-blue-400/30 dark:border-blue-400/20"
              >
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="relative z-10 text-white font-bold drop-shadow-xs">Explore My Projects</span>
                <ArrowRight className="relative z-10 w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform drop-shadow-xs" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="Maghfirah_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-panel text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:border-blue-400 dark:hover:border-blue-500 transition-all"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Resume (PDF)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/firhmgh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors shadow-xs"
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/maghfirah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-2xl glass-panel flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Authentic Portrait with Subtle Floating Motion (Optimized sizing for laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[320px] sm:max-w-sm"
            >
              {/* Blue & Pink Aura Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/25 via-sky-400/20 to-pink-400/25 rounded-[32px] blur-xl -z-10" />

              {/* Main Card Frame */}
              <div className="relative glass-panel rounded-3xl p-3.5 shadow-xl space-y-2.5">
                {/* Header Metadata */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                      Maghfirah
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>Medan, Indonesia</span>
                  </div>
                </div>

                {/* Portrait Photo Frame with object-fit position */}
                <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 relative shadow-inner">
                  <img
                    src="images/profile.jpg"
                    alt="Maghfirah — Software & GIS Developer"
                    className="w-full h-full object-cover object-[center_15%]"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-3 pointer-events-none">
                    <div className="text-white text-left">
                      <p className="font-bold text-xs sm:text-sm leading-none drop-shadow">Maghfirah</p>
                      <p className="text-[10px] sm:text-[11px] text-sky-300 font-mono mt-0.5 drop-shadow">
                        Full-Stack & Geospatial Engineer
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Micro Cards */}
                <div className="grid grid-cols-2 gap-2 text-left pt-0.5">
                  <div className="p-2 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                    <span className="block text-[9px] text-blue-600 dark:text-sky-400 font-mono">Academic</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">ITSI • IPK 3.86</span>
                  </div>
                  <div className="p-2 rounded-xl bg-pink-50/70 dark:bg-pink-950/30 border border-pink-100 dark:border-pink-900/40">
                    <span className="block text-[9px] text-pink-600 dark:text-pink-400 font-mono">Certified</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">BNSP Web Dev</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
