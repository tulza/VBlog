/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    extend: {
      colors: {
        element: "var(--element)",
        background: "var(--background)",
        text: "var(--text)",

        gray: "var(--gray)",
      },
      screens: {},
      transitionProperty: {},
    },
  },
  plugins: [],
};
