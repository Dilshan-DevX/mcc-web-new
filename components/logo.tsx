import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { school } from '@/data/school'

interface LogoProps {
  compact?: boolean
}

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-3 text-navy"
    >
      <span
        className={cn(
          'flex items-center justify-center rounded-full bg-navy text-gold transition-all duration-300',
          'group-hover:shadow-md group-hover:shadow-navy/10',
          compact ? 'size-10' : 'size-[46px]',
        )}
      >
        <GraduationCap
          className={cn(
            'transition-all duration-300',
            compact ? 'size-[22px]' : 'size-6',
          )}
        />
      </span>
      
      {/* Vertical Divider */}
      <div className={cn(
        "hidden w-[1.5px] bg-navy/20 sm:block",
        compact ? "h-8" : "h-10"
      )} />

      <span className="hidden flex-col justify-center leading-tight sm:flex">
        <span
          className={cn(
            'font-display font-semibold tracking-wider text-royal-blue transition-all duration-300 uppercase',
            compact ? 'text-[10px]' : 'text-[11px]',
          )}
        >
          MSC MAITHREEPALA SENANAYAKE
        </span>
        <span
          className={cn(
            'font-display font-bold tracking-tight text-burgundy transition-all duration-300 uppercase',
            compact ? 'text-[14px]' : 'text-[16px]',
          )}
        >
          CENTRAL COLLEGE
        </span>
      </span>
    </Link>
  )
}
