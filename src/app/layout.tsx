import React, { PropsWithChildren } from "react"
import { Metadata } from "next"

import TailwindIndicator from "@/primitives/tailwind-indicator"
import ThemeProvider from "@/context-providers/theme-provider"
import { cn } from "@/util"
import { inter } from "@/style/fonts"

import Header from "@/components/Header"

import "@/style/typo.css"
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

const RootLayout: React.FC<PropsWithChildren> = ({ children }) =>  (
  <html lang="en" suppressHydrationWarning>
    <head >
      {/* https://stackoverflow.com/a/75716588/11645689 */}
      <base target="_blank" />
    </head>
    <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable )}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          {children}
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
