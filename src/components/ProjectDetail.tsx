import React, { useState } from 'react';
import { ProjectItem, ALL_PROJECTS_DATA } from '../data/projectsData';
import { useRouter } from '../router';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  BookOpen,
  Layers,
  Sparkles,
  Calendar,
  CheckCircle2,
  Server,
  ShieldAlert,
  Lightbulb,
  Cpu,
  Eye,
  X,
  Maximize2,
  ImageOff,
  ChevronRight,
  Workflow,
  Check,
  Award,
  Globe,
  Tag,
  Clock,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectDetail: React.FC<{ project: ProjectItem }> = ({ project }) => {
  const { navigate } = useRouter();
  const [lightboxImage, setLightboxImage] = useState<{ path: string; caption: string } | null>(null);

  // Find next project
  const currentIndex = ALL_PROJECTS_DATA.findIndex((p) => p.slug === project.slug || p.id === project.id);
  const nextProject = ALL_PROJECTS_DATA[(currentIndex + 1) % ALL_PROJECTS_DATA.length];

  const galleryCount = project.gallery?.length || 0;

  return (
    <div className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20 text-left relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 -left-48 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-96 -right-48 w-96 h-96 bg-pink-400/10 dark:bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-5">
        <button
          onClick={() => navigate('/#projects')}
          aria-label="Back to Projects"
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold hover:border-blue-500/50 dark:hover:border-sky-500/50 hover:text-blue-600 dark:hover:text-sky-400 shadow-xs transition-all cursor-pointer min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Proyek</span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 border border-blue-200/60 dark:border-blue-800/60">
            {project.category}
          </span>
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80">
            {project.year}
          </span>
        </div>
      </div>

      {/* ================= 1. HERO SECTION (EDITORIAL & POWERFUL) ================= */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 border border-pink-200/60 dark:border-pink-800/60 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 flex-shrink-0" />
          <span>{project.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] break-words">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal break-words">
          {project.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-700/25 hover:shadow-blue-700/40 hover:scale-[1.01] active:scale-98 transition-all min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Buka Aplikasi Langsung</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-400 text-xs sm:text-sm font-semibold shadow-xs hover:scale-[1.01] active:scale-98 transition-all min-h-[44px]"
            >
              <Github className="w-4 h-4" />
              <span>Kode Sumber GitHub</span>
            </a>
          )}

          {project.journalUrl && (
            <a
              href={project.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100/80 text-xs sm:text-sm font-semibold shadow-xs hover:scale-[1.01] active:scale-98 transition-all min-h-[44px] break-words"
            >
              <BookOpen className="w-4 h-4 flex-shrink-0" />
              <span>Artikel Ilmiah Terpublikasi (DOI: {project.journalDoi})</span>
            </a>
          )}
        </div>
      </div>

      {/* ================= 2. PROJECT SNAPSHOT BAR (4-COLUMN COMPACT METADATA) ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
        <div className="space-y-1">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            Peran & Kontribusi
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
            Full-Stack & Geospasial
          </p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            Tahun / Periode
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono">
            {project.year}
          </p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            Kategori
          </span>
          <p className="text-xs sm:text-sm font-bold text-blue-700 dark:text-sky-400">
            {project.category}
          </p>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            Status Proyek
          </span>
          <p className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
            {project.status}
          </p>
        </div>
      </div>

      {/* ================= 3. DOMINANT HERO SCREENSHOT ================= */}
      {project.imagePath ? (
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 shadow-2xl group">
          <div className="aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2/1] w-full overflow-hidden flex items-center justify-center bg-slate-950">
            <img
              src={project.imagePath}
              alt={project.title}
              className="w-full h-full object-cover sm:object-contain group-hover:scale-[1.01] transition-transform duration-500"
              loading="eager"
            />
          </div>
          <div className="p-3.5 sm:p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 flex-wrap gap-2">
            <span className="font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              Tangkapan Layar Runtime Aplikasi Resmi
            </span>
            <button
              onClick={() =>
                setLightboxImage({
                  path: project.imagePath || '',
                  caption: `${project.title} — Antarmuka Utama Aplikasi`
                })
              }
              aria-label="Perbesar tangkapan layar"
              className="inline-flex items-center gap-1.5 text-blue-600 dark:text-sky-400 hover:underline font-semibold cursor-pointer min-h-[44px] px-2"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Perbesar Gambar</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-200/60 dark:bg-slate-800 flex items-center justify-center text-slate-400">
            <ImageOff className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">
              Visual Tidak Ditangkap / Runtime Offline
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
              Proyek diverifikasi secara faktual melalui kode sumber repositori publik tanpa rekayasa mockup.
            </p>
          </div>
        </div>
      )}

      {/* ================= 4. OVERVIEW & CONTRIBUTION ================= */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-sky-400">
            <Layers className="w-4 h-4" />
            <span>Gambaran Umum Proyek</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latar Belakang & Konteks Rekayasa
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base break-words">
            {project.fullDescription}
          </p>
        </div>

        <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-pink-50/50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 border border-blue-200/80 dark:border-blue-900/50 shadow-sm space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-sky-300">
            <Cpu className="w-4 h-4 text-blue-600 dark:text-sky-400" />
            <span>Kontribusi Nyata Saya</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Implementasi & Tanggung Jawab Teknis
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed break-words">
            {project.myContribution}
          </p>
        </div>
      </div>

      {/* ================= 5. PROBLEM & SOLUTION (COMPACT EQUAL-HEIGHT CARDS) ================= */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Workflow className="w-4 h-4 text-blue-600 dark:text-sky-400" />
          <span>Tantangan & Solusi Rekayasa</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Problem Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-rose-200/70 dark:border-rose-950/60 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 flex items-center justify-center text-rose-600 dark:text-rose-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Tantangan Permasalahan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                {project.challenge}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-rose-700 dark:text-rose-400 font-semibold">
              Kebutuhan Intervensi Sistematis
            </div>
          </div>

          {/* Solution Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-blue-200/70 dark:border-blue-950/60 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-sky-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Pendekatan Solusi
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                {project.solution}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono text-blue-700 dark:text-sky-400 font-semibold">
              Eksekusi Arsitektur Terintegrasi
            </div>
          </div>
        </div>
      </div>

      {/* ================= 6. SYSTEM ARCHITECTURE (VISUAL FLOW CARDS) ================= */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <Server className="w-4 h-4 text-blue-600 dark:text-sky-400" />
          <span>Arsitektur Sistem Terintegrasi</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.architecture.map((arch, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:border-blue-300 dark:hover:border-blue-800 transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-sky-300 font-mono text-xs font-extrabold flex items-center justify-center">
                  0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Modul Arsitektur
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed break-words">
                {arch}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 7. KEY FEATURES (BENTO ICON GRID) ================= */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>Fitur-Fitur Utama</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800 flex items-start gap-3.5"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed break-words">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= 8. TECHNOLOGY STACK CHIPS ================= */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          Teknologi yang Digunakan
        </span>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 shadow-2xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ================= 9. VISUAL EVIDENCE / GALLERY (FULL CONTAINER EDITORIAL BENTO) ================= */}
      {project.gallery && galleryCount > 0 && (
        <div className="space-y-6 pt-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-pink-500">
              <Eye className="w-4 h-4" />
              <span>Galeri Bukti Visual & Showcase ({galleryCount})</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tangkapan Layar Operasional Aktual
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Klik gambar untuk memperbesar dalam resolusi penuh tanpa distorsi.
            </p>
          </div>

          {/* Dynamic Editorial Bento Grid based on image count */}
          <div
            className={`grid gap-6 ${
              galleryCount === 1
                ? 'grid-cols-1 max-w-4xl'
                : galleryCount === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : galleryCount === 3
                ? 'grid-cols-1 md:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(img)}
                className="group relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-slate-950 cursor-pointer shadow-sm hover:shadow-xl hover:border-blue-400/60 dark:hover:border-sky-500/60 transition-all flex flex-col justify-between"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={img.path}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                    {img.classification}
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= 10. PUBLICATION SECTION IF AVAILABLE ================= */}
      {project.journalUrl && (
        <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span>Publikasi Jurnal Ilmiah Nasional</span>
          </div>
          <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white break-words">
            {project.journalTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed break-words">
            {project.journalName} — DOI:{' '}
            <a
              href={project.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-emerald-700 dark:text-emerald-400 underline font-semibold break-all"
            >
              {project.journalDoi}
            </a>
          </p>
        </div>
      )}

      {/* ================= 11. SUPPORTING INFRASTRUCTURE ================= */}
      {project.supportingInfrastructure && project.supportingInfrastructure.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600 dark:text-sky-400 flex-shrink-0" />
              <span>Infrastruktur Spasial Pendukung</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Repositori tile server, data batas GeoJSON, dan model elevasi yang menopang sistem ini.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.supportingInfrastructure.map((infra, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white truncate">
                    {infra.name}
                  </span>
                  {infra.githubUrl && (
                    <a
                      href={infra.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Repositori GitHub ${infra.name}`}
                      className="text-slate-500 hover:text-blue-600 dark:hover:text-sky-400 min-h-[44px] min-w-[44px] flex items-center justify-center -mr-2"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-sky-300">
                  {infra.type}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed break-words">
                  {infra.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= 12. NEXT PROJECT NAVIGATION CARD ================= */}
      {nextProject && (
        <div className="pt-8 sm:pt-12 border-t border-slate-200 dark:border-slate-800">
          <div
            onClick={() => navigate(`/projects/${nextProject.slug}`)}
            className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/60 via-slate-50 to-pink-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-sky-500 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
          >
            <div className="space-y-1 text-left min-w-0 flex-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Proyek Selanjutnya
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors break-words">
                {nextProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-1 break-words">
                {nextProject.shortDescription}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-700 transition-all flex-shrink-0 shadow-md">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      )}

      {/* ================= LIGHTBOX PREVIEW MODAL ================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                aria-label="Tutup pratinjau gambar"
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-black shadow-2xl max-h-[80vh]">
                <img
                  src={lightboxImage.path}
                  alt={lightboxImage.caption}
                  className="max-h-[80vh] w-auto object-contain"
                />
              </div>
              <p className="text-white text-xs sm:text-sm text-center font-medium max-w-2xl break-words">
                {lightboxImage.caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
