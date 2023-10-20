import React from "react"
import Link from "next/link"

import { type LinkItemDef }  from '@/content/types'
import { cn } from "@/util"
import { buttonVariants } from '@/primitives/button'

const MainNav: React.FC<{
  items?: LinkItemDef[]
}> = ({ 
  items 
}) => (
  <>
  {items?.length ? (
    <nav className="flex gap-6">
      {items?.map((item, index) => {
        const toSpread = {
          href: item.href!,
          ...((item.external) ?  { rel: "noreferrer" } : {}),
          ...((item.target) ? {target: item.target } : {})
        }

        return (
          <Link
            className={cn(buttonVariants({ 
                variant: item.variant ?  item.variant : 'link', 
                size: (!item.variant || item.variant.includes('link'))  ? undefined : 'lg'
              }), 
              'min-w-0'
            )}
            key={index}
            {...toSpread}
          >
            {item.title}
          </Link>
        )
      }
    )}
    </nav>
  ) : null}
  </>
)

export default MainNav
