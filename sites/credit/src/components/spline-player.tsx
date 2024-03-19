'use client'

import Spline from '@splinetool/react-spline';

const SplinePlayer: React.FC<{
  src: string
}> = ({
  src
}) => {
  return (
    <Spline scene={src} className='!w-full !h-full !aspect-[12/10]' />
  )
}

export default SplinePlayer