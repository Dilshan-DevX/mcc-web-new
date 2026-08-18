import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Portal } from '@/components/portal'
import { PortalLogin } from '@/components/portal-login'

export const metadata: Metadata = {
  title: 'Student Portal',
  description:
    'Access student results, attendance, timetables and announcements at A/Maithreepala Senanayake Central College.',
}

export default function StudentPortalPage() {
  return (
    <>
      <PageHero
        title="Student Portal"
        subtitle="Access results, attendance, timetables and announcements — all in one secure place."
        breadcrumbs={[{ label: 'Student Portal' }]}
      />
      <PortalLogin />
      <Portal />
    </>
  )
}
