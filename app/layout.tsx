import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TabeloGooglemap',
  description: 'お店選びをもっと簡単に',
  openGraph: {
    title: 'TabeloGooglemap',
    description: 'お店選びをもっと簡単に',
    images: [
      {
        url: 'http://drive.google.com/uc?export=view&id=128KyC4qBy6TgkUDp6hgHxWjKImd0dq9u',
        width: 1602,
        height: 916,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
