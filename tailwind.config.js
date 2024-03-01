/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx}"
  ],
  plugins: [

    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],


  theme: {
    colors: {
      'brand': '#050D26',
      'brand-dark': '#050D26',
      'primary': '#022859',
      'secondary': '#1F4E8C',
      'brand-400': '#5080BF',
      'brand-300': '#96BEF2',
      'brand-200': '#D1E5FF',
      'accent': '#FCBD02',
      'accent-600': '#C9A22A',
      'accent-400': '#FDD662'
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans serif"],
        cormorant: ["Cormorant Garamond", "serif"]
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(-15px)' },
          '50%': { transform: 'translateX(15px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      }
    },

  },


}

