import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        monda: ['"Monda"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        tektur: ['"Tektur"', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
