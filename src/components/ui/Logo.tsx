import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-brand-black'
  const accentColor = 'text-brand-orange'

  return (
    <Link to="/" className={`group flex items-center gap-2 ${className}`} aria-label={`${SITE.name} - Home`}>
      <div
        className="flex h-10 w-10 items-center justify-center rounded-sm border-2 border-brand-orange bg-brand-black transition-colors group-hover:bg-brand-orange"
        aria-hidden="true"
      >
        <span className="text-sm font-extrabold text-brand-orange transition-colors group-hover:text-brand-black">
          407
        </span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-lg font-bold tracking-tight ${textColor}`}>407 AUTO</span>
        <span className={`text-xs font-semibold tracking-widest ${accentColor}`}>RENTALS</span>
      </div>
    </Link>
  )
}
