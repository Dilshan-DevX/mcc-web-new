'use client'

import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { school } from '@/data/school'

/* Inline SVG social icons — lucide-react no longer ships brand icons */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Alumni', href: '/alumni' },
  { label: 'Contact', href: '/contact' },
]

const resources = [
  { label: 'Student Portal', href: '/student-portal' },
  { label: 'Notices', href: '/notices' },
  { label: 'Events', href: '/events' },
  { label: 'Facilities', href: '/facilities' },
]

export function Footer() {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_auto]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-gold text-navy">
                <GraduationCap className="size-6" />
              </span>
              <span className="font-display text-lg font-bold leading-tight">
                {school.shortName}
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              The official digital platform of {school.name}, {school.location}
              {' '}— connecting students, parents, teachers, alumni and the wider
              school community.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: FacebookIcon, href: school.socials.facebook, label: 'Facebook' },
                { icon: YoutubeIcon, href: school.socials.youtube, label: 'YouTube' },
                { icon: InstagramIcon, href: school.socials.instagram, label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={quickLinks} />
          <FooterCol title="Resources" links={resources} />

          <div className="min-w-52">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              Visit Us
            </h3>
            <address className="mt-5 space-y-1 text-sm not-italic text-primary-foreground/70">
              <p>{school.address.line1}</p>
              <p>{school.address.line2}</p>
              <p>{school.address.country}</p>
              <p className="pt-2">{school.phone}</p>
              <p>{school.email}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/55 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {school.name} – {'Medawachchiya'}. All
            Rights Reserved.
          </p>
          <p>Designed &amp; Developed with care.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-primary-foreground/70 transition-colors hover:text-gold-light"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
