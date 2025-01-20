import React from 'react'
import { Link } from "@remix-run/react"

import { type TShirtSize  } from '@hanzo/ui/types'

import { LuxLogo} from './icons'

const TEXT = 'LUX'
type LogoVariant = 'text-only' | 'logo-only' | 'full'

const Logo: React.FC<{
  size?: TShirtSize
  variant?: LogoVariant
  onClick?: () => void
  href?: string
  outerClx?: string
  textClx?: string
}> = ({
  size,
  href, // no default please!
  outerClx='',
  textClx='',
  variant='full',
  onClick,
}) => {
  let classes: any = {}
  const toAdd = (variant === 'logo-only') ? 
    {
      span: 'hidden',
      icon: ''
    }  
    :
    (variant === 'text-only') ? 
      {
        span: '',
        icon: 'hidden'
      } 
      : 
      {
        span: '',
        icon: ''
      }

  if (size === 'lg' || size === 'xl' ) { // for safety
    classes.icon = 'h-10 w-10 mr-4 color-inherit ' 
    classes.span = 'text-3xl ' 
  }
    // match lux.network
  else if (size === 'md') {
    classes.icon = 'h-[32px] w-[32px] mr-[12px] color-inherit '
    classes.span = 'text-[1.8rem]/[1.8rem] tracking-tighter '
  }
  else if (size === 'sm' ) {
    classes.icon = 'h-6 w-6 mr-2 color-inherit ' 
    classes.span = 'text-lg '
  }
    // xs
  else {
    classes.icon = 'h-4 w-4 mr-1 color-inherit '
    classes.span = 'text-base '
  }

  classes.icon += toAdd.icon
  classes.span += toAdd.span


  const outerClasses = 'flex flex-row items-center ' + outerClx
  const spanClasses = 'inline-block font-bold font-heading ' 
    + textClx
    + (href ? ' hover:text-accent cursor-pointer ' : ' cursor-default ') 
    + classes.span 

  return (
    href ? (
      <Link to={href} className={outerClasses} onClick={onClick} >
        <LuxLogo className={classes.icon} />
        <span className={spanClasses}>{TEXT}</span>
      </Link>
    ) : (
      <span className={outerClasses} onClick={onClick}>
        <LuxLogo className={classes.icon} />
        <span className={spanClasses}>{TEXT}</span>
      </span>
    )
  )
}

export {
  Logo as default,
  type LogoVariant
}
