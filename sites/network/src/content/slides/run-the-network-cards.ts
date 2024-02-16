import type { Block, VideoCardBlock } from '@hanzo/ui/blocks'

const bylines = [
  'Help run Lux Network by becoming a validator node and earn a % from every transaction fee.',
  'Buy and stake LUX Coin to participate in the DAO to help govern the network.',
]

export default [
  {blockType: 'video-card',
    video: {
      poster: '/assets/video/Lux-VALIDATOR-poster.jpg',
      sources: [
        '/assets/video/Lux-VALIDATOR-transcode.mp4', 
        '/assets/video/Lux-VALIDATOR-transcode.webm'
      ],
      dim: {md: {w: 656, h: 484}, lg: {w: 656, h: 484}}
    },
    title: 'VALIDATOR',
    description: bylines[0],
    cta: {blockType: 'cta',
      elements: [
        {title: 'Learn more',
          href: 'https://lux.market/lux-validator',
          variant: 'outline'
        }
      ]
    }
  } as VideoCardBlock,
  {blockType: 'video-card',
    video: {
      poster: '/assets/video/LUX-COIN-poster.jpg',
      sources: [
        '/assets/video/LUX-COIN-transcode.mp4', 
        '/assets/video/LUX-COIN-transcode.webm'
      ],
      dim: {md: {w: 546, h: 540}, lg: {w: 546, h: 540}}
    },
    title: 'COIN',
    description: bylines[1],
    cta: {blockType: 'cta',
      elements: [
        {title: 'Learn more',
          href: 'https://lux.market/lux-coin',
          variant: 'outline'
        }
      ]
    }
  } as VideoCardBlock,
] as Block[]