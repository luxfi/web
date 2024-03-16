import type { Product, Category } from '@hanzo/commerce/types'

const PS_IMG = '/assets/img/cmmc/pass-800x800.png'

export default {
  id: 'LXM-PS',
  title: 'Lux Pass',
  img: PS_IMG, 
  products: [
    {
      id: 'LXM-PS-PS',
      sku: 'LXM-PS-PS',
      title: 'Lux Pass',
      titleAsOption: 'Lux Pass',
      categoryId: 'LXM-PS',
      price: 100,
      img: PS_IMG
    },
  ] satisfies Product[]
} satisfies Category