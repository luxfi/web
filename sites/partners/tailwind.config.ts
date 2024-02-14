import { config } from '@luxdefi/ui/tailwind'

export default {
  presets: [config],
  content: {
    files: [
      "src/**/*.tsx",
      './node_modules/@luxdefi/ui/**/*.{ts,tsx}'
    ]
  },
} 
