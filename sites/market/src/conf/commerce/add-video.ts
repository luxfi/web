import type { Category } from '@hanzo/commerce/types'

import { goldVideo, silverVideo } from './videos'

export default (c: Category): Category => {
  for (let prod of c.products) {
    if (c.parentTitle === 'Lux Gold') {
      prod.video = goldVideo
    }
    if (c.parentTitle === 'Lux Silver') {
      prod.video = silverVideo
    }
  }
  return c
}
