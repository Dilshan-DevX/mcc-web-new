'use client'

import { FileText, Download } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { notices } from '@/data/notices'

const categoryColor: Record<string, string> = {
  Announcement: 'bg-gold/15 text-gold-dark',
  Examination: 'bg-maroon/10 text-maroon',
  Admission: 'bg-navy/10 text-navy',
  Meeting: 'bg-emerald-500/10 text-emerald-700',
  Academic: 'bg-blue-500/10 text-blue-700',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function Notices() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Notice Board"
          title="Downloads & Circulars"
          subtitle="Official notices and downloadable circulars. Sample entries shown — replace with live documents."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <ul className="divide-y divide-border">
            {notices.map((n, i) => (
              <Reveal
                key={n.title}
                as="li"
                delay={i * 0.05}
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-cream/60"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <FileText className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColor[n.category]}`}
                    >
                      {n.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(n.date)}
                    </span>
                  </div>
                  <h3 className="mt-1 truncate font-medium text-foreground">
                    {n.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-xs font-semibold text-navy transition-colors hover:bg-navy hover:text-primary-foreground"
                  aria-label={`Download ${n.title} (${n.fileType.toUpperCase()})`}
                >
                  <Download className="size-4" />
                  <span className="hidden sm:inline">
                    {n.fileType.toUpperCase()}
                  </span>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
