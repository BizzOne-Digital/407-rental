import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

interface LogoProps {
  className?: string
  size?: 'header' | 'footer' | 'large'
}

const sizeClasses = {
  header: 'h-14 w-auto max-w-[300px] object-contain object-[center_15%]',
  footer: 'h-16 w-auto max-w-[340px] object-contain object-[center_15%]',
  large: 'h-20 w-auto max-w-[420px] object-contain object-[center_15%]',
} as const

export function Logo({ className = '', size = 'header' }: LogoProps) {
  return (
    <Link to="/" className={`group block ${className}`} aria-label={`${SITE.name} - Home`}>
      <img
        src="/logo.png?v=2"
        alt={SITE.name}
        className={`${sizeClasses[size]} transition-opacity group-hover:opacity-90`}
      />
    </Link>
  )
}
