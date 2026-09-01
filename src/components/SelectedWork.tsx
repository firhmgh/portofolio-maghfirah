import React, { useState } from 'react';
import { ProjectItem, PROJECTS_DATA } from '../data/projectsData';
import { Code2, ArrowUpRight, CheckCircle2, ChevronRight, X, Layers, Cpu, Terminal, Shield, MapPin } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#0d0f14] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Verified Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Engineering Work
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Production-grade systems, spatial intelligence engines, reinforcement learning simulations, and safety-critical utilities built with real-world validation.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group relative flex flex-col bg-white dark:bg-[#12151c] rounded-2xl border border-slate-200 dark:border-slate-800/90 shadow-sm hover:shadow-xl dark:hover:border-slate-700 transition-all duration-300 overflow-hidden"
            >
              {/* Card Top / Browser Device Frame */}
              <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden flex items-center justify-center p-4">
                {/* Browser Mockup Header */}
                <div className="absolute top-0 left-0 right-0 h-7 bg-slate-200/80 dark:bg-slate-900/90 px-3 flex items-center gap-1.5 z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                    {project.id}.app
                  </span>
                </div>

                {/* Real Asset / Technical Graphic View */}
                {project.imagePath ? (
                  <img
                    src={project.imagePath}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover object-top pt-4 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : project.previewType === 'ai-dashboard' ? (
                  <div className="w-full h-full pt-6 flex flex-col items-center justify-center p-4 text-center space-y-2 bg-gradient-to-br from-green-950/20 to-emerald-900/10">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      DUAL AI SCORING ENGINE
                    </div>
                    <p className="text-[11px] text-slate-500 max-w-xs font-mono">
                      Gemini 1.5 + Groq Llama 3 • Ganoderma Impact Penalty Model
                    </p>
                  </div>
                ) : project.previewType === 'code' ? (
                  <div className="w-full h-full pt-6 flex flex-col items-center justify-center p-4 text-center space-y-2 bg-gradient-to-br from-blue-950/20 to-cyan-900/10">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      REINFORCEMENT LEARNING SIMULATION
                    </div>
                    <p className="text-[11px] text-slate-500 max-w-xs font-mono">
                      Gymnasium MDP • PPO & Recurrent PPO LSTM Memory Cells
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full pt-6 flex flex-col items-center justify-center p-4 text-center space-y-2 bg-gradient-to-br from-indigo-950/20 to-blue-900/10">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      MULTI-THREADED CLI & DESKTOP GUI
                    </div>
                    <p className="text-[11px] text-slate-500 max-w-xs font-mono">
                      Tiered SHA-256 Hashing • GIS Bundle Safety System
                    </p>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
                <div className="space-y-3">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {project.category}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Proyek Shelf */}
        {secondaryProjects.length > 0 && (
          <div className="pt-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white text-left">
              Additional Verified Systems & Research
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {secondaryProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-6 rounded-xl bg-white dark:bg-[#12151c] border border-slate-200 dark:border-slate-800 text-left space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase font-bold">
                      {p.category}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {p.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-1">
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
              {/* Challenge & Solution */}
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

              {/* Tech Stack Tags */}
              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-mono rounded-md bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
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
