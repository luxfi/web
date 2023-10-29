import Button from '@/primitives/button'

import type * as C from '@/content/types'
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
      content: <h5>USD 45</h5>,
    },
    msCard: {
      blockType: 'card',
      cardType: 'full-width',
      title: 'Market Spot Price / lb',
      content: <MiniChart widgetProps={{
        symbol: 'COMEX:UX2!',
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
        <p>Drop size: 500,1000 lb</p>
        <p>NFT price: $45 / lb</p>
        <p>Market spot price:: ~$65 / lb</p>
      </>,
      media: {...media,
        dim: {
            // 1/8 size
          width: 70,
          height: 74
        }
      },
    } as C.CardBlock,
    {
      blockType: 'cta',
      items: [{
        component: <Button className='w-full -mt-2' variant='primary' size='lg'>Waitlist</Button>,
        modal
      }]
    } as C.CTABlock,

  ] as C.Block[]
} as C.ProductDetailBlock
