// Note: If you use library-specific PostCSS/Tailwind configuration
// then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries

const { join } = require('path');
const twConfig = require('./tailwind.config.js')
console.log("TAILWIND_CONFIG", twConfig);

const postCssConfigGen ={
  plugins: {
    tailwindcss: {
      config: {
        presets: [twConfig],
        content: [
          join(
            __dirname,
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
}


module.exports = postCssConfigGen;
