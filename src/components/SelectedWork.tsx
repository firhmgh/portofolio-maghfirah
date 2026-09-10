import React, { useState } from 'react';
import { ProjectItem, ALL_PROJECTS_DATA } from '../data/projectsData';
import { useRouter } from '../router';
import {
  Layers,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export const SelectedWork: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { navigate } = useRouter();

  const categories = [
    'All',
    'WebGIS & Spatial',
    'AI / Data / Research',
    'Web & Product',
    'Automation & Utilities',
    'Mobile'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? ALL_PROJECTS_DATA
    : ALL_PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const handleOpenProject = (slug: string) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glows (Tailored Blue & Soft Pink, NO purple) */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-pink-400/10 dark:bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl min-w-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" />
              <span className="text-xs font-semibold text-blue-800 dark:text-sky-300">
                Engineering Showcase & Evidence
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight break-words">
              Featured Systems & Projects
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed break-words">
              Koleksi platform enterprise Agro-GIS, sistem keputusan Dual AI, simulasi riset komputasi, dan utilitas desktop dengan bukti verifikasi operasional.
            </p>
          </div>

          {/* Categories Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl glass-panel shadow-2xs self-start md:self-auto max-w-full">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-label={`Filter by ${cat}`}
                  className={`relative px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center ${
                    isSelected
                      ? 'text-blue-950 dark:text-sky-100 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-300'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="category-pill-active"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-sky-400/20 to-pink-400/20 border border-blue-400/40 dark:border-sky-500/40 shadow-xs"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 8 FEATURED PROJECTS: IMAGE-FIRST EDITORIAL CARDS ================= */}
        {featuredProjects.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Featured Systems ({featuredProjects.length})
              </span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:border-blue-400/50 dark:hover:border-sky-500/50 transition-all duration-300 overflow-hidden flex flex-col text-left min-w-0"
                >
                  {/* Dominant Visual Screenshot Cover (Aspect 16:10) */}
                  <div
                    onClick={() => handleOpenProject(project.slug)}
                    className="aspect-[16/10] w-full overflow-hidden bg-slate-950 relative cursor-pointer"
                  >
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading={idx < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category Badge Floating on Image */}
                    <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 max-w-[70%]">
                      <span className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-blue-700 dark:text-sky-300 border border-white/20 shadow-xs truncate block">
                        {project.category}
                      </span>
                    </div>

                    {/* Year / Status Badge Floating */}
                    <div className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4">
                      <span className="px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-medium bg-slate-900/80 backdrop-blur-md text-slate-200 border border-slate-700">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Editorial Content (Clean, max 2 lines summary, max 3 tags) */}
                  <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4 min-w-0">
                    <div className="space-y-2 min-w-0">
                      <h3
                        onClick={() => handleOpenProject(project.slug)}
                        className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors cursor-pointer break-words"
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed break-words">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Max 3 Key Technology Tags & Direct Project Page Navigation CTA */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View Project Detail Button navigating to /projects/:slug */}
                      <button
                        onClick={() => handleOpenProject(project.slug)}
                        aria-label={`View project details for ${project.title}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-sky-400 group-hover:translate-x-1 transition-transform cursor-pointer flex-shrink-0 min-h-[44px] px-2"
                      >
                        <span>View Project</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ================= ALL PROJECTS SECTION (Remaining Verified Systems) ================= */}
        {otherProjects.length > 0 && (
          <div className="space-y-6 pt-4 sm:pt-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                All Additional Projects & Utilities ({otherProjects.length})
              </span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {otherProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 hover:border-blue-400/40 dark:hover:border-sky-500/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between text-left space-y-3.5 min-w-0"
                >
                  <div className="space-y-2 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 truncate">
                        {project.category}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 flex-shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <h4
                      onClick={() => handleOpenProject(project.slug)}
                      className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors cursor-pointer break-words"
                    >
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed break-words">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleOpenProject(project.slug)}
                      aria-label={`View project details for ${project.title}`}
                      className="text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline flex items-center gap-1 cursor-pointer min-h-[44px] px-2"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
