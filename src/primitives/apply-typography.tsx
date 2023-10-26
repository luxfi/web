import React, { PropsWithChildren } from 'react'


const typoClasses = 
  'typography dark:typography-invert gap-3 ' + 
  'md:typography-md dark:md:typography-invert-md md:gap-4' +
  'lg:typography-lg dark:lg:typography-invert-lg lg:gap-5 '

const ApplyTypo: React.FC<
  PropsWithChildren & {
    className?: string,
    asTag?: 'div' | 'section' | 'nav' | 'main' | 'article'
  }
> = ({ 
  children,
  className='',
  asTag='div'
}) => {
  const Tag = asTag
  return (
    <Tag className={typoClasses + className}>
      {children}
    </Tag>
  )
}
export default ApplyTypo
