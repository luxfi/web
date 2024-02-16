import type { SiteDef } from '@hanzo/ui/types'
import common from '@hanzo/ui/siteDef/main-nav'
import footer from '@hanzo/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    common,
    featured: [{
      title: "Reserve Lux Card",
      href: "https://app.lux.market",
      newTab: false,
      variant: 'primary',
    }],
  },
  footer,
  ext: {
    buyUrlBase : 'https://pay.lux.credit'
  }  
} satisfies SiteDef as SiteDef

