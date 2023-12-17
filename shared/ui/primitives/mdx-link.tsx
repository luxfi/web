import React,  { type AnchorHTMLAttributes, type PropsWithChildren } from 'react'
import Link from 'next/link'

const MDXLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren> = ({
  href,
  children,
  ...rest
}) => {

    // internal link
  if (href && (href.startsWith('/'))) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  return <a target="_blank" href={href} {...rest} >{children}</a>
}

export default MDXLink
