export const metadata = {
  title: 'Lux CDN',
  description: 'Lux Network content delivery network app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{backgroundColor: 'black'}}>
      <body>{children}</body>
    </html>
  )
}
