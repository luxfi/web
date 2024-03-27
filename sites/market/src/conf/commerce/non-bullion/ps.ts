import type { Product, Category } from '@hanzo/commerce/types'
import { passVideo } from '../videos'

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
      img: PS_IMG,
      video: passVideo,
      animation: 'https://prod.spline.design/Itggaf1iI7481mcU/scene.splinecode'
    },
  ] satisfies Product[]
} satisfies Category