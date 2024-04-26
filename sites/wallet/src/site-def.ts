import { footer, mainNav, type SiteDef  } from '@luxfi/core/site-def'

export default {
  currentAs: 'https://wallet.lux.network',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
} satisfies SiteDef

