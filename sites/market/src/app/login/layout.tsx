import { Suspense, type PropsWithChildren } from 'react'

const LoginLayout: React.FC<PropsWithChildren> = async ({
  children
}) => (
  <Suspense>{children}</Suspense>
)

export default LoginLayout