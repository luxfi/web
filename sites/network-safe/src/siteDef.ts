import type { SiteDef } from '@hanzo/ui/types'

import mainCommon from '@hanzo/ui/siteDef/main-nav'
import {default as commonFooterCols} from '@hanzo/ui/siteDef/footer'

export default {
  currentAs: 'https://safe.lux.network',
  nav: {
    common: mainCommon,
    featured: [{
      title: "Log in",
      href: "/login",
      newTab: false,
      variant: 'primary',
    }],
  },
  footer: commonFooterCols
} as SiteDef

