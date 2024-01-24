import type { SiteConf } from '@luxdefi/ui/types'
import { short, aux, full } from '@luxdefi/ui/conf/main-nav'
import footer from '@luxdefi/ui/conf/footer'

export default {
  title: 'Lux Credit',
  template: `Lux Credit %s`,
  desc: 'The coolest site since sliced bread.',
  currentAs: 'https://lux.credit',
  mainNav: {
    short,
    aux,
    full
  },
  footer  
} as SiteConf
