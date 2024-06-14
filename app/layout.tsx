import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components'
import { cn } from '@/lib/utils'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beta Shop',
  description: 'Beta Shop Test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const classNames = cn(inter.className, 'w-full max-w-5xl p-6')

  return (
    <html
      lang="en"
      className="box-border flex w-full justify-center object-center"
    >
      <body className={classNames}>
        <ToastContainer />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
