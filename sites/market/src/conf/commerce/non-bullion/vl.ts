import type { Product, Category } from '@hanzo/commerce/types'

const VL_IMG = '/assets/img/cmmc/validator-800x800.png'

export default {
  id: 'LXM-VL',
  title: 'Lux Validator',
  img: VL_IMG, 
  products: [
    {
      id: 'LXM-VL-GN',
      sku: 'LXM-VL-GN',
      title: 'Genesis Validator',
      titleAsOption: 'Genesis Validator',
      categoryId: 'LXM-VL',
      price: 1000000, // 1M
      img: VL_IMG
    },
    {
      id: 'LXM-VL-VL',
      sku: 'LXM-VL-VL',
      title: 'Validator',
      titleAsOption: 'Validator',
      categoryId: 'LXM-VL',
      price: 100000, // 100K
      img: VL_IMG
    },
    {
      id: 'LXM-VL-MI',
      sku: 'LXM-VL-MI',
      title: 'Mini Validator',
      titleAsOption: 'Mini Validator',
      categoryId: 'LXM-VL',
      price: 10000, // 10K
      img: VL_IMG
    },
    {
      id: 'LXM-VL-NA',
      sku: 'LXM-VL-NA',
      title: 'Nano Validator',
      titleAsOption: 'Nano Validator',
      categoryId: 'LXM-VL',
      price: 1000, // 1K
      img: VL_IMG
    },
  ] satisfies Product[]
} satisfies Category
