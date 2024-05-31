const withMDX = require('@next/mdx')()
const svgrPluginConfig = require('./next-conf/svgr.next.config')
const watchPluginConfig = require('./next-conf/watch.next.config')

const env = process.env.NODE_ENV

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '**',
      },
      {
        protocol: "http",
        hostname: "localhost",
      }
    ],    
 },
    // https://stackoverflow.com/questions/72621835/how-to-fix-you-may-need-an-appropriate-loader-to-handle-this-file-type-current
  transpilePackages: [
    '@hanzo/ui', 
    '@hanzo/auth', 
    '@hanzo/commerce', 
    '@luxfi/core'
  ],
  productionBrowserSourceMaps: true,
  webpack: (config, { dev }) => {
    let conf = svgrPluginConfig(config)
    if (dev) {
      //conf =  watchPluginConfig(conf) 
        //https://github.com/vercel/next.js/discussions/33929
      config.snapshot = {
        ...(config.snapshot ?? {}),
        // Add all node_modules but @hanzo module to managedPaths
        // Allows for hot refresh of changes to @hanzo module
        managedPaths: [/^(.+?[\\/]node_modules[\\/])(?!@hanzo)/],
      };
      config.cache = false
    }
    return conf

  }
}

module.exports = withMDX(nextConfig)
