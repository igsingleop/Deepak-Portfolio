import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Front-End Developer',
      company: 'Carrezza Global Solutions Pvt Ltd',
      duration: 'February 2025 - Present',
      type: 'Full-time',
      location: 'Global Web Solutions',
      bullets: [
        'Developing modern, responsive web application interfaces using React.js, JavaScript (ES6+), and Tailwind CSS.',
        'Transforming design concepts and wireframes into high-performance, user-centered front-end experiences.',
        'Optimizing component reusability, web page loading performance, and cross-browser responsive layouts.',
        'Executing quality control (QC) & asset verification for smooth digital application deployment.'
      ],
      tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Front-End Development', 'QC & Verification', 'Carrezza'],
    },
    {
      role: 'Process Executive',
      company: 'Hexaware Technologies',
      duration: 'July 2025 - January 2026',
      type: 'Full-time',
      location: 'Hexaware BPS Operations',
      bullets: [
        'Managed content operations, digital supply chain workflows, and media publishing under strict SLA guidelines.',
        'Executed quality control (QC) & asset verification for high-volume client data and transaction reporting.',
        'Handled service level agreement (SLA) management, risk management & escalation protocols, and reporting.',
        'Verified video formats & encoding standards, data analysis, and operational reporting streams.'
      ],
      tags: ['Content Operations', 'Quality Control (QC)', 'SLA Management', 'Digital Supply Chain', 'Data Analysis', 'Hexaware'],
    },
    {
      role: 'Freelance UI Developer',
      company: 'Univally',
      duration: 'February 2025 - June 2025',
      type: 'Freelance',
      location: 'EdTech Startup',
      bullets: [
        'Designed high-fidelity web and mobile user interfaces using Figma, Sketch App, and modern web frameworks.',
        'Created interactive prototyping pathways, wireframes, and responsive dashboard design layouts.',
        'Conducted user research, heatmaps tracking, and usability evaluations to refine interface components.',
        'Managed asset preparation, image editing software workflows, and user testing evaluations.'
      ],
      tags: ['Figma Prototyping', 'UI Development', 'Wireframing', 'User Testing', 'Image Editing', 'Univally'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-100/40 dark:bg-darkCard/20">
      {/* Background Orbs */}
      <div className="absolute left-10 top-1/3 w-[350px] h-[350px] rounded-full glow-orb-indigo -z-10 animate-float-slow opacity-60"></div>
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] rounded-full glow-orb-emerald -z-10 animate-pulse-glow opacity-50"></div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Career Timeline
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mt-4 mb-4"
          >
            Professional <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto rounded-full"
          />
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="p-7 sm:p-10 rounded-3xl glass-panel-strong hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-white/10 relative group"
            >
              {/* Glowing Highlight bar */}
              <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 rounded-b-full"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                      <Briefcase size={18} />
                    </span>
                    <span className="font-outfit text-xs font-bold px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-900 text-slate-700 dark:text-slate-300">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-sora font-extrabold text-2xl text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="font-outfit text-lg text-indigo-600 dark:text-emerald-400 font-semibold mt-1 flex items-center gap-2">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-outfit text-xs font-bold text-slate-700 dark:text-slate-300 w-fit neo-box-out">
                  <Calendar size={14} className="text-emerald-500" />
                  {exp.duration}
                </div>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3.5 mb-8 text-left">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3">
                    <span className="mt-1 text-emerald-500 shrink-0">
                      <CheckCircle2 size={16} />
                    </span>
                    <span className="font-inter text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/60 dark:border-slate-800">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-outfit text-xs font-semibold px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

