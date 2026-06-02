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
        'neo-dark-out': '6px 6px 12px #070a13, -6px -6px 12px #151c2f',
        'neo-dark-in': 'inset 6px 6px 12px #070a13, inset -6px -6px 12px #151c2f',
        'neo-dark-card': '12px 12px 24px #070a13, -12px -12px 24px #151c2f',

        // Glassmorphism accent glows
        'glass-cyan': '0 8px 32px 0 rgba(6, 182, 212, 0.15)',
        'glass-purple': '0 8px 32px 0 rgba(168, 85, 247, 0.15)',
        'glass-blue': '0 8px 32px 0 rgba(59, 130, 246, 0.15)',
      },
      colors: {
        darkBg: '#0B0F19',
        darkCard: '#131A2D',
        darkBorder: 'rgba(255, 255, 255, 0.08)',
        lightBg: '#F3F4F6',
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
