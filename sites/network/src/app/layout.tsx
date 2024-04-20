import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport,
  ChatWidget,
  AuthListener
} from '@luxfi/core'

import { Toaster } from '@hanzo/ui/primitives'

import { AuthServiceProvider } from '@hanzo/auth/service'
import { getUserServerSide } from '@hanzo/auth/server'
import type { AuthServiceConf } from '@hanzo/auth/types'

import _metadata from '../metadata'

import '@luxfi/core/style/lux-global.css'
import siteDef from '@/conf/site-def'
import { CommerceServiceProvider } from '@hanzo/commerce'
import { selectionUISpecifiers } from '@luxfi/core/conf'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

const RootLayout: React.FC<PropsWithChildren> = async ({
  children
}) => {
  const currentUser = await getUserServerSide()

  return(
    <AuthServiceProvider user={currentUser} conf={{} as AuthServiceConf}>
      <CommerceServiceProvider 
        rootNode={siteDef.ext.commerce.rootNode} 
        families={siteDef.ext.commerce.families}
        options={siteDef.ext.commerce.options}
        uiSpecs={selectionUISpecifiers}
      >
        <RootLayoutCommon siteDef={siteDef} header={false}>
          {children}
          <ChatWidget
            title='LUX'
            subtitle='AI'
            chatbotUrl='https://lux.chat/iframe'
            suggestedQuestions={[{
              heading: 'Lux network features', 
              message: 'What are the key features of Lux network?', 
              icon: 'ShieldFlashLineIcon' 
            }]}
          />
          <AuthListener/>
          <Toaster />
        </RootLayoutCommon>
      </CommerceServiceProvider>
    </AuthServiceProvider>
  )
}

export default RootLayout
