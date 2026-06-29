import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Executive',
      company: 'Hexaware Technologies BPS',
      duration: 'July 2025 - January 2026',
      type: 'Full-time',
      bullets: [
        'Managed business operations and executed structured information workflows.',
        'Collaborated with global teams to streamline process delivery and reporting.',
        'Utilized analytical tools to clean, analyze, and process client transaction data.',
        'Honed rapid problem-solving capabilities under SLA-driven operations.'
      ],
      tags: ['Data Operations', 'SLA Management', 'Teamwork', 'Excel Analysis', 'Hexaware'],
    },
    {
      role: 'Freelance UI Designer',
      company: 'Univally',
      duration: 'February 2025 - June 2025',
      type: 'Freelance',
      bullets: [
        'Designed high-fidelity web and mobile user interfaces using Figma and Sketch.',
        'Created interactive prototyping pathways to simulate application UX flow.',
        'Mapped client concepts into functional user wireframes and design structures.',
        'Conducted user testing evaluations to refine visual layouts and components.'
      ],
      tags: ['Figma Prototyping', 'UI/UX Design', 'Sketch App', 'User Testing', 'Wireframing'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
      {/* Background Orbs */}
      <div className="absolute left-10 top-1/3 w-[300px] h-[300px] rounded-full glow-orb-indigo -z-10 animate-float-slow"></div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white mb-4">
            Work <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.15 }}
              className="p-8 md:p-10 rounded-3xl glass-panel hover:neo-box-in transition-all duration-300 border border-white/20 dark:border-white/5 relative"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-full"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Briefcase size={16} />
                    </span>
                    <span className="font-outfit text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-sora font-extrabold text-2xl text-slate-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="font-outfit text-lg text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-outfit text-sm font-semibold text-slate-600 dark:text-slate-300 w-fit neo-box-out">
                  <Calendar size={14} className="text-emerald-500" />
                  {exp.duration}
                </div>
              </div>

              {/* Responsibilities */}
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
              <div className="flex flex-wrap gap-2.5 border-t border-slate-200 dark:border-slate-800/50 pt-6">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-outfit text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800/80"
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
