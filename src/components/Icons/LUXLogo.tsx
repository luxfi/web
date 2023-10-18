import React from 'react'
import { type LucideProps } from 'lucide-react'

const css = `
  .lux-logo path {
    fill: #0F0F0F;
  }

  @media (prefers-color-scheme: dark) {
    .lux-logo path {
      fill: white;
    }
  }
`
const LuxLogo: React.FC<LucideProps> = (props: LucideProps) => (
  <svg className='lux-logo' viewBox="0 0 260 260" fill="white" xmlns="http://www.w3.org/2000/svg"  {...props}>
    <style>{css}</style>
    <path d="M5,5H265L135,230"/>
  </svg>
)

export default LuxLogo
