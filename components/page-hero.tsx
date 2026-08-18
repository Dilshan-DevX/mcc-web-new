'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

type PageHeroProps = {
  title: string
  subtitle?: string
  breadcrumbs?: { label: string; href?: string }[]
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  const reduce = useReducedMotion()

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="relative overflow-hidden bg-navy pt-40 pb-16 text-primary-foreground lg:pb-20">
      {/* Subtle geometric motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, var(--gold-light) 0, var(--gold-light) 1px, transparent 1px, transparent 28px)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 50%, var(--gold) 0, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            {...rise(0)}
            aria-label="Breadcrumb"
            className="mb-6"
          >
            <ol className="flex flex-wrap items-center gap-1 text-sm text-primary-foreground/60">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-gold-light"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  <ChevronRight className="size-3.5" />
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-gold-light"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-light">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}

        <motion.h1
          {...rise(0.1)}
          className="font-display text-balance text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            {...rise(0.2)}
            className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/75"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.span
          {...rise(0.3)}
          className="mt-6 block h-1 w-16 rounded-full bg-gold"
          aria-hidden
        />
      </div>
    </section>
  )
}
