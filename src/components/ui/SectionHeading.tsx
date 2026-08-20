interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  badge?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
  badge,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand-red">
          {badge}
        </span>
      )}
      <div className={`brand-accent-bar mb-4 ${align === 'center' ? 'mx-auto' : ''}`} aria-hidden="true" />
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-brand-white' : 'text-brand-black'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-3xl text-lg leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-brand-white/80' : 'text-brand-grey-light'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
