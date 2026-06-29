import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracker for active state
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Magnetic actionScale={0.15}>
          <a href="#home" className="font-sora font-extrabold text-xl tracking-tight flex items-center gap-1 group block">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Deepak</span>
            <span className="text-slate-800 dark:text-white">K N</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </a>
        </Magnetic>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-1 bg-slate-200/50 dark:bg-slate-800/40 p-1.5 rounded-full backdrop-blur-sm border border-slate-300/20 dark:border-white/5">
            {navLinks.map((link) => (
              <Magnetic key={link.name} actionScale={0.2}>
                <a
                  href={link.href}
                  className={`font-outfit text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300 block ${
                    activeSection === link.href.slice(1)
                      ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400'
                  }`}
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Neomorphic Theme Toggle */}
          <Magnetic>
            <button
              onClick={toggleTheme}
              id="theme-toggle-btn"
              className="w-10 h-10 rounded-full flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg border border-white/40 dark:border-white/5 text-slate-700 dark:text-yellow-400"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </Magnetic>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center neo-btn bg-lightBg dark:bg-darkBg text-slate-700 dark:text-yellow-400"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white/95 dark:bg-darkBg/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 z-40 transition-all duration-300 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col items-center gap-6 py-12 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-outfit text-lg font-semibold w-full text-center py-3 rounded-2xl transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
