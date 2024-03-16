import type { Product, Category } from '@hanzo/commerce/types'

const CN_IMG = '/assets/img/cmmc/lux-coin-800x800.png'

const COIN = 0.00011

const K = 1000
const M = 1000 * K
const B = 1000 * M

export default {
  id: 'LXM-CN',
  title: 'Lux Coin',
  img: CN_IMG, 
  products: [
    {
      id: 'LXM-CN-10B',
      sku: 'LXM-CN-10B',
      title: 'Lux Coin, 10B',
      titleAsOption: '10B',
      categoryId: 'LXM-CN',
      price: 10 * B * COIN, // $11M
      img: CN_IMG
    },
    {
      id: 'LXM-CN-1B',
      sku: 'LXM-CN-1B',
      title: 'Lux Coin, 1B',
      titleAsOption: '1B',
      categoryId: 'LXM-CN',
      price: B * COIN, // $1.1M
      img: CN_IMG
    },
    {
      id: 'LXM-CN-100M',
      sku: 'LXM-CN-100M',
      title: 'Lux Coin, 100M',
      titleAsOption: '100M',
      categoryId: 'LXM-CN',
      price: 100 * M * COIN, // $110K
      img: CN_IMG
    },
    {
      id: 'LXM-CN-10M',
      sku: 'LXM-CN-10M',
      title: 'Lux Coin, 10M',
      titleAsOption: '10M',
      categoryId: 'LXM-CN',
      price: 10 * M * COIN, // $11K
      img: CN_IMG
    },
    {
      id: 'LXM-CN-1M',
      sku: 'LXM-CN-1M',
      title: 'Lux Coin, 1M',
      titleAsOption: '1M',
      categoryId: 'LXM-CN',
      price: M * COIN, // $1.1K
      img: CN_IMG
    },
  ] satisfies Product[]
} satisfies Category