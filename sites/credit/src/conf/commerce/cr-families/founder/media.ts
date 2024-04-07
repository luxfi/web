import type { ImageDef } from "@hanzo/ui/types"
import { ProductMediaAccessor } from '@hanzo/commerce'

export default new ProductMediaAccessor({
  img: {
    'LXM-CR-F': {
      src: '/assets/img/products/credit/families/cards-dual-chr-psm-1475x1220.png', 
      dim: {w: 1475, h: 1220}
    } satisfies ImageDef,
    'LXM-CR-F-CC': {
      src: '/assets/img/products/credit/product/chrome-cool-f-700x441.png', 
      dim: {w: 700, h: 441}
    } satisfies ImageDef,
    'LXM-CR-F-IC': {
      src: '/assets/img/products/credit/product/chrome-irid-f-700x441.png', 
      dim: {w: 700, h: 441}
    } satisfies ImageDef,
  },

  anim: {
    'LXM-CR-F-CC': 'https://prod.spline.design/Wpu4L9F5H1tfK1dv/scene.splinecode',
    'LXM-CR-F-IC': 'https://prod.spline.design/O1mz-aE1mHafZXeX/scene.splinecode'
  }
})