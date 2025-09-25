'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  ScrollArea,
} from '@hanzo/ui/primitives'

import { useCommerce } from '@hanzo/commerce'
import { peekDump } from '@hanzo/commerce/debug'

import { BuyButton } from '@luxfi/ui'

const INITIAL_SKU_PATH = 'LXM-CR'

const FormSchema = z.object({
  skupath: z.custom<string>((v) => (
    (typeof v === 'string' && v.split('-').length >= 2),
    "Sku Path must have at least two levels."
  ))
})

const InputForm: React.FC<{
  onSubmit: (data: z.infer<typeof FormSchema>) => void
  onClear: (() => void) | undefined
  className?: string
}> = ({
  onSubmit,
  onClear,
  className
}) => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      skupath: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <FormField
          control={form.control}
          name='skupath'
          render={({ field }) => (
            <FormItem>
              <FormLabel>sku path</FormLabel>
              <FormControl>
                <Input placeholder='eg, LXM-CR' {...field} className='border placeholder:text-muted-3' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={'grid gap-1 w-full min-w-0 ' + (onClear ? 'grid-cols-2': 'grid-cols-1')}>
          <Button className={(!!onClear ? 'shrink' : '')} type='submit'>Submit</Button>
          {onClear && <Button className={(!!onClear ? 'shrink' : '')} onClick={() => {form.reset(); onClear()}}>Clear</Button>}
        </div>
      </form>
    </Form>
  )
}

const BuyTab: React.FC = () => {

  const cmmc = useCommerce()

  const [skuPath, setSkuPath] = useState<string | undefined>(INITIAL_SKU_PATH)
  const [json, setJSON] = useState<string | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  const handleSubmit = (data: z.infer<typeof FormSchema>): void => {
    const _skuPath = data.skupath.toUpperCase()
    setSkuPath(_skuPath)
    const result = cmmc.peek(_skuPath)
    if (typeof result === 'string') {
      setError(result)
      setJSON(undefined)
    }
    else {
      setJSON(peekDump(result))
      setError(undefined)
    }
  }

  const handleClear = () => {
    setSkuPath(undefined)
    setJSON(undefined)
  }

  return (
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
          {json && <pre>{json}</pre> }
        </ScrollArea>
      </div>
      {skuPath && <BuyButton skuPath={skuPath} className='' >Buy</BuyButton>}
    </div>
  )
}

export default BuyTab
