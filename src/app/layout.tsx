import React, { PropsWithChildren } from "react"
import { Metadata } from "next"

import TailwindIndicator from "@/primitives/tailwind-indicator"
import ThemeProvider from "@/context-providers/theme-provider"
import { inter, drukTextWide } from "@/style/nextFonts"

import Header from "@/components/header"

import "@/style/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lux.market",
    template: `Lux.market - %s`,
  },
  description: "Your destination for all cool things.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
/*
  These '.variable' fields are actually css classnames that define the actual
  css variables and make them availbale in scope.  This MUST
  be done at a high-level tak like this for the tailwind font classes to work.
  
  (not to be confused with the css var itself.  This field should be named something else!)
*/
const bodyClasses =
  'min-h-screen bg-background fg-foreground antialiased overflow-x-hidden ' + 
  `${inter.variable} ${drukTextWide.variable} font-sans` 

const RootLayout: React.FC<PropsWithChildren> = ({ children }) =>  (
  <html lang="en" suppressHydrationWarning>
    <head >
      {/* https://stackoverflow.com/a/75716588/11645689 */}
      <base target="_blank" />
    </head>
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
    <body className={bodyClasses}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          {children}
        </div>
        <TailwindIndicator />
    </body>
    </ThemeProvider>
  </html>
)

export default RootLayout
