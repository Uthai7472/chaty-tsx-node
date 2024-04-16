/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100vh': '100vh',
        '100vw': '100vw',
        
      },
      colors: {
        'cream': '#fbccae',
        'pink-1': '#faa7d2',
        'pink-2': '#e368b2',
        'pink-3': '#d94a94',
        'black': '#373737',
      }
    },
  },
  plugins: [],
}

