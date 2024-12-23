/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        rancho: ['Rancho', 'cursive'],
      },
      colors: {
        customRed: '#FBB4A5', // Add your color with a custom name
        customBg: '#FCFFC1',

      },
    },
  },
  plugins: [
      require('daisyui'),

  ],
}