import { preset } from '@luxdefi/common/tailwind'

export default {
  presets: [ preset ],
  content: {
    files: [
      'src/**/*.tsx',
      './node_modules/@hanzo/ui/**/*.{ts,tsx}',
      './node_modules/@hanzo/commerce/**/*.{ts,tsx}',
      './node_modules/@hanzo/auth/**/*.{ts,tsx}',
      './node_modules/@luxdefi/common/**/*.{ts,tsx}'
    ]
  },
} 
