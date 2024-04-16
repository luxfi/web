import { footer, mainNav, type SiteDef  } from '@luxfi/core/site-def'

import commerce from '@/conf/commerce'
import prices from '@/conf/prices'

export default {
  currentAs: 'https://lux.market',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  ext: {
    commerce,
    prices,
  }
} satisfies SiteDef
