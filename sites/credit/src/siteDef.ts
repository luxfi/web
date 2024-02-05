import type { SiteDef } from '@luxdefi/ui/types'
import { short} from '@luxdefi/ui/siteDef/main-nav'
import footer from '@luxdefi/ui/siteDef/footer'

const aux = [
  {
    title: "Reserve Lux Card",
    href: "https://app.lux.market",
    newTab: false,
    external: true,
    variant: 'primary',
  },
] as LinkDef[]

export default {
  currentAs: 'https://lux.credit',
  mainNav: {
    short,
    aux,
    full: [...short, ...aux]
  },
  footer  
} as SiteDef
