import type { SiteDef } from '@luxdefi/ui/types'
import common from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.market',
  nav: {
    common,
    featured: [{
      title: "Enter App",
      href: "https://app.lux.market",
      newTab: false,
      external: true,
      variant: 'primary',
    }],
  },
  footer  
} satisfies SiteDef
