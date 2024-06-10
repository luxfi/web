"use client"

import * as React from "react"

import Link from "next/link"
import { cn } from '@hanzo/ui/util'
import type { LinkDef } from '@hanzo/ui/types'
import type { LinkDefExtended } from "../../site-def/main-nav"
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

const DesktopNav: React.FC<{
  links: LinkDefExtended[],
}> = ({
  links

}) => (
    links.length > 0 ? (
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((el, index) => {

            if (el.isAIMenu) {
              return (
                <NavigationMenuItem key={index}>
                  <Link href={el.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {el.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            } else if (el.title == 'Community') {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{el.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid md:grid-cols-2 gap-3 p-6 md:w-[400px] lg:w-[500px]" key={index}>
                      <li className="row-span-3" key='0'>
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={el.href}
                          >
                            <Warpcast />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {el.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {el.details}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {el.childMenu?.map((component, index) => (
                        <div className="relative flex items-center my-2" key={index}>
                          <div className="mr-2 mt-0">
                          {component.icon}
                          </div>
                          <ListItem href={component.href} title={component.title} key={index}>
                            {component.contents}
                          </ListItem>
                        </div>
                      ))}

                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            } else {
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{el.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] " key={index}>
                      {el.childMenu?.map((component, index) => (
                        <ListItem
                          key={index}
                          title={component.title}
                          href={component.href}
                        >
                          {component.contents}
                        </ListItem>
                      ))}
                    </ul>
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
>(({ className, title, children, key, ...props }, ref) => {
  return (
    <li key={key}>
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
