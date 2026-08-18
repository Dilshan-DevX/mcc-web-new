'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { principalMessage as p } from '@/data/school'

export function PrincipalMessage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={p.image || '/placeholder.svg'}
              alt={`${p.name}, ${p.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <span
            className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-2xl border-l-4 border-t-4 border-gold"
            aria-hidden
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gold" />
              From the Principal
            </span>
            <h2 className="font-display text-balance text-[clamp(1.8rem,3.4vw,2.75rem)] font-bold leading-tight">
              A Message to Our School Community
            </h2>

            <Quote className="mt-6 size-8 text-gold/60" aria-hidden />
            <div className="mt-2 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {p.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-display text-xl italic text-navy">{p.name}</p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {p.title}
              </p>
              <p className="text-sm text-muted-foreground">{p.school}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
