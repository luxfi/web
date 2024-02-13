import type { SiteDef } from '@luxdefi/ui/types'
import common from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.partners',
  nav: {
    common,
    featured: [{
      title: "Partner with LUX",
      href: "https://apply.lux.partners",
      newTab: false,
      external: true,
      variant: 'primary',
    }],
  },
  footer  
} satisfies SiteDef
