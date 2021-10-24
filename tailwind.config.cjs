const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  purge: ['./src/**/*', './index.html'],
  theme: {
    extend: {
      colors: {
        teal: colors.teal
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
