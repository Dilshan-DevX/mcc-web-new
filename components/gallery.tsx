'use client'

import { useMemo, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'
import { gallery, galleryFilters, type GalleryImage } from '@/data/gallery'

export function Gallery({ showHeading = true }: { showHeading?: boolean }) {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filtered = useMemo<GalleryImage[]>(
    () =>
      filter === 'All'
        ? gallery
        : gallery.filter((g) => g.category === filter),
    [filter],
  )

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [activeIndex, close, next, prev])

  const active = activeIndex === null ? null : filtered[activeIndex]

  return (
    <section
      className={cn(
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        showHeading && 'py-24 lg:py-32',
      )}
    >
      {showHeading && (
        <SectionHeading
          label="Gallery"
          title="Moments That Define Us"
          subtitle="Glimpses of campus life, events, sports, academics and culture."
        />
      )}

      <div className="mt-10 flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              filter === f
                ? 'border-navy bg-navy text-primary-foreground'
                : 'border-border text-muted-foreground hover:border-navy hover:text-navy',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src + img.caption}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl"
            >
              <div
                className={cn(
                  'relative w-full',
                  img.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/3]',
                )}
              >
                <Image
                  src={img.src || '/placeholder.svg'}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                <div className="p-4 text-left text-primary-foreground">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">
                    {img.category}
                  </span>
                  <p className="mt-0.5 text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-dark/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
          >
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-gold hover:text-navy"
              aria-label="Close gallery"
            >
              <X className="size-6" />
            </button>
            <button
              onClick={prev}
              className="absolute left-4 z-10 flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-gold hover:text-navy sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 z-10 flex size-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-gold hover:text-navy sm:right-8"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
                <Image
                  src={active.src || '/placeholder.svg'}
                  alt={active.caption}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center text-primary-foreground">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {active.category}
                </span>
                <p className="mt-1 text-sm text-primary-foreground/85">
                  {active.caption}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
