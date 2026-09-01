import React from 'react';
import { Server, Layout, Map, Cpu, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Bahasa Pemrograman',
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      skills: ['PHP', 'Dart', 'JavaScript (ES6+)', 'Python 3.11', 'HTML5', 'CSS3']
    },
    {
      category: 'Framework & Mobile',
      icon: <Layout className="w-5 h-5 text-teal-500" />,
      skills: ['Flutter (Android SDK)', 'Laravel 10 / 11', 'React 18', 'Next.js', 'RESTful API Integration', 'Tailwind CSS', 'Bootstrap 5']
    },
    {
      category: 'GIS & Data Spasial',
      icon: <Map className="w-5 h-5 text-cyan-500" />,
      skills: ['ArcGIS Pro (Esri Certified)', 'QGIS Desktop', 'WebGIS (Leaflet)', 'GPS Geodetik E300 Pro (RTK & Statik)', 'Leica Spider', 'GeoSolution', 'Analisis & Digitasi Spasial']
    },
    {
      category: 'AI, Machine Learning & Analytics',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      skills: ['Gymnasium Environments', 'Stable-Baselines3 (PPO & LSTM)', 'PyTorch', 'Google Gemini AI', 'Groq Llama 3', 'Chart.js', 'Pandas / NumPy']
    },
    {
      category: 'Database & Cloud Storage',
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: ['MySQL Relational Database', 'PostgreSQL / PostGIS', 'Supabase Cloud', 'Google Drive API v3 (OAuth 2.0)']
    },
    {
      category: 'Tools & Soft Skills',
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      skills: ['Git (GitHub/GitLab)', 'Tkinter Desktop GUI', 'Vite & Composer', 'Kerja Sama Tim', 'Komunikasi Efektif', 'Ketelitian', 'Adaptasi Cepat']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0b0e] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technology Matrix
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Daftar bahasa pemrograman, framework, software GIS, platform AI, dan tools yang terverifikasi dari CV resmi serta repositori proyek aktif.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-4 text-left hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
