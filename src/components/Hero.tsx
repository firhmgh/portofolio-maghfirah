import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Fullstack Developer & GIS Specialist
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Halo, Saya{' '}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Maghfirah
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Mengembangkan solusi digital inovatif melalui{' '}
            <span className="font-semibold text-slate-800">Mobile Development</span>,{' '}
            <span className="font-semibold text-slate-800">Web Engineering</span>, dan{' '}
            <span className="font-semibold text-slate-800">Analisis Geospasial</span> untuk transformasi digital yang berdampak
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:firahmagh485@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border-2 border-slate-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors shadow-md hover:shadow-lg"
            >
              <Mail size={20} />
              Kontak Saya
            </a>
          </div>

          <motion.button
            onClick={scrollToAbout}
            className="inline-flex flex-col items-center text-slate-500 hover:text-blue-600 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm mb-2">Scroll untuk lebih lanjut</span>
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
