/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-grey": "#F4F7FE",
        "light-blue": "#EDF0F9",
        black: "#1C3048",
      },
      screens: {
        "5xl": "2000px",
        "2sm": "350px",
        "2md": "900px",
      },
    },
  },
  plugins: [],
};
