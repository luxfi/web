import React  from 'react'
import { notFound } from 'next/navigation'

import { Footer, Header } from '@hanzo/ui/common'
import { Main } from '@hanzo/ui/primitives'
import type { Block } from '@hanzo/ui/blocks'
import { ContentComponent } from '@hanzo/ui/blocks'

import CardDetail from './CardDetail'

import { products } from '@/content'
import siteDef from '@/siteDef'

type Products = keyof typeof products

type Props = {
  params: { slug: Products }
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

  const product = products[params.slug] as Block
  
  if (!product) {
    notFound()
  }

  // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} />
    <Main className=' '>
      {product.blockType === 'card-detail' ? (
        <CardDetail block={product} agent={agent} />
      ) : (
        <ContentComponent blocks={product} agent={agent}/>
      )}
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
  </>)
}

export default ProductPage
