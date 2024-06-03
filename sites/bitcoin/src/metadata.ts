import type { Metadata } from 'next'

export default {
  metadataBase: new URL('https://luxbitco.in'),
  title: {
    default: 'Lux Bitcoin',
    template: '%s | Lux Bitcoin',
  },
  description: `Lux Bitcoin is the world’s largest green energy-powered Bitcoin mining project, leading the way in energy efficiency and technological advancement. As a top holder of Bitcoin (“BTC”), we set ourselves apart by investing in cutting-edge technologies and employing innovative methods to transform green energy into economic value. Our efforts ensure that Bitcoin’s ledger remains up-to-date and secure, one block at a time.`,
  applicationName: 'Lux Bitcoin',
  authors: {name: 'Lux Partners Limited'},
  keywords: "Lux Network, Blockchain Bridge, Multi-Chain, EVM, Solana, Bitcoin, Cross-Chain, Interoperability, Cryptocurrency, Blockchain Technology",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/lux-site-icons/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/lux-site-icons/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/assets/lux-site-icons/android-chrome-192x192.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/assets/lux-site-icons/android-chrome-512x512.png'
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: "180x180",
      url: '/assets/lux-site-icons/apple-touch-icon.png'
    },
  ],
  //manifest: '/site.webmanifest',
  /*
  openGraph: {
    title: 'Lux BitcoinBridge Explorer - Explore your swaps',
    description: "Connect across EVM, Solana, Bitcoin, and other blockchains with Lux Network's advanced bridge technology. Experience secure and efficient cross-chain functionality.",
    images: 'https://explorer.bridge.lux.network/assets/img/opengraph-lux.jpg',
    type: 'website',
    url: "https://explorer.bridge.lux.network",

  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lux Bridge Explorer - Explore your swaps',
    description: "Experience seamless multi-chain connectivity with Lux Network's Blockchain Bridge. EVM, Solana, Bitcoin, and more, united.",
    images: 'https://explorer.bridge.lux.network/assets/img/opengraph-lux.jpg',
    site: '@luxfi'
  },
  */
  formatDetection: { telephone: false },
  other: {
    'msapplication-TileColor': '#000000'
  },
} as Metadata
