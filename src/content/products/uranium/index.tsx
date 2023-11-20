
import type * as C from '@/types/block'

import MiniChart from '@/components/mini-chart'

import { markdown } from '@/util'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

import Lilamax from './lilamax-from-nasdaq'
import UN2050MDX from './un-2050.mdx'

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
      content: <h4 className='font-heading text-lg md:text-3xl'>USD 45</h4>,
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
      specifiers: 'layout-grid-2-starting-md',
      elements: [
        {
          blockType: 'card',
          specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
          media: {
            blockType: 'image',
            image: '/assets/img/press-cointelegraph-white-transparent.png',
            dim: {
              w: 160,
              h: 27
            }
          },
          cta: {
            blockType: 'cta',
            elements: [{
              title: 'View on Coin Telegraph',
              href: 'https://cointelegraph.com/press-releases/billions-of-real-world-asset-backed-nfts-are-coming-to-enable-the-next-killer-web3-use-case',
              external: true,
            }]
          },
          content: markdown(`
> Asset-backed financial NFTs will be the driver of the next NFT killer use case, 
> and we are excited to partner with Lux to pioneer this vision. 

<cite>– Vera Labs CEO</cite>
          `),
        } as C.CardBlock,
        {
          blockType: 'card',
          specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
          media: {
            blockType: 'image',
            image: '/assets/img/press-mining-white-p-500.png',
            dim: {
              w: 90,
              h: 21
            }
          },
          cta: {
            blockType: 'cta',
            elements: [{
              title: 'View on Mining Review',
              href: 'https://www.miningreview.com/uranium/madison-metals-and-lux-create-first-uranium-backed-nft',
              external: true,
            }]
          } ,
          content: 'Madison Metals has signed a historic and first-of-its-kind uranium forward sales agreement with Lux Partners for the tokenization of up to 20 million pounds of uranium.'
        } as C.CardBlock,
        {
          blockType: 'card',
          specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
          media: {
            blockType: 'image',
            image: '/assets/img/press-globe-newswire-white.png',
            dim: {
              w: 130,
              h: 30
            }
          },
          cta: {
            blockType: 'cta',
            elements: [{
              title: 'View on Globe Newswire',
              href: 'https://www.globenewswire.com/news-release/2023/09/30/2526347/0/en/Madison-Metals-Signs-Uranium-Forward-Sales-Agreement-and-Creates-the-First-Uranium-backed-NFT-with-Lux-Partners.html',
              external: true,
            }]
          } ,
          content: 'Madison Metals signs uranium forward sales agreement and creates the first uranium-backed NFT with Lux Partners.'
        } as C.CardBlock,
        {
          blockType: 'card',
          specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
          media: {
            blockType: 'image',
            image: '/assets/img/press-mining-weekly-white-p-500.png',
            dim: {
              w: 130,
              h: 24.5
            }
          },
          cta: {
            blockType: 'cta',
            elements: [{
              title: 'View on Mining Weekly',
              href: 'https://www.miningweekly.com/article/madison-reports-initial-sales-of-first-uranium-backed-nft-2023-10-28',
              external: true,
            }]
          } ,
          content: 'The initial sales have exceeded all Lux projections as the non-fungible tokens continue to offer an exceptional value proposition.',
        } as C.CardBlock

      ] as C.Block[]

    },
    {
      blockType: 'card',
      specifiers: 'bg-card no-outer-border content-left',
      content: <Lilamax />,
    } as C.CardBlock,
    {
      blockType: 'space',
      level: 3
    } as C.SpaceBlock,
    {
      blockType: 'heading',
      heading: 'Uranium Market News'
      
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
      media: {
        blockType: 'image',
        image: '/assets/img/press-ga.png',
        dim: {
          w: 120,
          h: 30
        }
      },
      cta: {
        blockType: 'cta',
        elements: [{
          title: 'View on Global Atomic',
          href: 'https://globalatomiccorp.com/investors/news/news-details/2023/Global-Atomic-Signs-Letter-of-Intent--With-Western-Utility-for-Uranium-Supply/default.aspx',
          external: true,
        }]
      } ,
      content: 'Global Atomic receives an LOI from a second major western utility for up to 2.4 million lbs. of uranium at $58 per lb.',
    } as C.CardBlock,
    {
      blockType: 'card',
      specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
      media: {
        blockType: 'image',
        image: '/assets/img/press-the-tomorrow-investor-white.png',
        dim: {
          w: 150,
          h: 16.5
        }
      },
      cta: {
        blockType: 'cta',
        elements: [{
          title: 'View on The Tomorrow Investor',
          href: 'https://tomorrowinvestor.com/russian-invasion-of-ukraine-triggers-mother-of-all-uranium-bull-markets-2/6536/',
          external: true,
        }]
      } ,
      content: 'The rise of nuclear power is being fueled by those who were once its biggest critics: Environmentalists... More than half of global uranium supply under severe threat.'
    } as C.CardBlock,
    {
      blockType: 'card',
      specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
      media: {
        blockType: 'image',
        image: '/assets/img/press-us-doe.png',
        dim: {
          w: 100,
          h: 26.5
        }
      },
      cta: {
        blockType: 'cta',
        elements: [{
          title: 'View on U.S. Department of Energy',
          href: 'https://www.energy.gov/ne/articles/doe-report-finds-hundreds-retiring-coal-plant-sites-could-convert-nuclear',
          external: true,
        }]
      },
      content: 'US Department of Energy report finds hundreds of retiring coal plant sites could convert to nuclear.'
    } as C.CardBlock,
    {
      blockType: 'card',
      specifiers: 'bg-card no-outer-border links-w-arrow typography-sm',
      media: {
        blockType: 'image',
        image: '/assets/img/press-wnn-white.png',
        dim: {
          w: 70,
          h: 29.5
        }
      },
      cta: {
        blockType: 'cta',
        elements: [{
          title: 'View on World Nuclear News',
          href: 'https://www.world-nuclear-news.org/Articles/IAEA-increases-projection-of-nuclear-power-growth',
          external: true,
        }]
      } ,
      content: 'Climate change and the energy crisis has led to more countries seeing nuclear as a solution... By 2050, nuclear energy capacity is projected to more than double.',
    } as C.CardBlock,
    {
      blockType: 'space',
      level: 2
    } as C.SpaceBlock,
    {
      blockType: 'heading',
      heading: 'Uranium Market Overview'
    } as C.HeadingBlock,
    {
      blockType: 'space',
    } as C.SpaceBlock,
    {
      blockType: 'card',
      specifiers: 'ghost content-before heading-style-title',
      title: 'Demand is outpacing supply.',
      media: { blockType: 'image',
        image: '/assets/img/uranium-overview-1.png',
        dim: { w: 555, h: 308.5 }
      },
      content: 'Uranium production is expected to stagnate as producers aren\'t overly-incentivized until prices rise, all while nuclear demand is increasing.',
    } as C.CardBlock,
    {
      blockType: 'space',
    } as C.SpaceBlock,
    {
      blockType: 'card',
      specifiers: 'ghost content-before heading-style-title',
      title: 'There is an emerging uranium bull run.',
      media: { blockType: 'image',
        image: '/assets/img/image-lux-uranium-bull-run.png',
        dim: { w: 555, h: 318 }
      },
      content: 'Historically, uranium prices experience periods of exponential growth surrounding catalyst events, and now, non-utility buyers appear to be pushing spot prices up.',
    } as C.CardBlock,
    {
      blockType: 'space',
    } as C.SpaceBlock,
    { 
      blockType: 'card',
      specifiers: 'ghost content-before heading-style-title',
      title: 'Nuclear demand is high and growing.',
      media: { blockType: 'image',
        image: '/assets/img/image-lux-uranium-3.png',
        dim: { w: 555, h: 374 }
      },
      content: 'Nuclear generation already accounts for 10% of the world\'s energy, over 150 reactors are being built or are planned, and global decarbonization goals are driving a major shift toward nuclear energy.',
    } as C.CardBlock,
    {
      blockType: 'space',
    } as C.SpaceBlock,
    { 
      blockType: 'card',
      specifiers: 'ghost content-before heading-style-title',
      title: 'The UN\'s 2050 Net Zero Goals can\'t be achieved without nuclear energy.',
      media: { blockType: 'image',
        image: '/assets/img/image-lux-uranium-4.png',
        dim: { w: 555, h: 280 }
      },
      content: <UN2050MDX />
    } as C.CardBlock,

    
  ] as C.Block[]
} as C.ProductDetailBlock
