/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container : {
      screens: {
        '2xl': '1400px',
      }
    },
    extend: {
      colors: {
        primary: "#0788d7",
        secondary: "#60e2c9",
        tertiary: "#fdc666",
      }
    },
  },
  plugins: [],
};
