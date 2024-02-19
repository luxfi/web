import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport } from '@hanzo/ui/next/root-layout'
import '@hanzo/ui/style/globals.css'

import siteDef from '../siteDef'
import metadata from '../metadata'

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCommon siteDef={siteDef}>
    {children}
  </RootLayoutCommon>
)

export {
  RootLayout as default,
  metadata,
  viewport
}