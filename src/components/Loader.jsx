import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoRingMotif from './LogoRingMotif';

export default function Loader({ onComplete }) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFFDFB] dark:bg-[#181614] transition-colors duration-300"
        >
          {/* Background Ambient Glow Orbs */}
          <div className="absolute w-[350px] h-[350px] rounded-full glow-orb-coral opacity-60 animate-pulse-glow" />

          {/* Animated Logo Ring Motif */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.95, 1.05, 0.95], opacity: 1 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="relative z-10 mb-8"
          >
            <LogoRingMotif className="w-24 h-24 sm:w-28 sm:h-28" animate={true} />
          </motion.div>

          {/* Brand Name & Tagline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center z-10"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-space text-[#2B2926] dark:text-[#FFFDFB]">
              QUADERS<span className="text-[#ED7751]">.</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6B6862] dark:text-[#FBEAE3]/70 font-medium mt-1">
              Digital Growth Studio
            </p>
          </motion.div>

          {/* Progress Bar & Percentage */}
          <div className="w-48 sm:w-64 mt-8 relative z-10">
            <div className="h-1.5 w-full bg-[#FBEAE3] dark:bg-[#2A2623] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#ED7751] to-[#D9603B] rounded-full"
                style={{ width: `${loadingProgress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between items-center mt-2 text-xs font-mono text-[#6B6862] dark:text-gray-400">
              <span>INITIALIZING STUDIO</span>
              <span className="text-[#ED7751] font-bold">{loadingProgress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
