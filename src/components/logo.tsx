import React from 'react'

import Link from 'next/link'

import Icons from '@/components/Icons'

const Logo: React.FC<{
  size: 'sm' | 'md' | 'lg' 
}> = ({
  size
}) => {
  let classes: any = {}
  if (size === 'lg') {
    classes.icon = 'h-10 w-10'
    classes.span = 'text-3xl'
  }
  else if (size === 'md') {
    classes.icon = 'h-8 w-8'
    classes.span = 'text-2xl'
  }
  else {
    classes.icon = 'h-6 w-6'
    classes.span = 'text-xl'
  }

  const spanClasses = 'inline-block font-bold text-primary font-headingWider ' + classes.span 

  return (
    <Link href="/" className='flex items-center space-x-2 text-accent-foreground hover:text-foreground'>
      <Icons.logo className={classes.icon + ' color-inherit'} />
      <span className={spanClasses + ' text-inherit'}>LUX</span>
    </Link>
  )
}

export default Logo
