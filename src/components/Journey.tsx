import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Building2, Code2, Globe, Sparkles, Cpu, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export const Journey: React.FC = () => {
  const experiences = [
    {
      period: 'Januari 2025 — Juli 2025',
      role: 'Staf Magang Sistem Informasi & GIS (Program Magenta BUMN)',
      institution: 'PT Perkebunan Nusantara IV Regional 1',
      score: 'Nilai: 95.9 / 100 (A - Sangat Memuaskan)',
      location: 'Medan, Sumatera Utara',
      icon: <Building2 className="w-5 h-5 text-violet-500" />,
      tag: 'BUMN Internship',
      tagColor: 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800',
      highlights: [
        'Pengolahan data spasial kelapa sawit dan verifikasi lapangan presisi tinggi menggunakan GPS Geodetik E300 Pro (RTK & Statik).',
        'Analisis data spasial perkebunan menggunakan ArcGIS Pro dan QGIS untuk pemetaan blok tanaman.',
        'Penyusunan arsitektur monitoring berbasis WebGIS dan integrasi basis data spasial PostGIS.'
      ]
    },
    {
      period: 'Agustus 2024 — Desember 2024',
      role: 'Mobile Programmer (Parliamentary Internship Program)',
      institution: 'Sekretariat Jenderal DPR RI',
      score: 'Nilai: 84.25 (Sangat Baik)',
      location: 'Jakarta Pusat, DKI Jakarta',
      icon: <Code2 className="w-5 h-5 text-fuchsia-500" />,
      tag: 'Government Tech',
      tagColor: 'bg-fuchsia-50 dark:bg-fuchsia-950/40 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800',
      highlights: [
        'Pengembangan dan pemeliharaan aplikasi mobile internal DPR RI berbasis Flutter dan Dart.',
        'Integrasi RESTful API dengan backend sistem informasi kedewanan.',
        'Kolaborasi tim lintas fungsi dalam implementasi pengujian antarmuka dan optimasi performa aplikasi mobile.'
      ]
    }
  ];

  const education = {
    period: '2022 — 2026',
    degree: 'S1 Sistem dan Teknologi Informasi',
    institution: 'Institut Teknologi Sawit Indonesia (ITSI)',
    gpa: 'IPK 3.86 / 4.00',
    thesis: 'Tugas Akhir: Laravel Dashboard for Immature Oil Palm (TBM III) Monitoring Using XYZ Tiles and Large Language Models (Publikasi: Jurnal DECODING 2026)',
    icon: <GraduationCap className="w-5 h-5 text-sky-500" />
  };

  const certifications = [
    {
      title: 'Sertifikat Kompetensi BNSP — Pemrogram Web Muda',
      issuer: 'Badan Nasional Sertifikasi Profesi (LSP LPK TIKOM)',
      year: '2026',
      desc: 'Kompetensi terverifikasi dalam perancangan web dinamis, penulisan script terstruktur, dan basis data.',
      icon: <Award className="w-5 h-5 text-emerald-500" />
    },
    {
      title: 'ArcGIS Pro Profesional',
      issuer: 'Esri Indonesia',
      year: '2025',
      desc: 'Analisis geospasial mendalam, visualisasi layer spasial multi-dimensi, dan geoprocessing perkebunan.',
      icon: <Globe className="w-5 h-5 text-cyan-500" />
    }
  ];

  const skillDomains = [
    {
      domain: 'Web & Backend',
      icon: <Layers className="w-4 h-4 text-violet-500" />,
      skills: ['Laravel 10/11', 'PHP 8.2', 'React 18', 'TypeScript', 'Next.js', 'Bootstrap 5', 'Tailwind CSS', 'RESTful API']
    },
    {
      domain: 'Mobile & Cloud',
      icon: <Code2 className="w-4 h-4 text-fuchsia-500" />,
      skills: ['Flutter SDK', 'Dart', 'Android Native', 'MySQL', 'PostgreSQL', 'Supabase Cloud', 'Google Drive API']
    },
    {
      domain: 'Geospatial & WebGIS',
      icon: <Globe className="w-4 h-4 text-sky-500" />,
      skills: ['ArcGIS Pro', 'QGIS Desktop', 'Leaflet GIS', 'PostGIS', 'GPS Geodetik E300 Pro (RTK/Statik)', 'XYZ Raster Tiles']
    },
    {
      domain: 'AI & Machine Learning',
      icon: <Cpu className="w-4 h-4 text-pink-500" />,
      skills: ['Python 3.11', 'Gymnasium MDP', 'Stable-Baselines3 (PPO/LSTM)', 'PyTorch', 'Google Gemini AI', 'Groq Llama 3']
    }
  ];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200/60 dark:border-violet-800/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span className="text-xs font-semibold text-violet-700 dark:text-violet-300">
              Interactive Storytelling Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Journey & Technical Constellation
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Perjalanan akademik, pengalaman magang institusi kenegaraan & BUMN, sertifikasi kompetensi resmi, serta matriks keahlian rekayasa sistem.
          </p>
        </div>

        {/* 2-Column Story Layout: Timeline Left, Skills Right */}
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left Column - Journey Timeline */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-6">
              {/* Experiences Cards */}
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative p-6 rounded-3xl glass-panel shadow-sm hover:shadow-md transition-all space-y-3 border-l-4 border-l-violet-500"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-violet-100/60 dark:bg-violet-950/50">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-semibold text-violet-700 dark:text-violet-300">
                          {exp.institution}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${exp.tagColor}`}>
                      {exp.tag}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-violet-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-500" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-violet-50/50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/30 text-xs font-semibold text-violet-800 dark:text-violet-200">
                    🏆 {exp.score}
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Education Card */}
              <div className="p-6 rounded-3xl glass-panel shadow-sm space-y-3 border-l-4 border-l-sky-500">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sky-100/60 dark:bg-sky-950/50">
                    {education.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700 dark:text-sky-300">
                      {education.institution} • {education.period}
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-sky-50/50 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/30 text-xs font-semibold text-sky-800 dark:text-sky-200">
                  🎓 Prestasi Akademik: <strong>{education.gpa}</strong> (Peringkat Atas)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  📖 {education.thesis}
                </p>
              </div>

              {/* Certifications Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="p-5 rounded-2xl glass-panel shadow-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-100/60 dark:bg-emerald-950/50">
                        {cert.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Skill Constellation */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-6 rounded-3xl glass-panel shadow-sm space-y-6">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Skill Constellation
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Kemampuan teknis terapan yang teruji dalam proyek nyata dan lingkungan industri.
                </p>
              </div>

              <div className="space-y-5">
                {skillDomains.map((dom, dIdx) => (
                  <div key={dIdx} className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                      {dom.icon}
                      <span>{dom.domain}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {dom.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 shadow-xs hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Publications Pill Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-violet-500/10 border border-cyan-200/60 dark:border-cyan-800/60 space-y-3">
              <div className="flex items-center gap-2 text-cyan-800 dark:text-cyan-300 font-bold text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Research & Scientific Publication</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                Journal of Deep Learning, Computer Vision and Digital Image Processing (DECODING)
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Artikel: <em>"Laravel Dashboard for Immature Oil Palm (TBM III) Monitoring Using XYZ Tiles and Large Language Models"</em> (Vol. 4 No. 2, June 2026).
              </p>
              <a
                href="https://journal.diginus.id/DECODING/article/view/1449"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-300 underline pt-1"
              >
                <span>Buka Jurnal Resmi (DOI: 10.61255/decoding.v4i2.1449)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
