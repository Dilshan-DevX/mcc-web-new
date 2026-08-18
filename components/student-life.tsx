'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { studentLife } from '@/data/student-life'

// Bento layout spans (desktop): 6-col grid
const spans = [
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-3',
  'lg:col-span-3',
]

export function StudentLife() {
  return (
    <section className="bg-soft-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Student Life"
          title="Life Beyond the Classroom"
          subtitle="A vibrant community of sports, arts, leadership and service — where every student finds their place."
        />

        <div className="mt-14 grid auto-rows-[minmax(180px,1fr)] gap-4 md:grid-cols-2 lg:grid-cols-6">
          {studentLife.map((cat, i) => (
            <Reveal
              key={cat.title}
              delay={i * 0.06}
              className={cn('group relative', spans[i])}
            >
              <div className="relative h-full min-h-44 overflow-hidden rounded-2xl">
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold">{cat.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    {cat.description}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {cat.items.slice(0, 5).map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-2.5 py-0.5 text-xs backdrop-blur-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
