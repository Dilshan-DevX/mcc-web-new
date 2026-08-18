'use client'

import { GraduationCap, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { alumni } from '@/data/alumni'

export function Alumni() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Alumni"
          title="A Legacy That Lives On"
          subtitle="Generations of past pupils carry the school's values into every corner of the nation and beyond."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {alumni.map((person, i) => (
            <Reveal
              key={person.name + i}
              delay={i * 0.08}
              as="article"
              className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="absolute right-5 top-5 size-8 text-gold/20" />
              <span className="flex size-14 items-center justify-center rounded-full bg-navy/5 text-navy ring-1 ring-navy/10">
                <GraduationCap className="size-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {person.name}
              </h3>
              <span className="text-sm font-semibold text-gold-dark">
                {person.profession}
              </span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {person.achievement}
              </p>
              <span className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                {person.batch}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
