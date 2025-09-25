import { footer, mainNav, type SiteDef  } from '@luxfi/ui/site-def'

import { commerceConfig as commerce }  from '@luxfi/data/commerce'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common: mainNav,
  },
  footer: footer.standard, 
  commerce,
  chatbot: {
    suggestedQuestions:[{
      heading: 'Lux network features', 
      message: 'What are the key features of Lux network?', 
      icon: 'ShieldFlashLineIcon' 
    }]    
  }
} satisfies SiteDef
