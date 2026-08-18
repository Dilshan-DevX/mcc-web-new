import Link from 'next/link'
import Image from 'next/image'
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
      <div
        className={cn(
          'relative flex items-center justify-center transition-all duration-300 overflow-hidden rounded-full',
          compact ? 'size-10' : 'size-[70px]',
        )}
      >
        <Image
          src="/mcc.png"
          alt="MSC Logo"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 40px, 46px"
        />
      </div>
      
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
          MAITHREEPALA SENANAYAKE
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
