const path = require('path')
const withMDX = require('@next/mdx')()
const svgrPluginConfig = require('./next-conf/svgr.next.config')
const watchPluginConfig = require('./next-conf/watch.next.config')


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lux.network',
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
    '@luxfi/ui',
    '@luxfi/data',
    '@luxfi/menu-icons'
  ],
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    let conf = svgrPluginConfig(config)

    // Exclude server action files for static export
    conf.module.rules.push({
      test: /server-actions|square-payment|promo-codes/,
      use: 'null-loader'
    })

    // Deduplicate React to prevent multiple instances
    const reactPath = path.dirname(require.resolve('react/package.json'))
    const reactDomPath = path.dirname(require.resolve('react-dom/package.json'))

    // Replace server action imports with empty modules and dedupe React
    conf.resolve.alias = {
      ...conf.resolve.alias,
      '@luxfi/ui/server-actions': false,
      'react': reactPath,
      'react-dom': reactDomPath,
      'react/jsx-runtime': path.join(reactPath, 'jsx-runtime'),
      'react/jsx-dev-runtime': path.join(reactPath, 'jsx-dev-runtime'),
      'react-dom/server': path.join(reactDomPath, 'server'),
      'react-dom/client': path.join(reactDomPath, 'client'),
    }

    // Ensure symlinks are resolved
    conf.resolve.symlinks = true

    return conf
  }
}

module.exports = withMDX(nextConfig)
