import React from 'react';
import { GraduationCap, Award, Code2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Pendidikan Unggulan',
      description: 'S1 Sistem & Teknologi Informasi, IPK 3.86',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Multi-Platform Developer',
      description: 'Mobile, Web, dan GIS Development',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Peningkatan Efisiensi',
      description: '30% improvement di Setjen DPR RI',
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Teknologi Terkini',
      description: 'Flutter, Laravel, WebGIS, AI Integration',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tentang Saya
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Saya adalah <span className="font-semibold text-slate-900">Software Engineer</span> dengan keahlian mendalam dalam pengembangan aplikasi mobile, web, dan analisis geospasial. <span className="font-semibold text-slate-900">Mahasiswa Akhir Institut Teknologi Sawit Indonesia</span> dengan IPK 3.86, saya menggabungkan fondasi akademik yang kuat dengan pengalaman praktis di industri.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Pengalaman profesional saya di <span className="font-semibold text-slate-900">Setjen DPR RI</span> sebagai Mobile Programmer telah mengasah kemampuan dalam membangun aplikasi Flutter yang scalable dan efficient, menghasilkan peningkatan efisiensi operasional hingga <span className="font-semibold text-blue-600">30%</span>.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Di <span className="font-semibold text-slate-900">PT Perkebunan Nusantara IV</span>, saya mengembangkan solusi WebGIS dan melakukan analisis data spasial menggunakan teknologi cutting-edge seperti ArcGIS Pro dan QGIS, serta membangun sistem fullstack berbasis Laravel untuk manajemen data kompleks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-emerald-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <p className="text-xl sm:text-2xl font-semibold mb-4">
              "Membangun teknologi yang memberikan dampak nyata melalui kode yang clean, arsitektur yang solid, dan solusi yang inovatif"
            </p>
            <p className="text-blue-100">— Filosofi Pengembangan Saya</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
