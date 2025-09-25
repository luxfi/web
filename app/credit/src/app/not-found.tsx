import Link from "next/link"
import { cookies } from 'next/headers'

export default function NotFoundComponent() {
  const token = cookies().get('auth-token')
  const email = token?.value

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black text-white font-inter">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-[96px] font-bold">404</h1>
        {token ? <p className="mt-4 text-2xl">You are logged in as z@zeekay.io</p> : <p className="mt-4 text-2xl">This page does not exist</p>}
        {
          token
            ?
            <Link
              href="/login"
              className="mt-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              prefetch={false}
            >
              Sign in as a different user
            </Link>
            :
            <Link
              href="/login"
              className="mt-6 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              prefetch={false}
            >
              Sign in to you account
            </Link>
        }
      </div>
      <div className="flex flex-row gap-8 mt-10">
        <Link
          href="/docs"
          className="no-underline text-base text-white"
          prefetch={false}
        >
          Docs
        </Link>
        <Link
          href="/guides"
          className="no-underline text-base text-white"
          prefetch={false}
        >
          Guides
        </Link>
        <Link
          href="/blog"
          className="no-underline text-base text-white"
          prefetch={false}
        >
          Blog
        </Link>
      </div>
    </div>
  )
}
