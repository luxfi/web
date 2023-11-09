
import type * as C from '@/types/block'

import MiniChart from '@/components/mini-chart'

import { markdown } from '@/util'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX URANIUM',
  desc: markdown(
`
Get unprecedented access to uranium with 1:1 asset-backed Lux Uranium NFTs, sovereign ownership of physical uranium without management fees, and mine-direct discount pricing.

<br/>
Help secure clean energy for this generation and the next.
`    
  ),
  media,
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Uranium Price / lb',
      content: <h4 className='font-heading text-3xl'>USD 45</h4>,
    },
    msCard: {
      blockType: 'card',
      specifiers: 'full-width',
      title: 'Market Spot Price / lb',
      content: <MiniChart symbol='UX2!' exchange='COMEX' /> 
    }
  },
  blocks: [
    {
      blockType: 'heading',
      heading: 'NFT Drops'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'media-left heading-style-title',
      title: 'UPCOMING DROP',
      content: markdown(`
Drop size: 500,100 lbs 

NFT price: $45 / lb 

Market spot price:: ~$65 / lb 
      `),
      media,
    } as C.CardBlock,
    {
      blockType: 'cta',
      elements: [
        {
          text: 'Waitlist',
          props: {
            variant: 'primary',
            size: 'lg', 
          },
          action: {
            type: 'modal',
            def: modal
          }
        },
      ]
    } as C.CTABlock,
    {
      blockType: 'space'
    },
    {
      blockType: 'card',
      specifiers: 'media-left appear-disabled video-use-poster heading-style-title',
      title: 'SOLD OUT',
      content: markdown(`
Drop size: 122,000 lbs 

NFT price: $42 / lb 

Market spot price: $52 / lb 
      `),
      media,
    } as C.CardBlock,
    {
      blockType: 'space',
      level: 6
    },
    {
      blockType: 'heading',
      heading: 'Lux Uranium News'
    } as C.HeadingBlock,
    {
      blockType: 'group',
      specifiers: 'grid-2',
      elements: [
        {
          blockType: 'card',
          specifiers: 'bg-card no-outer-border link-entire-on-mobile typography-sm',
          media: {
            blockType: 'image',
            image: '/assets/img/press-cointelegraph-white-transparent.png',
            dim: {
              width: 160,
              height: 27
            }
          },
          cta: {
            blockType: 'cta',
            elements: [{
              title: 'View on Coin Telegraph',
              href: 'https://cointelegraph.com/press-releases/billions-of-real-world-asset-backed-nfts-are-coming-to-enable-the-next-killer-web3-use-case'
            }]
          },
          content: 'Asset-backed financial NFTs will be the driver of the next NFT killer use case, and we are excited to partner with Lux to pioneer this vision – Vera Labs CEO.',
        } as C.CardBlock,
        {
          blockType: 'card',
          specifiers: 'bg-card no-outer-border link-entire-on-mobile',
          media: {
            blockType: 'image',
            image: '/assets/img/press-cointelegraph-white-transparent.png',
            dim: {
              width: 160,
              height: 27
            }
          },
          cta: {
            blockType: 'cta',
            elements: [{
              title: 'View on Coin Telegraph',
              href: 'https://cointelegraph.com/press-releases/billions-of-real-world-asset-backed-nfts-are-coming-to-enable-the-next-killer-web3-use-case'
            }]
          } ,
          content: 'Asset-backed financial NFTs will be the driver of the next NFT&nbsp;killer use case, and we are excited to partner with Lux to pioneer this vision – Vera Labs CEO.',
        } as C.CardBlock
      ] as C.Block[]

    },



  ] as C.Block[]
} as C.ProductDetailBlock
