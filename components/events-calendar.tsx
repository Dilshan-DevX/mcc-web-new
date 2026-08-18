'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Clock, CalendarDays } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { events, eventCategoryColors, type SchoolEvent } from '@/data/events'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function keyFor(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

export function EventsCalendar() {
  // Anchor to the first event's month so there's always content on load.
  const initial = new Date(events[0]?.date ?? Date.now())
  const [year, setYear] = useState(initial.getFullYear())
  const [month, setMonth] = useState(initial.getMonth())
  const [selected, setSelected] = useState<SchoolEvent | null>(null)

  const eventsByDate = useMemo(() => {
    const map = new Map<string, SchoolEvent[]>()
    for (const e of events) {
      const arr = map.get(e.date) ?? []
      arr.push(e)
      map.set(e.date, arr)
    }
    return map
  }, [])

  const monthEvents = useMemo(
    () =>
      [...events]
        .filter((e) => {
          const d = new Date(e.date)
          return d.getFullYear() === year && d.getMonth() === month
        })
        .sort((a, b) => a.date.localeCompare(b.date)),
    [year, month],
  )

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  const changeMonth = (dir: number) => {
    let m = month + dir
    let y = year
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    setMonth(m)
    setYear(y)
  }

  return (
    <section className="bg-soft-gray py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Events Calendar"
          title="What's Coming Up"
          subtitle="Browse upcoming school events by month, or view them as a list."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Calendar grid (desktop-friendly, still usable on mobile) */}
          <Reveal className="hidden rounded-2xl border border-border bg-card p-5 shadow-sm sm:block">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">
                {MONTHS[month]} {year}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => changeMonth(-1)}
                  className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-navy hover:text-primary-foreground"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => changeMonth(1)}
                  className="flex size-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-navy hover:text-primary-foreground"
                  aria-label="Next month"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase text-muted-foreground">
              {WEEKDAYS.map((d) => (
                <div key={d} className="py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {cells.map((day, i) => {
                if (day === null) return <div key={`e${i}`} />
                const dayEvents = eventsByDate.get(keyFor(year, month, day)) ?? []
                const has = dayEvents.length > 0
                return (
                  <button
                    key={day}
                    onClick={() => has && setSelected(dayEvents[0])}
                    disabled={!has}
                    className={cn(
                      'relative flex aspect-square flex-col items-center justify-center rounded-lg text-sm transition-colors',
                      has
                        ? 'cursor-pointer bg-navy/5 font-semibold text-navy hover:bg-navy hover:text-primary-foreground'
                        : 'text-foreground/70',
                    )}
                  >
                    {day}
                    {has && (
                      <span
                        className="absolute bottom-1.5 size-1.5 rounded-full"
                        style={{ background: eventCategoryColors[dayEvents[0].category] }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* Chronological list — primary view on mobile */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                <CalendarDays className="size-5 text-gold" />
                {MONTHS[month]} Events
              </h3>
              <ul className="mt-4 space-y-3">
                {monthEvents.length === 0 && (
                  <li className="rounded-lg bg-soft-gray p-4 text-sm text-muted-foreground">
                    No events scheduled this month.
                  </li>
                )}
                {monthEvents.map((e) => (
                  <li key={e.title + e.date}>
                    <button
                      onClick={() => setSelected(e)}
                      className="flex w-full items-center gap-4 rounded-xl border border-border p-3 text-left transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-sm"
                    >
                      <span
                        className="flex size-12 shrink-0 flex-col items-center justify-center rounded-lg text-primary-foreground"
                        style={{ background: eventCategoryColors[e.category] }}
                      >
                        <span className="text-base font-bold leading-none">
                          {new Date(e.date).getDate()}
                        </span>
                        <span className="text-[10px] uppercase">
                          {MONTHS[new Date(e.date).getMonth()].slice(0, 3)}
                        </span>
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-semibold">{e.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {e.category}
                          {e.time ? ` · ${e.time}` : ''}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-dark/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-md rounded-2xl bg-card p-7 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-soft-gray"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-primary-foreground"
                style={{ background: eventCategoryColors[selected.category] }}
              >
                {selected.category}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{selected.title}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-gold" />
                  {new Date(selected.date).toLocaleDateString('en-GB', {
                    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                  })}
                </span>
                {selected.time && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4 text-gold" />
                    {selected.time}
                  </span>
                )}
              </div>
              <p className="mt-4 leading-relaxed text-foreground">
                {selected.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
