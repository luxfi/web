import React, { type PropsWithChildren } from 'react'

import { default as RootLayoutCommon, getMetadata, viewport } from '@luxdefi/ui/next/root-layout'
  // Need these here to ensure that tailwind is always last.
import '@luxdefi/ui/style/globals.css'

import conf from '../conf/site'

const metadata = getMetadata(conf)

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