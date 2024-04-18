import React, { type PropsWithChildren } from 'react'

import { BreakpointIndicator } from '@hanzo/ui/primitives'
import { AuthServiceProvider } from '@hanzo/auth/service'
import { getUserServerSide } from '@hanzo/auth/server'
import type { AuthServiceConf } from '@hanzo/auth/types'

import { CommerceServiceProvider } from '@hanzo/commerce'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport, 
  ChatWidget,
  AuthListener
} from '@luxfi/core'

import { selectionUISpecifiers } from '@luxfi/core/conf'
import '@luxfi/core/style/lux-global.css'

import siteDef from '../conf/site-def'
import _metadata from '../metadata'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) =>  {
  const currentUser = await getUserServerSide()

  return (
    <AuthServiceProvider user={currentUser} conf={{} as AuthServiceConf}>
      <CommerceServiceProvider 
        rootNode={siteDef.ext.commerce.rootNode} 
        productsByFamily={siteDef.ext.commerce.productsByFamily}
        options={siteDef.ext.commerce.options}
        uiSpecs={selectionUISpecifiers}
      >
        <RootLayoutCommon siteDef={siteDef} header={false}>
          {children}
          <ChatWidget
            title='LUX'
            subtitle='AI'
            chatbotUrl='https://lux.chat/iframe'
          />
          <AuthListener/>
          <BreakpointIndicator />
        </RootLayoutCommon>
      </CommerceServiceProvider>
    </AuthServiceProvider>
  )
}

export default RootLayout
