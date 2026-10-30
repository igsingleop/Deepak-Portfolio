import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Eye, X, Tag } from 'lucide-react';
import TiltCard from './3DTiltCard';

export default function WorkPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web Dev', 'UI/UX', 'Marketing', 'Content'];

  const projects = [
    {
      id: 1,
      title: 'Aura SaaS Dashboard & Analytics',
      category: 'Web Dev',
      tag: 'Full Stack App',
      description: 'A futuristic analytics platform for AI SaaS startups with real-time charts and dark glassmorphic UI.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
      metrics: '340% increase in user retention',
      link: '#',
    },
    {
      id: 2,
      title: 'Kinetix Mobile Fitness App UI',
      category: 'UI/UX',
      tag: 'Figma System',
      description: 'Complete mobile design system & interactive Figma prototype for an AI-powered fitness workout planner.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
      tags: ['Figma', 'UI/UX Design', 'Design System', 'Prototyping'],
      metrics: 'Over 120+ components built',
      link: '#',
    },
    {
      id: 3,
      title: 'HyperGrowth Meta Ads & Funnel',
      category: 'Marketing',
      tag: 'Growth Campaign',
      description: 'Targeted ad campaign strategy & high-converting landing page for a B2B SaaS startup launch.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['Meta Ads', 'SEO', 'Conversion Funnel', 'Copywriting'],
      metrics: '4.8x ROI within 30 days',
      link: '#',
    },
    {
      id: 4,
      title: 'NeoCraft E-Commerce Platform',
      category: 'Web Dev',
      tag: 'Next.js App',
      description: 'Headless e-commerce store with instant product search, micro-animations, and Stripe payment integration.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Tailwind', 'Stripe', 'Framer Motion'],
      metrics: 'Sub-second page load times',
      link: '#',
    },
    {
      id: 5,
      title: 'Pulse Brand Identity & Social Reels',
      category: 'Content',
      tag: 'Brand Media',
      description: 'End-to-end content production including motion graphics, social carousels, and high-converting video scripts.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      tags: ['Content Strategy', 'Social Assets', 'Video Editing', 'Branding'],
      metrics: '1.2M+ total impressions',
      link: '#',
    },
    {
      id: 6,
      title: 'FinTech Capital Portal',
      category: 'UI/UX',
      tag: 'Web Dashboard',
      description: 'Minimalist web dashboard designed for institutional investment management and asset tracking.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      tags: ['UI/UX', 'Figma', 'Fintech', 'Design System'],
      metrics: 'Adopted by 15+ fund managers',
      link: '#',
    },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#FFFDFB] dark:bg-[#181614]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-space font-semibold tracking-widest text-[#ED7751] uppercase"
          >
            SELECTED CLIENT WORK
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-5xl font-extrabold font-space text-[#2B2926] dark:text-[#FFFDFB]"
          >
            Crafted for <span className="gradient-text-coral">Growth & Scale</span>
          </motion.h2>

          <p className="mt-4 text-base text-[#6B6862] dark:text-[#FFFDFB]/75">
            Explore our recent client deliverables across engineering, design, marketing, and content strategy.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-space text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#ED7751] text-[#FFFDFB] shadow-coral-sm'
                  : 'glass-card text-[#6B6862] dark:text-[#FFFDFB]/70 hover:text-[#ED7751] border border-[#ED7751]/15'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="h-full">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group relative h-full rounded-3xl overflow-hidden glass-card border border-[#ED7751]/15 hover:border-[#ED7751]/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
                  >
                    {/* Image & Overlay */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2B2926] via-[#2B2926]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                        <span className="px-3 py-1 rounded-full bg-[#FFFDFB]/90 dark:bg-[#181614]/90 backdrop-blur-md text-[#ED7751] text-xs font-space font-semibold shadow-sm">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#ED7751] text-[#FFFDFB] text-xs font-space font-medium shadow-sm">
                          {project.tag}
                        </span>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#ED7751]/20 backdrop-blur-sm">
                        <span className="px-6 py-2.5 rounded-full bg-[#FFFDFB] text-[#2B2926] font-space font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg group-hover:scale-105 transition-transform">
                          <Eye className="w-4 h-4 text-[#ED7751]" />
                          <span>View Project</span>
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB] group-hover:text-[#ED7751] transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs sm:text-sm text-[#6B6862] dark:text-[#FFFDFB]/70 line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech Tags */}
                      <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#ED7751]/10">
                        {project.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-[#FBEAE3] dark:bg-[#2A2623] text-[#6B6862] dark:text-[#FFFDFB]/75 text-[11px] font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#2B2926]/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl glass-card bg-[#FFFDFB] dark:bg-[#201D1A] border border-[#ED7751]/30 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#6B6862] hover:text-[#ED7751] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-[#FBEAE3] text-[#ED7751] font-space text-xs font-bold">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-[#6B6862] font-mono">
                  {selectedProject.metrics}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB]">
                {selectedProject.title}
              </h3>

              <p className="mt-4 text-sm text-[#6B6862] dark:text-[#FFFDFB]/80 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ED7751] mb-2">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#FBEAE3] dark:bg-[#2A2623] text-[#2B2926] dark:text-[#FFFDFB] text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 rounded-xl bg-[#ED7751] text-[#FFFDFB] font-space font-semibold text-center shadow-coral-sm hover:bg-[#D9603B] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Build Similar Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
