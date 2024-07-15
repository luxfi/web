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

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     {/* <Icons.logo className="h-6 w-6" /> */}
//                     <div className="mb-2 mt-4 text-lg font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-sm leading-tight text-muted-foreground">
//                       Beautifully designed components that you can copy and
//                       paste into your apps. Accessible. Customizable. Open
//                       Source.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }


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
                <NavigationMenuItem>
                  <Link href={el.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {el.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            } else if (el.title == 'Community') {
              return (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{el.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid md:grid-cols-2 gap-3 p-6 md:w-[400px] lg:w-[500px]">
                      <li className="row-span-3">
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
                      {el.childMenu?.map((component) => (
                        <div className="relative flex items-center my-2">
                          <div className="mr-2 mt-0">
                          {component.icon}
                          </div>
                          <ListItem href={component.href} title={component.title}>
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
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{el.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                      {el.childMenu?.map((component) => (
                        <ListItem
                          key={component.title}
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
