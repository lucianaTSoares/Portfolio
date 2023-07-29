const plugin = require('tailwindcss/plugin');

const textStrokeWidthPlugin = plugin(function ({ addUtilities }) {
  const utility = {
    '.text-stroke-width-calc': {
      '-webkit-text-stroke-width': 'calc(1em / 16)',
    },
  };
  addUtilities(utility);
});

module.exports = textStrokeWidthPlugin;
