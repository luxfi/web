import { footer, type SiteDef  } from '@luxfi/ui/site-def'
import creditNav from './credit-nav'

import { commerceConfig as commerce }  from '@luxfi/data/commerce'

export default {
  currentAs: 'https://lux.credit',
  nav: {
    common: creditNav,
  },
  footer: footer.standard, 
  commerce,
} satisfies SiteDef
