import type { Product, Category } from '@hanzo/commerce/types'
import { validatorVideo } from '../videos'

const VL_IMG = '/assets/img/cmmc/validator-800x800.png'
const VL_IMG_DEF = {src: VL_IMG, dim: {w: 800, h: 800}}

export default {
  id: 'LXM-VL',
  title: 'Lux Validator',
  img: VL_IMG_DEF, 
  products: [
    {
      id: 'LXM-VL-GN',
      sku: 'LXM-VL-GN',
      categoryTitle: 'Lux Validator',
      fullTitle: 'Genesis Validator',
      optionLabel: 'Genesis Validator',
      categoryId: 'LXM-VL',
      price: 1000000, // 1M
      img: VL_IMG_DEF,
      video: validatorVideo
    },
    {
      id: 'LXM-VL-VL',
      sku: 'LXM-VL-VL',
      categoryTitle: 'Lux Validator',
      fullTitle: 'Validator',
      optionLabel: 'Validator',
      categoryId: 'LXM-VL',
      price: 100000, // 100K
      img: VL_IMG_DEF,
      video: validatorVideo
    },
    {
      id: 'LXM-VL-MI',
      sku: 'LXM-VL-MI',
      categoryTitle: 'Lux Validator',
      fullTitle: 'Mini Validator',
      optionLabel: 'Mini Validator',
      categoryId: 'LXM-VL',
      price: 10000, // 10K
      img: VL_IMG_DEF,
      video: validatorVideo
    },
    {
      id: 'LXM-VL-NA',
      sku: 'LXM-VL-NA',
      categoryTitle: 'Lux Validator',
      fullTitle: 'Nano Validator',
      optionLabel: 'Nano Validator',
      categoryId: 'LXM-VL',
      price: 1000, // 1K
      img: VL_IMG_DEF,
      video: validatorVideo
    },
  ] satisfies Product[]
} satisfies Category
