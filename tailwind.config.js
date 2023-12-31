/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'color-desaturated-dark-cyan': "hsl(180, 29%, 50%)",
        'color-background-light-grayish-cyan': "hsl(180, 52%, 96%)",
        'color-filter-table-grayish-clan': "hsl(180, 31%, 95%)",
        'color-dark-grayish-cyan': "hsl(180, 8%, 52%)",
        'color-very-dark-grayish-cyan': "hsl(180, 14%, 20%)",
      }
    },
  },
  plugins: [],
}

