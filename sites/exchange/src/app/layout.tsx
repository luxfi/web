import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport as _viewport } from '@hanzo/ui/next/root-layout'
import '@hanzo/ui/style/globals.css'
import { AuthServiceProvider } from '@hanzo/auth/service/AuthContext'
import { getCurrentUser, type UserRecord } from '@hanzo/auth/lib/firebase/firebase-admin'

import siteDef from '../siteDef'
import _metadata from '../metadata'

export const metadata = {
  ..._metadata
}

export const viewport = {
  ..._viewport
}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) => {
  const currentUser = await getCurrentUser()

  return (
    <AuthServiceProvider user={currentUser ? currentUser.toJSON() as UserRecord : null}>
      <RootLayoutCommon siteDef={siteDef}>
        {children}
      </RootLayoutCommon>
    </AuthServiceProvider>
  )
}

export {
  RootLayout as default,
}