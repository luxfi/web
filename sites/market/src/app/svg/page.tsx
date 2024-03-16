import React from 'react'

import SVG_Bar from '../../conf/commerce/facets/img/bar.svg'

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Page: React.FC<PageProps> = ({
  searchParams
}) => {

  return (
    <div className='mt-4 flex flex-col items-center'>
      <div className='border '>
        <SVG_Bar width={50} />
      </div>
    </div>
  )

}

export default Page
