import React from 'react';

export default function LogoRingMotif({ className = "w-8 h-8", animate = false }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${animate ? 'animate-spin-slow' : ''}`}
      >
        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="#ED7751"
          strokeWidth="6"
          strokeDasharray="210 50"
          strokeLinecap="round"
          className="opacity-90"
        />
        {/* Inner Node Ring */}
        <circle
          cx="50"
          cy="50"
          r="28"
          stroke="#ED7751"
          strokeWidth="3"
          strokeDasharray="4 6"
          className="opacity-60"
        />
        {/* Cross / Arrow Node Points */}
        <circle cx="50" cy="8" r="5" fill="#ED7751" />
        <circle cx="92" cy="50" r="5" fill="#ED7751" />
        <circle cx="50" cy="92" r="5" fill="#ED7751" />
        <circle cx="8" cy="50" r="5" fill="#ED7751" />
        
        {/* Diagonal Nodes */}
        <circle cx="20" cy="20" r="3" fill="#D9603B" />
        <circle cx="80" cy="20" r="3" fill="#D9603B" />
        <circle cx="80" cy="80" r="3" fill="#D9603B" />
        <circle cx="20" cy="80" r="3" fill="#D9603B" />

        {/* Center Node Core */}
        <circle cx="50" cy="50" r="8" fill="#ED7751" />
        <path
          d="M50 42V58M42 50H58"
          stroke="#FFFDFB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
