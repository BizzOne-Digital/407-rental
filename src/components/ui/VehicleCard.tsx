import type { Vehicle } from '../../data/vehicles'
import { Button } from '../ui/Button'
import { buildBookingUrl } from '../../lib/booking'

interface VehicleCardProps {
  vehicle: Vehicle
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-brand-grey/10 bg-brand-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-grey-lighter">
        <img
          src={vehicle.image}
          alt={vehicle.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rounded-sm bg-brand-orange px-2 py-1 text-xs font-bold text-brand-white">
          {vehicle.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-brand-black">{vehicle.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-grey-light">{vehicle.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {vehicle.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-sm bg-brand-grey-lighter px-2 py-1 text-xs font-medium text-brand-grey"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-brand-grey/10 pt-4 text-sm text-brand-grey-light">
          <span>{vehicle.seats} Seats</span>
          <span>{vehicle.transmission}</span>
          <span>{vehicle.fuelType}</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-brand-grey">{vehicle.pricePlaceholder}</span>
          <Button
            to={buildBookingUrl({ vehicle: vehicle.id, category: vehicle.category })}
            size="sm"
          >
            Request This Vehicle
          </Button>
        </div>
      </div>
    </article>
  )
}
