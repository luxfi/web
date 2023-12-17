import React from 'react'

import { Desktop, TouchDevice } from './scroll-snap'

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Page: React.FC<PageProps> = ({
  searchParams
}) => {
    // see src/middleware.ts
  const agent = searchParams?.agent

  if (agent === 'desktop') {
    return <Desktop />
  }
  else if (agent === 'tablet') {
    return <TouchDevice isTablet={true} />
  }
  return <TouchDevice isTablet={false} />
}

export default Page
