import type { Metadata } from 'next'
import { Montserrat as FontSans } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'

import Sidebar from '@/components/Sidebar'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen w-full bg-white text-black flex font-sans antialiased',
          fontSans.variable,
          { 'debug-screens': process.env.NODE_ENV === 'development' }
        )}
      >
        {/* {sidebar} */}
        <Sidebar />

        {/* {mainpage} */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  )
}
