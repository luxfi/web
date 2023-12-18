import React, { type PropsWithChildren } from 'react'
import { Metadata } from 'next'

import { TailwindIndicator } from '@luxdefi/ui/primitives'
import { inter, drukTextWide } from '@luxdefi/ui/style/nextFonts'
import { Header } from '@luxdefi/elements'

//import DimensionsProvider from '@/context-providers/dimensions-provider'

  // Need these here to ensure that tailwind is always last.
import '@/style/globals.css'

const metadata: Metadata = {
  title: {
    default: 'Lux Market',
    template: `Lux Market - %s`,
  },
  description: 'Your destination for all cool things.',

    // Generated from a 512 original create in GIMP
    // at https://favicon.io/favicon-converter/

    // Next API is poorly documented.
    // cf: Next.js repo: packages/next/src/lib/metadata/types/metadata-interface.ts
    // and metadata-types.ts 
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/assets/icon/favicon-16x16.png'   
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/assets/icon/favicon-32x32.png'   
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/assets/icon/android-chrome-192x192.png'   
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/assets/icon/android-chrome-512x512.png'   
    },
    {
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '180x180',
      url: '/assets/icon/apple-touch-icon.png'   
    },
  ]
  ,
}

// Next 14: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#use-viewport-export
const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

/*
  These '.variable' fields are actually autogenerate css classnames that *define* the actual
  css variables ('--foo-var') that one asks for in the utility functions.
  They are what make them available in their scope, so this MUST
  be done like this for the tailwind font classes to work.
  
  (not to be confused with the css var itself.  This field should be named something else!)
*/

// overflow-y-hidden overflow-x-hidden ,-- cannot have these on body tag for scroll-snap on iOS
const bodyClasses = 
  'bg-background fg-foreground  ' + 
  `${inter.variable} ${drukTextWide.variable} font-sans` 

    // re <base />: https://stackoverflow.com/a/75716588/11645689 
const RootLayout: React.FC<PropsWithChildren> = ({ 
  children,
}) =>  (
  <html lang='en' suppressHydrationWarning className='dark'>
    <head >
      <base target='_blank' />
    </head>
    <body className={bodyClasses}>
      <Header />
      {children}
      <TailwindIndicator />
    </body>
  </html>
)

export {
  RootLayout as default,
  metadata,
  viewport
}
