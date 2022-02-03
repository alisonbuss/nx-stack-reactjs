const withPlugins = require('next-compose-plugins');
const withNx = require('@nrwl/next/plugins/with-nx');
const withImages = require('next-images');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  useFileSystemPublicRoutes: true,
};

module.exports = withPlugins(
  [
    [withNx],
    [
      withImages,
      {
        esModule: true,
      },
    ],
  ],
  nextConfig,
);
