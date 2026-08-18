'use client'

import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { facilities } from '@/data/facilities'

export function Facilities() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Campus & Facilities"
          title="Spaces Built for Growth"
          subtitle="Modern amenities and dedicated spaces that support learning, discovery and well-rounded development."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.06}
              as="article"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={f.image || '/placeholder.svg'}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-bold text-primary-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm leading-relaxed text-primary-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                    {f.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
