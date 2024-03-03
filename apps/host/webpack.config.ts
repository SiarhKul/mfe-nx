import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const customFederation = require('libs/shared/configs/settings-config/src/lib/custom-federarion.js');

const config: ModuleFederationConfig = {
  ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  (config) => customFederation(config)
);
