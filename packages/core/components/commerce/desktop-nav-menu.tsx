"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from '@hanzo/ui/util'
import type { LinkDef } from '@hanzo/ui/types'
import type { ChildMenu, LinkDefExtended } from "../../site-def/main-nav"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@hanzo/ui/primitives'
import Warpcast from "../icons/warpcast"

const DesktopNav: React.FC<{ links: LinkDefExtended[] }> = ({ links }) => (
  links.length > 0 ? (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((el, index) => {
          if (el.isAIMenu) {
            return (
              <NavigationMenuItem key={index}>
                <Link href={el.href} legacyBehavior passHref >
                  <NavigationMenuLink className={cn('!rounded-2xl ', navigationMenuTriggerStyle())}>
                    {el.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          } else if (el.title === "Cards") {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="!rounded-2xl">{el.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="!left-0 overflow-scroll xl:w-[720px]">
                  <div className="grid xl:grid-cols-3 xl:h-auto h-[600px] w-full ">
                    <GroupChildMenu childs={el.childMenu} />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          } else {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="!rounded-2xl">{el.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="!left-0 overflow-scroll">
                  <div className="xl:flex xl:flex-row w-full xl:h-auto h-[600px]">
                    <GroupChildMenu childs={el.childMenu} />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  ) : null
)
export default DesktopNav

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-level-1 hover:text-accent-foreground focus:bg-level-1 focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const GroupChildMenu: React.FC<{ childs: ChildMenu[] | undefined }> = ({ childs }) => {
  if (!childs) {
    return null
  }

  let groupedChildMenus = childs.reduce((grouped: Record<string, ChildMenu[]>, childLink) => {
    if (childLink.groupName) {
      if (!grouped[childLink.groupName]) {
        grouped[childLink.groupName] = []
      }
      grouped[childLink.groupName].push(childLink)
    }
    return grouped
  }, {} as Record<string, ChildMenu[]>)

  return Object.entries(groupedChildMenus).map(([groupName, childLinks]: [string, ChildMenu[]]) => (
    <div key={groupName} className={`xl:p-4 p-2 ${groupName === "Elite Card" || groupName === "Sovereign Card" ? "xl:-mt-34" : ""}`}>
      <h2 className="text-muted-1">{groupName}</h2>
      <ul className="w-[200px] gap-3 2xl:w-[250px]">
        {childLinks.map((link) => (
          <div className="flex items-center element-container text-muted-1 hover:text-primary" key={link.title}>
            {
              link.icon_act ? (
                <>
                  <div className="icon-container-nor">{link.icon}</div>
                  <div className="icon-container-hov">{link.icon_act}</div>
                </>
              ):(
                <div>{link.icon}</div>
              )
            }
            <div className="text-container">
              <ListItem key={link.title} title={link.title} href={link.href} className="hover:bg-transparent">
                {link.contents}
              </ListItem>
            </div>
          </div>
        ))}
      </ul>
    </div>
  ))
}