import type { SiteDef } from '@hanzo/ui/types'
import common from '@hanzo/ui/siteDef/main-nav'
import footer from '@hanzo/ui/siteDef/footer'

import commerce from '@/commerce'

export default {
  currentAs: 'https://lux.market',
  nav: {
    common,
    auth: true,
  },
  footer, 
  ext: {
    commerce
  }
} satisfies SiteDef
