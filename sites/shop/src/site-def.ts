import { footer, mainNav, type SiteDef  } from '@luxfi/core/site-def'

import { commerceConfig as commerce }  from '@luxfi/data/commerce'

export default {
  currentAs: 'https://lux.shop',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  commerce,
} satisfies SiteDef
