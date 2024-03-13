import React, { type PropsWithChildren } from 'react'

import { 
  RootLayout as RootLayoutCommon, 
  rootLayoutViewport,
  ChatWidget
} from '@luxdefi/common'

import { Toaster } from '@hanzo/ui/primitives'

import siteDef from '../site-def'
import _metadata from '../metadata'

import '@luxdefi/common/style/lux-global.css'

export const metadata = { ..._metadata }
export const viewport = { ...rootLayoutViewport}

const RootLayout: React.FC<PropsWithChildren> = ({
  children
}) => (
  <RootLayoutCommon siteDef={siteDef} >
    {children}
    <ChatWidget
      title='LUX'
      subtitle='AI'
      chatbotUrl='https://lux.chat/iframe'
      suggestedQuestions={[
        { heading: 'Become Lux Partner', message: 'How do I become Lux partner?', icon: 'GroupLineIcon' },
        { heading: 'Lux Ecosystem', message: 'Tell me more about Lux ecosystem', icon: 'GlobalLineIcon' },
      ]}
    />
  </RootLayoutCommon>
)

export default RootLayout
