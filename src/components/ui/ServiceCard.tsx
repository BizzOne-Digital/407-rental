import type { Service } from '../../data/services'
import { Button } from './Button'

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'featured'
}

export function ServiceCard({ service, variant = 'default' }: ServiceCardProps) {
  if (variant === 'featured') {
    return (
      <article className="group flex flex-col overflow-hidden rounded-sm border border-brand-grey/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">{service.title}</h3>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="flex-1 text-sm leading-relaxed text-brand-grey-light">{service.shortDescription}</p>
          <div className="mt-6">
            <Button to={service.ctaHref} variant="primary" size="sm">
              {service.cta}
            </Button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-brand-grey/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-brand-black">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-grey-light">{service.shortDescription}</p>
        <div className="mt-6">
          <Button to={service.ctaHref} variant="outline" size="sm">
            {service.cta}
          </Button>
        </div>
      </div>
    </article>
  )
}
