import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Facilities } from '@/components/facilities'

export const metadata: Metadata = {
  title: 'Facilities',
  description:
    'Explore the campus facilities at A/Maithreepala Senanayake Central College — laboratories, library, auditorium and more.',
}

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        title="Campus & Facilities"
        subtitle="Modern amenities and dedicated spaces that support learning, discovery and well-rounded development."
        breadcrumbs={[{ label: 'Facilities' }]}
      />
      <Facilities />
    </>
  )
}
