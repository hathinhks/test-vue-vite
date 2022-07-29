module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: 'rgb(8, 15, 76)',
          400: 'rgb(0, 31, 113)',
          500: 'rgb(26, 74, 203)'
        },
        success: {
          500: 'rgb(97, 249, 157)'
        },
        neutral: {
          500: 'rgb(239, 240, 243)'
        },
        accent: {
          500: 'rgb(247, 250, 98)'
        }
      }
    }
  },
  plugins: []
}
