import React from "react"

import { type LinkItemDef }  from '@/content/types'
import LinkItem from '@/components/link-item'

const MainNav: React.FC<{
  items: LinkItemDef[]
  className?: string,
  itemClassName?: string,
}> = ({ 
  items,
  className='', 
  itemClassName='', 
}) => (
  items.length ? (
    <nav className={className} >
      {items.map((item, index) => (
        <LinkItem 
          item={item}
          key={index}
          size='lg'
          className={itemClassName} 
        />
      ))}
    </nav>
  ) 
  : null
)

export default MainNav
