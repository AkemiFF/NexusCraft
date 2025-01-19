import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexusCraft',
  description: 'NexusCraft web agency website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Vous pouvez ajouter d'autres icônes si nécessaire */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
