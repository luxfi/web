//const withMDX = require('@next/mdx')()
//const svgrWebpackConfig = require('./svgr.next.config')
//
///** @type {import('next').NextConfig} */
//const nextConfig = {
//  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
//  reactStrictMode: true,
//  images: {
//    remotePatterns: [
//      {
//        protocol: 'https',
//        hostname: 'img.youtube.com',
//        pathname: '**',
//      },
//      {
//        protocol: "http",
//        hostname: "localhost",
//      }
//    ],
// },
//    // https://stackoverflow.com/questions/72621835/how-to-fix-you-may-need-an-appropriate-loader-to-handle-this-file-type-current
//  transpilePackages: [
//    '@hanzo/ui',
//    '@hanzo/auth',
//    '@hanzo/commerce',
//    '@luxfi/ui',
//    '@luxfi/data'
//  ],
//  productionBrowserSourceMaps: true,
//  webpack: svgrWebpackConfig // if we need others, set up a chain of calls.
//}
//
//module.exports = withMDX(nextConfig)

const withMDX = require('@next/mdx')();
const svgrWebpackConfig = require('./svgr.next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';
const isStaging = process.env.VERCEL_ENV === 'staging';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  transpilePackages: [
    '@hanzo/ui',
    '@hanzo/auth',
    '@hanzo/commerce',
    '@luxfi/ui',
    '@luxfi/data',
  ],
  productionBrowserSourceMaps: process.env.ENABLE_SOURCEMAPS === 'true',
  webpack: (config, { isServer }) => {
    // Merge SVGR Webpack configuration
    svgrWebpackConfig(config, { isServer });

    // Add CSS/PostCSS configuration
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss/nesting'),
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    });

    // Enable Webpack's filesystem caching for faster builds
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    };

    return config;
  },
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
