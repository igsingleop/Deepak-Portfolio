import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Calendar, Award, Sparkles, Target, Compass, HeartHandshake } from 'lucide-react';

export default function About() {
  const educationRef = useRef(null);
  const logo1Ref = useRef(null);
  const logo3Ref = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: educationRef,
    offset: ["start 75%", "end 50%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const updateLineHeight = () => {
      if (logo1Ref.current && logo3Ref.current) {
        const rect1 = logo1Ref.current.getBoundingClientRect();
        const rect3 = logo3Ref.current.getBoundingClientRect();
        // Distance from bottom of Logo 1 to top of Logo 3
        const distance = rect3.top - rect1.bottom;
        if (distance > 0) {
          setLineHeight(distance);
        }
      }
    };

    updateLineHeight();
    const timer = setTimeout(updateLineHeight, 200);
    window.addEventListener('resize', updateLineHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateLineHeight);
    };
  }, []);

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
    <section id="about" className="py-28 relative overflow-hidden bg-slate-100/40 dark:bg-darkCard/20">
      {/* Seamless Top Blend Overlay from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-lightBg via-slate-100/20 to-transparent dark:from-darkBg dark:via-darkCard/10 dark:to-transparent pointer-events-none z-10" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[140px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-400/10 rounded-full blur-[90px] pointer-events-none -z-10" />

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
              Personal Overview
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mt-4 mb-4"
          >
            About <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">Me</span> & Qualifications
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto rounded-full"
          />
        </div>

        {/* 2-Column Grid: Skills Radar & Education History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Core Professional Strengths */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h3 className="font-sora font-bold text-2xl text-slate-900 dark:text-white mb-6 text-left">
              Professional Attributes
            </h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
              }}
              className="p-7 sm:p-8 rounded-3xl glass-panel-strong border border-white/50 dark:border-white/10 relative space-y-6 text-left shadow-xl"
            >
              <div className="space-y-6">
                {personalSkills.map((skill, idx) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center font-outfit text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <div className="flex items-center gap-2.5">
                          <span className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                            <IconComponent size={16} />
                          </span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-sora text-xs font-bold text-indigo-600 dark:text-emerald-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar Track */}
                      <div className="h-2 w-full bg-slate-200/80 dark:bg-slate-900 rounded-full overflow-hidden neo-box-in">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-full"
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

            <div ref={educationRef} className="relative pl-12 sm:pl-16 space-y-8">
              {/* Single Continuous Scroll-Driven Line starting from bottom edge of Logo 1 to top edge of Logo 3 */}
              <motion.div
                className="absolute left-[18px] top-[56px] w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-emerald-400 rounded-full origin-top shadow-[0_0_12px_rgba(99,102,241,0.7)] z-10"
                style={{
                  scaleY,
                  height: lineHeight ? `${lineHeight}px` : 'calc(100% - 220px)',
                  willChange: 'transform'
                }}
              />

              {education.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={cardVariants}
                  className="relative group"
                >
                  {/* Timeline Node Logo Dot */}
                  <span
                    ref={idx === 0 ? logo1Ref : idx === 2 ? logo3Ref : null}
                    className="absolute -left-[48px] sm:-left-[64px] top-4 w-10 h-10 rounded-2xl bg-white dark:bg-[#0D111A] border-2 border-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 z-20 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 text-indigo-500"
                  >
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
