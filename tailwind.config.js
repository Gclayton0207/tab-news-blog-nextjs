const { thonUI, thonUIContent } = require('thon-ui/plugin');



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['app/**/*.tsx', 'src/**/*.tsx', thonUIContent()],
  jit: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        code: ['Courier Prime', 'monospace'],
      }

    },
  },
}, {
  plugins: [thonUI()],
}
