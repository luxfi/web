import React, { type PropsWithChildren } from 'react'
import { headers } from 'next/headers'

import {
  RootLayout as RootLayoutCore,
  viewport as ViewportCode,
} from '@luxfi/ui/root-layout'

import { ThemeProvider } from '@/components/theme-provider'
import { Sidebar } from '@/components/sidebar'

import siteDef from '../site-def'
import _metadata from '../metadata'

export const metadata = { ..._metadata }
export const viewport = { ...ViewportCode }

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) => {
  const headersList = headers()
  const isIframe = headersList.get("x-pathname") === '/iframe'
  return (
    <RootLayoutCore siteDef={siteDef} showHeader={!isIframe}>
      <ThemeProvider>
        {children}
        <Sidebar />
      </ThemeProvider>
    </RootLayoutCore>
  )
}

export default RootLayout

