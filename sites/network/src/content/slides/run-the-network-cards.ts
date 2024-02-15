import type { 
  Block,
  CarteBlancheBlock,
  EnhHeadingBlock,
  VideoBlock,
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const validatorVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/Lux-VALIDATOR-poster.jpg',
  sources: [
    '/assets/video/Lux-VALIDATOR-transcode.mp4', 
    '/assets/video/Lux-VALIDATOR-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    md: {
      w: 270,
      h: 210
    },
    lg: {
      w: 270,
      h: 210
    },
  },
  sizing: { vh: 30, mobile: {vw: 70} }
} as VideoBlock

const coinVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/LUX-COIN-poster.jpg',
  sources: [
    '/assets/video/LUX-COIN-transcode.mp4', 
    '/assets/video/LUX-COIN-transcode.webm'
  ],
    // Determin aspect ration from dims manually...
    // https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
  dim: {
    md: {
      w: 270,
      h: 210
    },
    lg: {
      w: 270,
      h: 210
    },
  },
  sizing: { vh: 30, mobile: {vw: 70} }
} as VideoBlock

const bylines = [
  'Help run Lux Network by becoming a validator node and earn a % from every transaction fee.',
  'Buy and stake LUX Coin to participate in the DAO to help govern the network.',
]
 // re images: https://nextjs.org/docs/pages/api-reference/components/image#responsive-image-with-aspect-ratio
export default [
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    content: [validatorVideo,
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'VALIDATOR', level: 2, mb: 5},
        byline: {text: bylines[0], level: 6}
      } as EnhHeadingBlock,
      {blockType: 'space', level: 0},
      {blockType: 'cta',
        elements: [
          {title: 'Learn more',
            href: 'https://lux.market/lux-validator',
            variant: 'outline'
          }
        ]
      }
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'big-padding no-inner-borders',
    content: [coinVideo,
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'COIN', level: 2, mb: 5},
        byline: {text: bylines[0], level: 6}
      } as EnhHeadingBlock,
      {blockType: 'space', level: 0},
      {blockType: 'cta',
        elements: [
          {title: 'Learn more',
            href: 'https://lux.market/lux-coin',
            variant: 'outline'
          }
        ]
      }
    ]
  } as CarteBlancheBlock,
] as Block[]