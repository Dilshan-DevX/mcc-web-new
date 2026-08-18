'use client'

import { Lock } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

export function PortalLogin() {
  return (
    <section className="mx-auto max-w-md px-4 py-24 sm:px-6 lg:py-32">
      <Reveal>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-navy/5 text-navy">
              <Lock className="size-7" />
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold">
              Portal Login
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              This is a demonstration login. Connect this form to your school
              management system when ready.
            </p>
          </div>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="portal-username"
                className="text-sm font-medium text-foreground"
              >
                Username
              </label>
              <input
                id="portal-username"
                type="text"
                placeholder="Enter your username"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="portal-password"
                className="text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="portal-password"
                type="password"
                placeholder="Enter your password"
                className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-navy py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Forgot your credentials? Contact the school administration.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
