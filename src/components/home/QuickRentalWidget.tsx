import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RENTAL_TYPES, VEHICLE_CATEGORIES } from '../../data/site'
import type { RentalType, VehicleCategory } from '../../data/site'
import { buildBookingUrl } from '../../lib/booking'
import { Button } from '../ui/Button'

export function QuickRentalWidget() {
  const navigate = useNavigate()
  const [rentalType, setRentalType] = useState<RentalType>('Insurance Replacement')
  const [category, setCategory] = useState<VehicleCategory>('No Preference')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const url = buildBookingUrl({ rentalType, category, pickupDate, returnDate })
    navigate(url)
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <section className="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8" aria-label="Quick rental request">
      <div className="container-wide">
        <form
          onSubmit={handleSubmit}
          className="rounded-sm border border-brand-grey/10 border-t-4 border-t-brand-red bg-brand-white p-6 shadow-2xl sm:p-8"
        >
          <h2 className="mb-6 text-xl font-bold text-brand-black sm:text-2xl">
            What type of rental do you need?
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <label htmlFor="quick-rental-type" className="mb-2 block text-sm font-semibold text-brand-grey">
                Rental Type
              </label>
              <select
                id="quick-rental-type"
                value={rentalType}
                onChange={(e) => setRentalType(e.target.value as RentalType)}
                className="w-full rounded-sm border border-brand-grey/20 bg-brand-white px-4 py-3 text-sm text-brand-black focus:border-brand-red focus:outline-none"
              >
                {RENTAL_TYPES.filter((t) => t !== 'Other').map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quick-vehicle-category" className="mb-2 block text-sm font-semibold text-brand-grey">
                Vehicle Category
              </label>
              <select
                id="quick-vehicle-category"
                value={category}
                onChange={(e) => setCategory(e.target.value as VehicleCategory)}
                className="w-full rounded-sm border border-brand-grey/20 bg-brand-white px-4 py-3 text-sm text-brand-black focus:border-brand-red focus:outline-none"
              >
                {VEHICLE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quick-pickup-date" className="mb-2 block text-sm font-semibold text-brand-grey">
                Pickup Date
              </label>
              <input
                type="date"
                id="quick-pickup-date"
                value={pickupDate}
                min={today}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full rounded-sm border border-brand-grey/20 bg-brand-white px-4 py-3 text-sm text-brand-black focus:border-brand-red focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="quick-return-date" className="mb-2 block text-sm font-semibold text-brand-grey">
                Return Date
              </label>
              <input
                type="date"
                id="quick-return-date"
                value={returnDate}
                min={pickupDate || today}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full rounded-sm border border-brand-grey/20 bg-brand-white px-4 py-3 text-sm text-brand-black focus:border-brand-red focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <Button type="submit" size="lg" fullWidth>
              Request a Vehicle
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
