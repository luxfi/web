import React from "react"
import Link from "next/link"

import { NavItem }  from '@/types'
import { cn } from "@/util"
import { buttonVariants } from "../button"

const MainNav: React.FC<{
  items?: NavItem[]
}> = ({ 
  items 
}) => (
  <>
  {items?.length ? (
    <nav className="flex gap-6 font-headtextwide">
      {items?.map((item, index) => (
         (!item.variant || item.variant === 'link') ? (
          <Link
            key={index}
            href={item.href!}
            className={cn(
              "flex items-center text-medium font-medium text-muted-foreground hover:text-foreground",
              item.disabled && "cursor-not-allowed opacity-80 hover:text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        ) : (
          <Link
            target="_blank"
            rel="noreferrer"
            key={index}
            href={item.href!}
            className={buttonVariants({ variant: item.variant, size: 'lg' })}
          >
            {item.title}
          </Link>
        )
      ))}
    </nav>
  ) : null}
  </>
)

export default MainNav
