import type { 
  Block,
  CarteBlancheBlock,
  EnhHeadingBlock,
  GridBlock,
  VideoBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_1_COL } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const silverVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/luxsilver-poster.jpg',
  sources: [
    '/assets/video/luxsilver.mp4',
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

const creditVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/LUX-CARD-poster.jpg',
  sources: [
    '/assets/video/LUX-CARD-transcode.mp4', 
    '/assets/video/LUX-CARD-transcode.webm'
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

export default [
  {blockType: 'grid',
    grid: COMMON_GRID_1_COL,
    cells: [
      {blockType: 'carte-blanche',
        content: [silverVideo]
      } as CarteBlancheBlock,
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'SILVER', level: 3},
      } as EnhHeadingBlock,
    ]
  } as GridBlock,
  {blockType: 'grid',
  grid: COMMON_GRID_1_COL,
    cells: [
      {blockType: 'carte-blanche',
        content: [creditVideo]
      } as CarteBlancheBlock,
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'CREDIT', level: 3},
      } as EnhHeadingBlock,
    ]
  } as GridBlock,
] as Block[]