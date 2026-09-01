import React from 'react';
import { Compass, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Compass className="w-5 h-5 text-emerald-500" />,
      title: 'Geospatial & Spatial Intelligence',
      desc: 'Deep interest in GIS applications, PostGIS coordinate pipelines, and web map architectures for monitoring complex physical territories.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
      title: 'Safe-by-Default Architecture',
      desc: 'Committed to non-destructive system engineering, transactional integrity, multi-tiered hash validation, and automated safety protocols.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-teal-500" />,
      title: 'Applied AI & Decision Support',
      desc: 'Practical implementation of reinforcement learning simulations, neural policies, and LLM integrations (Gemini, Groq) to augment human decisions.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0b0e] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column - Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span>Background & Engineering Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bridging Information Systems with Geospatial & AI Innovation.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I am an <strong className="font-semibold text-slate-900 dark:text-white">Information Systems Specialist and Full-Stack Software Developer</strong> based in Indonesia. My work spans the complete lifecycle of software development—from database modeling and backend API design to responsive spatial frontends and AI simulations.
              </p>
              <p>
                Much of my recent focus centers on the palm oil and agro-industrial sector, where I have engineered enterprise spatial monitoring tools (SIMTAN), AI-driven sustainability analytics dashboards (ESG Palm Oil), and custom Gymnasium reinforcement learning environments to optimize yield and resource distribution.
              </p>
              <p>
                I value clean architecture, testable code, thorough documentation, and creating software that users can trust in mission-critical environments.
              </p>
            </div>
          </div>

          {/* Right Column - Core Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 dark:bg-[#12151c] border border-slate-200/80 dark:border-slate-800/80 space-y-2.5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {h.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {h.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-11">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
