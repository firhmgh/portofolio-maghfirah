import React from 'react';
import { Github, ExternalLink, Smartphone, ShoppingCart, BookOpen, Library, Shield, Store } from 'lucide-react';
import { motion } from 'motion/react';

export function Projects() {
  const projects = [
    {
      title: 'Ramadhan Productivity Tracker',
      category: 'Web Application',
      icon: <BookOpen className="w-6 h-6" />,
      description:
        'Aplikasi web interaktif untuk tracking produktivitas selama bulan Ramadhan dengan fitur habit tracking, goal setting, dan visualisasi progress real-time. Implementasi state management yang efisien dan dashboard analytics untuk monitoring pencapaian harian.',
      tech: ['React', 'JavaScript', 'Local Storage', 'Chart.js', 'Responsive Design'],
      color: 'from-purple-500 to-purple-600',
      github: 'https://github.com/firhmgh',
    },
    {
      title: 'Urban Style Ecommerce',
      category: 'Fullstack Web Platform',
      icon: <ShoppingCart className="w-6 h-6" />,
      description:
        'Platform e-commerce fullstack dengan sistem manajemen produk, shopping cart, payment integration, dan admin dashboard. Implementasi authentication, authorization, dan database relational untuk mengelola inventori, orders, dan user management secara comprehensive.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Payment Gateway', 'Admin Panel'],
      color: 'from-pink-500 to-rose-600',
      github: 'https://github.com/firhmgh',
    },
    {
      title: 'Dirayah Quran Mobile App',
      category: 'Mobile Application',
      icon: <Smartphone className="w-6 h-6" />,
      description:
        'Aplikasi mobile Al-Quran digital dengan fitur pembacaan, audio streaming, bookmark, dan pencarian ayat. Implementasi offline-first architecture dengan caching mechanism, beautiful UI/UX design, dan Arabic text rendering yang optimal untuk pengalaman spiritual yang meaningful.',
      tech: ['Flutter', 'Dart', 'SQLite', 'REST API', 'Audio Streaming', 'Offline Mode'],
      color: 'from-emerald-500 to-teal-600',
      github: 'https://github.com/firhmgh',
    },
    {
      title: 'Digital Library Blog',
      category: 'Content Management System',
      icon: <Library className="w-6 h-6" />,
      description:
        'Platform perpustakaan digital berbasis web dengan fitur katalog buku, sistem peminjaman, pencarian advanced, dan blog terintegrasi. Implementasi CMS yang user-friendly dengan panel admin untuk manajemen koleksi, user, dan reporting system.',
      tech: ['Laravel', 'PHP', 'MySQL', 'CMS', 'Search Engine', 'Authentication'],
      color: 'from-blue-500 to-cyan-600',
      github: 'https://github.com/firhmgh',
    },
    {
      title: 'Escrow Service Platform',
      category: 'Financial Technology',
      icon: <Shield className="w-6 h-6" />,
      description:
        'Platform escrow service untuk transaksi aman antara buyer dan seller dengan multi-party transaction flow, dispute resolution, dan automated payment release. Implementasi security best practices, transaction logging, dan notification system untuk transparansi penuh.',
      tech: ['Laravel', 'PHP', 'PostgreSQL', 'Payment Integration', 'Security', 'Webhook'],
      color: 'from-indigo-500 to-blue-600',
      github: 'https://github.com/firhmgh',
    },
    {
      title: 'Streamlit Canteen POS',
      category: 'Point of Sale System',
      icon: <Store className="w-6 h-6" />,
      description:
        'Sistem Point of Sale (POS) untuk kantin dengan interface yang intuitif menggunakan Streamlit. Fitur mencakup manajemen menu, transaction processing, sales reporting, dan data visualization untuk analisis penjualan real-time dengan dashboard interaktif.',
      tech: ['Python', 'Streamlit', 'Pandas', 'Data Visualization', 'SQLite', 'Analytics'],
      color: 'from-orange-500 to-red-600',
      github: 'https://github.com/firhmgh',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Projek Unggulan
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Portfolio projek yang mendemonstrasikan keahlian teknis dan kemampuan problem-solving dalam berbagai domain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      {project.icon}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-slate-600" />
                    </a>
                  </div>

                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-emerald-50 text-slate-700 rounded-full text-xs font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    Lihat Projek
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <Github className="w-6 h-6" />
              Lihat Semua Projek di GitHub
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
