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
        space: ['"Space Grotesk"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        coral: {
          DEFAULT: '#ED7751',
          dark: '#D9603B',
          light: '#FBEAE3',
          glow: 'rgba(237, 119, 81, 0.35)',
          subtle: 'rgba(237, 119, 81, 0.08)',
        },
        charcoal: '#2B2926',
        grayText: '#6B6862',
        lightGray: '#F5F3F0',
        cream: '#FFFDFB',
        darkBg: '#181614',
        darkCard: '#22201D',
        darkBorder: 'rgba(237, 119, 81, 0.15)',
      },
      boxShadow: {
        'coral-glow': '0 0 35px -5px rgba(237, 119, 81, 0.4)',
        'coral-sm': '0 4px 20px -2px rgba(237, 119, 81, 0.25)',
        'glass-card': '0 8px 32px 0 rgba(43, 41, 38, 0.05)',
        'glass-card-hover': '0 20px 40px -15px rgba(237, 119, 81, 0.18)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}


