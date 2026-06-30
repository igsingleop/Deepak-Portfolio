import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Briefcase,
  Calendar,
  CheckCircle2,
  X,
  Sparkles,
  Clock,
  ArrowUpRight,
  Folder,
  User,
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import Magnetic from './Magnetic';

const categories = ['All', 'UI/UX Design', 'Web Apps', 'AI & Data'];

const clientProjects = [
  {
    id: 1,
    title: 'Univally',
    client: 'Univally EdTech Startup',
    category: 'UI/UX Design',
    duration: 'Feb 2025 - Jun 2025',
    summary: 'Redesigned the entire student onboarding and course tracking dashboard to enhance course discovery and dashboard interaction.',
    description: 'Developed high-fidelity prototypes and modern interfaces for a fast-growing educational platform. The main challenge was to display heavy curriculum metadata without cluttering the screen. We implemented a clean, responsive bento-grid dashboard layout with custom widgets.',
    bullets: [
      'Mapped client concepts into functional user wireframes and design structures.',
      'Designed interactive prototyping pathways to simulate student dashboards in Figma.',
      'Conducted user testing evaluations to refine visual layouts and core dashboard elements.',
      'Designed a structured 3-step student onboarding wizard that increased completions.'
    ],
    impact: '35% reduction in onboarding drop-offs & 4.8/5 student review score.',
    stats: { primary: '35% Drop-off Reduction', secondary: '4.8/5 Rating' },
    tags: ['Figma Prototyping', 'UI/UX Design', 'Bento Layout', 'User Testing', 'Wireframing'],
    color: 'from-emerald-500 to-teal-500',
    icon: Folder,
  },
  {
    id: 2,
    title: 'The Single Store',
    client: 'E-Commerce Platform',
    category: 'UI/UX Design',
    duration: 'Jul 2025 - Jan 2026',
    summary: 'Developed an interactive anomalies dashboard visualizing transactional data, flagging duplicate charges, and tracking SLAs.',
    description: 'Designed and built a real-time analytics interface to visualize banking operations transaction streams. Working in an SLA-driven BPS operation at Hexaware, I bridged operational workflow requirements with an interactive visualization platform to replace manual audits.',
    bullets: [
      'Utilized analytical tools to clean, analyze, and process transaction data.',
      'Built custom widgets showing real-time transaction speeds and bottleneck points.',
      'Implemented customizable filters for viewing transactional irregularities and duplicate entries.',
      'Automated standard reporting steps saving substantial monthly operational audit times.'
    ],
    impact: 'Automated 20+ hours of monthly manual data audits and ensured 99.8% SLA adherence.',
    stats: { primary: '20+ Hrs Audits Saved/mo', secondary: '99.8% SLA Adherence' },
    tags: ['Data Operations', 'SLA Management', 'React.js', 'Chart.js', 'Excel Analytics'],
    color: 'from-blue-500 to-indigo-500',
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'Apex Logistics Router',
    client: 'Apex Logistics Corp',
    category: 'Web Apps',
    duration: '3 Months Contract',
    summary: 'A responsive full-stack dispatch portal optimizing routes, driver tracking, and instant delivery notifications.',
    description: 'A full-stack dispatching portal built for local delivery managers. Integrated navigation map services and dynamic driver state timelines to reduce routes latency. Features live dispatch adjustments, status feeds, and full dark/light mode compatibility.',
    bullets: [
      'Implemented real-time geolocation status reporting for delivery vans.',
      'Designed a responsive mobile dashboard for drivers to update delivery reports on-the-go.',
      'Developed clean administrative dashboard panels for route mapping and scheduling.',
      'Created custom notification templates sent on immediate delivery status updates.'
    ],
    impact: '15% reduction in overall route delivery delays and improved dispatcher workflow.',
    stats: { primary: '15% Delay Reduction', secondary: '120+ Daily Drivers' },
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'API Integration', 'Map Services'],
    color: 'from-purple-500 to-indigo-500',
    icon: Briefcase,
  },
  {
    id: 4,
    title: 'EcoSphere E-Commerce',
    client: 'EcoSphere Sustainable Goods',
    category: 'Web Apps',
    duration: '4 Months Contract',
    summary: 'A mobile-first sustainable products e-commerce store focusing on micro-interactions and carbon footprint calculators.',
    description: 'Designed and built a fluid web shop focusing on interactive storytelling. The client wanted the website to show their commitment to sustainability. I integrated a dynamic React widget that estimates carbon emission offsets during the cart checkout checkout phase.',
    bullets: [
      'Designed dynamic shopping cart sliding drawers with micro-animations.',
      'Built a custom Carbon Footprint calculator widget that displays eco-savings in real time.',
      'Optimized loading times for image assets, enhancing core web vital indicators.',
      'Integrated payment gateways with clear styling for success and invoice screens.'
    ],
    impact: '22% increase in visitor checkout conversion rate and 150ms faster average load times.',
    stats: { primary: '22% Conversion Boost', secondary: '150ms Faster Loads' },
    tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Shopify API', 'Performance Opt'],
    color: 'from-teal-500 to-emerald-600',
    icon: Sparkles,
  }
];

export default function WorkPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? clientProjects
    : clientProjects.filter(p => p.category === activeCategory);

  // Animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: { duration: 0.25 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.1 } }
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-white/30 dark:bg-darkBg/20">
      {/* Background glowing orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full glow-orb-teal -z-10 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full">
              Client Showcase
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sora font-extrabold text-3xl md:text-4xl text-slate-800 dark:text-white mt-4 mb-4"
          >
            Work <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Portfolio</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-emerald-500 mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-inter text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed"
          >
            A compilation of professional client engagements, detailing real impact, user experience redesigns, and data-driven applications.
          </motion.p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-200/50 dark:bg-slate-800/40 border border-slate-300/20 dark:border-white/5 backdrop-blur-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-xl font-outfit text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-white dark:bg-slate-950 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-800/50 z-0"
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedProject(project)}
                  className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/20 dark:border-white/5 hover:border-emerald-500/30 dark:hover:border-emerald-500/20 hover:shadow-glass-emerald transition-all duration-300 cursor-pointer group text-left flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <span className={`p-2.5 rounded-2xl bg-gradient-to-br ${project.color} text-white shadow-sm`}>
                          <ProjectIcon size={18} />
                        </span>
                        <div>
                          <span className="font-outfit text-[11px] font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400">
                            {project.category}
                          </span>
                          <h3 className="font-sora font-extrabold text-xl text-slate-800 dark:text-white mt-0.5 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <span className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        <ArrowUpRight size={14} />
                      </span>
                    </div>

                    <p className="font-inter text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Stats Highlights */}
                    <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/20 dark:border-white/5 mb-6 flex justify-between items-center">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <TrendingUp size={14} />
                        <span>{project.stats.primary}</span>
                      </div>
                      <div className="text-[10px] font-outfit text-slate-400 font-medium">
                        {project.duration}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-outfit text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-200/50 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-300/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="font-outfit text-[10px] font-semibold px-2 py-1 text-slate-400">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Expandable Project Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/60 dark:bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Box */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-darkCard border border-slate-200 dark:border-white/10 shadow-2xl relative scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Banner Cover */}
              <div className={`h-4 bg-gradient-to-r ${selectedProject.color}`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-all shadow-sm border border-slate-200/20"
                aria-label="Close details"
              >
                <X size={18} />
              </button>

              <div className="p-6 sm:p-10 text-left">

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="font-outfit text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg">
                    {selectedProject.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-outfit">
                    <Clock size={12} />
                    <span>{selectedProject.duration}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <div className="font-outfit text-base text-slate-500 dark:text-slate-400 flex items-center gap-2 mb-8">
                  <User size={16} className="text-emerald-500" />
                  <span>Client: <strong>{selectedProject.client}</strong></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8">
                  {/* Detailed Description */}
                  <div className="md:col-span-8 space-y-6">
                    <div>
                      <h4 className="font-sora font-bold text-sm text-slate-400 uppercase tracking-wider mb-2">Project Overview</h4>
                      <p className="font-inter text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-sora font-bold text-sm text-slate-400 uppercase tracking-wider mb-3">Key Contributions & Scope</h4>
                      <ul className="space-y-3.5">
                        {selectedProject.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="mt-1 text-emerald-500 shrink-0">
                              <CheckCircle2 size={16} />
                            </span>
                            <span className="font-inter text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Impact & Meta Sidebar */}
                  <div className="md:col-span-4 space-y-6">
                    <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-slate-800 dark:text-white">
                      <h4 className="font-sora font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-3">
                        <TrendingUp size={16} />
                        Measurable Impact
                      </h4>
                      <p className="font-inter text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                        {selectedProject.impact}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80">
                      <h4 className="font-sora font-bold text-xs text-slate-400 uppercase tracking-wider mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-outfit text-xs font-semibold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-800/80 mb-6"></div>

                {/* Footer close button option */}
                <div className="flex justify-end">
                  <Magnetic>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-outfit text-sm font-semibold transition-all"
                    >
                      Close details
                    </button>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
