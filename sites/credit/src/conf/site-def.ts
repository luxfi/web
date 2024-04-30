import { footer, mainNav, type SiteDef  } from '@luxfi/core/site-def'

import commerce from './commerce'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  commerce,
} satisfies SiteDef
