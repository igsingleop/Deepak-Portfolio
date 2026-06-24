import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable wrapper that adds magnetic pull physics to its child element.
 * Pulls the element towards the cursor when the mouse is hovering.
 */
export default function Magnetic({ children, actionScale = 0.35, className = "inline-block" }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Center point of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Distance between mouse and center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Apply the magnetic pull scaling factor
    setPosition({ x: deltaX * actionScale, y: deltaY * actionScale });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 120, damping: 12, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
