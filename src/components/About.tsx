import React from 'react';
import { Compass, ShieldCheck, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Compass className="w-5 h-5 text-emerald-500" />,
      title: 'Analisis Spasial & WebGIS Terapan',
      desc: 'Berpengalaman dalam pengolahan data geospasial kelapa sawit menggunakan ArcGIS Pro, QGIS, GPS Geodetik E300 Pro (RTK/Statik), serta pengembangan WebGIS open-source.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-500" />,
      title: 'Full-Stack Web & Mobile Engineering',
      desc: 'Pemegang Sertifikat Kompetensi BNSP Pemrogram Web Muda. Terbiasa membangun sistem enterprise berbasis Laravel, Flutter mobile apps, RESTful API, dan optimasi basis data MySQL.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-teal-500" />,
      title: 'Kecerdasan Buatan & Sistem Keputusan',
      desc: 'Implementasi machine learning terapan seperti simulasi Reinforcement Learning (Gymnasium/PPO) dan integrasi Dual AI (Gemini & Groq) untuk analitik keberlanjutan industri.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0b0e] border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column - Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
              <span>Profil & Latar Belakang</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Menghubungkan Sistem Informasi, Analisis Spasial, dan Rekayasa Perangkat Lunak.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Saya adalah <strong className="font-semibold text-slate-900 dark:text-white">Mahasiswi S1 Sistem dan Teknologi Informasi</strong> di Institut Teknologi Sawit Indonesia (IPK 3.86/4.00) dengan rekam jejak magang di Sekretariat Jenderal DPR RI (Mobile Programmer) dan PT Perkebunan Nusantara III Kantor Regional I (Staf Magang Sistem Informasi & GIS, Nilai 95.9/100).
              </p>
              <p>
                Fokus keahlian saya mencakup pengembangan aplikasi Web & Mobile (Laravel, Flutter, PHP), pemrosesan data geospasial presisi tinggi (ArcGIS Pro, QGIS, GPS Geodetik), serta perancangan sistem berbasis kecerdasan komputasional.
              </p>
              <p>
                Saya memiliki komitmen tinggi terhadap kualitas kode, integritas data, ketelitian operasional, dan siap berkontribusi pada posisi magang atau entry-level di bidang Software Development, Web/Mobile Development, maupun GIS/Geospatial.
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
