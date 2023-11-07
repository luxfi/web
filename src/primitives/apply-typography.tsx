import React, { PropsWithChildren } from 'react'

type TypographySize = 'responsive' | 'sm' | 'md' | 'lg' // if t-shirt size, do *not* be responsive

const ApplyTypography: React.FC<
  PropsWithChildren & {
    className?: string,
    asTag?: 'div' | 'section' | 'nav' | 'main' | 'article',
    size?: TypographySize
  }
> = ({ 
  children,
  className='',
  asTag='div',
  size='responsive'
}) => {

  let typoClasses = 
  'typography dark:typography-invert gap-3 ' + 
  'md:typography-md dark:md:typography-invert-md md:gap-3 ' +
  'lg:typography-lg dark:lg:typography-invert-lg lg:gap-4 '

  switch (size) {
    case 'sm': {
      typoClasses = 'typography dark:typography-invert gap-3' 
    } break
    case 'md': {
      typoClasses = 'typography-md dark:typography-invert-md gap-3' 
    } break
    case 'lg': {
      typoClasses = 'typography-lg dark:typography-invert-lg gap-4' 
    } break
  }

  const Tag = asTag
  return (
    <Tag className={typoClasses + className}>
      {children}
    </Tag>
  )
}
export {
  type TypographySize,
  ApplyTypography as default
}
