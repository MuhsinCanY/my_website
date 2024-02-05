/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        p_blue: '#4731D3',
        p_green: '#CBF281',
      },
    },
    plugins: [],
  },
}

// const withMT = require('@material-tailwind/react/utils/withMT')

// module.exports = withMT({
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// })
