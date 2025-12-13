import React, { type PropsWithChildren } from 'react'

// Temporarily use non-Firebase header
import HeaderNoAuth from '@/components/header-no-auth'
// Temporarily disable Footer which may trigger Firebase
// import { Footer } from '@luxfi/ui'

import siteDef from '@/site-def'

const Layout: React.FC<PropsWithChildren> = ({
  children
}) => (<>
  <HeaderNoAuth siteDef={siteDef}/>
    {children}
    {/* TODO: Restore Footer when Firebase is configured */}
</>)

export default Layout
