import React from 'react'
import Image from 'next/image'

import type { HeadingBlock, CTABlock, ImageBlock, ElementBlock, VideoBlock } from '@luxdefi/ui/blocks'
import { DEF_VIDEO_PROPS } from '@luxdefi/ui/util'
import { ApplyTypography } from '@luxdefi/ui/primitives'

import type BannerVideoBlock from '@/blocks/def/banner-video'
import type ElementTableBlock from '@/blocks/def/element-table'


const fireworks = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/fireworks-poster-comp.png',
  sources: ['/assets/video/fireworks-md.mp4'],
  dim: {md: {w: 1920, h: 1080}},
} as VideoBlock

export default [
  {
    blockType: 'banner-video',
    specifiers: 'right top text-align-right',
    content: [
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
        specifiers: 'left 2-cols-on-mobile',
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
    ],
    video: fireworks, 
  },
  {
    blockType: 'banner-video',
    content: [
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
        specifiers: 'left 2-cols-on-mobile',
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
    ],
    video: fireworks, 
  },
  {
    blockType: 'banner-video',
    specifiers: 'top left half-width',
    content: [
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
    video: fireworks, 
  }
] as BannerVideoBlock[]