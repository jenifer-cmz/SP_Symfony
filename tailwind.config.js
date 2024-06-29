/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html.twig",
    "./assets/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6347', // Couleur primaire personnalisée
        secondary: '#4CAF50', // Couleur secondaire personnalisée
        navbar: '#3B82F6', // Couleur pour la navbar
        bodybg: '#F3F4F6', // Couleur pour le body
      },
      fontFamily: {
        sans: ['Oswald', 'sans-serif'],
        mono: ['Nanum Gothic Coding', 'monospace'],
      },
    },
  },
  plugins: [],
}
