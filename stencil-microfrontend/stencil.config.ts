import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-microfrontend',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
