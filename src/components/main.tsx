import React, { type PropsWithChildren } from 'react'

const c = 'lg:max-w-[1200px] lg:mx-auto ' + 
  'flex flex-col justify-start items-stretch ' +
  'p-4 md:px-6 lg:px-8 '

const Main: React.FC<
  PropsWithChildren & { className?: string }
> = ({
  children,
  className=''
}) => (
  <main className={c + className}>
    {children}
  </main>
)

export default Main
