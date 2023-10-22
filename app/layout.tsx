import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DishFinder',
  description: 'お店選びをもっと簡単に',
  openGraph: {
    title: 'DishFinder',
    description: 'お店選びをもっと簡単に',
    url: 'https://www.dish-finder.com/',
    siteName: 'DishFinder',
    images: [
      {
        url: 'http://drive.google.com/uc?export=view&id=1hK60uEqH4MF0kLGPoxEXiS30Tag_FjNo',
        width: 1602,
        height: 916,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images: 'https://www.dish-finder.com/thumbnail.png',
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
