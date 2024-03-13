import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport, 
} from '@luxdefi/common'

import siteDef from '../site-def'
import _metadata from '../metadata'

import '@luxdefi/common/style/lux-global.css'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCommon siteDef={siteDef}>
    {children}
  </RootLayoutCommon>
)

export default RootLayout
