import type { Product, Family } from '@hanzo/commerce/types'
import { coin as video } from './videos'
import type { ImageDef } from '@hanzo/ui/types'

const CN_IMG = '/assets/img/products/coin/lux-coin-800x800.png'
const img = {
  src: CN_IMG, 
  dim: { w: 800, h: 800},
  rounded: 'full'
} satisfies ImageDef

const COIN = 0.00011

const K = 1000
const M = 1000 * K
const B = 1000 * M

export default {
  id: 'LXM-CN',
  title: 'Lux Coin',
  img, 
  products: [
    {
      id: 'LXM-CN-10B',
      sku: 'LXM-CN-10B',
      familyTitle: 'Lux Coin',
      optionLabel: '10B',
      byline: '10B byline',
      familyId: 'LXM-CN',
      price: 10 * B * COIN, // $11M
      img,
      video,
      mediaTransform: {
        // scale: 1
      }
    },
    {
      id: 'LXM-CN-1B',
      sku: 'LXM-CN-1B',
      familyTitle: 'Lux Coin',
      optionLabel: '1B',
      byline: '1B byline',
      familyId: 'LXM-CN',
      price: B * COIN, // $1.1M
      img,
      video,
      mediaTransform: {
        scale: 0.75
      }
    },
    {
      id: 'LXM-CN-100M',
      sku: 'LXM-CN-100M',
      familyTitle: 'Lux Coin',
      optionLabel: '100M',
      byline: '100M byline',
      familyId: 'LXM-CN',
      price: 100 * M * COIN, // $110K
      img,
      video,
      mediaTransform: {
        scale: 0.5
      }
    },
    {
      id: 'LXM-CN-10M',
      sku: 'LXM-CN-10M',
      familyTitle: 'Lux Coin',
      optionLabel: '10M',
      byline: '10M byline',
      familyId: 'LXM-CN',
      price: 10 * M * COIN, // $11K
      img,
      video,
      mediaTransform: {
        scale: 0.3
      }

    },
    {
      id: 'LXM-CN-1M',
      sku: 'LXM-CN-1M',
      familyTitle: 'Lux Coin',
      optionLabel: '1M',
      byline: '1M byline',
      familyId: 'LXM-CN',
      price: M * COIN, // $1.1K
      img,
      video,
      mediaTransform: {
        scale: 0.18
      }
    },
  ] satisfies Product[]
} satisfies Family