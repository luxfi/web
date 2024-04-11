import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

import commerce from './commerce'
import prices from './prices'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  ext: {
    commerce,
    prices,
  }
} satisfies SiteDef
