'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { stats } from '@/data/school'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setDisplay(value)
      return
    }
    let raf = 0
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-navy/10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 border-border px-4 py-8 text-center [&:not(:nth-child(4n))]:lg:border-r [&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0"
          >
            <span className="font-display text-4xl font-bold text-navy sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </span>
            <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
              {s.label}
            </span>
            <span className="mt-2 h-0.5 w-8 rounded-full bg-gold" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  )
}
