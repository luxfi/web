import type { SiteDef } from '@luxdefi/ui/types'
import mainElements from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.partners',
  nav: {
    elements: mainElements,
    featuredCTA: {
      title: "Partner with LUX",
      href: "https://apply.lux.partners",
      newTab: false,
      external: true,
      variant: 'primary',
    },
  },
  footer  
} as SiteDef