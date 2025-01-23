/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          text: 'rgb(19, 21, 23)',
          subtext: 'rgb(71, 74, 77)',
          background: '#F8F9FA',
          surface: '#FFFFFF',
          lines: {
            blue: 'rgb(99, 179, 237)',
            pink: 'rgb(237, 100, 166)',
            orange: 'rgb(237, 137, 54)',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        nav: '15px',
        'hero-title': '80px',
        'hero-subtitle': '20px',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '4.5': '1.125rem', // 18px
        '7.5': '1.875rem', // 30px
      },
      lineHeight: {
        'hero': '1',
        'subtitle': '1.5',
      },
      maxWidth: {
        'hero': '960px',
        'subtitle': '683px',
      },
      boxShadow: {
        'card': '0px 8px 24px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'wave-pulse': 'wave-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'wave-pulse': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
} 