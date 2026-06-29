/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        // Light mode neomorphism
        'neo-out': '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff',
        'neo-in': 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff',
        'neo-card': '12px 12px 24px #d1d5db, -12px -12px 24px #ffffff',
        
        // Dark mode neomorphism
        'neo-dark-out': '6px 6px 12px #030504, -6px -6px 12px #15221F',
        'neo-dark-in': 'inset 6px 6px 12px #030504, inset -6px -6px 12px #15221F',
        'neo-dark-card': '12px 12px 24px #030504, -12px -12px 24px #15221F',

        // Glassmorphism accent glows
        'glass-emerald': '0 8px 32px 0 rgba(16, 185, 129, 0.15)',
        'glass-teal': '0 8px 32px 0 rgba(20, 184, 166, 0.15)',
        'glass-indigo': '0 8px 32px 0 rgba(99, 102, 241, 0.15)',
        'glass-cyan': '0 8px 32px 0 rgba(16, 185, 129, 0.15)', // Maintain fallback compatibility
      },
      colors: {
        darkBg: '#060A09',
        darkCard: '#0F1614',
        darkBorder: 'rgba(255, 255, 255, 0.08)',
        lightBg: '#F2F6F5',
        lightCard: '#FFFFFF',
        lightBorder: 'rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
