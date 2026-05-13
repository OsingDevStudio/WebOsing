// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'osing-dark': '#1F6F5F',    // Hijau Tua
        'osing-primary': '#2FA084', // Hijau Utama (pengganti Orange)
        'osing-light': '#6FCF97',   // Hijau Muda
        'osing-bg': '#EEEEEE',      // Abu-abu sangat muda (Background)
      },
    },
  },
  plugins: [],
}