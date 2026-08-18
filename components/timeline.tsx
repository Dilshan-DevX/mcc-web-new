'use client'

import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { timeline } from '@/data/school'

export function Timeline() {
  return (
    <section className="bg-soft-gray py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Journey"
          title="Milestones Through the Decades"
          subtitle="A sample timeline of our development. This content can be replaced with verified historical information."
          align="center"
        />

        <div className="relative mt-16">
          <div
            className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-10 md:space-y-14">
            {timeline.map((item, i) => {
              const left = i % 2 === 0
              return (
                <li key={item.year} className="relative">
                  <span
                    className="absolute left-4 top-2 z-10 size-3.5 -translate-x-1/2 rounded-full border-2 border-gold bg-card md:left-1/2"
                    aria-hidden
                  />
                  <Reveal
                    className={cn(
                      'ml-10 md:ml-0 md:w-[calc(50%-2.5rem)]',
                      left ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4',
                    )}
                  >
                    <div
                      className={cn(
                        'rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md',
                        left ? 'md:text-right' : 'md:text-left',
                      )}
                    >
                      <span className="font-display text-2xl font-bold text-gold">
                        {item.year}
                      </span>
                      <p className="mt-2 text-pretty leading-relaxed text-foreground">
                        {item.title}
                      </p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
