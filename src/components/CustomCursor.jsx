import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for outer trailing aura
  const springConfig = { damping: 28, stiffness: 380, mass: 0.25 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleMouseDown = (e) => {
      setClicked(true);
      
      // Trigger click ripple animation at cursor location
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Track interactive elements hover state
    const updateHoverState = (e) => {
      const target = e.target;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('[data-hover="true"]');
      
      setHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, [cursorX, cursorY, hidden]);

  // Disable custom cursor on mobile/touch devices
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Click Shockwave Ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 2.4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-emerald-400 pointer-events-none z-[9998]"
            style={{
              left: ripple.x,
              top: ripple.y,
              translateX: '-50%',
              translateY: '-50%',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Outer Levitating Ambient Aura Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] backdrop-blur-[1px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovered ? 56 : 38,
          height: hovered ? 56 : 38,
          scale: clicked ? 0.75 : 1,
          backgroundColor: hovered ? 'rgba(99, 102, 241, 0.15)' : 'rgba(16, 185, 129, 0.05)',
          borderWidth: hovered ? '2px' : '1.5px',
          borderColor: hovered ? 'rgba(99, 102, 241, 0.8)' : 'rgba(16, 185, 129, 0.6)',
          boxShadow: hovered 
            ? '0 0 25px rgba(99, 102, 241, 0.5)' 
            : '0 0 15px rgba(16, 185, 129, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* Inner Precision Gradient Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 pointer-events-none z-[9999] shadow-[0_0_10px_rgba(99,102,241,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: hovered ? 0.4 : clicked ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  );
}

