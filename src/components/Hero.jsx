import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, FolderGit2, Users, Calendar, Award } from 'lucide-react';
import LogoRingMotif from './LogoRingMotif';

function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(value, 10);
    if (start === end) return;

    const totalSteps = 40;
    const incrementTime = (duration * 1000) / totalSteps;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const stats = [
    { icon: FolderGit2, value: "50", suffix: "+", label: "Projects Completed" },
    { icon: Users, value: "35", suffix: "+", label: "Happy Clients" },
    { icon: Calendar, value: "4", suffix: "+ Years", label: "Team Experience" },
    { icon: Award, value: "99.8", suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Coral Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] glow-orb-coral opacity-70 pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] glow-orb-light opacity-50 pointer-events-none" />

      {/* Decorative Floating Logo Ring Motif */}
      <div className="absolute top-24 right-[8%] hidden lg:block opacity-25 pointer-events-none">
        <LogoRingMotif className="w-64 h-64 text-[#ED7751]" animate={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#ED7751]/20 shadow-coral-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#ED7751]" />
          <span className="text-xs sm:text-sm font-space font-medium text-[#2B2926] dark:text-[#FBEAE3]">
            Full-Suite Agency Execution • Freelance Agility
          </span>
        </motion.div>

        {/* Big Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-space leading-[1.1] max-w-5xl mx-auto text-[#2B2926] dark:text-[#FFFDFB]"
        >
          Your Freelance Team for <br className="hidden sm:inline" />
          <span className="gradient-text-coral">Digital Growth, End to End</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-base sm:text-xl text-[#6B6862] dark:text-[#FFFDFB]/80 max-w-2xl mx-auto font-inter leading-relaxed"
        >
          We engineer high-converting web applications, pixel-perfect UI/UX design, targeted growth marketing, and engaging content for ambitious startups and brands.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#ED7751] hover:bg-[#D9603B] text-[#FFFDFB] font-space font-semibold text-sm sm:text-base tracking-wide shadow-coral-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#work"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-card hover:bg-[#FBEAE3]/40 dark:hover:bg-[#201D1A]/80 text-[#2B2926] dark:text-[#FFFDFB] font-space font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border border-[#ED7751]/20"
          >
            <span>View Work</span>
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 rounded-2xl border border-[#ED7751]/15 text-center group hover:border-[#ED7751]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-[#FBEAE3] dark:bg-[#2B2926] flex items-center justify-center text-[#ED7751]">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold font-space text-[#2B2926] dark:text-[#FFFDFB]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#6B6862] dark:text-[#FFFDFB]/70 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
