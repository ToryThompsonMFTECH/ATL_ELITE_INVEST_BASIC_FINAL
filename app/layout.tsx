import type { Metadata } from 'next'
import { Inter, Playfair_Display, Poppins, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Atlanta Elite Investment Properties | Sell Your House Fast for Cash',
  description: 'Sell your Atlanta house fast for cash. No repairs, no fees, no agents. Any condition. Get your cash offer today!',
  keywords: 'sell house fast Atlanta, cash home buyers Atlanta, we buy houses Atlanta, sell house as is Atlanta',
  authors: [{ name: 'Atlanta Elite Investment Properties' }],
  openGraph: {
    title: 'Atlanta Elite Investment Properties | Sell Your House Fast for Cash',
    description: 'Sell your Atlanta house fast for cash. No repairs, no fees, no agents. Any condition.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Atlanta Elite Investment Properties',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlanta Elite Investment Properties | Sell Your House Fast for Cash',
    description: 'Sell your Atlanta house fast for cash. No repairs, no fees, no agents. Any condition.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}

