import React from 'react'

import { Desktop, TouchDevice } from './scroll-snap'
import { Header } from '@luxfi/core'

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

import siteDef from '@/site-def'

const Page: React.FC<PageProps> = ({
  searchParams
}) => {
    // see src/middleware.ts
  const agent = searchParams?.agent

  if (agent === 'desktop') {
    return (<>
      <Header siteDef={siteDef}/>
      <Desktop />
    </>)
  }
  else if (agent === 'tablet') {
    return (<>
      <Header siteDef={siteDef}/>
      <TouchDevice isTablet={true} />
    </>)
  }
  return (<>
    <Header siteDef={siteDef}/>
    <TouchDevice isTablet={false} />
  </>)
}

export default Page
