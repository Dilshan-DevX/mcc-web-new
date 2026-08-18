import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Gallery } from '@/components/gallery'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore photos and moments from campus life, events, sports and culture at A/Maithreepala Senanayake Central College.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Moments That Define Us"
        subtitle="Glimpses of campus life, events, sports, academics and culture."
        breadcrumbs={[{ label: 'Gallery' }]}
      />
      <section className="py-24 lg:py-32">
        <Gallery showHeading={false} />
      </section>
    </>
  )
}
