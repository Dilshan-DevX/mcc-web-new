'use client'

import { Reveal } from '@/components/ui/reveal'
import { vision, mission } from '@/data/school'

export function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-primary-foreground lg:py-32">
      {/* Subtle geometric motif inspired by traditional Sri Lankan patterns */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, var(--gold-light) 0, var(--gold-light) 1px, transparent 1px, transparent 22px)',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="mx-auto flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Our Vision
            <span className="h-px w-10 bg-gold" />
          </span>
          <p className="mt-8 font-display text-balance text-[clamp(1.6rem,3.2vw,2.6rem)] font-semibold leading-snug">
            {`“${vision}”`}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-16">
          <span className="mx-auto flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Our Mission
            <span className="h-px w-10 bg-gold" />
          </span>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            {mission}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
