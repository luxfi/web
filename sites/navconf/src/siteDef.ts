import type { SiteDef } from '@luxdefi/ui/types'
import mainElements from './siteDef/main-nav'
import footer from './siteDef/footer'

export default {
  currentAs: 'https://lux.partners',
  nav: {
    elements: mainElements,
    featuredCTA: {
      title: "Log in",
      href: "/login",
      newTab: false,
      external: true,
      variant: 'primary',
    },
  },
  footer
} as SiteDef

