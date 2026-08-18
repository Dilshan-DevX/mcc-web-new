import { cn } from '@/lib/utils'
import { Reveal } from '@/components/ui/reveal'

type Props = {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        'flex flex-col',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {label && (
        <span className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="h-px w-8 bg-gold" />
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-display text-balance text-[clamp(2rem,4vw,3.75rem)] font-bold leading-[1.05] tracking-tight',
          tone === 'dark' ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
            tone === 'dark'
              ? 'text-primary-foreground/70'
              : 'text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
