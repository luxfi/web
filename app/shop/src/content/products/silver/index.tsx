import type { LinkDef } from '@hanzo/ui/types'
import type * as C from '@hanzo/ui/blocks'
import { formatCurrencyValue } from '@hanzo/commerce'

import { MiniChart, BuyButton } from '@luxfi/ui'
import { bullionPrice1oz } from '@luxfi/data/commerce'

import type ProductDetailBlock from '@/blocks/def/product-detail-block'

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
    priceCard: {blockType: 'card',
      title: 'Lux Silver Price  / Oz', 
      content: <div className='h-full w-full flex flex-col justify-center items-center gap-8'>
        <h4 className='text-center font-bold text-3xl'>{formatCurrencyValue(bullionPrice1oz('ag'))}</h4>
        <BuyButton skuPath='LXM-AG' className='lg:min-w-pr-65 min-w-pr-65'>Buy</BuyButton>
      </div>,
    } satisfies C.CardBlock,
    msCard: {blockType: 'card',
      specifiers: 'full-width',
      title: 'Market Spot Price / Oz',
      content: <MiniChart symbol='SILVER' exchange='TVC' />
    } satisfies C.CardBlock,
  },
  blocks: [ /*
    {blockType: 'element',
      element: <SelectProductButton familyId='LXM-AG-B' popupClx='w-[280px]'>Buy</SelectProductButton>
    } satisfies C.ElementBlock as C.Block,
    
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
    } satisfies C.HeadingBlock as C.Block,
    {
      blockType: 'card',
      specifiers: 'left-justify-content bg-card',
      content: <YahooFinanceCard />,
      cta: {blockType: 'cta',
        elements: [{
          title: 'View on Yahoo Finance',
          href: 'https://finance.yahoo.com/news/viscount-mining-lux-partners-ltd-114500431.html'
        } satisfies LinkDef]
      } 
    } satisfies C.CardBlock as C.Block,
    { blockType: 'space' } as C.Block,
    {
      blockType: 'heading',
      heading: 'Silver Market News'
    } satisfies C.HeadingBlock as C.Block,
    {
      blockType: 'card',
      specifiers: 'news',
      content: <SilverStockInvestorCard />,
      cta: {blockType: 'cta',
        elements: [{
        title: 'Download PDF',
        href: '/assets/pdf/Silver-Stock-Investor.pdf'
        } satisfies LinkDef]
      } satisfies C.CTABlock 
    } satisfies C.CardBlock as C.Block,
  ] satisfies C.Block[]
} satisfies ProductDetailBlock
