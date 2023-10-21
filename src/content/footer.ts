import { type CTABlock} from './types'

export default [
  {
    blockType: 'cta',
    items: [
      {
        title: 'Market',
        href: "https://lux.market/",
        variant: 'emlink'
      },
      {
        title: 'Lux Gold',
        href: '/gold',
      },
      {
        title: 'Lux Silver',
        href: '/silver',
      },
      {
        title: 'Lux Credit',
        href: '/credit',
      },
      {
        title: 'Lux Validator',
        href: '/validator',
      },
      {
        title: 'Lux Coin',
        href: '/coin',
      },
      {
        title: 'Lux Pass',
        href: '/pass',
      },
    ] 
  },
  {
    blockType: 'cta',
    items: [
      {
        title: 'Network',
        href: "https://lux.network/",
        variant: 'emlink'
      },
      {
        title: 'Apply for Beta',
        href: 'https://apply.lux.network/',
        external: true
      },
      {
        title: 'Whitepapers',
        href: 'https://docs.lux.network/intro/about',
      },
      {
        title: 'Github',
        href: 'https://github.com/luxdefi',
      },
    ] 
  },
  {
    blockType: 'cta',
    items: [
      {
        title: 'Partners',
        href: "https://lux.partners/",
        variant: 'emlink',
        target: '_blank',
        external: true
      },
      {
        title: 'About',
        href: 'https://lux.partners',
        external: true
      },
      {
        title: 'Partner with Lux',
        href: 'https://apply.lux.partners/',
        target: '_blank',
        external: true
      },
      {
        title: 'Lux Fund',
        href: 'https://lux.fund',
        external: true
      },
      {
        title: 'Lux Support',
        href: 'mailto:support@lux.partners?subject=%E2%96%BC%20Lux%20Support',
        external: true
      },
      {
        title: 'Careers',
        href: 'https://docs.lux.network/about/v/lux-job-listings/',
        target: '_blank',
        external: true
      },
      {
        title: 'Press Kit',
        href: 'https://drive.google.com/drive/folders/14OJtKLVakGY6883XO9yGbiHtlFxQUUm5?usp=share_link',
        target: '_blank',
        external: true
      },
    ] 
  },
] as CTABlock[]