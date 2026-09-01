import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer & Geospatial Systems Engineer',
      focus: 'Enterprise Oil Palm Immature (TBM) Systems & Agro-GIS',
      period: '2024 — Present',
      points: [
        'Architected SIMTAN, an enterprise web application integrating Laravel and Leaflet GIS to monitor immature oil palm across regional plantation estates.',
        'Engineered automated agronomic audit validation scoring engines with expert-defined compliance criteria.',
        'Developed WebGIS multi-region spatial dashboards handling thousands of tree census coordinates, PostGIS RPC queries, and distributed tile layers.'
      ]
    },
    {
      role: 'AI & Systems Utility Software Developer',
      focus: 'Applied AI, Machine Learning Simulation & Windows Tooling',
      period: '2025 — 2026',
      points: [
        'Constructed custom Gymnasium simulation environments modeling palm plantation dynamics and trained PPO & Recurrent PPO (LSTM) deep RL agents.',
        'Engineered ESG Palm Oil analytics dashboard integrating dual LLMs (Google Gemini & Groq Llama 3) with biological Ganoderma disease weighting formulas.',
        'Built high-safety Windows desktop utilities and CLI tooling featuring tiered SHA-256 duplicate hashing, GIS bundle protection, and Recycle Bin routing.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Information Systems / Information Technology Focus',
      institution: 'Higher Education / Academic Project Portfolio',
      period: 'Verified Academic Track',
      details: 'Specialization in Enterprise Information Systems, Web Geospatial Intelligence (WebGIS), Applied Machine Learning, and Software Engineering.'
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-[#0d0f14] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
            <span>Engineering Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A grounded summary of software engineering contributions, research platform development, and academic milestones.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-12 gap-10 text-left">
          {/* Work Experience (Left 8 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Briefcase className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Project & Research Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-4 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                        {exp.focus}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Focus (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Education & Specialization
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-3 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* Core Tenets Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 space-y-3">
                <h4 className="font-bold text-sm text-emerald-400">
                  Engineering Principles
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Prioritizing data integrity, robust validation pipelines, and non-destructive automation in all systems. Every line of code should serve real operational reliability."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
