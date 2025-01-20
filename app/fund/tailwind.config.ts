import type { Config } from 'tailwindcss'
import { preset } from './app/tailwind'

const fontFamily = {
  sans: 'inter',
  heading: 'DrukWide',
  nav: 'DrukWide',
  serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times'],
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ]
}

export default {
  presets: [preset],
  content: {
    files: [
      'app/**/*.tsx',
      './node_modules/@hanzo/**/*.{ts,tsx}'
    ]
  },
  theme: {
    fontFamily,
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#e5e7eb",
      }
    },
  }
} satisfies Config