import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import WorkPortfolio from './components/WorkPortfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Futuristic Antigravity Background Animation System
function BackgroundParticles() {
  const particles = Array.from({ length: 28 });
  const floatingRings = Array.from({ length: 5 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Cyber Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800e_1px,transparent_1px),linear-gradient(to_bottom,#8080800e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Anti-Gravity Levitating Particles */}
      {particles.map((_, idx) => {
        const size = 6 + (idx * 13) % 28; // Sizes 6px to 34px
        const left = (idx * 17 + 5) % 100; // Even horizontal spread
        const delay = (idx * 0.45) % 6;
        const duration = 12 + (idx * 2) % 10;
        
        // Anti-gravity accent gradients
        const glowColors = [
          'bg-indigo-500/25 dark:bg-indigo-400/30 shadow-[0_0_15px_rgba(99,102,241,0.5)]',
          'bg-emerald-400/25 dark:bg-emerald-400/30 shadow-[0_0_15px_rgba(16,185,129,0.5)]',
          'bg-purple-500/25 dark:bg-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]',
          'bg-cyan-400/25 dark:bg-cyan-400/30 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        ];
        const glowColor = glowColors[idx % glowColors.length];

        return (
          <motion.div
            key={`particle-${idx}`}
            className={`absolute rounded-full ${glowColor} backdrop-blur-sm`}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: `-50px`,
            }}
            animate={{
              y: ['0vh', '-110vh'],
              x: [0, (idx % 2 === 0 ? 35 : -35), (idx % 2 === 0 ? -20 : 20), 0],
              scale: [0.6, 1.3, 0.9, 0.4],
              opacity: [0, 0.8, 0.6, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay,
            }}
          />
        );
      })}

      {/* Anti-Gravity Weightless Floating Glass Rings */}
      {floatingRings.map((_, idx) => {
        const ringSize = 120 + idx * 70;
        const left = (idx * 22 + 10) % 90;
        const top = (idx * 28 + 15) % 85;
        const duration = 18 + idx * 4;

        return (
          <motion.div
            key={`ring-${idx}`}
            className="absolute rounded-full border border-indigo-500/15 dark:border-emerald-400/15 backdrop-blur-[1px] pointer-events-none"
            style={{
              width: ringSize,
              height: ringSize,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -40, 20, 0],
              x: [0, 30, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 0.95, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 1.2,
            }}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-lightBg dark:bg-darkBg transition-colors duration-300 text-slate-800 dark:text-slate-200 font-inter">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Decorative Background Mesh Particles */}
      <BackgroundParticles />
      
      {/* Sticky frosted glass header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative z-10 w-full">
        {/* Home/Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800/60 to-transparent"></div>

        {/* Skills Section */}
        <Skills />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800/60 to-transparent"></div>

        {/* Experience Section */}
        <Experience />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800/60 to-transparent"></div>

        {/* Work Portfolio Section */}
        <WorkPortfolio />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800/60 to-transparent"></div>

        {/* Projects Section */}
        <Projects />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800/60 to-transparent"></div>

        {/* Client Reviews Section */}
        <Reviews />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800/60 to-transparent"></div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

