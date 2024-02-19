import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport } from '@hanzo/ui/next/root-layout'
import '@hanzo/ui/style/globals.css'

import siteDef from '../siteDef'
import metadata from '../metadata'

import { AuthServiceProvider } from '@hanzo/auth-widget/service/auth'

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <AuthServiceProvider>
    <RootLayoutCommon siteDef={siteDef}>
      {children}
    </RootLayoutCommon>
  </AuthServiceProvider>
)

export {
  RootLayout as default,
  metadata,
  viewport
}