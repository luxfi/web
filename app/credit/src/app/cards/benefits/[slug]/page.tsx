import { notFound } from "next/navigation"
import { Button } from "@hanzo/ui/primitives"
import { ImageBlockComponent } from "@hanzo/ui/blocks"
import benefits from "@/content/cards/benefits"
import BackButton from "@/components/back-button"
import Link from "next/link"

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

const Page = async ({ params }: PageProps) => {
  const resolvedParams = await params

  const benefit = benefits.find(benefit => benefit.id === resolvedParams.slug)

  if (!benefit) {
    notFound()
  }

  return (
    <div className={'flex flex-col gap-4 pt-11'}>
      <div className='flex gap-4 items-center self-start cursor-pointer px-4'>
        <BackButton />
        <div className="flex gap-3 items-center">
          <div>{benefit.title}</div>
          <benefit.Icon width={24} height={24}/>
        </div>
      </div>
      <p className="text-xs px-4">{benefit.description}</p>
      <ImageBlockComponent
        block={{blockType: 'image', ...benefit.img}}
        className='w-full h-auto max-w-full'
      />
      <div className="flex gap-4 px-4">
        <Link href='/cards' className="w-full">
          <Button variant='outline' className="w-full">
            View All Cards
          </Button>
        </Link>
        <Link href='/compare' className="w-full">
          <Button variant='primary' className="w-full">
            Compare Cards
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Page
