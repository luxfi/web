import type { SiteDef } from '@hanzo/ui/types'
import common from '@hanzo/ui/siteDef/main-nav'
import footer from '@hanzo/ui/siteDef/footer'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common,
    featured: [{
      title: "Start Building",
      href: "https://beta.lux.network",
      newTab: false,
      external: true,
      variant: 'primary',
      size: 'default'
    }],
  },
  footer  
} satisfies SiteDef

