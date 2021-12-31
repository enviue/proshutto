module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      m: ['13px', '16px']
    },
    maxWidth: {
      '8xl': '1312px',
    },
    extend: {
      transitionProperty: {
        'right': 'right',
      },
      colors: {
        "bg-dark": "#282F3B",
        "orange": "#F77F00",
        "bg-light": "#E5E5E5"
      },
      spacing: {
        "18px": "18px",
        "8xl": "1312px",
        "460px": "460px",
        "95%": "95%"
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
