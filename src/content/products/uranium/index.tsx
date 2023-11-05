import type * as C from '@/types/blocks'

import MiniChart from '@/components/mini-chart'

import DescMDX from './desc.mdx'

import media from './video'
import accordian from './accordian'
import modal from './waitlist-modal'

export default {
  blockType: 'product-detail',
  title: 'LUX URANIUM',
  desc: <DescMDX />,
  media,
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Uranium Price / lb',
      content: <h4>USD 45</h4>,
    },
    msCard: {
      blockType: 'card',
      cardType: 'full-width',
      title: 'Market Spot Price / lb',
      content: <MiniChart widgetProps={{
        symbol: 'UX2!',
        exchange: 'COMEX',
        autosize: true,
        colorTheme: 'dark',
        lineColor: "rgb(114, 27, 228)",
        bottomGradientColor: "rgba(255, 255, 255, 0.1)",
        dateRange: '60M',
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
        <p>Drop size: 500,1000 lb</p>
        <p>NFT price: $45 / lb</p>
        <p>Market spot price:: ~$65 / lb</p>
      </>,
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
            className: 'w-full -mt-2'  
          },
          action: {
            type: 'modal',
            def: modal
          }
        },
      ]
    } as C.CTABlock,

  ] as C.Block[]
} as C.ProductDetailBlock
