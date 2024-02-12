import type { SiteDef } from '@luxdefi/ui/types'
import mainElements from './siteDef/main-nav'
import footer from './siteDef/footer'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    elements: mainElements,
    featuredCTA: {
      title: "login",
      href: "https://lux.market",
      newTab: false,
      external: true,
      variant: 'primary',
    },
  },
  footer  
} as SiteDef

