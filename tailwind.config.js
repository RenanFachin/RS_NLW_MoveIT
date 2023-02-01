const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)', ...fontFamily.sans],
        Rajdhani: ['var(--font-rajdhani)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
