import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import LogoRingMotif from './LogoRingMotif';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section observer for active state
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 glass-nav shadow-glass-card border-b border-[#ED7751]/15'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <LogoRingMotif className="w-9 h-9 sm:w-10 sm:h-10 text-[#ED7751] transition-transform duration-500 group-hover:rotate-180" />
          <span className="font-space font-extrabold text-xl sm:text-2xl tracking-tight text-[#2B2926] dark:text-[#FFFDFB]">
            QUADERS<span className="text-[#ED7751]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#FFFDFB]/60 dark:bg-[#201D1A]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#ED7751]/10 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#ED7751] font-semibold'
                    : 'text-[#6B6862] dark:text-[#FFFDFB]/70 hover:text-[#ED7751] dark:hover:text-[#ED7751]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#ED7751] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme Toggle + CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full text-[#6B6862] dark:text-[#FFFDFB]/80 hover:bg-[#FBEAE3] dark:hover:bg-[#2B2926] hover:text-[#ED7751] transition-all duration-200 border border-[#ED7751]/10"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#ED7751] hover:bg-[#D9603B] text-[#FFFDFB] font-space font-semibold text-xs sm:text-sm tracking-wide shadow-coral-sm hover:shadow-coral-glow transition-all duration-300 flex items-center gap-1.5 active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Controls & Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full text-[#6B6862] dark:text-[#FFFDFB]/80 hover:bg-[#FBEAE3] dark:hover:bg-[#2B2926]"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-xl bg-[#FBEAE3] dark:bg-[#2B2926] text-[#ED7751] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-[#ED7751]/15 bg-[#FFFDFB]/95 dark:bg-[#181614]/95 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-space font-medium text-[#2B2926] dark:text-[#FFFDFB] hover:bg-[#FBEAE3] dark:hover:bg-[#2B2926] hover:text-[#ED7751] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-[#ED7751]/15">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#ED7751] text-[#FFFDFB] font-space font-semibold text-center flex items-center justify-center gap-2 shadow-coral-sm"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
