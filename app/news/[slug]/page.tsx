import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Tag } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ui/reveal'
import { news, getArticle } from '@/data/news'
import { formatDate } from '@/lib/format-date'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, width: 1200, height: 630 }],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const related = news
    .filter((n) => n.slug !== article.slug)
    .slice(0, 3)

  return (
    <>
      <PageHero
        title={article.title}
        breadcrumbs={[
          { label: 'News & Events', href: '/news' },
          { label: article.title },
        ]}
      />

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4 text-gold" />
              {formatDate(article.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Tag className="size-4 text-gold" />
              {article.category}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={article.image || '/placeholder.svg'}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="prose prose-lg mt-10 max-w-none">
            {article.body.map((para, i) => (
              <p
                key={i}
                className="text-pretty leading-relaxed text-foreground/85"
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to All News
          </Link>
        </Reveal>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="border-t border-border bg-soft-gray py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-bold">More News</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.08}>
                  <Link
                    href={`/news/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={r.image || '/placeholder.svg'}
                        alt={r.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-gold">
                        {r.category}
                      </span>
                      <h3 className="mt-1 font-display font-bold leading-snug">
                        {r.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
