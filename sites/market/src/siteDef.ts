import type { SiteDef } from '@luxdefi/ui/types'
import { short, aux, full } from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

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
} as SiteDef
