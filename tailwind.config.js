const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  darkMode:
    'class'
  ,
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)', ...fontFamily.sans],
        Rajdhani: ['var(--font-rajdhani)', ...fontFamily.sans]
      },
      boxShadow: {
        'custom': '0 0 60px rgba(0, 0, 0, 0.05)',
      }
    },
    colors: {
      slate: {
        100: "#f1f5f9",
      },
      zinc: {
        500: "#71717a",
        600: "#52525b",
        700: "#374151",
        800: "#27272a",
        900: "#111827",
      },
      white: "#ffffff",
      background: "#f2f3f5",
      text: {
        300: "#DCDDE0",
        500: "#666666",
        highlight: "#B3B9FF",
        title: "#2E384D"
      },
      red: {
        500: "#E83F5B"
      },
      green: {
        500: "#4CD62B"
      },
      blue: {
        500: "#5965E0",
        600: "#4953B8",
      },
      cyan: {
        500: "#2AA9E0"
      }

    }
  },
  plugins: [],
}
