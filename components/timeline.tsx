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

        <div className="relative mt-16 md:mt-24">
          {/* Center Vertical Line */}
          <div
            className="absolute left-4 top-0 h-full w-[2px] bg-navy/15 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="space-y-10 md:space-y-16">
            {timeline.map((item, i) => {
              const left = i % 2 === 0
              return (
                <li key={item.year} className="relative group">
                  {/* Timeline Circle */}
                  <span
                    className="absolute left-4 top-6 z-10 size-4 -translate-x-1/2 rounded-full border-[2.5px] border-gold bg-card transition-colors duration-300 group-hover:bg-gold md:left-1/2"
                    aria-hidden
                  />
                  
                  {/* Connector Line (Mobile) */}
                  <span
                    className="absolute left-[24px] top-[31px] h-[2px] w-6 bg-navy/15 transition-colors duration-300 group-hover:bg-gold/60 md:hidden"
                    aria-hidden
                  />

                  {/* Connector Line (Desktop) */}
                  <span
                    className={cn(
                      'hidden md:block absolute top-[31px] h-[2px] w-10 bg-navy/15 transition-colors duration-300 group-hover:bg-gold/60',
                      left 
                        ? 'right-[calc(50%+8px)]' 
                        : 'left-[calc(50%+8px)]'
                    )}
                    aria-hidden
                  />

                  <Reveal
                    className={cn(
                      'ml-12 md:ml-0 md:w-[calc(50%-3rem)]',
                      left ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0',
                    )}
                  >
                    <div
                      className={cn(
                        'rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-navy/5',
                        left ? 'md:text-right' : 'md:text-left',
                      )}
                    >
                      <span className="font-display text-2xl font-bold text-gold">
                        {item.year}
                      </span>
                      <p className="mt-1.5 text-pretty text-[15px] font-medium leading-relaxed text-foreground/90">
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
