import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
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
    template: '%s - Yikun Huang',
    default: 'Quincy - Software engineer, Geography Lover and Linguistic Enthusiast',
  },
  description:
    "Quincy Huang- Software engineer, Senior Frontend Software Engineer, Senior fullstack software engineer. Build things with AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7LH323JSKW" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7LH323JSKW');
        `}</Script>
      </head>
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
