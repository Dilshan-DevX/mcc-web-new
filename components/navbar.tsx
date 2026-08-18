'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { topNavLinks } from '@/data/school'

import { Logo } from './logo'
import { LanguageSwitcher } from './language-switcher'
import { NavigationMenu } from './navigation-menu'

/* ─── Main Navbar ─── */
export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex flex-col transition-all duration-300',
        scrolled ? 'shadow-lg shadow-navy/5' : 'border-b border-navy/5'
      )}
    >
      {/* ── Top Bar (Secondary Navigation) ── */}
      <div className="bg-[#f2f4f8] border-b border-navy/5 text-navy">
        <div className="mx-auto flex max-w-[1440px] items-center justify-end overflow-x-auto px-4 py-1.5 sm:px-6 lg:px-8 xl:px-8 scrollbar-hide">
          <ul className="flex items-center gap-4 text-[11px] font-bold tracking-wider uppercase whitespace-nowrap lg:gap-6">
            {topNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-1 cursor-pointer hover:text-gold transition-colors">
              <Search className="size-[14px]" />
              <span>Search</span>
            </li>
            <li className="ml-1 border-l border-navy/15 pl-4">
              <LanguageSwitcher size="sm" />
            </li>
          </ul>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={cn(
          'w-full bg-white transition-all duration-300',
          scrolled ? 'xl:h-[76px]' : 'xl:h-[88px]'
        )}
        aria-label="Primary"
      >
        <div className="mx-auto flex h-full max-w-[1440px] flex-col justify-center xl:flex-row xl:items-center xl:justify-between py-2 xl:py-0">
          <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:w-auto xl:px-0 xl:pl-8">
            <Logo compact={scrolled} />
          </div>

          <div className="mt-2 flex w-full items-center overflow-x-auto px-4 pb-1 scrollbar-hide sm:px-6 lg:px-8 xl:mt-0 xl:w-auto xl:flex-1 xl:justify-end xl:pr-8 xl:overflow-visible xl:px-0 xl:pb-0">
            <NavigationMenu className="flex" />
          </div>
        </div>
      </nav>
    </header>
  )
}
