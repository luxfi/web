import React from 'react'
import Link from 'next/link'

import { type TShirtSize  } from '@hanzo/lc-ui/types'
import { cn } from '@hanzo/lc-ui/util'

import * as Icons from './icons'

const Logo: React.FC<{
  size?: TShirtSize
  logoOnly?: boolean
  href?: string
  className?: string
}> = ({
  size,
  href, // no default please!
  className='',
  logoOnly=false
}) => {
  let classes: any = {}
  const toAdd = (logoOnly) ? {
    span: ' hidden',
    icon: ' mr-r'
  } : {
    span: '',
    icon: ''
  }
  if (size === 'lg' || size === 'xl' ) { // for safety
    classes.icon = 'h-10 w-10 mr-4 color-inherit' + toAdd.icon
    classes.span = 'text-3xl' + toAdd.span
  }
    // match lux.network
  else if (size === 'md') {
    classes.icon = 'h-[32px] w-[32px] mr-[12px] color-inherit' + toAdd.icon
    classes.span = 'text-[26px]/[26px] tracking-tighter' + toAdd.span
  }
  else if (size === 'sm' ) {
    classes.icon = 'h-6 w-6 mr-2 color-inherit' + toAdd.icon
    classes.span = 'text-lg' + toAdd.span
  }
    // xs
  else {
    classes.icon = 'h-4 w-4 mr-1 color-inherit' + toAdd.icon
    classes.span = 'text-base' + toAdd.span
  }

  const outerClasses = 'flex flex-row items-center ' + className
  const spanClasses = 'inline-block font-bold font-heading ' 
    + (href ? 'hover:text-accent ' : 'cursor-default ') 
    + classes.span 

  const Inner: React.FC = () => (<>
      <Icons.logo className={classes.icon} />
      <span className={cn(spanClasses, ' text-inherit')}>LUX</span>
  </>)


  return (
    href ? (
      <Link href={href} className={outerClasses} >
        <Inner />
      </Link>
  
    ) : (
      <span className={outerClasses} >
        <Inner />
      </span>
    )
  )
}

export default Logo
