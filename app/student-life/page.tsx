import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { StudentLife } from '@/components/student-life'

export const metadata: Metadata = {
  title: 'Student Life',
  description:
    'Discover the vibrant student life at A/Maithreepala Senanayake Central College — sports, clubs, arts, leadership and more.',
}

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        title="Life Beyond the Classroom"
        subtitle="A vibrant community of sports, arts, leadership and service — where every student finds their place."
        breadcrumbs={[{ label: 'Student Life' }]}
      />
      <StudentLife />
    </>
  )
}
