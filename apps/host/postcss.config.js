const { join } = require('path');
const postCssConfig = require('../../libs/shared/configs/settings-config/src/lib/settings-config');

// Note: If you use library-specific PostCSS/Tailwind configuration then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
//
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries
console.log('1111111', postCssConfig(__dirname, '.host'));

module.exports = (ctx) => postCssConfig(__dirname, '.host', ctx);
console.log('2222222', join(__dirname, 'tailwind.config.js'));
module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
};
