import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Alumni } from '@/components/alumni'
import { Reveal } from '@/components/ui/reveal'

export const metadata: Metadata = {
  title: 'Alumni',
  description:
    'Connect with the alumni network of A/Maithreepala Senanayake Central College, Medawachchiya.',
}

export default function AlumniPage() {
  return (
    <>
      <PageHero
        title="Our Alumni. Our Pride."
        subtitle="From classrooms in Medawachchiya to communities around Sri Lanka and beyond, our alumni continue to carry the values of their school."
        breadcrumbs={[{ label: 'Alumni' }]}
      />
      <Alumni />

      {/* Join CTA */}
      <section className="bg-navy py-20 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold">
              Stay Connected
            </h2>
            <p className="mt-4 text-pretty text-primary-foreground/75">
              Are you a past pupil of MSC College? Join our growing alumni
              network and help us build a stronger community.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-navy transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Join the Alumni Network
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
