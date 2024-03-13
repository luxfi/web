import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common: mainNav,
    auth: true, 
  },
  footer: footer.standard, 
} satisfies SiteDef

