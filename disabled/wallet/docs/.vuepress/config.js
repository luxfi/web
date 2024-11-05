const path = require('path');

module.exports = {
  base: '/docs/',
  title: 'Debank & Lux',
  description: 'Document for Lux',
  nextLinks: false,
  prevLinks: false,
  dest: path.resolve(__dirname, '../../dist/docs'),
  themeConfig: {
    logo: '/debank-512.png'
  },
  head: [
    ['link', { rel: 'icon', href: `'https://cdn.lux.network/img/wallet/main-icon.svg` }]
  ],
}