import React from 'react'

import { useRouter } from 'next/navigation'

import type { ButtonVariants, ButtonSizes } from '@/primitives/button'

import LinkItem from '@/components/link-item'
import { nav } from '@/content'

const MobileNav: React.FC<{
  onAction: () => void,
  itemVariant?: ButtonVariants
  className?: string
  itemClassName?: string
}> = ({
  onAction,
  className='',
  itemClassName='',
  itemVariant
}) => {

  const router = useRouter()

  const items = nav.all
  return (
    items.length ? (
      <nav className={className} >
        {items.map((item, index) => (
          <LinkItem 
            item={item}
            key={index}
            size='lg'
            className={itemClassName}
            variant={itemVariant}
            onClick = {() => {
              //router.push(item.href!.toString())
              onAction()
            }} 
          />
        ))}
      </nav>
    ) 
    : null
  )
}

export default MobileNav
