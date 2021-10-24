const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  content: ['./src/**/*', './index.html'],
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
