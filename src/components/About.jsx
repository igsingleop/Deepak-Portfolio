import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'B.Tech Artificial Intelligence and Data Science',
      percentage: '73%',
      year: '2025',
      school: 'Muthayammal Engineering College (Autonomous), Rasipuram',
      desc: 'Focused on deep learning models, data science pipelines, database structures, and advanced mathematical concepts. Developed multiple front-end applications integrating intelligence concepts.',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      percentage: '85.8%',
      year: '2021',
      school: 'Kongu Vellalar Matric Higher Secondary School, Perundurai',
      desc: 'Completed secondary education with specialized courses in Mathematics, Physics, Chemistry, and Computer Science.',
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      percentage: '76.4%',
      year: '2019',
      school: 'Kongu Vellalar Matric Higher Secondary School, Perundurai',
      desc: 'Foundational general education in science, mathematics, and computing.',
    },
  ];

  const personalSkills = [
    { name: 'Teamwork', level: 90 },
    { name: 'Visual Design', level: 95 },
    { name: 'Creativity', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Dedication', level: 95 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Bio & Personal Skills */}
          <div className="lg:col-span-5 flex flex-col text-left justify-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-3xl glass-panel shadow-lg border border-white/20 dark:border-white/5 mb-8"
            >
              <h3 className="font-sora font-bold text-2xl text-slate-800 dark:text-white mb-4">
                My Objective
              </h3>
              <p className="font-inter text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                "I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself."
              </p>
              <p className="font-inter text-slate-600 dark:text-slate-400 leading-relaxed">
                As a graduate in Artificial Intelligence and Data Science combined with hands-on UI/UX design experience, I bridge the gap between back-end data complexity and visual front-end interfaces.
              </p>
            </motion.div>

            {/* Personal Skills */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-3xl neo-box-out bg-white dark:bg-darkCard border border-white/30 dark:border-white/5"
            >
              <h3 className="font-sora font-bold text-xl text-slate-800 dark:text-white mb-6">
                Personal Qualities
              </h3>
              <div className="space-y-5">
                {personalSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      <span>{skill.name}</span>
                      <span className="text-cyan-500">{skill.level}%</span>
                    </div>
                    {/* Neomorphic Progress Bar */}
                    <div className="h-3.5 w-full rounded-full bg-slate-200 dark:bg-slate-900/60 p-0.5 border border-slate-300/10 shadow-inner">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Education Timeline */}
          <div className="lg:col-span-7 flex flex-col text-left justify-start">
            <h3 className="font-sora font-bold text-2xl text-slate-800 dark:text-white mb-8 px-2">
              Education History
            </h3>
            
            <div className="relative border-l-2 border-cyan-500/30 dark:border-cyan-500/15 ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={cardVariants}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[40px] sm:-left-[48px] top-1.5 w-8 h-8 rounded-full bg-lightBg dark:bg-darkBg border-2 border-cyan-500 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                    <GraduationCap size={14} className="text-cyan-500" />
                  </span>

                  <div className="p-6 md:p-8 rounded-3xl glass-panel-strong hover:neo-box-in transition-all duration-300 border border-white/20 dark:border-white/5 relative">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                      <h4 className="font-sora font-bold text-lg text-slate-800 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {item.degree}
                      </h4>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-outfit text-xs font-semibold">
                        <Calendar size={12} />
                        {item.year}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 font-outfit text-slate-700 dark:text-slate-300 font-medium mb-3">
                      <span>{item.school}</span>
                    </div>

                    <p className="font-inter text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="inline-flex items-center gap-1 text-xs font-sora font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                      <Award size={12} />
                      Score: {item.percentage}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
