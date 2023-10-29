
import { type CTABlock} from './types'

import SocialIcon from '@/primitives/social-icon'

const SOC_ICON_SIZE = 18

export default [
  {
    blockType: 'cta',
    items: [
      {
        title: 'Market',
        href: "https://app.lux.market/",
        external: true,
        newTab: false,
        variant: 'emLinkBright'
      },
      {
        title: 'Lux Silver',
        href: '/silver',
      },
      {
        title: 'Lux Gold',
        href: '/gold',
      },
      {
        title: 'Lux Coin',
        href: '/coin',
      },
      {
        title: 'Lux Credit',
        href: '/credit',
      },
      {
        title: 'Lux Validator',
        href: '/validator',
      },
      /*
      {
        title: 'Lux Pass',
        href: '/pass',
      },
      */
    ] 
  },
  {
    blockType: 'cta',
    items: [
      {
        title: 'Network',
        href: "https://lux.network/",
        variant: 'emLinkBright'
      },
      {
        title: 'Apply for Beta',
        href: 'https://apply.lux.network/',
        external: true,
        newTab: false
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
        variant: 'emLinkBright',
        external: true
      },
      {
        title: 'About',
        href: 'https://lux.partners',
        external: true,
        newTab: false,
      },
      {
        title: 'Partner with Lux',
        href: 'https://apply.lux.partners/',
        external: true
      },
      {
        title: 'Lux Fund',
        href: 'https://lux.fund',
        newTab: false,
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
        newTab: false,
        external: true
      },
      {
        title: 'Press Kit',
        href: 'https://drive.google.com/drive/folders/14OJtKLVakGY6883XO9yGbiHtlFxQUUm5?usp=share_link',
        external: true
      },
    ] 
  },  
  {
    blockType: 'cta',
    items: [
      {
        title: 'Community',
        variant: 'emLinkBright',
      },
      {
        title: 'Discord',
        href: 'https://discord.gg/luxdefi',
        external: true,
        icon: <SocialIcon network='discord' size={SOC_ICON_SIZE} />
      },
      {
        title: 'Telegram',
        href: 'https://t.me/luxdefi',
        external: true,
        icon: <SocialIcon network='telegram' size={SOC_ICON_SIZE} />
      },
      {
        title: 'X (fm. Twitter)',
        href: 'https://twitter.com/luxdefi',
        external: true,
        icon: <SocialIcon network='x' size={SOC_ICON_SIZE} />
      },
      {
        title: 'Facebook',
        href: 'https://facebook.com/luxdefi',
        external: true,
        icon: <SocialIcon network='facebook' size={SOC_ICON_SIZE + 2} />
      },
      {
        title: 'LinkedIn',
        href: 'https://linkedin.com/company/luxdefi',
        external: true,
        icon: <SocialIcon network='linkedin' size={SOC_ICON_SIZE + 2} />
      },
      {
        title: 'Instagram',
        href: 'https://instagram.com/luxdefi',
        external: true,
        icon: <SocialIcon network='instagram' size={SOC_ICON_SIZE + 2} />
      },
    ] 
  },
  {
    blockType: 'cta',
    items: [
      {
        title: 'Legal',
        variant: 'emLinkBright',
      },
      {
        title: 'Terms and Conditions',
        href: '/assets/pdf/LUX-NFT-Terms-and-Conditions.pdf',
        newTab: true,
      },
      {
        title: 'Privacy Policy',
        href: '/assets/pdf/LUX-Privacy-Policy.pdf',
        newTab: true,
      },
    ] 
  },
] as CTABlock[]