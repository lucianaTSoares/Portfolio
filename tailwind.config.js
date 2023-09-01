/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['.animation-direction-alternate', '.text-stroke-width-cal'],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': theme('colors.text.light'),
            '--tw-prose-body': theme('colors.text.light'),
            '--tw-prose-invert-headings': theme('colors.text.dark'),
            '--tw-prose-invert-body': theme('colors.text.dark'),
          },
        },
      }),
      colors: {
        primary: 'rgb(99, 102, 241)',
        secondary: 'rgb(255, 118, 90)',
        logo: 'rgb(46, 42, 78)',
        'translucent-light': 'rgba(255, 118, 90, 0.10)',
        'translucent-dark': 'rgba(99, 102, 241, 0.10)',
        card: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgba(255, 255, 255, 0.03)',
        },
        text: {
          light: 'rgba(0, 0, 0, 0.87)',
          dark: 'rgb(222, 222, 222)',
        },
        light: 'rgb(250, 250, 250)',
        dark: 'rgb(18, 18, 18)',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        card: '0px 0px 7px 0px rgba(0, 0, 0, 0.08)',
        'header-light': '0px 0px 10px 0px rgba(0, 0, 0, 0.26)',
        'header-dark': '0px 0px 10px 0px rgba(0, 0, 0, 0.5) ',
      },
      keyframes: {
        'arrow-opacity': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        'rotating-text': {
          '0%, 100%': { bottom: '96px' },
          '25%': { bottom: '96px' },
          '30%': { bottom: '66px' },
          '45%': { bottom: '66px' },
          '50%': { bottom: '32px' },
          '65%': { bottom: '32px' },
          '70%': { bottom: '0' },
          '95%': { bottom: '0' },
        },
      },
      animation: {
        arrow: 'arrow-opacity 1s infinite',
        'rotate-text': 'rotating-text 15s ease infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./plugins/animateDirection'),
    require('./plugins/animateDelay'),
    require('./plugins/textStrokeWidth'),
  ],
};
