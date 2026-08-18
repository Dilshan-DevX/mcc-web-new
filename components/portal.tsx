'use client'

import {
  BarChart3,
  CalendarCheck,
  Clock,
  FileEdit,
  Megaphone,
  CalendarDays,
  ArrowRight,
} from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { portalFeatures } from '@/data/notices'

const icons = [BarChart3, CalendarCheck, Clock, FileEdit, Megaphone, CalendarDays]

export function Portal() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-primary-foreground lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Student & Parent Portal
          </span>
          <h2 className="font-display text-balance text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05]">
            Everything you need, in one secure place
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/70">
            Students and parents can access results, attendance, timetables and
            announcements through a dedicated portal. This is a demonstration
            entry point — connect it to your school management system when ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              Student Login
              <ArrowRight className="size-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Parent Login
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {portalFeatures.map((feature, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal
                key={feature.title}
                delay={i * 0.06}
                className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-primary-foreground/[0.08]"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display font-bold">{feature.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-primary-foreground/60">
                  {feature.description}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
