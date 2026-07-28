import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, Sparkles, Target, Compass, HeartHandshake } from 'lucide-react';

export default function About() {
  const education = [
    {
      degree: 'B.Tech Artificial Intelligence & Data Science',
      percentage: '73%',
      year: '2021 - 2025',
      school: 'Muthayammal Engineering College (Autonomous), Rasipuram',
      desc: 'Focused on deep learning models, data science pipelines, database structures, and advanced mathematical concepts. Developed multiple front-end applications integrating intelligence concepts.',
    },
    {
      degree: 'HSC (Higher Secondary Certificate)',
      percentage: '85.8%',
      year: '2019 - 2021',
      school: 'Kongu Vellalar Matric Higher Secondary School, Perundurai',
      desc: 'Completed secondary education with specialized courses in Mathematics, Physics, Chemistry, and Computer Science.',
    },
    {
      degree: 'SSLC (Secondary School Leaving Certificate)',
      percentage: '76.4%',
      year: '2018 - 2019',
      school: 'Kongu Vellalar Matric Higher Secondary School, Perundurai',
      desc: 'Foundational general education in science, mathematics, and computing.',
    },
  ];

  const personalSkills = [
    { name: 'Visual UI/UX Design', level: 95, icon: Sparkles },
    { name: 'Teamwork & Collaboration', level: 90, icon: HeartHandshake },
    { name: 'Problem Solving & AI Logic', level: 90, icon: Target },
    { name: 'User Research & Prototyping', level: 88, icon: Compass },
    { name: 'Professional Dedication', level: 96, icon: Award },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/40 dark:bg-darkCard/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full glow-orb-violet -z-10 animate-float-slow opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Biography &amp; Background
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mt-4 mb-4"
          >
            About <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Objective & Personal Qualities */}
          <div className="lg:col-span-5 flex flex-col text-left space-y-8">
            
            {/* Objective Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariants}
              className="p-8 rounded-3xl glass-panel-strong border border-white/50 dark:border-white/10 relative group hover:shadow-glow-indigo transition-all duration-500"
            >
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-b-full"></div>
              
              <h3 className="font-sora font-bold text-2xl text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-500">
                  <Target size={22} />
                </span>
                Career Objective
              </h3>

              <p className="font-inter text-slate-700 dark:text-slate-300 leading-relaxed italic text-sm md:text-base mb-4 border-l-2 border-indigo-500/40 pl-4 py-1">
                "I am seeking a competitive and challenging environment where I can serve your organization and establish a career for myself."
              </p>

              <p className="font-inter text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Combining a technical background in Artificial Intelligence &amp; Data Science with hands-on UI/UX design experience, I translate raw technical capabilities into polished, human-centered web solutions.
              </p>
            </motion.div>

            {/* Personal Qualities Progress Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={cardVariants}
              className="p-8 rounded-3xl neo-box-out bg-white dark:bg-darkCard border border-slate-200/60 dark:border-white/5"
            >
              <h3 className="font-sora font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center justify-between">
                <span>Core Strengths</span>
                <span className="text-xs font-outfit font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
                  Self Evaluated
                </span>
              </h3>

              <div className="space-y-6">
                {personalSkills.map((skill) => {
                  const IconComp = skill.icon;
                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        <span className="flex items-center gap-2">
                          <IconComp size={16} className="text-indigo-500" />
                          {skill.name}
                        </span>
                        <span className="text-indigo-600 dark:text-emerald-400 font-sora font-bold text-xs">{skill.level}%</span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="h-3 w-full rounded-full bg-slate-200/80 dark:bg-slate-950 p-0.5 border border-slate-300/10 shadow-inner">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 shadow-sm"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Column 2: Education History Timeline */}
          <div className="lg:col-span-7 flex flex-col text-left justify-start">
            <div className="flex items-center justify-between mb-8 px-2">
              <h3 className="font-sora font-bold text-2xl text-slate-900 dark:text-white">
                Education Journey
              </h3>
              <span className="font-outfit text-xs font-semibold px-3 py-1 rounded-full bg-slate-200/60 dark:bg-darkCard text-slate-500 border border-slate-300/40 dark:border-white/5">
                2018 - 2025
              </span>
            </div>

            <div className="relative border-l-2 border-indigo-500/30 dark:border-indigo-500/20 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={cardVariants}
                  className="relative group"
                >
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-10 h-10 rounded-2xl bg-white dark:bg-darkCard border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 text-indigo-500">
                    <GraduationCap size={18} />
                  </span>

                  <div className="p-7 rounded-3xl glass-panel-strong hover:shadow-xl transition-all duration-300 border border-white/40 dark:border-white/5 relative">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h4 className="font-sora font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-emerald-400 transition-colors">
                        {item.degree}
                      </h4>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-outfit text-xs font-semibold shrink-0">
                        <Calendar size={13} />
                        {item.year}
                      </div>
                    </div>
                    
                    <div className="font-outfit text-slate-700 dark:text-slate-300 font-medium text-sm mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>{item.school}</span>
                    </div>

                    <p className="font-inter text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-sora font-bold text-xs">
                      <Award size={13} />
                      Score: {item.percentage}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications Block */}
            <div className="mt-12">
              <h4 className="font-sora font-bold text-xl text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                <Award className="text-emerald-500" size={20} />
                <span>Professional Certifications</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl glass-panel-strong border border-white/40 dark:border-white/5 hover:border-indigo-500/30 transition-all">
                  <span className="font-outfit text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-md">
                    GOOGLE
                  </span>
                  <h5 className="font-sora font-bold text-base text-slate-900 dark:text-white mt-2">
                    Introduction to Generative AI
                  </h5>
                  <p className="font-outfit text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Issued January 2025
                  </p>
                </div>

                <div className="p-5 rounded-2xl glass-panel-strong border border-white/40 dark:border-white/5 hover:border-indigo-500/30 transition-all">
                  <span className="font-outfit text-[10px] font-bold uppercase tracking-wider text-indigo-500 bg-indigo-500/10 px-2.5 py-0.5 rounded-md">
                    EDUCBA
                  </span>
                  <h5 className="font-sora font-bold text-base text-slate-900 dark:text-white mt-2">
                    Photoshop Beginners
                  </h5>
                  <p className="font-outfit text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Issued September 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

