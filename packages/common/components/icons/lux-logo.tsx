import React from 'react'
import { type LucideProps } from 'lucide-react'

const LuxLogo: React.FC<LucideProps> = (props: LucideProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"  {...props}>
    <polygon points="25,46.65 50,3.35 0,3.35" fill="white" stroke='black' stroke-width={props.strokeWidth}/>
  </svg>
)

export default LuxLogo
