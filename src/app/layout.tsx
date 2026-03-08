import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './(components)/header'
import Footer from './(components)/footer'
import { ThemeProvider } from './(components)/theme-provider'
import { LocaleProvider } from './(components)/locale-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - Spencer Sharp',
    default: 'Spencer Sharp - Software designer, founder, and amateur astronaut',
  },
  description:
    "I'm Spencer, a software designer and entrepreneur based in New York City.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <LocaleProvider>
        <ThemeProvider>
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
