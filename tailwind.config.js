module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
       blue: {
         'lighter': '#C9D2FE',
         'light': '#96A8FD',
         'default': '#0A34FA',
         'dark': '#0029EB'
       },
       green: {
         default: "#31E70D",
         dark: "#20C300"
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
