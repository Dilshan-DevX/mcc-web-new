'use client'

import { cn } from '@/lib/utils'
import {
  langLabels,
  useLanguage,
} from '@/components/language-provider'

interface LanguageSwitcherProps {
  size?: 'sm' | 'md'
  className?: string
}

export function LanguageSwitcher({ size = 'sm', className }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage()
  const isMd = size === 'md'
  
  return (
    <div
      className={cn(
        'flex items-center rounded-full border border-navy/10 bg-navy/5', // Updated for light bg
        isMd ? 'p-[3px]' : 'p-0.5',
        className
      )}
    >
      {langLabels.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={cn(
            'rounded-full font-semibold transition-all duration-200',
            isMd ? 'px-4 py-2 text-[14px]' : 'px-3 py-1.5 text-[12px]',
            lang === l.code
              ? 'bg-navy text-white shadow-sm' // Updated active state
              : 'text-navy/60 hover:text-navy', // Updated inactive state
          )}
          aria-pressed={lang === l.code}
          lang={l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
