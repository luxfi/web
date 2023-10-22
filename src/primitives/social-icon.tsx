import React from 'react'

import { SocialIcon as BaseSocialIcon } from 'react-social-icons'

import '@/style/social-svg.css'

const SocialIcon: React.FC<{
    // one of these: https://github.com/couetilc/react-social-icons/tree/main/db
  network: string
  size: number
  extraClasses?: string
}> = ({
  network,
  size,
  extraClasses = ''
}) => (
  <BaseSocialIcon 
    network={network}
    as='div' 
      // This is set up so the enclosing element sets the color.
      // For example, something like 'color-foreground hover:color-muted-foreground' 
    className={'color-inherit ' + extraClasses}
    bgColor='transparent' 
    fgColor='currentColor'
    style={{height: size, width: size}} 
  />
)

export default SocialIcon
