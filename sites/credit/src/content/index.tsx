import React from 'react'
import Image from 'next/image'

import type { 
  CTABlock, 
  HeadingBlock, 
  ElementBlock, 
  ImageBlock, 
  ScreenfulBlock, 
  VideoBlock
} from '@luxdefi/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'
import { ApplyTypography } from '@luxdefi/ui/primitives'

//import type BannerVideoBlock from '@/blocks/def/banner-video'
import type ElementTableBlock from '@/blocks/def/element-table'

const CardImage: React.FC = () => (
  <Image src='/assets/img/cards-1483x1361.png' alt='cards' width={150} height={137.5} loading='lazy' />
)

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
    columnSpecifiers: ['right top text-align-right'],
    mobileOrder: [1, 0], // mobile: card image on top
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
        specifiers: 'right mobile-2-columns',
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
      { blockType: 'space', level: 0},
      {
        blockType: 'element',
        element: <p className='text-xxs italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      },
    ], [
        // https://nextjs.org/docs/app/api-reference/components/image#responsive-image-with-fill
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
    specifiers: 'narrow-gutters constrain-to-lg',
    columnSpecifiers: ['center top'],
    contentColumns: [[
      {
        blockType: 'element-table',
        elements: [
          [
            {blockType: 'element', element: 'Cards'},
            {blockType: 'element', element: <CardImage />},
            {blockType: 'element', element: <CardImage />},
            {blockType: 'element', element: <CardImage />},
            {blockType: 'element', element: <CardImage />},
          ],
          [
            {blockType: 'element', element: 'Level'},
            {blockType: 'element', element: 'Black'},
            {blockType: 'element', element: 'Elite'},
            {blockType: 'element', element: 'Found'},
            {blockType: 'element', element: 'Sovereign'},
          ],
          [
            {blockType: 'element', element: 'Material'},
            {blockType: 'element', element: <p>Matte Carbon<br/><span className='font-normal'>or<br/></span>Stainless Steel</p>},
            {blockType: 'element', element: <p>24k Gold<br/><span className='font-normal'>or<br/></span>Sterling Silver</p>},
            {blockType: 'element', element: <p>Hologram<br/><span className='font-normal'>or<br/></span>Translucent</p>},
            {blockType: 'element', element: <p>100% Reflective<br/>Titanium</p>},
          ],
          [
            {blockType: 'element', element: <p>Initiation<br/>Fee</p>},
            {blockType: 'element', element: <p>$500<br/><span className='font-normal'>One-time</span></p>},
            {blockType: 'element', element: <p>$1,000<br/><span className='font-normal'>One-time</span></p>},
            {blockType: 'element', element: <p>$5,000<br/><span className='font-normal'>One-time</span></p>},
            {blockType: 'element', element: <p>$50,000<br/><span className='font-normal'>One-time</span></p>},
          ],
          [
            {blockType: 'element', element: <p>Annual<br/>Price</p>},
            {blockType: 'element', element: <p>$500<br/><span className='font-normal'>Per Year</span></p>},
            {blockType: 'element', element: <p>$1,000<br/><span className='font-normal'>Per Year</span></p>},
            {blockType: 'element', element: <p>$200<br/><span className='font-normal'>Per Year</span></p>},
            {blockType: 'element', element: <p>$5,000<br/><span className='font-normal'>Per Year</span></p>},
          ],
          [
            {blockType: 'element', element: <p>Supply</p>},
            {blockType: 'element', element: <p>Unlimited</p>},
            {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/100,000</span></p>},
            {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/10,000</span></p>},
            {blockType: 'element', element: <p>Limited<br/><span className='font-normal'>1/1,000</span></p>},
          ],
        ]
      } as ElementTableBlock,
      { blockType: 'space' },
      {
        blockType: 'element',
        element: 
          <ApplyTypography className='md:typography-h5:text-center max-w-screen-lg'>
            <h5>Open the door to a universe of digital assets with the Lux Card, serving as your key to effortless transactions and proficient asset management within the Lux ecosystem.</h5>
          </ApplyTypography>
      }
    ]],
    banner: fireworks, 
  } as ScreenfulBlock,
  {
    blockType: 'screenful',
    contentColumns: [
    [
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
    ],
    [
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
        specifiers: 'left mobile-2-columns',
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
    columnSpecifiers: ['top left', ''],
    contentColumns: [[
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
    ], [/* intentially empty */]], 
    banner: fireworks, 
  } as ScreenfulBlock
] as ScreenfulBlock[]