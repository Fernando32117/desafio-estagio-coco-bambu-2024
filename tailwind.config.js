/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'londrina-solid': ['Londrina Solid', 'sans-serif'],
        'londrina-sketch': ['Londrina Sketch', 'sans-serif']
      },
      colors: {
        'base-black': '#551800',
        primary: '#551800',
        secondary: '#D4886A',
        background: '#F7F4EF'
      },
      boxShadow: {
        default: '0px 4px 4px #551800',
      },
      borderWidth: {
        3: '3px'
      },
      borderRadius: {
        8: '8px'
      }
    }
  },
  plugins: []
};
