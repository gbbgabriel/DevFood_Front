/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        "orange--primary": "#FF8E26",
        "loading--card": "#D9D9D9",
        "product--card": "#F8F9FA",
        "button--success": "#1CA805",
        "button--danger": "#FF0000",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        text: ["Monda", "sans-serif"],
        news: ["Oldenburg", "sans-serif"],
        hamburguerTitle: ["Mogra", "sans-serif"]
      }
    },
  },
  plugins: [],
}

