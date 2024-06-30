/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          to: {
            transform: "translate3d(0, -0.5rem, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
