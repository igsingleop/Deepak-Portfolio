import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Dynamic background particles
function BackgroundParticles() {
  const particles = Array.from({ length: 12 });
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, idx) => {
        // Deterministic pseudo-random generation to avoid SSR hydration mismatches
        const size = 15 + (idx * 17) % 45; // Sizes range 15px - 60px
        const left = (idx * 23) % 100;    // Percentage coordinates
        const top = (idx * 31) % 100;     // Percentage coordinates
        const delay = (idx * 0.7) % 5;     // Delayed starts
        const duration = 12 + (idx * 3) % 15; // Slow travel times
        
        return (
          <motion.div
            key={idx}
            className="absolute rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
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
    </div>
  );
}

function App() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-lightBg dark:bg-darkBg transition-colors duration-300 text-slate-700 dark:text-slate-300">
      {/* Decorative Orbs & Particles */}
      <BackgroundParticles />
      
      {/* Sticky frosted glass header */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative z-10 w-full">
        {/* Home/Hero Section */}
        <Hero />
        
        {/* Divider */}
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

        {/* About Section */}
        <About />

        {/* Divider */}
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

        {/* Skills Section */}
        <Skills />

        {/* Divider */}
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

        {/* Experience Section */}
        <Experience />

        {/* Divider */}
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

        {/* Projects Section */}
        <Projects />

        {/* Divider */}
        <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
