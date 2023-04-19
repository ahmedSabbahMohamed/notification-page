/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font: ['Plus Jakarta Sans'],
      },
      colors: {
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",
        vlgblue: "hsl(210, 60%, 98%)",
        lgblue1: "hsl(211, 68%, 94%)",
        lgblue2: "hsl(205, 33%, 90%)",
        gblue: "hsl(219, 14%, 63%)",
        dgblue: "hsl(219, 12%, 42%)",
        vdblue: "hsl(224, 21%, 14%)",
      },
      fontSize: {
        root: "16px",
      }
    },
  },
  plugins: [],
}

