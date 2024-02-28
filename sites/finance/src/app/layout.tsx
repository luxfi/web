import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport as _viewport } from '@hanzo/ui/next/root-layout'
import '@hanzo/ui/style/globals.css'
import { AuthServiceProvider } from '@hanzo/auth'
import { getCurrentUserServerSide } from '@hanzo/auth/server'

import siteDef from '../siteDef'
import _metadata from '../metadata'

export const metadata = {
  ..._metadata
}

export const viewport = {
  ..._viewport
}

console.error(process.env.FIREBASE_PRIVATE_KEY)
const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) => {
  const currentUser = await getCurrentUserServerSide()

  return (
    <AuthServiceProvider user={currentUser?.email ? {email: currentUser?.email} : null}>
      <RootLayoutCommon siteDef={siteDef}>
        {children}
      </RootLayoutCommon>
    </AuthServiceProvider>
  )
}

export {
  RootLayout as default,
}