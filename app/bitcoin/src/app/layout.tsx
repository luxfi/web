import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCore, 
  viewport as ViewportCode, 
} from '@luxfi/ui/root-layout'


import siteDef from '../site-def'
import _metadata from '../metadata'

export const metadata = { ..._metadata }
export const viewport = { ...ViewportCode}

const RootLayout = async ({ children }: PropsWithChildren) => {
  return await RootLayoutCore({ siteDef, showHeader: true, children });
};

export default RootLayout
