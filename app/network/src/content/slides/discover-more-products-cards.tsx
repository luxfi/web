import Link from 'next/link'

import { 
  VideoBlockComponent,
  type Block,
  type ElementBlock,
  type EnhHeadingBlock,
  type VideoBlock,
  type CarteBlancheBlock,
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxfi/data'


const silverVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/commerce/silver/product/luxsilver-poster.jpg',
  sources: [
    '/assets/commerce/silver/product/luxsilver.mp4',
  ],
  dim: {md: { w: 1172, h: 1920}, lg: {w: 1172, h: 1920}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

const keyVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/commerce/ps/product/LUX-PASS-poster.jpg',
  sources: [
    '/assets/commerce/ps/product/LUX-PASS-transcode.mp4',
  ],
  dim: {md: { w: 658, h: 720}, lg: {w: 658, h: 720}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

const cardVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/commerce/cr/product/black-f-700x441.jpg',
  sources: [
    '/assets/commerce/cr/product/gunmetal-card.mp4',
  ],
  dim: {md: { w: 1920, h: 1080}, lg: {w: 1920, h: 1080}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

export default [
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      {blockType: 'element',
        element: <>
          <Link href='https://lux.market/silver' target='_blank' className='border rounded-md hover:border-primary-lux h-[15rem] sm:h-[20rem] p-1'>
            <VideoBlockComponent block={silverVideo} className='h-full !my-0'/>
          </Link>
        </>
      } as ElementBlock,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'SILVER', level: 3},
      } as EnhHeadingBlock,
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      {blockType: 'element',
        element: <>
          <Link href='https://lux.market/key' target='_blank' className='border rounded-md hover:border-primary-lux h-[15rem] sm:h-[20rem] p-1'>
            <VideoBlockComponent block={keyVideo} className='h-full !my-0'/>
          </Link>
        </>
      } as ElementBlock,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'KEY', level: 3},
      } as EnhHeadingBlock,
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      {blockType: 'element',
        element: <>
          <Link href='https://lux.credit' target='_blank' className='border rounded-md hover:border-primary-lux h-[15rem] sm:h-[20rem] p-1 content-center'>
            <VideoBlockComponent block={cardVideo} className='h-full !my-0'/>
          </Link>
        </>
      } as ElementBlock,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'CREDIT', level: 3},
      } as EnhHeadingBlock,
    ]
  } as CarteBlancheBlock,
] as Block[]