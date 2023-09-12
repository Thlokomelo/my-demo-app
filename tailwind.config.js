/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-indigo": "#73269c",
      },
      backgroundImage: {
        "hero-pattern":
          "url('/assets/image/a699946a99481a2e13a2b236b4db254e.png')",
      },
      listStyleImage: {
        checkmark: 'url("/assets/image/Rectangle.svg")',
      },
    },
  },
  plugins: [],
};
