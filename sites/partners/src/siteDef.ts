import type { SiteDef } from '@luxdefi/ui/types'
import common from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.partners',
  nav: {
    common,
    featured: [{
      title: "Log in",
      href: "https://lux.chat/login",
      newTab: false,
      external: true,
      variant: 'primary',
    }],
  },
  footer  
} satisfies SiteDef
