'use client'
import React from 'react'

import {
  Main,
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@hanzo/ui/primitives'
import { useCommerce, BuyButton } from '@hanzo/commerce'
//import { peekDump } from '@hanzo/commerce/service/debug'
import { useState } from 'react'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page = ({ searchParams }: Props ) => {

  const agent = searchParams?.agent
  const mobile = agent === 'phone'

  const cmmc = useCommerce()

  const [skuPath, setSkuPath] = useState<string | undefined>(INITIAL_SKU_PATH)
  //const [json, setJSON] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (data: z.infer<typeof FormSchema>): void => {
    const _skuPath = data.skupath.toUpperCase()
    setSkuPath(_skuPath)
    const result = cmmc.peek(_skuPath)
    if (typeof result === 'string') {
      setError(result)
      //setJSON(undefined)
    }
    else {
      //setJSON(peekDump(result))
      setError(undefined)
    }
  }

  const handleClear = () => {
    setSkuPath(undefined)
    //setJSON(undefined)
  }
        
  return (
    <Main className=''>
      <div className='bg-[#eeeeee] h-10 w-full mb-2 text-primary-fg text-center p-2'>Badassery</div>
      <div className='w-full md:w-[400px] md:mx-auto flex flex-col items-center gap-8'>
        <InputForm 
          onSubmit={handleSubmit} 
          onClear={skuPath ? handleClear : undefined} 
          className='flex flex-col items-stretch w-full md:w-[250px] md:mx-auto'
        />
        <div className='w-full'>
          <p className='text-muted text-center'>peek</p>
          <ScrollArea className='border rounded h-[300px] w-full p-4 text-muted flex flex-col gap-2'>
            {skuPath && <pre>PATH: {skuPath}</pre>}
            {error && <p className='text-destructive'>{error}</p>}
            {/* json && <pre>{json}</pre> */}
          </ScrollArea> 
        </div>
        {skuPath && <BuyButton skuPath={skuPath} className='' mobile={mobile} >Buy</BuyButton>}
      </div>
    </Main>
  </>)
}

export default Page
