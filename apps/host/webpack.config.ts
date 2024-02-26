import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
};

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

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  (config) => customFederation(config)
);
