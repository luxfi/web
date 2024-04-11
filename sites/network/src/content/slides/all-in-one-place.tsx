import type {
  GridBlock,
  EnhHeadingBlock,
  ImageBlock,
  ScreenfulBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_2_COL } from '@hanzo/ui/types'

const bylines = [
  'Lux Wallet is non-custodial, whereby assets are self-managed instead of third-party managed, private and secure with support for crypto currencies, both public and private, fiat currencies, security tokens, and NFT\'s.',
  'Lux Swap is a decentralized exchange, enabling secure, trustless or no middle-man trading of cryptocurrencies, fiat currencies, commodities, and securities.'
]

export default {
  blockType: 'screenful',
  columnSpecifiers: ['center vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      icon: '/assets/content/icon-apps-475.png',
      iconSize: 40,
      preheading: { text: 'NETWORK APPS', level: 5, mb: 2 },
      heading: { text: 'ALL IN ONE PLACE', level: 1 },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 1},
    {blockType: 'grid',
      grid: COMMON_GRID_2_COL,
      cells: [
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX WALLET', level: 3, mb: 6 },
          byline: { text: bylines[0], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-balance-gt-p-500.png',
          alt: 'Lux Wallet',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX SWAP', level: 3, mb: 6 },
          byline: { text: bylines[1], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-swap-gt-p-500.png',
          alt: 'Lux Swap',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX BRIDGE', level: 3, mb: 6 },
          byline: { text: bylines[0], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-zchain-p-500.png',
          alt: 'Lux Bridge',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
        {blockType: 'enh-heading',
          specifiers: 'align-middle',
          heading: { text: 'LUX EXPLORER', level: 3, mb: 6 },
          byline: { text: bylines[1], level: 0 },
        } as EnhHeadingBlock,
        {blockType: 'image',
          src: '/assets/content/image-lux-explore-p-500.png',
          alt: 'Lux Explorer',
          dim: { h: 250, w: 420 },
        } as ImageBlock,
      ],
    } as GridBlock
  ]]
} as ScreenfulBlock
