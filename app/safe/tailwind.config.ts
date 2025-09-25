import { preset } from '@luxfi/ui/tailwind'

export default {
  presets: [preset],
  content: {
    files: [
      'src/**/*.tsx',
      './node_modules/@luxfi/ui/**/*.{ts,tsx}',
      './node_modules/@hanzo/**/*.{ts,tsx}'
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