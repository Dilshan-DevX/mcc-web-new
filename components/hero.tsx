'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { school } from '@/data/school'
import { useLanguage } from '@/components/language-provider'

export function Hero() {
  const reduce = useReducedMotion()
  const { t } = useLanguage()

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <Image
          src="/images/campus-hero.png"
          alt="A/Maithreepala Senanayake Central College campus"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/92 via-navy/80 to-navy-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-navy-dark/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-36 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            {...rise(0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-gold" />
            {t('heroLabel')}
          </motion.span>

          <motion.h1
            {...rise(0.25)}
            className="mt-6 font-display text-balance text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.98] tracking-tight text-primary-foreground"
          >
            {school.name}
          </motion.h1>

          <motion.p
            {...rise(0.4)}
            className="mt-4 flex items-center gap-3 font-display text-xl font-medium text-gold-light sm:text-2xl"
          >
            <span className="h-px w-10 bg-gold" />
            {school.location}
          </motion.p>

          <motion.p
            {...rise(0.55)}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85"
          >
            {t('heroTagline')}
          </motion.p>

          <motion.div {...rise(0.7)} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-gold-light"
            >
              {t('explore')}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:border-gold hover:text-gold-light"
            >
              {t('latestNews')}
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-primary-foreground/70"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
          {t('scroll')}
        </span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-5 text-gold" />
        </motion.span>
      </motion.div>
    </section>
  )
}
