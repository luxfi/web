import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

import commerce from '@/conf/commerce'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  ext: {
    commerce,
  }
} satisfies SiteDef
