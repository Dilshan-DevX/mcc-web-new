'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X, GraduationCap, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, school } from '@/data/school'
import { LanguageSwitcher } from './language-switcher'
import { StudentPortalButton } from './student-portal-button'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  desktopBreakpoint: string
}

export function MobileMenu({ open, onClose, desktopBreakpoint }: MobileMenuProps) {
  const pathname = usePathname()
  const reduce = useReducedMotion()
  const [openSub, setOpenSub] = useState<string | null>(null)

  const isActive = useCallback(
    (href: string) =>
      href === '/' ? pathname === '/' : pathname.startsWith(href),
    [pathname],
  )

  const handleToggle = (href: string) => {
    setOpenSub((prev) => (prev === href ? null : href))
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.3 }}
          className={cn(
            'fixed inset-0 z-50 flex flex-col bg-white text-navy',
            `${desktopBreakpoint}:hidden`,
          )}
        >
          {/* Mobile Header */}
          <div className="flex h-[72px] shrink-0 items-center justify-between px-4 sm:px-6">
            <span className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-navy text-gold">
                <GraduationCap className="size-[22px]" />
              </span>
              <span className="flex flex-col justify-center leading-tight">
                <span className="font-display text-[12px] font-semibold tracking-wider text-royal-blue uppercase">
                  MSC MAITHREEPALA SENANAYAKE
                </span>
                <span className="font-display text-[15px] font-bold tracking-tight text-burgundy uppercase">
                  CENTRAL COLLEGE
                </span>
              </span>
            </span>
            <button
              onClick={onClose}
              className="flex size-10 items-center justify-center rounded-full border border-navy/10 text-navy/80 transition-colors hover:bg-navy/5"
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: reduce ? 0 : 0.04,
                  delayChildren: 0.05,
                },
              },
            }}
            className="flex flex-1 flex-col justify-start overflow-y-auto pb-8 pt-4 gap-1 px-6 sm:px-10"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href)
              const hasSub = link.subItems && link.subItems.length > 0
              const isSubOpen = openSub === link.href

              return (
                <motion.li
                  key={link.href}
                  className="flex flex-col"
                  variants={{
                    hidden: { opacity: 0, x: -14 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  {hasSub ? (
                    <button
                      onClick={() => handleToggle(link.href)}
                      className={cn(
                        'flex w-full items-center justify-between py-3 font-display text-[22px] font-semibold transition-colors',
                        active || isSubOpen
                          ? 'text-gold'
                          : 'text-navy/80 hover:text-navy',
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            'h-6 w-[3px] rounded-full transition-all duration-200',
                            active ? 'bg-gold' : 'bg-transparent',
                          )}
                          aria-hidden
                        />
                        {link.label}
                      </div>
                      <ChevronDown
                        className={cn(
                          'size-5 transition-transform duration-200',
                          isSubOpen ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        'flex items-center gap-3 py-3 font-display text-[22px] font-semibold transition-colors',
                        active
                          ? 'text-gold'
                          : 'text-navy/80 hover:text-navy',
                      )}
                    >
                      {/* Active indicator bar */}
                      <span
                        className={cn(
                          'h-6 w-[3px] rounded-full transition-all duration-200',
                          active ? 'bg-gold' : 'bg-transparent',
                        )}
                        aria-hidden
                      />
                      {link.label}
                    </Link>
                  )}

                  {/* Sub Items Accordion */}
                  {hasSub && (
                    <AnimatePresence>
                      {isSubOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="flex flex-col pl-8 pb-2 pt-1">
                            {link.subItems?.map((sub) => {
                              const isSubActive = pathname === sub.href
                              return (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={onClose}
                                    className={cn(
                                      'block py-2.5 text-[16px] font-medium transition-colors',
                                      isSubActive
                                        ? 'text-gold'
                                        : 'text-navy/70 hover:text-navy'
                                    )}
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.li>
              )
            })}
          </motion.ul>

          {/* Mobile Footer */}
          <div className="flex shrink-0 items-center justify-between gap-4 border-t border-navy/10 px-6 py-6 sm:px-10">
            <LanguageSwitcher size="md" />
            <StudentPortalButton onClick={onClose} size="md" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
