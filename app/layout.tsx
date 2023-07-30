import './globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from './Navbar'
import { cn } from '@/lib/utils'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(jakarta.className, "flex md:pt-0 flex-col justify-center md:flex-row h-screen dark")}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
