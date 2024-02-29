import type * as C from '@hanzo/ui/blocks/def'
import type ProductDetailBlock from '@/blocks/def/product-detail-block'

import { MiniChart } from '@hanzo/ui/common'
import { markdown } from '@hanzo/ui/util'

import { formatPrice, bullionPrice1oz } from '@/util'

import YahooFinanceCard from './yahoo-finance-card.mdx'
import SilverStockInvestorCard from './silver-stock-investor-card.mdx'

import video from './video'
import accordian from './accordian'



export default {
  blockType: 'product-detail',
  title: 'LUX SILVER',
  desc: 'Get unprecedented access to silver with 1:1 asset-backed Lux Silver NFTs, sovereign ownership of physical silver without management fees, and mine-direct discount pricing.',
  video: {...video, sizing: { vh: 80}},
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Silver Price / Oz',
      content: <h4 className='font-heading text-lg md:text-3xl'>{formatPrice(bullionPrice1oz('ag'), true)}</h4>,
      cta: {
        blockType: 'cta',
        elements: [
          {
            title: "Buy Now",
            href: "/buy/cat?lev1=AG&lev2=B",
            size: 'default',
            variant: 'primary',
          },
        ]
      } as C.CTABlock, 
    },
    msCard: {
      blockType: 'card',
      specifiers: 'full-width',
      title: 'Market Spot Price / Oz',
      content: <MiniChart symbol='SILVER' exchange='TVC' />
    }
  },
  blocks: [
    /*
    {
      blockType: 'heading',
      heading: 'Editions'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'media-left content-left heading-style-title',
      title: 'NEXT MINT',
      content: markdown(
`Available: 10,000,100 oz<br/>
Price: $20 / oz<br/>
Spot price: ~$25 / oz`
      ),
      video,
    } as C.CardBlock,
    */
    {
      blockType: 'space'
    },
    {
      blockType: 'heading',
      heading: 'Lux Silver News'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'left-justify-content bg-card',
      content: <YahooFinanceCard />,
      link: {
        title: 'View on Yahoo Finance',
        external: true,
        href: 'https://finance.yahoo.com/news/viscount-mining-lux-partners-ltd-114500431.html'
      }
    } as C.CardBlock,
    {
      blockType: 'space'
    },
    {
      blockType: 'heading',
      heading: 'Silver Market News'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'news',
      content: <SilverStockInvestorCard />,
      link: {
        title: 'Download PDF',
        href: '/assets/pdf/Silver-Stock-Investor.pdf'
      }
    } as C.CardBlock,
  ] as C.Block[]
} as ProductDetailBlock
