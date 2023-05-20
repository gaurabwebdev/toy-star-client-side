/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Righteous: ["cursive"],
    },
    backgroundImage: {
      "hero-image": "url('https://i.ibb.co/8bc9VJC/hero-image.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
