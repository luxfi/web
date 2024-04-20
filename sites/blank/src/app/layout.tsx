import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport, 
} from '@luxfi/core'

import siteDef from '../site-def'
import _metadata from '../metadata'

import '@luxfi/core/style/lux-global.css'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCommon siteDef={siteDef} showHeader>
    {children}
  </RootLayoutCommon>
)

export default RootLayout
