import type {
  CTABlock,
  EnhHeadingBlock,
  ScreenfulBlock,
} from '@hanzo/ui/blocks'
import type { VideoBlock, SpaceBlock } from '@hanzo/ui/blocks'
import type { LinkDef } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '@luxfi/data'

const video = {
  blockType: 'video',
  videoProps: { ...DEF_VIDEO_PROPS, preload: 'auto' },
  poster: 'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-poster.jpg',
  sources: [
    'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.mp4',
    'https://cdn.lux.network/commerce/vl/product/Lux-VALIDATOR-transcode.webm'
  ],
  dim: {
    md: { w: 500, h: 369 },
    lg: { w: 656, h: 484 },
  },
  className: 'object-contain',
} as VideoBlock

const byline = [
  'AI compute chain: decentralized inference and training',
  'Sub-second finality, unlimited scalability',
  'Post-quantum consensus with lattice encryption',
  'FHE for private AI computation, ZK on Z-Chain',
  'Specialized chains: P, X, C, D, T, Z, Q, B and more',
].join(' · ')

export default {
  blockType: 'screenful',
  columnSpecifiers: ['left vert-center text-align-left', 'right vert-center'],
  specifiers: 'vert-center',
  mobileOrder: [1, 0],
  contentColumns: [
    [
      {
        blockType: 'enh-heading',
        specifiers: 'left preheading-heading-font',
        preheading: { text: 'The consensus layer for AI computation and decentralized finance', level: 6, mb: 1 },
        heading: { text: 'LUX NETWORK', level: 0, mb: 2 },
        byline: { text: 'Post-Quantum, Privacy-First, AI-Native Infrastructure. ' + byline, level: 6 },
      } as EnhHeadingBlock,
      { blockType: 'space', level: 0 } as SpaceBlock,
      {
        blockType: 'cta',
        specifiers: 'left',
        elements: [
          { title: 'Start Building', href: 'https://lux.build', variant: 'primary', external: true } as LinkDef,
          { title: 'Read Docs', href: 'https://docs.lux.network', variant: 'secondary', external: true } as LinkDef,
          { title: 'Explore Network', href: 'https://explore.lux.network', variant: 'outline', external: true } as LinkDef,
        ],
      } as CTABlock,
      { blockType: 'space', level: 0 } as SpaceBlock,
    ],
    [video]
  ],
} as ScreenfulBlock
