import type { LinkDef } from '@hanzo/ui/types'

import { SocialIcon } from '../../components/icons'

  // @ts-ignore (will build in project that has @svgr support)
import SVG_warp_logo from './svg/warpcast-logo.svg'

const SOC_ICON_SIZE = 18

export default   [
  {
    title: 'Community',
    href: '',
    variant: 'linkFG',
  },
  {
    title: 'Lux Channel',
    href: 'https://warpcast.com/~/channel/lux',
    icon: <SVG_warp_logo width={SOC_ICON_SIZE} height={SOC_ICON_SIZE} /> //<SocialIcon network='warpcast' size={SOC_ICON_SIZE} />
  },
  {
    title: 'Lux Discussions',
    href: 'https://github.com/orgs/luxfi/discussions',
    icon: <SocialIcon network='github' size={SOC_ICON_SIZE} />
  },
  {
    title: 'Discord',
    href: 'https://discord.gg/sxaS7FFHwh',
    icon: <SocialIcon network='discord' size={SOC_ICON_SIZE} />
  },
  {
    title: 'Telegram',
    href: 'https://t.me/luxdefi',
    icon: <SocialIcon network='telegram' size={SOC_ICON_SIZE} />
  },
  {
    title: '@luxdefi',
    href: 'https://twitter.com/luxdefi',
    icon: <SocialIcon network='x' size={SOC_ICON_SIZE} />
  },
  {
    title: '@luxdefi',
    href: 'https://facebook.com/luxdefi',
    icon: <SocialIcon network='facebook' size={SOC_ICON_SIZE + 2} />
  },
  {
    title: '@luxdefi',
    href: 'https://www.instagram.com/luxdefi',
    icon: <SocialIcon network='instagram' size={SOC_ICON_SIZE + 2} />
  },
  {
    title: '@luxdefi',
    href: 'https://linkedin.com/company/luxdefi',
    icon: <SocialIcon network='linkedin' size={SOC_ICON_SIZE + 2} />
  },
  {
    title: '@luxdefi',
    href: 'https://www.youtube.com/@luxdefi',
    icon: <SocialIcon network='youtube' size={SOC_ICON_SIZE + 2} />
  },
] satisfies LinkDef[]
