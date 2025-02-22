/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        moveBackground: "moveBackground 10s infinite alternate",
      },
      keyframes: {
        moveBackground: {
          "0%": { transform: "translate(-10%, -10%)" },
          "100%": { transform: "translate(10%, 10%)" },
        },
      },
    },
  },
};
