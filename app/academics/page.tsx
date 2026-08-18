import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Academics } from '@/components/academics'
import { Reveal } from '@/components/ui/reveal'
import { alStreams } from '@/data/academics'

export const metadata: Metadata = {
  title: 'Academics',
  description:
    'Explore the academic programs at A/Maithreepala Senanayake Central College — from Primary to Advanced Level.',
}

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        title="Academic Excellence"
        subtitle="Creating pathways for every learner — from primary education to advanced-level specialisations."
        breadcrumbs={[{ label: 'Academics' }]}
      />
      <Academics />

      {/* A/L Streams Detail */}
      <section className="bg-soft-gray py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Advanced Level
            </span>
            <h2 className="font-display text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Specialised Streams
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Our Advanced Level program offers multiple streams, allowing students
              to pursue their chosen academic pathway toward higher education.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {alStreams.map((stream, i) => (
              <Reveal key={stream} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
                  <span className="font-display text-lg font-bold text-navy">
                    {stream}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="text-sm italic text-muted-foreground">
              Note: Only streams actually available at the school should be
              displayed. Replace this sample list with verified information.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
