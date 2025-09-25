import { footer, mainNav, type SiteDef  } from '@luxfi/ui/site-def'

export default {
  currentAs: 'https://lux.partners',
  nav: {
    common: mainNav,
    //featured: [{
    //  title: "Login",
    //  href: "https://lux.chat/login",
    //  newTab: false,
    //  variant: 'primary',
    //}],
  },
  footer: footer.standard,
  chatbot: {
    suggestedQuestions: [
      { heading: 'Become Lux Partner', message: 'How do I become Lux partner?', icon: 'GroupLineIcon' },
      { heading: 'Lux Ecosystem', message: 'Tell me more about Lux ecosystem', icon: 'GlobalLineIcon' },
    ]
  }
} satisfies SiteDef
