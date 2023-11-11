import React from 'react'

import Link from 'next/link'

import Icons from '@/components/icons'
import { type TShirtSize } from '@/types'

const Logo: React.FC<{
  size: TShirtSize
  logoOnly?: boolean
  href?: string
  className?: string
}> = ({
  size,
  href='/',
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
  if (size === 'lg') {
    classes.icon = 'h-10 w-10 mr-4 color-inherit' + toAdd.icon
    classes.span = 'text-3xl' + toAdd.span
  }
    // match lux.network
  else if (size === 'md') {
    classes.icon = 'h-[32px] w-[32px] mr-[12px] color-inherit' + toAdd.icon
    classes.span = 'text-[26px]/[26px] tracking-tighter' + toAdd.span
  }
  else {
    classes.icon = 'h-6 w-6 mr-2 color-inherit' + toAdd.icon
    classes.span = 'text-lg' + toAdd.span
  }

  const spanClasses = 'inline-block font-bold font-heading ' + classes.span 
  const linkClasses = 'flex items-center text-primary hover:text-primary-hover ' + className

  return (
    <Link href={href} className={linkClasses} >
      <Icons.logo className={classes.icon} />
      <span className={spanClasses + ' text-inherit'}>LUX</span>
    </Link>
  )
}

export default Logo
