import type CardsCarouselBlock from '@/blocks/def/cards-carousel'
import { type CTABlock, type EnhHeadingBlock, type ScreenfulBlock, type SpaceBlock } from '@hanzo/ui/blocks'
import type { ImageDef, LinkDef } from '@hanzo/ui/types'

export default {
  blockType: 'screenful',
  specifiers: 'vert-center',
  columnSpecifiers: ['vert-center center mobile-vert-center'],
  contentColumns: [[
    {blockType: 'enh-heading',
      specifiers: 'center',
      heading: {
        text: 'BROWSE CREDIT CARDS',
        level: 3,
      },
    } as EnhHeadingBlock,
    {blockType: 'space', level: 1} as SpaceBlock,
    {blockType: 'cards-carousel',
      defaultSlide: 1,
      slides: [
        {
          title: 'BLACK CARD',
          byline: 'in Cool Chrome',
          cta: {blockType: 'cta', elements: [{href: '/buy?sku=LXC-B-ABT', title: 'View Benefits', variant: 'outline'} as LinkDef]} as CTABlock,
          img: {blockType: 'image', src: '/assets/img/cards-flat/black-f-700x441.png', dim: {w: 700, h: 441 }, alt: 'Black card'} as ImageDef,
        },
        {
          title: 'ELITE CARD',
          byline: 'in Cool Chrome',
          cta: {blockType: 'cta', elements: [{href: '/buy?sku=LXC-E-24G', title: 'View Benefits', variant: 'outline', size: 'lg'} as LinkDef]} as CTABlock,
          img: {blockType: 'image', src: '/assets/img/cards-flat/gold-f-700x442.png', dim: {w: 700, h: 442}, alt: 'Elite card'} as ImageDef,
        },
        {
          title: 'FOUNDER CARD',
          byline: 'in Cool Chrome',
          cta: {blockType: 'cta', elements: [{href: '/buy?sku=LXC-F-CC', title: 'View Benefits', variant: 'outline', size: 'lg'} as LinkDef]} as CTABlock,
          img: {blockType: 'image', src: '/assets/img/cards-flat/chrome-cool-f-700x441.png', dim: {w: 700, h: 441}, alt: 'Founder card'} as ImageDef,
        },
        {
          title: 'SOVEREIGN CARD',
          byline: 'in Cool Chrome',
          cta: {blockType: 'cta', elements: [{href: '/buy?sku=LXC-S-RT', title: 'View Benefits', variant: 'outline', size: 'lg'} as LinkDef]} as CTABlock,
          img: {blockType: 'image', src: '/assets/img/cards-flat/titanium-f-700x441.png', dim: {w: 700, h: 441}, alt: 'Sovereign card'} as ImageDef,
        },
      ]
    } as CardsCarouselBlock,
  ]], 
} as ScreenfulBlock