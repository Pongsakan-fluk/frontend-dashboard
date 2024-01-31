/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1320px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
  
  //Config theme
  daisyui: {
    themes: ["light"],
  },
}

