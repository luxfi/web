import type { Metadata } from 'next'

export default {
  metadataBase: new URL('https://luxco.in'),
  title: {
    default: 'Lux Coin',
    template: '%s | Lux Coin',
  },
  description: 'LUX is a groundbreaking digital currency with a structured distribution model that ensures fair access for all participants. Priced transparently and distributed over 369 days, Lux Coin allows users to engage deeply with the Lux ecosystem, participate in staking, governance, and decentralized finance, all while enjoying quantum-safe security. Designed to empower a diverse community of users, Lux Coin combines innovation, inclusivity, and robust security, setting a new standard in the world of digital assets. Discover Lux Coin and be part of the future of finance.',
  applicationName: 'Lux Coin',
  authors: {name: 'Lux Partners Limited'},
  keywords: "LUX, Lux Network, Blockchain Bridge, Multi-Chain, EVM, Solana, Bitcoin, Cross-Chain, Interoperability, Cryptocurrency, Blockchain Technology",
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
    title: 'Lux Bridge Explorer - Explore your swaps',
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
