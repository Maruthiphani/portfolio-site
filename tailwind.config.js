/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF9F6',
        charcoal: {
          DEFAULT: '#2A2A2A',
          light: '#3F3F3F',
          muted: '#5A5A5A',
        },
        taupe: {
          50: '#F5F2ED',
          100: '#E8E0D2',
          200: '#D5C7B0',
          300: '#BFAE8E',
          400: '#A89471',
          500: '#8B785C',
          600: '#75644B',
          700: '#5F513D',
          800: '#473C2D',
          900: '#2F281E',
        },
      },
      transitionTimingFunction: {
        portfolio: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'aurora': 'aurora 16s ease infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
          '50%': { boxShadow: '0 0 0 8px rgba(16, 185, 129, 0)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'grid-zinc': "linear-gradient(to right, rgba(63,63,70,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(63,63,70,0.25) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse at center, transparent 0%, #09090b 75%)',
      },
      backgroundSize: {
        'grid-md': '48px 48px',
      },
    },
  },
  plugins: [],
};