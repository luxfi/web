import type { SiteDef } from '@hanzo/ui/types'
import common from '@hanzo/ui/siteDef/main-nav'
import footer from '@hanzo/ui/siteDef/footer'

import commerce from '@/conf/commerce'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    common,
    auth: true,
  },
  footer,
  ext: {
    commerce,
    buyUrlBase : 'https://pay.lux.credit'
  }  
} satisfies SiteDef as SiteDef

