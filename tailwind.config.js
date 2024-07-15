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
        "zoom-in-zoom-out": "zoom-in-zoom-out 0.5s ease-out",
      },
      keyframes: {
        loader: {
          to: {
            transform: "translate3d(0, -0.5rem, 0)",
          },
        },
        "zoom-in-zoom-out": {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
