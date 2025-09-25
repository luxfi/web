import React, { type PropsWithChildren } from 'react'
import type { Viewport } from 'next'
import { Toaster } from '@hanzo/ui/primitives'
// Temporarily comment out Firebase-dependent imports
// import { 
//   RootLayout as RootLayoutCore, 
//   viewport as ViewportCode, 
// } from '@luxfi/ui/root-layout'

import siteDef from '@/site-def'
import _metadata from '@/metadata'

export const metadata = { ..._metadata }

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
} satisfies Viewport

// Temporary simplified layout without Firebase
const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  (
  <html lang='en' suppressHydrationWarning className='hanzo-ui-dark-theme' style={{backgroundColor: '#000'}}>
    <head>
      <base target='_blank' />
    </head>
    <body suppressHydrationWarning className='bg-background text-foreground flex flex-col min-h-full' style={{
      display: 'none', // Will be shown by client-side JS
    }}>
      {children}
      <Toaster position='top-center' duration={3000}/>
      <script dangerouslySetInnerHTML={{ __html: `document.body.style.display = 'flex';` }} />
    </body>
  </html>
)

export default RootLayout
