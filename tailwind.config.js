/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandDark: "#1E3A8A",
        brandMid: "#3B82F6",
        brandLight: "#93C5FD",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(to bottom, #1E3A8A, #3B82F6, #93C5FD)",
      },
    },
  },
  plugins: [],
};
