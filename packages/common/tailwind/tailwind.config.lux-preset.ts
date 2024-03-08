import type { Config } from 'tailwindcss'
import { preset } from '@hanzo/lc-ui/tailwind'
import { fontFamily } from './fontFamily.tailwind.lux'

export default {
  presets: [preset],
  content: [],
  theme: { fontFamily }
} satisfies Config

