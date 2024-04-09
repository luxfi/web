import type { Family } from '@hanzo/commerce/types'

import { gold, silver } from '../videos'

export default (c: Family): Family => {
  for (let prod of c.products) {
    if (c.parentTitle === 'Lux Gold') {
      prod.video = gold
    }
    if (c.parentTitle === 'Lux Silver') {
      prod.video = silver
    }
  }
  return c
}
