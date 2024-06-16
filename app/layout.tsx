import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'

import { Navbar } from '@/components'
import { cn } from '@/lib/utils'
import { ToastContainer } from 'react-toastify'

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
  const classNames = cn(
    inter.className,
    'box-border flex w-full justify-center items-center flex-col',
  ) // 'w-full max-w-5xl p-6'

  return (
    <html lang="en">
      <body className={classNames}>
        <ToastContainer />
        <Suspense>
          <Navbar />
        </Suspense>
        <div className="w-full max-w-5xl p-6">{children}</div>
      </body>
    </html>
  )
}
