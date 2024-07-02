import { preset } from '@luxfi/core/tailwind'

export default {
  presets: [preset],
  content: {
    files: [
      'src/**/*.tsx',
      '../../packages/core/**/*.{ts,tsx}',
      '../../packages/core/node_modules/@hanzo/**/*.{ts,tsx}'
    ]
  },
  theme: {
    extend: {
      colors: {
          white: "#ffffff",
          black: "#000000",
          gray: "#e5e7eb",
      }
    },
  }
}