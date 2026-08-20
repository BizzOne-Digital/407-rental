import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

interface LogoProps {
  className?: string
  size?: 'header' | 'footer' | 'large'
}

const sizeClasses = {
  header: 'h-16 w-auto max-w-[360px] sm:h-20 sm:max-w-[460px] object-contain object-left',
  footer: 'h-20 w-auto max-w-[440px] object-contain object-center',
  large: 'h-24 w-auto max-w-[560px] sm:h-28 object-contain object-center',
} as const

export function Logo({ className = '', size = 'header' }: LogoProps) {
  return (
    <Link to="/" className={`group block shrink-0 ${className}`} aria-label={`${SITE.name} - Home`}>
      <img
        src="/logo.png?v=2"
        alt={SITE.name}
        className={`${sizeClasses[size]} rounded-sm transition-opacity group-hover:opacity-90`}
      />
    </Link>
  )
}
