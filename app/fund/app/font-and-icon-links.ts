  // 'type' must be outside the curlies! 
  // https://github.com/remix-run/remix/issues/9916#issuecomment-2436405265
import type { LinkDescriptor } from '@vercel/remix'

type CrossOrigin = "anonymous" | "use-credentials"

  // https://github.com/remix-run/remix/discussions/4963#discussioncomment-4556820
export default [
  {
    rel: "preload",
    as: "font",
    href: "/fonts/Druk-Wide-Medium.ttf", 
    type: "font/ttf",
    crossOrigin: "anonymous" as CrossOrigin
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/Druk-Wide-Bold.ttf", 
    type: "font/ttf",
    crossOrigin: "anonymous" as CrossOrigin,
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/InterVariable.woff2", 
    type: "font/woff2",
    crossOrigin: "anonymous" as CrossOrigin,
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/InterVariable.ttf", 
    type: "font/ttf",
    crossOrigin: "anonymous" as CrossOrigin,
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/InterVariable-Italic.woff2", 
    type: "font/woff2",
    crossOrigin: "anonymous" as CrossOrigin,
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/InterVariable-Italic.ttf", 
    type: "font/ttf",
    crossOrigin: "anonymous" as CrossOrigin,
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/lux-site-icons/favicon-16x16.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/lux-site-icons/favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/lux-site-icons/android-chrome-192x192.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    href: '/lux-site-icons/android-chrome-512x512.png'
  },
  {
    rel: 'apple-touch-icon',
    type: 'image/png',
    sizes: "180x180",
    href: '/lux-site-icons/apple-touch-icon.png'
  },

] satisfies LinkDescriptor[]