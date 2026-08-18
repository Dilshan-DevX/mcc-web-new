import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Achievements } from '@/components/achievements'

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Celebrating the achievements of students and staff at A/Maithreepala Senanayake Central College.',
}

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        title="Excellence Worth Celebrating"
        subtitle="A selection of achievements that reflect the dedication and talent of our students and teachers."
        breadcrumbs={[{ label: 'Achievements' }]}
      />
      <Achievements />
    </>
  )
}
