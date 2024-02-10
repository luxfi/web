import type { 
  CTABlock, 
  HeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  VideoBlock
} from '@luxdefi/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'

const fireworks = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/fireworks-poster-comp.png',
  sources: ['/assets/video/fireworks-md.mp4'],
  dim: {md: {w: 1920, h: 1080}},
} as VideoBlock

export default [
  {
    blockType: 'screenful',
    columnSpecifiers: ['left top text-align-left mobile-center-headings', ''],
    mobileOrder: [1, 0], // right column first on mobile
    contentColumns: [
    [
      {
        blockType: 'heading',
        heading: 'The new 1%',
        level: 1,
        byline: 'Never sell your crypto again with our self-paying credit card.',
        bylineLevel: 6,
        spaceBetween: 6,
        spaceAfter: 4,
      } as HeadingBlock,
      {
        blockType: 'cta',
        specifiers: 'left mobile-2-columns',
        elements: [
          {
            title: "View Benefits",
            href: "/",
            variant: 'outline',
          },
          {
            title: "Sign Up",
            href: "https://lux.town",
            external: true,
            newTab: false,
            variant: 'primary',
          },
        ]
      } as CTABlock,
      { blockType: 'space'},
      {
        blockType: 'element',
        element: <p className='text-xxs italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      },
    ], [
      {
        blockType: 'image',
        src: '/assets/img/cards-1483x1074.png',
        alt: 'cards',
        dim: {w: 1483, h: 1074},
        fullWidthOnMobile: true,
        props: {
          sizes: '900px, 440px', 
          style: {
            width: '100%',
            height: 'auto'
          }
        }
      } as ImageBlock,
    ]],
    banner: fireworks, 
  } as ScreenfulBlock,
  {
    blockType: 'screenful',
    columnSpecifiers: ['left top text-align-left mobile-center-headings'],
    contentColumns: [[
      {
        blockType: 'heading',
        heading: 'Direct Ownership of Digital Assets',
        level: 1,
        byline: 'Retain complete sovereignty over your digital assets, backed by the security and transparency inherent in Lux blockchain technology.',
        bylineLevel: 6,
        spaceBetween: 6,
        spaceAfter: 4,
      } as HeadingBlock,
      {
        blockType: 'cta',
        specifiers: 'left',
        elements: [
          {
            title: "Compare Cards",
            href: "/",
            variant: 'outline',
          },
          {
            title: "Reserve",
            href: "https://lux.town",
            external: true,
            newTab: false,
            variant: 'primary',
          },
        ]
      } as CTABlock,
      { blockType: 'space'},
      {
        blockType: 'element',
        element: <p className='text-xxs italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      } as ElementBlock,
    ]],
    banner: fireworks, 
  } as ScreenfulBlock,
  {
    blockType: 'screenful',
    contentColumns: [
      [
        {
          blockType: 'heading',
          heading: 'Apply Pay',
          level: 1,
          byline: 'Experience seamless Apple Wallet integration with Lux Credit. The card doubles as an events pass ' +
            'and rewards card, complete with NFC support for seamless entry at elite Lux event and experiences.',
          bylineLevel: 0,
          spaceBetween: 6,
          spaceAfter: 4,
        } as HeadingBlock,
      ],
      [
        // second column is empty
      ]
    ],
    banner: fireworks, 
  } as ScreenfulBlock,
] as ScreenfulBlock[]