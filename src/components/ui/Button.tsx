import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined
  to?: undefined
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  to?: undefined
  external?: boolean
}

interface ButtonAsRouterLink extends ButtonBaseProps {
  to: string
  href?: undefined
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsRouterLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-orange text-brand-white hover:bg-brand-orange/90 border border-brand-orange shadow-sm',
  secondary:
    'bg-brand-black text-brand-white hover:bg-brand-grey border border-brand-black',
  outline:
    'bg-transparent text-brand-black border border-brand-black hover:bg-brand-black hover:text-brand-white',
  ghost:
    'bg-transparent text-brand-grey hover:text-brand-orange border border-transparent',
  white:
    'bg-brand-white text-brand-black hover:bg-brand-grey-lighter border border-brand-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed disabled:opacity-50'

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  if ('href' in props && props.href) {
    const { href, external } = props
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  const { type = 'button', onClick, disabled } = props as ButtonAsButton
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
