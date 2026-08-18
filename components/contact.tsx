'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/ui/reveal'
import { school } from '@/data/school'

const details = [
  { icon: MapPin, label: 'Address', value: `${school.address.line1}, ${school.address.line2}, ${school.address.country}` },
  { icon: Phone, label: 'Phone', value: school.phone },
  { icon: Mail, label: 'Email', value: school.email },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get in Touch"
          title="Contact Us"
          subtitle="We would be glad to hear from you. Reach out for admissions, inquiries or to plan a visit."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div className="grid gap-4">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {d.label}
                    </span>
                    <p className="mt-0.5 font-medium leading-relaxed text-foreground">
                      {d.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="School location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapQuery)}&output=embed`}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              {submitted ? (
                <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                  <CheckCircle2 className="size-14 text-emerald-600" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Your message has been received. This is a demo form — connect
                    it to your preferred backend to receive real submissions.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Subject" name="subject" required />
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    Send Message
                    <Send className="size-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
      />
    </div>
  )
}
