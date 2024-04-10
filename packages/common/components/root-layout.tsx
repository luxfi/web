import React, { type PropsWithChildren } from 'react'

import type { Viewport } from 'next'

import { Toaster } from '@hanzo/ui/primitives'

import Header from './header'
import type SiteDef from '../site-def/site-def'
import getAppRouterBodyFontClasses from '../next/font/get-app-router-font-classes'
import { FacebookPixelHead } from '../next/analytics/pixel-analytics'
import Scripts from './scripts'

// Next 14: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#use-viewport-export
const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
} satisfies Viewport

/*
  These '.variable' fields are actually autogenerate css classnames that *define* the actual
  css variables ('--<ugly-name>') that one asks for in the tailwind classes.
  They are what make them available in the global scope. So this MUST
  be done like this for the tailwind font classes to work.

  (...not to be confused with the css var itself.  This field should be named something else!)
*/

/*
  re body: overflow-y-hidden overflow-x-hidden, h-full
  We cannot have these on body tag for scroll-snap to work on iOS!
*/
const bodyClasses =
  'bg-background text-foreground flex flex-col min-h-full' +
  getAppRouterBodyFontClasses()

const RootLayout: React.FC<PropsWithChildren & {
  siteDef: SiteDef
  header?: boolean
}> = ({
  header = true,
  siteDef,
  children,
}) =>  (
  <html lang='en' suppressHydrationWarning className='hanzo-ui-dark-theme' style={{backgroundColor: '#000'}}>
    <head >
      {/* https://stackoverflow.com/a/75716588/11645689 */ }
      <base target='_blank' />
      <FacebookPixelHead/>
    </head>
    <body className={bodyClasses} style={{
      // Not sure why these got added (by my check in)
      // overflow: hidden here breaks scroll snap, see comment above
      //paddingRight: '0 !important',
      //maxWidth: '100vw',
      display: 'none', // see scripts.tsx

    }}>
      <Scripts/>
      {header && <Header siteDef={siteDef}/>}
      {children}
      <Toaster position='top-center' duration={3000}/>
    </body>
  </html>
)

export {
  RootLayout as default,
  viewport
}
