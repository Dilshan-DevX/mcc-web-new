import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with A/Maithreepala Senanayake Central College — admissions, inquiries and visit planning.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would be glad to hear from you. Reach out for admissions, inquiries or to plan a visit."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <Contact />
    </>
  )
}
