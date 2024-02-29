import type { SiteDef } from '@hanzo/ui/types'

import mainCommon from '@hanzo/ui/siteDef/main-nav'
import {default as commonFooterCols} from '@hanzo/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.exchange',
  nav: {
    common: mainCommon,
    auth: true,
  },
  footer: commonFooterCols
} as SiteDef

