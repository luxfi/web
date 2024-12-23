import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { Footer, Header } from '@luxfi/ui'

import { tiles } from '@/content'
import siteDef from '@/site-def'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const getTransactionCount = async () => {
  const scanAPIKey = `D77DNSWF8BFCPT82SK24ZDRVK2DY5TTP3Y`
  const endpoint = `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${scanAPIKey}`
  const response = await fetch(endpoint)
  const data = await response.json()
  console.log(data.result);
  
  return data.result
}

  // Scroll Snap using this is the approach: 
  // https://stackoverflow.com/a/76066443/11645689
  // see also styles on 'html' in @hanzo/ui/style/global.css
const Page = async ({ searchParams }: Props ) => {
  
    // see src/middleware.ts
  const agent = searchParams?.agent as string
  const txCount = await getTransactionCount()

  const tilesWithData = tiles.map((tile, index) => {
    if(index === 0){
      return{
        ...tile,
        txCount
      }
    }
    return tile
  })
  // console.log(tilesWithData);

  return (<>
    <Header siteDef={siteDef} />
    {tilesWithData.map((banner, index) => (
      <Screenful 
        block={banner} 
        initialInView={index === 0} 
        agent={agent}
        key={`section-${index}`} 
      />
    ))}
    <Footer siteDef={siteDef} className='w-full pt-16 lg:mx-auto ' />
  </>)
}

export default Page
