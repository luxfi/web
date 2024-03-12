import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport, 
  ChatWidget
} from '@luxdefi/common'

import { Toaster } from '@hanzo/ui/primitives'

import { AuthServiceProvider } from '@hanzo/auth/service'
import { getUserServerSide } from '@hanzo/auth/server'
import type { AuthServiceConf } from '@hanzo/auth/types'

import { CommerceServiceProvider } from '@hanzo/commerce'

import siteDef from '../site-def'
import _metadata from '../metadata'

import '@luxdefi/common/style/lux-global.css'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  {
  const currentUser = await getUserServerSide()

  return (
    <AuthServiceProvider user={currentUser} conf={{} as AuthServiceConf}>
      <CommerceServiceProvider 
        facets={siteDef.ext.commerce.facets} 
        productsByCategory={siteDef.ext.commerce.productsByCategory}
        options={siteDef.ext.commerce.options}
      >
        <RootLayoutCommon siteDef={siteDef} >
          {children}
          <ChatWidget
            title='LUX'
            subtitle='AI'
            chatbotUrl='https://lux.chat/iframe'
          />
          <Toaster />
        </RootLayoutCommon>
      </CommerceServiceProvider>
    </AuthServiceProvider>
  )
}

export default RootLayout
