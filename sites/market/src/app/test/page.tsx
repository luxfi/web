'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Main,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input
} from '@hanzo/ui/primitives'
import { useCommerce } from '@hanzo/commerce'
import { peekAtNodeDump } from '@hanzo/commerce/debug'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const FormSchema = z.object({
  skupath: z.string().min(2, {
    message: 'sku path must be at least 2 characters.',
  }),
})

const InputForm: React.FC<{
  onSubmit: (data: z.infer<typeof FormSchema>) => void
  className?: string
}> = ({
  onSubmit,
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
                <Input placeholder='LXM-CR' {...field} className='border' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  )
}

const Page = ({ searchParams }: Props ) => {

  const cmmc = useCommerce()

  const onSubmit = (data: z.infer<typeof FormSchema>): void => {
    console.log('SKU PATH: ' + data.skupath)
    const result = cmmc.peekAtNode(data.skupath)
    peekAtNodeDump(result)
  }

  return (
    <Main className='w-full h-[90vh] pt-10'>
      <InputForm onSubmit={onSubmit} className='mx-auto w-[400px] space-y-6'/>
    </Main>
  )
}

export default Page
