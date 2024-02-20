import type { SiteDef } from '@hanzo/ui/types'
import common from '@hanzo/ui/siteDef/main-nav'
import footer from '@hanzo/ui/siteDef/footer'

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
