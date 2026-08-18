'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/school'

interface NavigationMenuProps {
  className?: string
}

export function NavigationMenu({ className }: NavigationMenuProps) {
  const pathname = usePathname()

  const isActive = useCallback(
    (href: string) =>
      href === '/' ? pathname === '/' : pathname.startsWith(href),
    [pathname],
  )

  return (
    <ul className={cn('items-center gap-1 lg:gap-2', className)}>
      {navLinks.map((link) => {
        const active = isActive(link.href)
        const hasSubItems = link.subItems && link.subItems.length > 0

        return (
          <li key={link.href} className="group/navitem relative">
            <Link
              href={link.href}
              className={cn(
                'group relative flex items-center gap-1 whitespace-nowrap px-2 py-3 text-[14px] font-semibold transition-colors duration-200 xl:px-3 xl:text-[15px]',
                active
                  ? 'text-gold' // active text color
                  : 'text-navy/80 hover:text-navy', // inactive text color
              )}
            >
              {link.label}
              
              {hasSubItems && (
                <ChevronDown className="size-4 opacity-70 transition-transform duration-200 group-hover/navitem:rotate-180" />
              )}
              
              {/* Active Indicator Line (like Image 1) */}
              {active ? (
                <motion.span
                  layoutId="nav-indicator-desktop"
                  className="absolute inset-x-2 bottom-0 h-[3px] bg-gold xl:inset-x-3"
                  transition={{
                    type: 'spring',
                    stiffness: 350,
                    damping: 28,
                  }}
                />
              ) : (
                /* Hover underline */
                <span className="absolute inset-x-2 bottom-0 mx-auto h-[3px] w-0 bg-navy/20 transition-all duration-200 group-hover:w-[calc(100%-16px)] xl:inset-x-3 xl:group-hover:w-[calc(100%-24px)]" />
              )}
            </Link>

            {/* Dropdown Menu */}
            {hasSubItems && (
              <div className="invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover/navitem:visible group-hover/navitem:translate-y-0 group-hover/navitem:opacity-100">
                <div className="overflow-hidden rounded-xl border border-navy/5 bg-white p-2 shadow-xl shadow-navy/10">
                  <ul className="flex flex-col">
                    {link.subItems?.map((subItem) => {
                      // Exact match for subItems or specific logic if needed
                      const isSubActive = pathname === subItem.href
                      return (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className={cn(
                              'block rounded-lg px-4 py-2.5 text-[14px] font-semibold transition-colors',
                              isSubActive
                                ? 'bg-navy/5 text-gold'
                                : 'text-navy/70 hover:bg-navy/5 hover:text-navy'
                            )}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
