import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

export default {
  currentAs: 'https://lux.blank',
  nav: {
    common: mainNav,
    auth: true,
  },
  footer: footer.standard, 
} as SiteDef

