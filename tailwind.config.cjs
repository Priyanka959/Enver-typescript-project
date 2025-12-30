/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        primary: '#5b4bff',
        accent: '#8b5cf6',
        darkbg: '#0f0f11'
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
