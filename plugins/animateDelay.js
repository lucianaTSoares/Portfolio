const plugin = require('tailwindcss/plugin');

const animationDelayPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'animation-delay': (value) => {
          return {
            animationDelay: value,
            '-webkit-animation-delay': value,
            '-moz-animation-delay': value,
          };
        },
      },
      {
        values: theme('animationDelay'),
      }
    );
  },
  {
    theme: {
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        alternate: 'alternate',
      },
    },
  }
);

module.exports = animationDelayPlugin;
