module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        "extra-loose": "3.75",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
