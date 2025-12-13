import { ChevronRight } from 'lucide-react'

import { Separator } from '@hanzo/ui/primitives'
import MainNoAuth from '@/components/main-no-auth'
import benefits from "@/content/cards/benefits"
import Link from "next/link"
import BackButton from '@/components/back-button'

export const dynamic = 'force-dynamic'

const title = 'All Lux Benefits'
const byline = 'Learn more about the exclusive benefits only available to Lux card holders and what to expect when you sign up for your Lux card.'

const Page = () => {
  return (
    <MainNoAuth className={'flex flex-col gap-4 pt-11'}>
      <div className='flex gap-4 items-center self-start cursor-pointer'>
        <BackButton />
        <div>{title}</div>
      </div>
      <p className="text-xs">{byline}</p>
      <div className="flex flex-col w-full">
        {benefits.map(({id, title, Icon}, index) => (
          <div key={index}>
            <Separator className="bg-level-2"/>
            <Link href={`/cards/benefits/${id}`} className="flex justify-between px-2 py-3">
              <div className="flex gap-2 items-center">
                <Icon width={24} height={24}/>
                <h5 className="whitespace-nowrap">{title}</h5>
              </div>
              <ChevronRight/>
            </Link>
          </div>
        ))}
        <Separator className="bg-level-2"/>
      </div>
    </MainNoAuth>
  )
}

export default Page
