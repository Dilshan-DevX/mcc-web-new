import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Notices } from '@/components/notices'

export const metadata: Metadata = {
  title: 'Notices',
  description:
    'View official notices, circulars and downloadable documents from A/Maithreepala Senanayake Central College.',
}

export default function NoticesPage() {
  return (
    <>
      <PageHero
        title="Important Notices"
        subtitle="Official notices and downloadable circulars from the school administration."
        breadcrumbs={[{ label: 'Notices' }]}
      />
      <Notices />
    </>
  )
}
