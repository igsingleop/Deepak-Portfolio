import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports touch to disable custom cursor on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central Coral Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#ED7751] rounded-full shadow-[0_0_10px_#ED7751]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 1.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Trailing Node Ring */}
      <motion.div
        className={`fixed top-0 left-0 border-2 rounded-full flex items-center justify-center transition-colors duration-200 ${
          isHovered
            ? 'w-12 h-12 border-[#D9603B] bg-[#ED7751]/10'
            : 'w-8 h-8 border-[#ED7751]/60'
        }`}
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 25, mass: 0.2 }}
      >
        {/* Node Accents on Cursor Ring */}
        <div className="absolute -top-1 w-1.5 h-1.5 bg-[#ED7751] rounded-full" />
        <div className="absolute -bottom-1 w-1.5 h-1.5 bg-[#ED7751] rounded-full" />
      </motion.div>
    </div>
  );
}
