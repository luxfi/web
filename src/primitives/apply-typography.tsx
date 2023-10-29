import React, { PropsWithChildren } from 'react'


const typoClasses = 
  'typography dark:typography-invert gap-3 ' + 
  'md:typography-md dark:md:typography-invert-md md:gap-3 ' +
  'lg:typography-lg dark:lg:typography-invert-lg lg:gap-4 '

const ApplyTypography: React.FC<
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
export default ApplyTypography
