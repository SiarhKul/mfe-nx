function createPostCssPrefix(appPrefix) {
  return {
    prefix: appPrefix,
    transform(prefix, selector, prefixedSelector, filePath, rule) {
      console.log('++++++++++++++++++++++++++', {
        prefix,
        selector,
        prefixedSelector,
        filePath,
        rule,
      });
      /*      if (filePath.match(/\.module\.css/)) {
        return selector; // Do not prefix css modules
      }
      if (filePath.match(/node_modules/)) {
        return selector; // Do not prefix styles imported from node_modules
      }
      if (filePath.match(/libs[\\/]+shared[\\/]+ui/)) {
        return selector; // Do not prefix styles imported from shared ui library
      }
      if (selector.match(/^(html|body)/)) {
        return selector.replace(/^([^\s]*)/, `$1 ${prefix}`);
      }*/

      return selector;
    },
  };
}

module.exports = createPostCssPrefix;
