import React from 'react';
import { ArrowUp } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-slate-200/60 dark:border-white/5 bg-slate-100/50 dark:bg-darkCard/40 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        <div>
          <div className="font-sora font-extrabold text-lg flex items-center justify-center sm:justify-start gap-1 mb-1">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">Deepak</span>
            <span className="text-slate-900 dark:text-white">K N</span>
          </div>
          <p className="font-outfit text-xs text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Deepak K N. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-[11px] font-sora font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            <span>React</span>
            <span>•</span>
            <span>Tailwind</span>
            <span>•</span>
            <span>Framer Motion</span>
          </div>

          <Magnetic actionScale={0.2}>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-white dark:bg-darkCard border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-emerald-400 neo-box-out transition-all block"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}

