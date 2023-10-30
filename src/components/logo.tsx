import React from 'react'

import Link from 'next/link'

import Icons from '@/components/icons'

const Logo: React.FC<{
  size: 'sm' | 'md' | 'lg' 
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
  else if (size === 'md') {
    classes.icon = 'h-7 w-7 mr-2 color-inherit' + toAdd.icon
    classes.span = 'text-xl' + toAdd.span
  }
  else {
    classes.icon = 'h-6 w-6 mr-2 color-inherit' + toAdd.icon
    classes.span = 'text-lg' + toAdd.span
  }

  const spanClasses = 'inline-block font-bold font-headingWider ' + classes.span 
  const linkClasses = 'flex items-center text-primary hover:text-primary-hover ' + className

  return (
    <Link href={href} className={linkClasses} >
      <Icons.logo className={classes.icon} />
      <span className={spanClasses + ' text-inherit'}>LUX</span>
    </Link>
  )
}

export default Logo
