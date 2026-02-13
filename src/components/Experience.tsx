import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      role: 'Mobile Programmer',
      company: 'Setjen DPR RI',
      program: 'Pattern Pro Internship',
      location: 'Jakarta, Indonesia',
      period: '2023 - 2024',
      achievements: [
        'Mengembangkan aplikasi mobile multi-platform menggunakan Flutter untuk Android dan iOS dengan arsitektur clean code dan OOP principles',
        'Implementasi integrasi REST API yang robust untuk komunikasi real-time dengan backend services',
        'Membangun sistem database mobile dengan SQLite dan Firebase untuk data persistence yang reliable',
        'Mengintegrasikan location-based services, GPS, dan navigation features untuk meningkatkan user experience',
        'Mengelola version control dengan GitHub/GitLab dalam tim development yang terstruktur',
        'Berhasil meningkatkan efisiensi operasional sebesar 30% melalui optimasi aplikasi dan automated workflows',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      role: 'Magenta Internship',
      company: 'PT Perkebunan Nusantara IV Regional I',
      program: 'Geospatial & Fullstack Development',
      location: 'Sumatera Utara, Indonesia',
      period: '2022 - 2023',
      achievements: [
        'Melakukan analisis data spasial menggunakan ArcGIS Pro dan QGIS untuk optimasi lahan perkebunan',
        'Mengembangkan platform WebGIS berbasis QGIS untuk visualisasi dan analisis data geospasial interaktif',
        'Memimpin penelitian analisis penyebaran Ganoderma berbasis teknologi geospasial untuk early detection',
        'Mengoperasikan GPS Geodetik E300 Pro untuk survey dengan metode RTK dan Statik dengan presisi tinggi',
        'Melakukan pengolahan data geodetik menggunakan Leica Spider dan GeoSolution untuk hasil yang akurat',
        'Mengembangkan SIMTAN (Sistem Informasi Monitoring Areal Tanaman) fullstack berbasis Laravel dengan fitur upload dan visualisasi data Excel ke dashboard interaktif real-time',
      ],
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Pengalaman Profesional
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Track record yang terbukti dalam mengembangkan solusi teknologi yang memberikan dampak nyata
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-emerald-200 hidden md:block"></div>
                )}

                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg`}
                      >
                        <Briefcase className="w-8 h-8" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {exp.role}
                          </h3>
                          <p className="text-xl text-slate-700 font-semibold mb-3">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                              <Briefcase className="w-4 h-4" />
                              {exp.program}
                            </span>
                            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-slate-700 font-semibold mb-3">
                            <TrendingUp className="w-5 h-5 text-blue-600" />
                            <span>Pencapaian & Tanggung Jawab:</span>
                          </div>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex gap-3 text-slate-700 leading-relaxed"
                              >
                                <span className="text-blue-600 font-bold mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-xl p-8 text-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Pendidikan</h3>
                <p className="text-xl mb-2">
                  S1 Sistem dan Teknologi Informasi
                </p>
                <p className="text-blue-200 mb-2">
                  Institut Teknologi Sawit Indonesia
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                    IPK: 3.86
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
