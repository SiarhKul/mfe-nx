const { join } = require('path');
const twConfig = require('./tailwind.config');

function postCssConfig(dirname) {
  return {
    plugins: {
      tailwindcss: {
        config: {
          presets: [twConfig],
          content: [
            join(
              dirname,
              '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
            ),
          ],
          corePlugins: {
            preflight: false, //preflight appended separately
          },
        },
      },
      autoprefixer: {},
      // 'postcss-prefix-selector':  false,
    },
  };
}

module.exports = postCssConfig;
