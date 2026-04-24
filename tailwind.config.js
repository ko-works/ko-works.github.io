/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './study-in-japan/index.html',
    './accessibility-consulting/index.html',
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#1c1917', muted: '#44403c' },
        shu: { DEFAULT: '#c8362e', hover: '#a52a24', soft: '#fef2f1' },
        ai:  { DEFAULT: '#2e4a6e', light: '#3b5e8a' },
      },
      fontSize: {
        body: ['1.125rem', { lineHeight: '1.75' }],
      },
    },
  },
  plugins: [],
};
