import React, { PropsWithChildren } from 'react'

type TypographySize = 'responsive' | 'sm' | 'base' | 'lg' // if t-shirt size, do *not* be responsive

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
  'typography gap-3 ' +
  'xs:typography-sm ' + 
  'sm:typography-base sm:gap-4' +
  'lg:typography-lg lg:gap-5 ' + 
  'typography-headings:font-heading ' // only effects h1-h3 (in plugin)

  switch (size) {
    case 'sm': {
      typoClasses = 'typography-sm gap-3 typography-headings:font-heading '
    } break
    case 'base': {
      typoClasses = 'typography-base gap-4 typography-headings:font-heading '
    } break
    case 'lg': {
      typoClasses = 'typography-lg gap-5 typography-headings:font-heading '
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
