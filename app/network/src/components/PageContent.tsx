'use client'

import React from 'react'
import { Footer, Header } from '@luxfi/ui'
import ClientScreenful from '@/components/ClientScreenful'
import { tiles } from '@/content'
import siteDef from '@/site-def'

const PageContent = () => (
  <>
    <Header siteDef={siteDef} />
    {tiles.map((banner, index) => (
      <ClientScreenful
        block={banner}
        initialInView={index === 0}
        agent={undefined as unknown as string}
        index={index}
        key={index}
      />
    ))}
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>
)

export default PageContent
