import type * as C from '@/content/types'

import MiniChart from '@/components/mini-chart'

import media from './video'

import YahooFinanceCard from './yahoo-finance-card.mdx'
import SilverStockInvestorCard from './silver-stock-investor-card.mdx'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX GOLD',
  desc: 'Get unprecedented access to gold with 1:1 asset-backed Lux Gold NFTs, sovereign ownership of physical gold without management fees, and mine-direct discount pricing.',
  media,
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Gold Price / Oz',
      content: <h5>USD 1950</h5>,
    },
    msCard: {
      blockType: 'card',
      cardType: 'full-width',
      title: 'Market Spot Price / Oz',
      content: <MiniChart widgetProps={{
        symbol: 'GOLD',
        width: '100%',
        height: '100%',
        locale: 'en',
        autosize: true,
        colorTheme: 'dark',
        dateRange: '1Y'
      }}/>
    }
  },
  blocks: [
    {
      blockType: 'heading',
      heading: 'NFT Drops'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      cardType: 'media-left',
      title: 'UPCOMING DROP',
      content: <>
        <p>Available: 10,000 oz</p>
        <p>Price: $1950 / oz</p>
        <p>Spot price:: ~$2005 / oz</p>
      </>,
      media: {...media,
        dim: {
            // quarter size
          width: 55,
          height: 82
        }
      },
    } as C.CardBlock,
    {
      blockType: 'cta',
      items: [{
        title: 'Buy Now',
        href: '/', // TOOD
        variant: 'primary'
      }]
    } as C.CTABlock,
    {
      blockType: 'space'
    },
    {
      blockType: 'heading',
      heading: 'Lux Gold News'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      cardType: 'left-justify-content bg-card',
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
      heading: 'Gold Market News'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      cardType: 'news',
      content: <SilverStockInvestorCard />,
      link: {
        title: 'Download PDF',
        href: '/assets/pdf/Silver-Stock-Investor.pdf'
      }
    } as C.CardBlock,

  ] as C.Block[]
} as C.ProductDetailBlock
