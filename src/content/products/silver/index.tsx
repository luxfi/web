import type * as C from '@/content/types'

import media from './video'

import LuxStandardMDX from './accordian/lux-standard-guar-backing.mdx'
import YahooFinanceCard from './yahoo-finance-card.mdx'
import SilverStockInvestorCard from './silver-stock-investor-card.mdx'

export default {
  blockType: 'product-detail',
  title: 'LUX SILVER',
  desc: 'Get unprecedented access to silver with 1:1 asset-backed Lux Silver NFTs, sovereign ownership of physical silver without management fees, and mine-direct discount pricing.',
  media,
  accordian: {
    blockType: 'accordian',
    items: [
      {
        trigger: 'Direct Ownership of Silver',
        content: "Each Lux Silver NFT is 1:1 backed by audit verified physical silver deposits under an exclusive agreement with publicly traded Viscount Mining Co. of Canada – see the Lux Standard for more."
      },
      {
        trigger: 'Lux Standard Guaranteed Backing',
        content: <LuxStandardMDX />
      },
    ]
  },
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Silver Price / Oz.',
      content: <h3>USD 20</h3>
    },
    msCard: {
      blockType: 'special',
      typeId: 'market-spot',
      options: {
        asset: 'silver'
      }
    }
  },
  blocks: [
    {
      blockType: 'heading',
      heading: 'Editions'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      cardType: 'mint',
      title: 'NEXT MINT',
      content: <>
        <p>Available: 10,000,1000 oz</p>
        <p>Price: $20 / oz</p>
        <p>Spot price:: ~$25 / oz</p>
      </>,
      media,
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
      heading: 'Lux Silver News'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      cardType: 'news',
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
      cardType: 'news',
      content: <SilverStockInvestorCard />,
      link: {
        title: 'Download PDF',
        href: '/assets/pdf/Silver-Stock-Investor.pdf'
      }
    } as C.CardBlock,

  ] as C.Block[]
} as C.ProductDetailBlock
