const plugin = require('tailwindcss/plugin');

const animationDirectionPlugin = plugin(function ({ addUtilities }) {
  const utility = {
    '.animation-direction-alternate': {
      animationDirection: 'alternate',
      '-webkit-animation-direction': 'alternate',
    },
  };
  addUtilities(utility);
});

module.exports = animationDirectionPlugin;
