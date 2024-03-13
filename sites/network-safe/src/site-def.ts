import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

export default {
  currentAs: 'https://safe.lux.network',
  nav: {
    common: mainNav,
    auth: true, 
  },
  footer: footer.standard, 
} satisfies SiteDef



