/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  plugins: [],
  prefix: 'tw-',
  theme: {
    extend: {
      width: {
        '40': '160px',
        '50': '200px',
        '150': '600px',
        '165': '660px',
        '175': '700px',
        '225': '900px',
        '235': '940px',
        '245': '980px',
        '250': '1000px'
      }
    },
  },
}
