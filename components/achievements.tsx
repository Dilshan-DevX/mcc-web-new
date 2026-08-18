'use client'

import { cn } from '@/lib/utils'
import {
  Trophy,
  Medal,
  Palette,
  Laptop,
  Sprout,
  Flag,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { achievements, type Achievement } from '@/data/achievements'

const categoryIcon: Record<Achievement['category'], typeof Trophy> = {
  Academic: Trophy,
  Sports: Medal,
  'Arts & Culture': Palette,
  Technology: Laptop,
  Community: Sprout,
  National: Flag,
}

// Bento spans for a 6-col grid across 6 items
const spans = [
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-6',
]

export function Achievements() {
  return (
    <section className="bg-navy py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Achievements"
          title="Excellence Worth Celebrating"
          subtitle="A selection of sample achievements — structured so verified accomplishments can easily replace them."
          tone="dark"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {achievements.map((a, i) => {
            const Icon = categoryIcon[a.category]
            return (
              <Reveal
                key={a.title}
                delay={i * 0.06}
                className={cn(spans[i])}
              >
                <article className="group flex h-full flex-col rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-primary-foreground/[0.07]">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-2xl font-bold text-gold/90">
                      {a.year}
                    </span>
                  </div>
                  <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold-light">
                    {a.category}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                    {a.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
