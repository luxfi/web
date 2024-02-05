import type { SiteDef } from '@luxdefi/ui/types'
import mainElements from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.market',
  nav: {
    elements: mainElements,
    featuredCTA: {
      title: "Enter App",
      href: "https://app.lux.market",
      newTab: false,
      external: true,
      variant: 'primary',
    },
  },
  footer  
} as SiteDef
