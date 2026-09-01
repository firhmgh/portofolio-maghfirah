import React from 'react';
import { Server, Layout, Map, Cpu, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Backend & Enterprise Development',
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      skills: ['PHP 8.2', 'Laravel 10 / 11', 'Python 3.11', 'Node.js', 'RESTful APIs', 'Role-Based Access Control (RBAC)', 'Validation Pipelines']
    },
    {
      category: 'Frontend & Modern Web',
      icon: <Layout className="w-5 h-5 text-teal-500" />,
      skills: ['TypeScript', 'JavaScript (ES6+)', 'React 18', 'Next.js (App Router)', 'Tailwind CSS', 'Bootstrap 5', 'Responsive Design', 'HTML5 / Semantic Web']
    },
    {
      category: 'Geospatial & Spatial Intelligence',
      icon: <Map className="w-5 h-5 text-cyan-500" />,
      skills: ['Leaflet GIS', 'PostGIS', 'GeoJSON Data Structures', 'Raster Tile Slicing (XYZ)', 'LiDAR DTM Processing', 'QGIS Desktop', 'Spatial Coordinate Systems']
    },
    {
      category: 'Artificial Intelligence & Machine Learning',
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
      skills: ['Gymnasium Environments', 'Stable-Baselines3 (PPO & Recurrent PPO)', 'PyTorch', 'Scikit-Learn', 'Large Language Models (Google Gemini & Groq APIs)', 'NumPy / Pandas']
    },
    {
      category: 'Databases & Cloud Storage',
      icon: <Database className="w-5 h-5 text-indigo-500" />,
      skills: ['MySQL', 'PostgreSQL', 'Supabase Cloud', 'Google Drive API v3 (OAuth 2.0)', 'Database Indexing & Query Optimization']
    },
    {
      category: 'System Tooling & Engineering Best Practices',
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      skills: ['Tkinter Desktop GUI', 'Windows FileSystem API (send2trash)', 'SHA-256 Hashing Algorithms', 'Git & GitHub Workflows', 'Vite', 'Automated Unittest Suite']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0b0e] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Verified Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technology Matrix
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A comprehensive overview of frameworks, languages, algorithms, and engineering tools proven across my active software projects.
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
