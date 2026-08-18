'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'

interface StudentPortalButtonProps {
  onClick?: () => void
  size?: 'sm' | 'md'
  className?: string
}

export function StudentPortalButton({
  onClick,
  size = 'sm',
  className,
}: StudentPortalButtonProps) {
  const { t } = useLanguage()
  const isMd = size === 'md'
  
  return (
    <Link
      href="/student-portal"
      onClick={onClick}
      className={cn(
        'group inline-flex items-center gap-1.5 rounded-full bg-gold font-semibold text-navy transition-all duration-200',
        'hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/15',
        isMd ? 'px-6 py-3 text-[15px]' : 'px-5 py-2 text-[14px]',
        className
      )}
    >
      {t('studentPortal')}
      <ArrowRight
        className={cn(
          'transition-transform duration-200 group-hover:translate-x-1',
          isMd ? 'size-4' : 'size-3.5',
        )}
      />
    </Link>
  )
}
