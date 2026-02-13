import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/firhmgh',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/firhmgh',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:firahmagh485@gmail.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang', href: '#about' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Projek', href: '#projects' },
    { label: 'Kontak', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-4">
              Maghfirah
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              Fullstack Developer & GIS Specialist yang passionate dalam membangun solusi teknologi yang memberikan dampak nyata.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <Code2 className="w-4 h-4" />
              <span className="text-sm">Built with React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Hubungi Saya</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:firahmagh485@gmail.com"
                className="text-slate-300 hover:text-blue-400 transition-colors block"
              >
                firahmagh485@gmail.com
              </a>
              <p className="text-slate-400 text-sm">
                Terbuka untuk kolaborasi dan peluang karir
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Maghfirah. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-slate-400 text-sm">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
