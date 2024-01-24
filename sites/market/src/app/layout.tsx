import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, viewport } from '@luxdefi/ui/next/root-layout'
import '@luxdefi/ui/style/globals.css'

import conf from '../conf/site'
import metadata from '../conf/metadata'

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCommon conf={conf}>
    {children}
  </RootLayoutCommon>
)

export {
  RootLayout as default,
  metadata,
  viewport
}