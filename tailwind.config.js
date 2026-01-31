/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 🔴 ESTO ES CLAVE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',

        background: {
          light: '#F5F7F4',   // fondo claro como la imagen
          dark: '#0F172A',    // fondo oscuro elegante
        },

        surface: {
          light: '#FFFFFF',
          dark: '#020617',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
