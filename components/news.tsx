'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { news } from '@/data/news'
import { formatDate } from '@/lib/format-date'

export { formatDate }

export function News() {
  const featured = news.find((n) => n.featured) ?? news[0]
  const rest = news.filter((n) => n.slug !== featured.slug).slice(0, 3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading label="News & Events" title="Latest from Our School" />
        <Reveal>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-navy hover:bg-navy hover:text-primary-foreground"
          >
            View All News
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Link
            href={`/news/${featured.slug}`}
            className="group relative block h-full min-h-[24rem] overflow-hidden rounded-2xl"
          >
            <Image
              src={featured.image || '/placeholder.svg'}
              alt={featured.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
              <div className="flex items-center gap-3 text-xs font-medium">
                <span className="rounded-full bg-gold px-3 py-1 font-semibold text-navy">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5 text-primary-foreground/80">
                  <CalendarDays className="size-3.5" />
                  {formatDate(featured.date)}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-2 max-w-lg text-pretty text-primary-foreground/85">
                {featured.excerpt}
              </p>
            </div>
          </Link>
        </Reveal>

        <div className="flex flex-col gap-6">
          {rest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.08} className="flex-1">
              <Link
                href={`/news/${article.slug}`}
                className="group flex h-full gap-4 overflow-hidden rounded-2xl border border-border bg-card p-3 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] w-32 shrink-0 overflow-hidden rounded-xl sm:w-44">
                  <Image
                    src={article.image || '/placeholder.svg'}
                    alt={article.title}
                    fill
                    sizes="180px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center py-1 pr-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-gold">
                      {article.category}
                    </span>
                    <span className="text-muted-foreground">
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display font-bold leading-snug transition-colors group-hover:text-navy">
                    {article.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                    Read More
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
