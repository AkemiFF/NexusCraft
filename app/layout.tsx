import type { Metadata } from 'next';
import { Toaster } from './components/toast-provider';
import './globals.css';


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
      </head>
      <body>{children}
        <Toaster />
      </body>
    </html>
  )
}
