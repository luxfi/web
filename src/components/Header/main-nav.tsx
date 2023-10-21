import React from "react"

import { type LinkItemDef }  from '@/content/types'
import LinkItem from '@/components/link-item'

const MainNav: React.FC<{
  items?: LinkItemDef[]
}> = ({ 
  items 
}) => (
  <>
  {items?.length ? (
    <nav className="flex gap-6">
      {items?.map((item, index) => (
        <LinkItem 
          item={item}
          key={index}
          size='lg'
          extraClasses='min-w-0'
        />
      ))}
    </nav>
  ) : null}
  </>
)

export default MainNav
