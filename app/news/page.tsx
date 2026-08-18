import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { news } from '@/data/news'
import { formatDate } from '@/lib/format-date'

export const metadata: Metadata = {
  title: 'News & Events',
  description:
    'Stay updated with the latest news, events and announcements from A/Maithreepala Senanayake Central College.',
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay updated with the latest from our school community."
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((article, i) => (
            <Reveal key={article.slug} delay={i * 0.06}>
              <Link
                href={`/news/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image || '/placeholder.svg'}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {formatDate(article.date)}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug transition-colors group-hover:text-navy">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    Read More
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
