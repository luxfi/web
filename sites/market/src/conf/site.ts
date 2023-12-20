import { LinkDef, SiteConf } from '@luxdefi/ui/types'
import { short, aux, full } from '@luxdefi/ui/conf/main-nav'
import footer from '@luxdefi/ui/conf/footer'

export default {
  title: 'Lux Market',
  template: `Lux Market %s`,
  desc: 'The coolest site since sliced bread.',
  currentAs: 'https://lux.market',
  mainNav: {
    short,
    aux,
    full
  },
  footer  
} as SiteConf
