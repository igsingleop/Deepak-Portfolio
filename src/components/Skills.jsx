import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShieldCheck, PenTool, Database, Monitor, Globe } from 'lucide-react';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const skills = [
    // Technical Skills
    { name: 'Python', category: 'tech', icon: <Code size={24} />, description: 'AI algorithms, scripting, and basic automation.' },
    { name: 'Java', category: 'tech', icon: <Code size={24} />, description: 'Object-oriented programming, data structures.' },
    { name: 'HTML5', category: 'tech', icon: <Globe size={24} />, description: 'Semantic structure for responsive web platforms.' },
    { name: 'CSS3', category: 'tech', icon: <PenTool size={24} />, description: 'Advanced styles, responsive designs, keyframe animations.' },
    { name: 'SQL', category: 'tech', icon: <Database size={24} />, description: 'Database design, query writing, relationships, and sorting.' },
    { name: 'JavaScript', category: 'tech', icon: <Code size={24} />, description: 'Interactive elements, DOM manipulation, asynchronous actions.' },
    { name: 'React.JS', category: 'tech', icon: <Monitor size={24} />, description: 'Component building, hooks, modern virtual DOM setups.', highlighted: true },

    // Tools
    { name: 'Figma', category: 'design', icon: <PenTool size={24} />, description: 'Collaborative UI design, interactive prototyping, and component libraries.', highlighted: true, badge: 'Expert' },
    { name: 'Sketch', category: 'design', icon: <PenTool size={24} />, description: 'Vector graphic design and layouts for macOS interfaces.' },
    { name: 'Figjam', category: 'design', icon: <PenTool size={24} />, description: 'Brainstorming, flowcharts, mapping out design concepts.' },
    { name: 'Adobe Creative Suite', category: 'design', icon: <PenTool size={24} />, description: 'Photoshop, Illustrator, asset preparation, and editing.' },
    { name: 'Webflow', category: 'design', icon: <Globe size={24} />, description: 'No-code web development, layout construction, styling layers.' },
    { name: 'UserTesting', category: 'design', icon: <ShieldCheck size={24} />, description: 'Gathering feedback, tracking heatmaps, user research sessions.' },
  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] rounded-full glow-orb-cyan -z-10 animate-float-medium"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sora font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white mb-4">
            Skills &amp; <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Tools</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Neomorphic Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-200/50 dark:bg-slate-800/40 p-1.5 rounded-full backdrop-blur-sm border border-slate-300/20 dark:border-white/5 shadow-inner">
            {['all', 'tech', 'design'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`font-outfit text-sm font-semibold px-6 py-2 rounded-full capitalize transition-all duration-300 ${filter === tab
                    ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm border border-slate-200/50 dark:border-slate-800'
                    : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400'
                  }`}
              >
                {tab === 'all' ? 'All Skills' : tab === 'tech' ? 'Technical Skills' : 'Design Tools'}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-3xl transition-all duration-300 group hover-lift relative ${skill.highlighted
                    ? 'glass-panel-strong border-cyan-500/30 shadow-glass-cyan'
                    : 'glass-panel border-white/20 dark:border-white/5'
                  }`}
              >
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />

                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-2xl ${skill.highlighted ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  {skill.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[10px] font-sora font-extrabold uppercase tracking-wide shadow-sm">
                      {skill.badge}
                    </span>
                  )}
                  {skill.name === 'React.JS' && (
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500 text-white text-[10px] font-sora font-extrabold uppercase tracking-wide animate-pulse">
                      Core
                    </span>
                  )}
                </div>

                <h3 className="font-sora font-bold text-lg text-slate-800 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="font-inter text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
