/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#164E63',
          50: '#E6F0F3',
          100: '#CCE0E6',
          200: '#99C0CC',
          300: '#66A1B3',
          400: '#338199',
          500: '#164E63',
          600: '#134457',
          700: '#0F3B4A',
          800: '#0B2C38',
          900: '#08222B',
        },
        sage: {
          DEFAULT: '#A7C4B5',
          50: '#F3F8F5',
          100: '#E7F0EB',
          200: '#CFE1D7',
          300: '#B7D2C3',
          400: '#A7C4B5',
          500: '#8FB0A0',
          600: '#739583',
          700: '#587A66',
          800: '#3F5A4A',
          900: '#2A3E33',
        },
        coral: {
          DEFAULT: '#E98973',
          50: '#FDF1EE',
          100: '#FAE3DC',
          200: '#F5C7B9',
          300: '#F0AB96',
          400: '#E98973',
          500: '#E06B50',
          600: '#C25840',
          700: '#9C4632',
          800: '#763525',
          900: '#502318',
        },
        ivory: '#FAF9F6',
        ink: {
          DEFAULT: '#17252B',
          muted: '#5F6B70',
        },
      },
      fontFamily: {
        heading: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-h1': 'clamp(2.5rem, 5vw, 4.25rem)',
        'fluid-h2': 'clamp(2rem, 4vw, 3rem)',
        'fluid-h3': 'clamp(1.375rem, 2.5vw, 1.875rem)',
        'fluid-body': 'clamp(1rem, 1.2vw, 1.1875rem)',
      },
      maxWidth: {
        section: '1200px',
      },
      borderRadius: {
        card: '1rem',
        pill: '999px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.4,0,0.2,1) both',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.4,0,0.2,1) both',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.4,0,0.2,1) both',
      },
    },
  },
  plugins: [],
};
