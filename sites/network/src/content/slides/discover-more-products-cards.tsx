import { 
  VideoBlockComponent,
  type Block,
  type ElementBlock,
  type EnhHeadingBlock,
  type GridBlock,
  type VideoBlock,
} from '@hanzo/ui/blocks'
import { COMMON_GRID_1_COL } from '@hanzo/ui/types'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'
import Link from 'next/link'

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
      w: 1172,
      h: 1920
    },
    lg: {
      w: 1172,
      h: 1920
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
      w: 758,
      h: 588
    },
    lg: {
      w: 758,
      h: 588
    },
  },
  sizing: { vh: 30, mobile: {vw: 70} }
} as VideoBlock

export default [
  {blockType: 'grid',
    grid: COMMON_GRID_1_COL,
    cells: [
      {blockType: 'element',
        element: <Link href='http://lux.market/silver' target='_blank' className='border rounded-md hover:border-primary-lux'><VideoBlockComponent block={silverVideo}/></Link>
      } as ElementBlock,
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'SILVER', level: 4},
      } as EnhHeadingBlock,
    ]
  } as GridBlock,
  {blockType: 'grid',
  grid: COMMON_GRID_1_COL,
    cells: [
      {blockType: 'element',
        element: <Link href='https://lux.market/credit' target='_blank' className='border rounded-md hover:border-primary-lux'><VideoBlockComponent block={creditVideo}/></Link>
      } as ElementBlock,
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'CREDIT', level: 4},
      } as EnhHeadingBlock,
    ]
  } as GridBlock,
] as Block[]