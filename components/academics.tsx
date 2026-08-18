'use client'

import Link from 'next/link'
import { ArrowRight, Sprout, BookOpen, GraduationCap, Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { academics, type AcademicProgram } from '@/data/academics'

const iconMap: Record<AcademicProgram['icon'], typeof Sprout> = {
  sprout: Sprout,
  book: BookOpen,
  graduation: GraduationCap,
  award: Award,
}

export function Academics() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionHeading
        label="Academics"
        title="Academic Excellence"
        subtitle="Creating pathways for every learner."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {academics.map((program, i) => {
          const Icon = iconMap[program.icon]
          return (
            <Reveal key={program.title} delay={i * 0.08}>
              <Link
                href="/academics"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-navy/5"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="size-6" />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold">
                  {program.grades}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold">
                  {program.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
