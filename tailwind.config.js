/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-warm": "#FBF8F1",
        "gold-primary": "#A87524",
        "gold-accent": "#D4AF37",
        "gold-light": "#F7EEDD",
        "gold-subtle": "#EADEC9",
        "gold-border": "#DFCEB5",
        "text-noble": "#4C4032",
        "text-muted": "#7A6B58",
        "card-bg": "#FFFFFF",
      },
      fontFamily: {
        brand: ["'Cormorant Garamond'", "serif"],
        script: ["'Allura'", "cursive"],
        sans: ["'Montserrat'", "sans-serif"],
        cinzel: ["'Cinzel'", "serif"],
      },
    },
  },
  plugins: [],
}
