import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'firahmagh485@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span className="text-xs font-semibold text-blue-800 dark:text-sky-300">
              Let's Build Something Impactful
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Terbuka untuk peluang karir Software Engineering, Full-Stack Web/Mobile Development, Geospasial/WebGIS, maupun kolaborasi proyek sistem terapan.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left">
          {/* Email Direct */}
          <div className="p-5 sm:p-6 rounded-3xl glass-panel shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-blue-100/60 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-sky-400">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Direct Email</h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 break-all">
                {email}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={copyEmail}
              className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Copy Email Address</span>
                </>
              )}
            </motion.button>
          </div>

          {/* LinkedIn Profile */}
          <div className="p-5 sm:p-6 rounded-3xl glass-panel shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-sky-100/60 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">LinkedIn Network</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Connect and view professional updates.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://linkedin.com/in/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold text-center transition-colors shadow-xs"
            >
              View LinkedIn Profile
            </motion.a>
          </div>

          {/* GitHub Repositories */}
          <div className="p-5 sm:p-6 rounded-3xl glass-panel shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-pink-100/60 dark:bg-pink-950/50 flex items-center justify-center text-pink-600 dark:text-pink-400">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Open Repositories</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Explore complete codebase & algorithms.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/firhmgh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold text-center transition-colors shadow-xs"
            >
              Explore GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
