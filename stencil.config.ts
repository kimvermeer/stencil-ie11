import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'ie11',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist',
      dir: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
