import type React from "react"
import "@/app/globals.css"
import { Montserrat, Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { SEO } from '@/lib/constants'
import { Metadata } from 'next'

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["500", "600", "700", "800"],
})

// Load Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
  weight: ["300", "400", "500", "600", "700"],
})

// Define metadata for SEO
export const metadata: Metadata = {
  title: SEO.DEFAULT_TITLE,
  description: SEO.DEFAULT_DESCRIPTION,
  keywords: SEO.DEFAULT_KEYWORDS,
  authors: [{ name: 'Eversolar' }],
  creator: 'Eversolar',
  metadataBase: new URL(SEO.CANONICAL_URL), 
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: SEO.CANONICAL_URL,
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    siteName: SEO.SITE_NAME,
    images: [
      {
        url: `${SEO.CANONICAL_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SEO.DEFAULT_TITLE,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.DEFAULT_TITLE,
    description: SEO.DEFAULT_DESCRIPTION,
    images: [`${SEO.CANONICAL_URL}/twitter-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
