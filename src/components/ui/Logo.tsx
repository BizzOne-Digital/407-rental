import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

interface LogoProps {
  className?: string
  size?: 'header' | 'footer' | 'large'
}

const sizeClasses = {
  header: 'h-14 w-auto max-w-[200px] sm:h-16 sm:max-w-[240px] object-contain object-left',
  footer: 'h-16 w-auto max-w-[260px] object-contain object-left',
  large: 'h-20 w-auto max-w-[320px] sm:h-24 object-contain object-center',
} as const

/** Bump when replacing public/logo.png so browsers fetch the new asset. */
const LOGO_SRC = '/logo.png?v=3'

export function Logo({ className = '', size = 'header' }: LogoProps) {
  return (
    <Link to="/" className={`group block shrink-0 ${className}`} aria-label={`${SITE.name} - Home`}>
      <img
        src={LOGO_SRC}
        alt={SITE.name}
        className={`${sizeClasses[size]} transition-opacity group-hover:opacity-90`}
      />
    </Link>
  )
}
