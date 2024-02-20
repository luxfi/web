import type { SiteDef } from '@hanzo/ui/types'
//import mainElements from './siteDef/main-nav'
//import footer from './siteDef/footer'

import mainCommon from '@hanzo/ui/siteDef/main-nav'
import { default as commonFooterCols } from '@hanzo/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.partners',
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

