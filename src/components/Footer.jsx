import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200/60 dark:border-slate-800/40 bg-white/40 dark:bg-darkBg/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <div className="font-outfit text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} <span className="font-semibold text-slate-700 dark:text-slate-200">Deepak K N</span>. All Rights Reserved.
        </div>
        
        {/* <div className="flex items-center gap-2 text-[10px] font-sora font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          <span>React.js</span>
          <span>•</span>
          <span>Tailwind CSS</span>
          <span>•</span>
          <span>Framer Motion</span>
        </div> */}
      </div>
    </footer>
  );
}
