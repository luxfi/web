import React  from 'react'
import { notFound } from 'next/navigation'

import { Footer, Header } from '@hanzo/ui/common'
import { Main, TailwindIndicator } from '@hanzo/ui/primitives'
<<<<<<< HEAD
import type { Block } from '@hanzo/ui/blocks'
import { ContentComponent } from '@hanzo/ui/blocks'

import CardDetail from '@/blocks/components/card-detail'

import { products } from '@/content'
import type { Product } from '@/types'
=======
import { ContentComponent } from '@hanzo/ui/blocks'
import CardDetailComponent from '@/blocks/components/card-detail'

import { products } from '@/content'
import type { CardDetail, Product } from '@/types'
>>>>>>> site/credit
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

<<<<<<< HEAD
  const prodBlock = products[params.slug] as Block
  
  if (!prodBlock) {
=======
  const card = products[params.slug] as CardDetail
  
  if (!card) {
>>>>>>> site/credit
    notFound()
  }

  // see src/middleware.ts
  const agent = searchParams?.agent as string

  return (<>
    <Header siteDef={siteDef} />
    <Main className='max-w-screen-xl w-full pt-16 sm:pt-4 portrait:pt-4 lx:mx-auto'>
<<<<<<< HEAD
      {prodBlock.blockType === 'card-detail' ? (
        <CardDetail block={prodBlock} agent={agent} />
      ) : (
        <ContentComponent blocks={prodBlock} agent={agent}/>
      )}
=======
      <CardDetailComponent block={{blockType: 'card-detail', ...card}} agent={agent} />
>>>>>>> site/credit
    </Main>
    <div className='border-t'></div>
    <Footer siteDef={siteDef} className='max-w-screen-2xl w-full pt-16 lg:mx-auto ' />
    <TailwindIndicator />
  </>)
}

export default ProductPage
