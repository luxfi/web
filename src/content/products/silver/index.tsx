import type * as C from '@/types/block'

import MiniChart from '@/components/mini-chart'
import Icons from '@/components/icons'

import { markdown } from '@/util'

import YahooFinanceCard from './yahoo-finance-card.mdx'
import SilverStockInvestorCard from './silver-stock-investor-card.mdx'

import media from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX SILVER',
  desc: 'Get unprecedented access to silver with 1:1 asset-backed Lux Silver NFTs, sovereign ownership of physical silver without management fees, and mine-direct discount pricing.',
  media,
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Silver Price / Oz',
      content: <h4 className='font-heading text-lg md:text-3xl'>USD 20</h4>,
    },
    msCard: {
      blockType: 'card',
      specifiers: 'full-width',
      title: 'Market Spot Price / Oz',
      content: <MiniChart symbol='SILVER' exchange='TVC' /> 
    } 
  },
  blocks: [
    {
      blockType: 'heading',
      heading: 'Editions'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      specifiers: 'media-left heading-style-title',
      title: 'NEXT MINT',
      content: markdown(
`Available: 10,000,100 oz 

Price: $20 / oz 

Spot price: ~$25 / oz`
      ),
      media,
    } as C.CardBlock,
    {
      blockType: 'cta',
      elements: [{
        title: 'Buy Now',
        href: '/', // TOOD
        variant: 'primary',
        size: 'lg'
      }]
    } as C.CTABlock,
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
    {
      blockType: 'group',
      specifiers: 'layout-grid-2-starting-md',
      elements: [
        {
          blockType: 'card',
          specifiers: 'ghost reveal-content-on-hover small-icon-15x12',
          title: 'Secure Delivery',
          byline: 'Your silver, direct to your digital wallet.',
          icon: <Icons.secureDelivery width={45} height={25}/>,
          content: 'With our end-to-end encrypted delivery system, your digital silver tokens arrive directly in your secure wallet. No fuss, just utmost confidence.',
        } as C.CardBlock,
        {
          blockType: 'card',
          specifiers: 'ghost reveal-content-on-hover',
          title: 'Secure Delivery',
          byline: 'Your silver, direct to your digital wallet.',
          icon: <Icons.secureDelivery width={10} height={10} />,
          content: 'With our end-to-end encrypted delivery system, your digital silver tokens arrive directly in your secure wallet. No fuss, just utmost confidence.',
        } as C.CardBlock,
      ]
    } as C.GroupBlock,
  ] as C.Block[]
} as C.ProductDetailBlock
