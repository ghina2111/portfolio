// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['index.html'],
//   theme: {
//     container: {
//       center: true,
//       padding: '16px',
//     },
//     extend: {
//       colors: {
//         primary: '#38bdf8',
//         secondary: '#94a3b8',
//         dark: '#1e1b4b',
//       },
//       screens: {
//         '2xl': '1320px',
//       },
//     },
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',  // Sertakan file TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'typescript.js'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#38bdf8',
        secondary: '#94a3b8',
        dark: '#1e1b4b',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Menambahkan font Roboto
      },
    },
  },
  plugins: [],
}
