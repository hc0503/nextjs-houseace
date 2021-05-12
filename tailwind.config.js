module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          lesslight: '#FECACA',
          light: '#F87171',
          DEFAULT: '#F96868',
          dark: '#EF4444'
        },
        gray: {
          light: '#959595',
          DEFAULT: '#616161',
          dark: '#161616'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
