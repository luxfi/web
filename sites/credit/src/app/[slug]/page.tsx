import React  from 'react'
import { notFound } from 'next/navigation'

import { Footer, Header } from '@hanzo/ui/common'
import { Main, TailwindIndicator } from '@hanzo/ui/primitives'
import type { Block } from '@hanzo/ui/blocks'
import { ContentComponent } from '@hanzo/ui/blocks'

import CardDetail from '@/blocks/components/card-detail'

import { products } from '@/content'
import type { Product } from '@/types'
import siteDef from '@/siteDef'

type Props = {
  params: { slug: Product }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {

  const prods = Object.keys(products)
 
  return prods.map((p) => ({
    slug: p,
  }))
}

export async function generateMetadata({ params}: Props) {
  return { title: params.slug }
}

const ProductPage = ({ params, searchParams }: Props) => {

  const prodBlock = products[params.slug] as Block
  
  if (!prodBlock) {
    notFound()
  }

  // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} />
    <Main className='max-w-screen-xl w-full pt-16 md:pt-2 lx:mx-auto'>
      {prodBlock.blockType === 'card-detail' ? (
        <CardDetail block={prodBlock} agent={agent} />
      ) : (
        <ContentComponent blocks={prodBlock} agent={agent}/>
      )}
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
    <TailwindIndicator />
  </>)
}

export default ProductPage
