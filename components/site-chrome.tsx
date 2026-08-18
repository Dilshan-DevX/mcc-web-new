'use client'

import type { ReactNode } from 'react'
import { LanguageProvider } from '@/components/language-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
    </LanguageProvider>
  )
}
