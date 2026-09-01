import React, { useState } from 'react';
import { ProjectItem, PROJECTS_DATA } from '../data/projectsData';
import { Code2, ArrowUpRight, CheckCircle2, ChevronRight, X, Shield, BookOpen } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 dark:bg-[#0d0f14] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Verified Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Work & System Showcase
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Platform web enterprise, dashboard spasial WebGIS, model reinforcement learning, dan utilitas sistem dengan validasi operasional nyata serta publikasi ilmiah.
          </p>
        </div>

        {/* Featured Projects Grid (Clean Visual Presentation) */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-white dark:bg-[#12151c] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              {/* Browser Device Mockup Frame */}
              <div className="relative aspect-[16/10] w-full bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Browser Top Controls */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-slate-800/90 backdrop-blur px-3 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 truncate max-w-[200px]">
                    {project.id}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    {project.badge}
                  </span>
                </div>

                {/* Project Image */}
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="w-full h-full object-cover object-top pt-7 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Badges (Distinct & Properly Spaced) */}
                <div className="space-y-4 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions (Max 3: Case Study, Published Paper if exists, Source Code) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      <span>Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.journalUrl && (
                        <a
                          href={project.journalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Published Paper</span>
                          <ArrowUpRight className="w-3 h-3 opacity-60" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Proyek Shelf */}
        {secondaryProjects.length > 0 && (
          <div className="pt-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-left">
              Additional Verified Systems
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {secondaryProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-5 rounded-xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 text-left space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                      {p.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {p.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                    >
                      GitHub <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6 text-sm text-slate-700 dark:text-slate-300">
              {/* Publication Highlight if Available */}
              {selectedProject.journalUrl && (
                <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 space-y-2">
                  <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300 font-bold text-xs">
                    <BookOpen className="w-4 h-4" />
                    <span>Scientific Journal Publication (DECODING, 2026)</span>
                  </div>
                  <p className="text-xs text-cyan-900 dark:text-cyan-200 font-mono">
                    "{selectedProject.journalTitle}"
                  </p>
                  <a
                    href={selectedProject.journalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 dark:text-cyan-300 underline pt-1"
                  >
                    <span>Buka Artikel Jurnal Resmi (DOI: 10.61255/decoding.v4i2.1449)</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Problem & Solution */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    Problem & Challenge
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 space-y-2">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Engineering Solution
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Implementation */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Architecture & Implementation Details
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architecture.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Key Technical Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 text-xs flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-end gap-3">
              {selectedProject.journalUrl && (
                <a
                  href={selectedProject.journalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Lihat Publikasi Jurnal</span>
                </a>
              )}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-xs font-bold hover:bg-slate-800 dark:hover:bg-emerald-400 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>View Full Source on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
