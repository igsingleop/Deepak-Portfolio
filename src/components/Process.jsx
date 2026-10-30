import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code, Rocket, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      icon: Search,
      subtitle: 'Requirements & Growth Strategy',
      desc: 'We analyze your business goals, target audience, technical needs, and market opportunities to define a clear roadmap.',
    },
    {
      num: '02',
      title: 'Design',
      icon: Compass,
      subtitle: 'UX Wireframing & Visual UI',
      desc: 'We craft high-fidelity Figma prototypes, design tokens, and interactive user journeys tailored to your brand identity.',
    },
    {
      num: '03',
      title: 'Develop',
      icon: Code,
      subtitle: 'Production Code & Optimization',
      desc: 'We build clean, responsive, high-performance web apps with modern tech stacks, seamless APIs, and rigorous QA.',
    },
    {
      num: '04',
      title: 'Deliver',
      icon: Rocket,
      subtitle: 'Deployment & Growth Support',
      desc: 'We deploy to production, verify search indexing & security, and provide dedicated post-launch maintenance.',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#F5F3F0]/60 dark:bg-[#181614]">
      {/* Background Coral Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 glow-orb-coral opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-space font-semibold tracking-widest text-[#ED7751] uppercase"
          >
            HOW WE WORK
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-5xl font-extrabold font-space text-[#2B2926] dark:text-[#FFFDFB]"
          >
            Our Streamlined <span className="gradient-text-coral">4-Step Process</span>
          </motion.h2>

          <p className="mt-4 text-base text-[#6B6862] dark:text-[#FFFDFB]/75">
            Transparent milestones, fast feedback loops, and zero surprises from concept to deployment.
          </p>
        </div>

        {/* Timeline Desktop & Mobile */}
        <div className="relative">
          {/* Animated Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-[#FBEAE3] dark:bg-[#2A2623] -translate-y-1/2 rounded-full overflow-hidden z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-[#ED7751] via-[#D9603B] to-[#ED7751] origin-left rounded-full"
            />
          </div>

          {/* Animated Mobile Vertical Line */}
          <div className="lg:hidden absolute top-8 bottom-8 left-8 w-1 bg-[#FBEAE3] dark:bg-[#2A2623] rounded-full overflow-hidden z-0">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-[#ED7751] via-[#D9603B] to-[#ED7751] origin-top rounded-full"
            />
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex lg:flex-col items-start gap-6 lg:gap-4 pl-14 lg:pl-0"
                >
                  {/* Step Node Circle */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#FFFDFB] dark:bg-[#201D1A] border-2 border-[#ED7751] shadow-coral-sm flex items-center justify-center text-[#ED7751] font-space font-extrabold text-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-3 -right-3 px-2 py-0.5 rounded-full bg-[#ED7751] text-[#FFFDFB] font-mono text-[10px] font-bold">
                      {step.num}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="glass-card p-6 rounded-3xl border border-[#ED7751]/15 w-full hover:border-[#ED7751]/40 transition-all duration-300">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#ED7751] mb-1 font-space">
                      Step {step.num}
                    </div>
                    <h3 className="text-xl font-bold font-space text-[#2B2926] dark:text-[#FFFDFB]">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#6B6862] dark:text-[#FFFDFB]/75 mt-1">
                      {step.subtitle}
                    </div>
                    <p className="mt-3 text-xs sm:text-sm text-[#6B6862] dark:text-[#FFFDFB]/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
