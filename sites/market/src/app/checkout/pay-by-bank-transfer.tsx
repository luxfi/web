'use client'

import type { ReactNode } from 'react'
import { Copy } from 'lucide-react'

import { Button, Tabs, TabsContent, TabsList, TabsTrigger, toast } from '@hanzo/ui/primitives'
import { EnhHeadingBlockComponent, type EnhHeadingBlock, type Block } from '@hanzo/ui/blocks'

const InfoField: React.FC<{label: string, value: ReactNode, copyValue: string}> = ({label, value, copyValue}) => {
  const copyToClipboard = (label: string, text: string) => {
    navigator.clipboard.writeText(text)
    toast({title: `${label} copied to clipboard`})
  }

  return (
    <div className='flex flex-col gap-1'>
      <p className='text-xs'>{label}</p>
      <div className='flex items-center justify-between text-lg border rounded-lg py-2 px-4'>
        {value}
        <Button variant='ghost' size='icon' onClick={() => copyToClipboard(label, copyValue)}>
          <Copy className='h-4 w-4'/>
        </Button>
      </div>
    </div>
  )
}

const PayByBankTransfer: React.FC<{setStep: (step: number) => void}> = ({setStep}) => {
  return (<>
    <EnhHeadingBlockComponent 
      block={{blockType: 'enh-heading',
        specifiers: 'center byline-center',
        heading: { text: `WIRE INFO` },
        byline: { text: 'Click the copy icon to copy text to your clipboard.', level: 6}
      } satisfies EnhHeadingBlock as Block}
    />
    <Tabs defaultValue="usd" className='w-full mx-auto max-w-[50rem]'>
      <TabsList className="grid w-full grid-cols-2 w-full max-w-[15rem] mx-auto bg-level-2">
        <TabsTrigger value="usd">USD</TabsTrigger>
        <TabsTrigger value="eur">EUR/GBP</TabsTrigger>
      </TabsList>
      <TabsContent value="usd">
        <div className='flex flex-col gap-4 w-full'>
          <InfoField
            label='Beneficiary Bank'
            value={<div>Bank of America<br/>NA 222 Broadway<br/>New York, New York. 10038</div>}
            copyValue='Bank of America, NA 222 Broadway, New York, New York. 10038'
          />
          <InfoField
            label='Beneficiary'
            value={<div>Hanzo, Inc<br/>4811 Mastin Street<br/>Merriam, KS 66203</div>}
            copyValue='Hanzo, Inc, 4811 Mastin Street, Merriam, KS 66203'
          />
          <InfoField label='Routing Number - ACH' value='113000023 / 111000025' copyValue='113000023 / 111000025'/>
          <InfoField label='Routing Number - Wire' value='026009593' copyValue='026009593'/>
          <InfoField label='Routing Number - SWIFT' value='BOFAUS3N' copyValue='BOFAUS3N'/>
          <InfoField label='Reference' value='Lux' copyValue='Lux'/>
        </div>
      </TabsContent>
      <TabsContent value="eur">
        <div className='flex flex-col gap-4 w-full'>
          <InfoField
            label='Beneficiary Bank'
            value={<div>Clear Junction Limited<br/>4th floor<br/>Imperial House</div>}
            copyValue='Clear Junction Limited, 4th floor, Imperial House'
          />
          <InfoField label='Account Number (GBP)' value='33781813' copyValue='33781813'/>
          <InfoField label='Account Name' value='AiDLT Global Ltd.' copyValue='AiDLT Global Ltd.'/>
          <InfoField label='SWIFT/BIC' value='CLJUGB21' copyValue='CLJUGB21'/>
          <InfoField label='Sort Code (GBP)' value='041307' copyValue='041307'/>
          <InfoField label='IBAN' value='GB75 CLJU 0413 0733 78181 3' copyValue='GB75 CLJU 0413 0733 78181 3'/>
          <InfoField label='Reference' value='Lux' copyValue='Lux'/>
        </div>
      </TabsContent>
    </Tabs>
    <Button onClick={() => setStep(0)} variant='outline' className='mx-auto rounded-full w-full max-w-[15rem]'>Back</Button>
  </>)
}

export default PayByBankTransfer
