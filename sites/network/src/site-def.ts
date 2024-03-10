import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

export default {
  currentAs: 'https://lux.network',
  nav: {
    common: mainNav,
    auth: true, // TODO
    /*
    featured: [{
      title: "Start Building",
      href: "https://lux.build",
      newTab: false,
      variant: 'primary',
      size: 'default'
    }],
    */
  },
  footer: footer.standard, 
} satisfies SiteDef

