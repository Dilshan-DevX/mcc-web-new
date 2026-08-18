import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { EventsCalendar } from '@/components/events-calendar'

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Browse upcoming school events, meetings and ceremonies at A/Maithreepala Senanayake Central College.',
}

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events Calendar"
        subtitle="Browse upcoming school events by month, or view them as a list."
        breadcrumbs={[{ label: 'Events' }]}
      />
      <EventsCalendar />
    </>
  )
}
