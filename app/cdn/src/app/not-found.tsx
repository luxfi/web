'use client'

import { redirect } from 'next/navigation'

export default function NotFoundComponent() {
  return redirect(`https://lux.network`)
}
