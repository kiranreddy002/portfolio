/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: { DEFAULT: '#0b1020', soft: '#121a30', line: '#1f2a44' },
        brand: { DEFAULT: '#2dd4bf', deep: '#0d9488', warm: '#fbbf24' },
      },
    },
  },
  plugins: [],
};
