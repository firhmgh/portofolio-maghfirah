import React from 'react';
import { Smartphone, Globe, Map, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Android Development', level: 85 },
        { name: 'iOS Development', level: 85 },
        { name: 'Dart', level: 90 },
        { name: 'Location Services & GPS', level: 85 },
        { name: 'Mobile Database (SQLite, Firebase)', level: 85 },
        { name: 'REST API Integration', level: 90 },
        { name: 'State Management', level: 85 },
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Development',
      color: 'from-emerald-500 to-emerald-600',
      skills: [
        { name: 'Laravel', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'MySQL & PostgreSQL', level: 85 },
        { name: 'RESTful API Development', level: 90 },
        { name: 'MVC Architecture', level: 85 },
      ],
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: 'GIS & Geospatial',
      color: 'from-teal-500 to-teal-600',
      skills: [
        { name: 'ArcGIS Pro', level: 85 },
        { name: 'QGIS', level: 90 },
        { name: 'WebGIS Development', level: 85 },
        { name: 'GPS Geodetik (RTK & Statik)', level: 80 },
        { name: 'Analisis Data Spasial', level: 85 },
        { name: 'Leica Spider & GeoSolution', level: 75 },
        { name: 'Geospatial Data Processing', level: 85 },
        { name: 'Pemetaan Digital', level: 85 },
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Tools & Technologies',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'GitLab', level: 85 },
        { name: 'Python & Streamlit', level: 80 },
        { name: 'OOP Principles', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Database Design', level: 85 },
        { name: 'API Design & Integration', level: 90 },
        { name: 'Agile Development', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Keahlian Teknis
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Menguasai berbagai teknologi modern untuk membangun solusi digital yang comprehensive dan scalable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
              Technology Stack 2026
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Flutter 3.x',
                'Laravel 11',
                'React 19',
                'PHP 8.3',
                'MySQL',
                'PostgreSQL',
                'Firebase',
                'REST API',
                'GraphQL',
                'ArcGIS Pro',
                'QGIS',
                'WebGIS',
                'Git',
                'Docker',
                'Python',
                'Streamlit',
                'TypeScript',
                'Tailwind CSS',
                'OOP',
                'MVC',
                'Clean Architecture',
                'Geospatial AI',
                'Progressive Web Apps',
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-blue-400 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
