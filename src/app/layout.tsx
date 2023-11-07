import React, { type PropsWithChildren } from "react"
import { Metadata } from "next"

import TailwindIndicator from "@/primitives/tailwind-indicator"
import ThemeProvider from "@/context-providers/theme-provider"
import { inter, drukTextWide } from "@/style/nextFonts"

import Header from "@/components/header"

  // Need these here to ensure that tailwind is always last.
import 'swiper/css'
import 'swiper/css/scrollbar'
import '@/style/globals.css'

const metadata: Metadata = {
  title: {
    default: "Lux.market",
    template: `Lux.market - %s`,
  },
  description: "Your destination for all cool things.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

// Next 14: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#use-viewport-export
const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

/*
  These '.variable' fields are actually autogenerate css classnames that *define* the actual
  css variables ('--foo-var') that one asks for in the utility functions.
  They are what make them available in their scope, so this MUST
  be done like this for the tailwind font classes to work.
  
  (not to be confused with the css var itself.  This field should be named something else!)
*/
const bodyClasses =
  'min-h-screen bg-background fg-foreground antialiased overflow-x-hidden overflow-y-hidden ' + 
  `${inter.variable} ${drukTextWide.variable} font-sans` 

    // re <base />: https://stackoverflow.com/a/75716588/11645689 
const RootLayout: React.FC<PropsWithChildren> = ({ 
  children,
}) =>  (
  <html lang="en" suppressHydrationWarning >
    <head >
      <base target="_blank" />
    </head>
    <body className={bodyClasses}>
      <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          {children}
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </body>
  </html>
)

export {
  RootLayout as default,
  metadata,
  viewport
}
