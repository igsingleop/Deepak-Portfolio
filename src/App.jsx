import React, { useState } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Services from './components/Services';
import WorkPortfolio from './components/WorkPortfolio';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-[#FFFDFB] dark:bg-[#181614] text-[#2B2926] dark:text-[#FFFDFB] transition-colors duration-300 font-inter">
      {/* Initial Page Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Smooth Custom Cursor */}
      <CustomCursor />

      {/* Sticky Header Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main className="relative z-10 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* Tech Marquee Strip */}
        <TechMarquee />

        {/* 2. Services Section */}
        <Services />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#ED7751]/20 to-transparent" />

        {/* 3. Portfolio/Work Section */}
        <WorkPortfolio />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#ED7751]/20 to-transparent" />

        {/* 4. Process Section */}
        <Process />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#ED7751]/20 to-transparent" />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#ED7751]/20 to-transparent" />

        {/* 6. Testimonials Section */}
        <Reviews />

        {/* Divider */}
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-[#ED7751]/20 to-transparent" />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
