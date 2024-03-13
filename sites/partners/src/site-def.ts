import { footer, mainNav, type SiteDef  } from '@luxdefi/common/site-def'

export default {
  currentAs: 'https://lux.partners',
  nav: {
    common: mainNav,
    featured: [{
      title: "Login",
      href: "https://lux.chat/login",
      newTab: false,
      variant: 'primary',
    }],
  },
  footer: footer.standard, 
} satisfies SiteDef
