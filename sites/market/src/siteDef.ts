import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

import commerce from '@/conf/commerce'
import prices from '@/conf/prices'

export default {
  currentAs: 'https://lux.market',
  nav: {
    common: mainNav,
    auth: true,
  },
  footer: footer.standard, 
  ext: {
    commerce,
    prices,
  }
} satisfies SiteDef
