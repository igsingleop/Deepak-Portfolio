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
        // Light mode neomorphism & elevated shadows
        'neo-out': '6px 6px 14px #e2e8f0, -6px -6px 14px #ffffff',
        'neo-in': 'inset 4px 4px 8px #cbd5e1, inset -4px -4px 8px #ffffff',
        'neo-card': '12px 12px 28px #e2e8f0, -12px -12px 28px #ffffff',
        
        // Dark mode obsidian depth
        'neo-dark-out': '8px 8px 18px #040609, -8px -8px 18px #121824',
        'neo-dark-in': 'inset 5px 5px 10px #040609, inset -5px -5px 10px #121824',
        'neo-dark-card': '16px 16px 36px #040609, -16px -16px 36px #121824',

        // Vibrant accent glows
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.35)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 35px -5px rgba(139, 92, 246, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
      colors: {
        darkBg: '#070A0F',
        darkCard: '#0D111A',
        darkCardElevated: '#131926',
        darkBorder: 'rgba(255, 255, 255, 0.08)',
        lightBg: '#F8FAFC',
        lightCard: '#FFFFFF',
        lightCardElevated: '#F1F5F9',
        lightBorder: 'rgba(0, 0, 0, 0.06)',
        accentIndigo: '#6366F1',
        accentViolet: '#8B5CF6',
        accentEmerald: '#10B981',
        accentCyan: '#06B6D4',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}

