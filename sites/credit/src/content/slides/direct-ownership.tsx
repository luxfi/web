import type { 
  Block,
  CTABlock, 
  EnhHeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  SpaceBlock,
  VideoBlock,
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'

const byline = 'Retain complete sovereignty over your digital assets, backed by the security and transparency ' + 
  'inherent in Lux quantum safe blockchain technology.'
const finePrint = 'Borrow up to 50% of all your digital assets when you pay with the Lux Credit Card, ' + 
 "the most premium and exclusive card membership program around, that doesn't ever use or effect your credit score."

const fireworks = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/fireworks-poster-comp.png',
  sources: [ '/assets/video/fireworks-md.mp4'  ],
  dim: {md: {w: 656, h: 484}, lg: {w: 656, h: 484}},
  sizing: { vh: 25, mobile: {vw: 50} }
} as VideoBlock

export default {
  blockType: 'screenful',
  mobileOrder: [1, 0], // mobile: card image on top please
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center mobile-vert-center', 'vert-center mobile-vert-center'],
  banner: fireworks,
  contentColumns: [[
    {blockType: 'enh-heading', 
      heading: {text: 'DIRECT OWNERSHIP OF DIGITAL ASSETS', level: 1, mb: 2}, 
      byline: {text: byline, level: 6}, 
    } satisfies EnhHeadingBlock as Block,
    {blockType: 'space', level: 0} satisfies SpaceBlock as Block,
    {blockType: 'cta',
      specifiers: 'left mobile-2-columns',
      elements: [
        { title: "Compare", href: "/compare", variant: 'outline' },
        { title: "Buy", href: "/buy?sku=LXM-CR-F-CC&add=true", variant: 'primary' },
      ]
    } satisfies CTABlock as Block,
  ], [ 
    {blockType: 'image',
      src: '/assets/img/cards-2-flat-tit-1593x1231.png',
      alt: 'cards',
      fullWidthOnMobile: true,
      dim: {w: 1593, h: 1231},
      props: {
        sizes: '900px, 440px', 
        style: {
          width: '100%',
          height: 'auto'
        }
      }
    } satisfies ImageBlock as Block,
  ]], 
} as ScreenfulBlock