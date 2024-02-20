import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'navbar',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
