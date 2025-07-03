/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: '#d4d0c8',
        dark: '#404040',
        light: '#FFFFFF',
        blue: '#0a246a',
        lightblue: '#1084d0',
        highlight: '#ffffff',
        border: '#000000'
      },
      fontFamily: {
        ft: ['VT323', 'monospace']
      },
      boxShadow: {
        'bs': 'inset 1px 1px #fff, inset -1px -1px #404040'
      }
    },
  },
  plugins: [],
}