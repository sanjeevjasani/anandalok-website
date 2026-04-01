/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF8F0', // Warm Cream
        backgroundSecondary: '#FDF0E7', // Soft Peach Tint
        accent: '#E8632B', // Warm Orange/Coral
        accentDark: '#C4541E', // Deep Terracotta
        dark: '#2D2D2D', // Deep Charcoal
        cream: '#FFF8F0', // Warm Cream (for text on dark)
        border: '#E8DDD4', // Warm Grey
        signal: '#E63B2E' // Operational status
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        drama: ['"Cormorant Garamond"', 'serif'],
        data: ['"IBM Plex Mono"', 'monospace'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      }
    },
  },
  plugins: [],
}
