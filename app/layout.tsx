import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Noto_Sans_Sinhala } from 'next/font/google'
import { SiteChrome } from '@/components/site-chrome'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  variable: '--font-sinhala',
  display: 'swap',
})

const SITE_TITLE =
  'A/Maithreepala Senanayake Central College – Medawachchiya'
const SITE_DESCRIPTION =
  'Official digital platform of A/Maithreepala Senanayake Central College, Medawachchiya — connecting students, parents, teachers, alumni and the wider school community.'

export const metadata: Metadata = {
  metadataBase: new URL('https://msccollege.edu.lk'),
  title: {
    default: SITE_TITLE,
    template: `%s | Maithreepala Senanayake Central College`,
  },
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  keywords: [
    'Maithreepala Senanayake Central College',
    'Medawachchiya',
    'Sri Lanka national school',
    'central college',
    'education Sri Lanka',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: 'Maithreepala Senanayake Central College',
    images: [{ url: '/images/campus-hero.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/campus-hero.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#123c73',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${notoSinhala.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteChrome>{children}</SiteChrome>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
