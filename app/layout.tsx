import Head from 'next/head'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tomás Di Bacco',
  description: 'Portfolio',
  applicationName: 'Portfolio',
  viewport: 'width=device-width, initial-scale=1',
  colorScheme: 'dark',
  themeColor: '#141414',
  authors: {
    name: 'Tomás Di Bacco',
    url: 'https://www.linkedin.com/in/tomas-di-bacco/'
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="copyright" content="Tomás Di Bacco©" />
        <meta name="theme-color" content="#141414" />
      </Head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
