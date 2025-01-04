export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBrown: '#35372D', // Light brown color
        lightBrown2:'#603F26', // Lighter brown color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};