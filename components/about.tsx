'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, HeartHandshake, Users } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { aboutFeatures } from '@/data/school'

const icons = [Award, Users, HeartHandshake]

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-students.png"
              alt="Students learning together in a classroom"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-xl bg-navy px-6 py-5 text-primary-foreground shadow-xl sm:block lg:-right-6">
            <p className="font-display text-3xl font-bold text-gold">Est. 1950</p>
            <p className="text-xs uppercase tracking-wider text-primary-foreground/70">
              A tradition of learning
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gold" />
              Our Story
            </span>
            <h2 className="font-display text-balance text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
              A Legacy of Education and Excellence
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              A/Maithreepala Senanayake Central College has been a respected
              centre of education in the Medawachchiya community, nurturing
              generations of students through academic excellence, discipline,
              leadership and service.
            </p>
            <Link
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-gold"
            >
              Discover Our History
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutFeatures.map((f, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={f.title} delay={0.1 * i}>
                  <div className="h-full rounded-xl border border-border bg-soft-gray/60 p-5 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-md">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-navy text-gold">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-display font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {f.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
