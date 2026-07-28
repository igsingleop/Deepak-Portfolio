import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShieldCheck, PenTool, Database, Monitor, Globe, Cpu, Sparkles, Layers } from 'lucide-react';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const skills = [
    // Technical & Engineering
    { name: 'React.JS & Front-End Dev', category: 'tech', icon: <Monitor size={22} />, description: 'Component architecture, state management, hooks, and virtual DOM setups.', highlighted: true, badge: 'Core' },
    { name: 'JavaScript (ES6+) & Python', category: 'tech', icon: <Code size={22} />, description: 'Dynamic UI logic, asynchronous handling, algorithms, and web scripting.' },
    { name: 'HTML5, CSS3 & Tailwind', category: 'tech', icon: <Globe size={22} />, description: 'Semantic layout, flexbox, grid, keyframe animations, and styling design systems.' },
    { name: 'SQL & Database Systems', category: 'tech', icon: <Database size={22} />, description: 'Database schema architecture, relational queries, and data processing.' },
    { name: 'Data Analysis & Reporting', category: 'tech', icon: <Cpu size={22} />, description: 'Data processing pipelines, analytical reporting, and metrics auditing.', highlighted: true },

    // Operations & SLA
    { name: 'Content Operations & Media Publishing', category: 'operations', icon: <Layers size={22} />, description: 'Digital content publishing workflows, asset distribution, and media management.' },
    { name: 'Quality Control (QC) & Verification', category: 'operations', icon: <ShieldCheck size={22} />, description: 'Asset verification protocols, component compliance, and audit standards.', highlighted: true, badge: 'Key Skill' },
    { name: 'SLA & Risk Management', category: 'operations', icon: <ShieldCheck size={22} />, description: 'Service level agreement adherence, risk management, and escalation protocols.' },
    { name: 'Digital Supply Chain Management', category: 'operations', icon: <Globe size={22} />, description: 'Information workflows, digital asset tracking, and process delivery.' },
    { name: 'Video Formats & Encoding', category: 'operations', icon: <Sparkles size={22} />, description: 'Media encoding standards, video rendering formats, and asset processing.' },

    // Design Tools & Prototyping
    { name: 'Figma & Interactive Prototyping', category: 'design', icon: <PenTool size={22} />, description: 'High-fidelity UI design, component libraries, auto-layout, and user wireframes.', highlighted: true, badge: 'Expert' },
    { name: 'Image Editing (Photoshop/Illustrator)', category: 'design', icon: <Sparkles size={22} />, description: 'Adobe Creative Suite, Photoshop (EDUCBA Certified), vector graphic design.' },
    { name: 'Sketch App & FigJam', category: 'design', icon: <Layers size={22} />, description: 'User flow mapping, macOS interface layouts, and interactive design sprints.' },
    { name: 'Research & User Evaluation', category: 'design', icon: <ShieldCheck size={22} />, description: 'Usability evaluations, critical thinking, heatmaps, and user feedback research.' },
  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full glow-orb-emerald -z-10 animate-float-medium opacity-60"></div>
      <div className="absolute left-10 bottom-10 w-[350px] h-[350px] rounded-full glow-orb-indigo -z-10 animate-pulse-glow opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
              Technical Stack &amp; Capabilities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white mt-4 mb-4"
          >
            Hard &amp; Technical <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto rounded-full"
          />
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-200/60 dark:bg-darkCard/80 p-1.5 rounded-2xl backdrop-blur-md border border-slate-300/40 dark:border-white/10 shadow-inner flex-wrap justify-center gap-1">
            {[
              { id: 'all', label: 'All Skills' },
              { id: 'tech', label: 'Technical & Engineering' },
              { id: 'operations', label: 'Operations & SLA' },
              { id: 'design', label: 'UI/UX & Media' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`font-outfit text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-emerald-400 shadow-md border border-slate-200/50 dark:border-slate-800'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 rounded-3xl transition-all duration-300 group hover-lift relative flex flex-col justify-between ${
                  skill.highlighted
                    ? 'glass-panel-strong border-indigo-500/30 dark:border-emerald-500/30 shadow-lg shadow-indigo-500/5'
                    : 'glass-panel border-white/40 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className={`p-3 rounded-2xl ${
                      skill.highlighted
                        ? 'bg-gradient-to-br from-indigo-500 to-emerald-500 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-900 text-indigo-500 dark:text-indigo-400'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>

                    {skill.badge && (
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-sora font-extrabold uppercase tracking-wide shadow-sm ${
                        skill.badge === 'Expert'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                          : 'bg-emerald-500 text-white'
                      }`}>
                        {skill.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-sora font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="font-inter text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

