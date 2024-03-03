function customFederation(config) {
  const newConfig = { ...config };
  console.log('NEW_CONFIG_WEBPACK', newConfig);
  newConfig.module.rules.push({
    test: /\.(woff|woff2)$/,
    type: 'asset/resource',
    use: [
      {
        loader: 'file-loader',
      },
    ],
  });
  newConfig.module.rules.forEach((m) => {
    console.log('WEBPACK_MODULES', m);
  });
  return newConfig;
}

module.exports = customFederation;
