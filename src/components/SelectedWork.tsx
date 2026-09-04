import React, { useState } from 'react';
import { ProjectItem, ALL_PROJECTS_DATA } from '../data/projectsData';
import { Code2, ArrowUpRight, CheckCircle2, ChevronRight, X, Shield, BookOpen, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'WebGIS', 'Web Apps', 'AI / ML', 'Mobile', 'Desktop & Utilities', 'Research'];

  const filteredAll = selectedCategory === 'All'
    ? ALL_PROJECTS_DATA
    : ALL_PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const featuredProjects = filteredAll.filter((p) => p.featured);
  const moreProjects = filteredAll.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span className="text-xs font-semibold text-blue-800 dark:text-sky-300">
                Interactive Engineering Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Systems & Open Repositories
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Platform enterprise Agro-GIS, sistem keputusan Dual AI, simulasi Reinforcement Learning, dan utilitas sistem dengan bukti verifikasi operasional.
            </p>
          </div>

          {/* Category Filter Pills (Animated) */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl glass-panel shadow-xs self-start md:self-auto">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'text-blue-900 dark:text-sky-100'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-300'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200/90 via-sky-100/90 to-pink-100/90 dark:from-blue-900/60 dark:via-sky-950/50 dark:to-pink-950/50 -z-10 shadow-inner"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. FEATURED PROJECTS SECTION (Large Visual Bento Grid) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Featured Engineering Projects ({featuredProjects.length})
              </h3>
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {featuredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group relative flex flex-col justify-between rounded-3xl glass-panel p-5 shadow-xs hover:shadow-xl dark:hover:border-blue-800/60 transition-all duration-300 overflow-hidden text-left"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-br ${project.accentGlow} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />

                    <div className="space-y-4">
                      {/* Browser Mockup Image Container */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 shadow-inner">
                        <div className="absolute top-0 inset-x-0 h-6 bg-slate-800/80 backdrop-blur px-2.5 flex items-center justify-between z-10">
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-rose-400" />
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          </div>
                          <span className="text-[9px] font-mono text-slate-400 truncate max-w-[150px]">
                            {project.id}
                          </span>
                          <span className="text-[9px] font-mono font-bold text-sky-300">
                            {project.badge}
                          </span>
                        </div>

                        {project.imagePath ? (
                          <img
                            src={project.imagePath}
                            alt={project.title}
                            className="w-full h-full object-cover object-top pt-6 group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full pt-6 flex items-center justify-center bg-slate-950 text-slate-500 font-mono text-xs">
                            {project.title}
                          </div>
                        )}
                      </div>

                      {/* Card Info */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                          {project.category}
                        </span>

                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
                          {project.title}
                        </h4>

                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Tech Chips & Actions */}
                    <div className="space-y-4 pt-4 mt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] font-mono rounded-lg bg-blue-50/80 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-sky-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 transition-colors"
                        >
                          <span>Case Study</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                              title="Live Preview / Demo Site"
                            >
                              <ArrowUpRight className="w-3.5 h-3.5" />
                              <span>Preview</span>
                            </a>
                          )}

                          {project.journalUrl && (
                            <a
                              href={project.journalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                              title="Published Paper"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Paper</span>
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                              title="GitHub Source"
                            >
                              <Code2 className="w-3.5 h-3.5" />
                              <span>Code</span>
                              <ArrowUpRight className="w-3 h-3 opacity-60" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* 2. MORE PROJECTS SECTION (Compact Pastel Interactive Cards) */}
        {moreProjects.length > 0 && (
          <div className="space-y-4 pt-6 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
                Additional Repositories & Tools ({moreProjects.length})
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Compact View
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {moreProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-2xl glass-panel hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase text-blue-600 dark:text-sky-400">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {proj.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/40 dark:border-slate-800/40 text-xs">
                    <div className="flex flex-wrap gap-1">
                      {proj.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline"
                      >
                        Detail
                      </button>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-0.5 text-[11px] font-semibold"
                          title="Preview Site"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      )}
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
                          title="View on GitHub"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] glass-panel bg-white/95 dark:bg-[#0f172a]/95 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 text-left border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-sky-400 uppercase">
                    {selectedProject.category} • {selectedProject.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {selectedProject.journalUrl && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/15 via-sky-500/15 to-pink-500/15 border border-sky-300/40 dark:border-sky-700/50 space-y-2">
                  <div className="flex items-center gap-2 text-sky-800 dark:text-sky-300 font-bold text-xs">
                    <BookOpen className="w-4 h-4" />
                    <span>Scientific Journal Publication (DECODING, 2026)</span>
                  </div>
                  <p className="text-xs text-sky-950 dark:text-sky-100 font-mono">
                    "{selectedProject.journalTitle}"
                  </p>
                  <a
                    href={selectedProject.journalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 dark:text-sky-300 underline"
                  >
                    <span>Buka Artikel Jurnal Resmi (DOI: 10.61255/decoding.v4i2.1449)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-500" />
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      Visual Evidence & Output Gallery
                    </h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedProject.gallery.map((img, gIdx) => (
                      <div
                        key={gIdx}
                        className="rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/80 bg-slate-900 flex flex-col justify-between"
                      >
                        <div className="relative aspect-[16/10] bg-slate-950">
                          <img
                            src={img.path}
                            alt={img.caption}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800/80 text-[11px] space-y-1">
                          <span className="inline-block px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-sky-300">
                            {img.classification}
                          </span>
                          <p className="text-slate-600 dark:text-slate-300 leading-tight">
                            {img.caption}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Problem & Challenge
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-pink-50/40 dark:bg-pink-950/20 border border-pink-100 dark:border-pink-900/30 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Engineering Solution
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Architecture Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-lg bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-sky-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap justify-end gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    <span>Buka Preview Site</span>
                  </a>
                )}
                {selectedProject.journalUrl && (
                  <a
                    href={selectedProject.journalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold transition-colors shadow-xs"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Lihat Jurnal Resmi</span>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-pink-600 text-white text-xs font-bold shadow-md hover:scale-[1.02] transition-transform"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>View Source on GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
