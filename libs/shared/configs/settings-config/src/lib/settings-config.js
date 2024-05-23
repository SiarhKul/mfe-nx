// Note: If you use library-specific PostCSS/Tailwind configuration
// then you should remove the `postcssConfig` build
// option from your application's configuration (i.e. project.json).
// See: https://nx.dev/guides/using-tailwind-css-in-react#step-4:-applying-configuration-to-libraries
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const twConfig = require('./tailwind.config');
const createPostCssPrefix = require('./createPostCssPrefix');

function postCssConfig(dirname, appPrefix, ctx) {
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
            ...new Set(createGlobPatternsForDependencies(dirname)),
          ],
          corePlugins: {
            preflight: false, //preflight appended separately
          },
        },
      },
      'postcss-prefix-selector': appPrefix
        ? createPostCssPrefix(appPrefix)
        : false,
      autoprefixer: {},
    },
  };
}

module.exports = postCssConfig;

/*The `tailwindcss` configuration object can have the following fields:

1. `purge`: An array of file paths, or an object with `content` and `options` properties, to remove unused styles in production.

2. `darkMode`: Controls dark mode. Can be `false`, `'media'` (uses the `(prefers-color-scheme: dark)` media query), or `'class'` (uses the `.dark` class).

3. `theme`: An object where you define your customizations to Tailwind's default configuration. It has many sub-fields like `screens`, `colors`, `spacing`, `backgroundColor`, `fontSize`, `extend` and more.

4. `variants`: An object to control which variants are generated for each core utility plugin.

5. `plugins`: An array where you can register custom plugins.

6. `corePlugins`: An array to manually specify the core plugins to use, or an object to control whether a core plugin should be included.

7. `important`: Controls whether Tailwind should add `!important` to all utility styles. Can be `true` or `false`, or a string to control the CSS selector that Tailwind uses to scope its styles.

8. `separator`: Specifies the separator used to denote variants in class names. Default is `:`.

9. `prefix`: A string to prefix all of Tailwind's generated utility classes.

10. `future`: An object to opt-in to future breaking changes.

11. `experimental`: An object to opt-in to experimental features.

12. `content`: An array of globs to your content files where Tailwind should look for class names to keep in your final CSS when purging unused styles.

13. `presets`: An array of other configuration files to merge into this configuration.

Please refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration) for more detailed information about each field.*/
