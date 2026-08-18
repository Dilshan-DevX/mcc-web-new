import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { About } from '@/components/about'
import { Timeline } from '@/components/timeline'
import { VisionMission } from '@/components/vision-mission'
import { PrincipalMessage } from '@/components/principal-message'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about the history, vision and leadership of A/Maithreepala Senanayake Central College, Medawachchiya.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Our College"
        subtitle="A respected centre of education in the Medawachchiya community, nurturing generations of students through academic excellence, discipline, leadership and service."
        breadcrumbs={[{ label: 'About' }]}
      />
      <About />
      <Timeline />
      <VisionMission />
      <PrincipalMessage />
    </>
  )
}
