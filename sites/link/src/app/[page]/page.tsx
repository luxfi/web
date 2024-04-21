'use client'

import React, {useEffect} from 'react'
import {useParams, useRouter} from "next/navigation";
import links, {type ILink, type ILinks} from "@/links";

const RedirectPage = () => {
  const { page } = useParams()
  const router = useRouter()

  const pages = Object.keys(links)
    // @ts-ignore
    .flatMap(type => links[type]
      .map((link: ILink) => {
        return {
          name: link.name,
          url: link.url
        }}))

  useEffect(() => {
    if (page) {
      const route = (page as string).toLowerCase()
      if (pages.some(p => p.name.toLowerCase() === route)) {
        window.location.replace(pages.find(p => p.name.toLowerCase() === route).url)
      } else {
        // no page matched, redirect to root
        router.push('/')
      }
    }

  }, [page])

  return (<></>)
}

export default RedirectPage
