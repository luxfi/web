import { footer, mainNav, type SiteDef  } from '@luxfi/core/site-def'

import commerce from './commerce'
import prices from './prices'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  ext: {
    commerce,
    prices,
    chatBot: {
      suggestedQuestions:[{
        heading: 'Lux network features', 
        message: 'What are the key features of Lux network?', 
        icon: 'ShieldFlashLineIcon' 
      }]    
    }
  }
} satisfies SiteDef
