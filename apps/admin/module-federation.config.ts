import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'admin',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
