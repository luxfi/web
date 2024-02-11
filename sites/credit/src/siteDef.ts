import type { SiteDef } from '@luxdefi/ui/types'
import mainElements from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    elements: mainElements,
    featuredCTA: {
      title: "Reserve Lux Card",
      href: "https://app.lux.market",
      newTab: false,
      variant: 'primary',
    },
  },
  footer  
} satisfies SiteDef

