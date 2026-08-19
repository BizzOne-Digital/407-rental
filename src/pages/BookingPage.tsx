import { useSearchParams } from 'react-router-dom'
import { useSeo, pageTitle } from '../lib/seo'
import { BookingForm } from '../components/forms/BookingForm'
import { useContent } from '../context/ContentContext'
import { getVehicleById } from '../data/vehicles'
import { parseBookingParams } from '../lib/booking'
import type { RentalType, VehicleCategory } from '../data/site'
import { useSite } from '../hooks/useSite'

export function BookingPage() {
  useSeo({
    title: pageTitle('Book a Rental'),
    description:
      'Submit a rental request with 407 Auto Rentals. Insurance replacement, retail, corporate, and luxury vehicle rentals across the GTA.',
  })

  const { content } = useContent()
  const [searchParams] = useSearchParams()
  const site = useSite()
  const params = parseBookingParams(searchParams)

  const vehicle = params.vehicle ? getVehicleById(params.vehicle, content.vehicles) : undefined

  const initialData = {
    rentalType: params.rentalType as RentalType | undefined,
    vehicleCategory: params.category as VehicleCategory | undefined,
    pickupDate: params.pickupDate,
    returnDate: params.returnDate,
  }

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Book Your Rental</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Submit your rental request and our team will contact you to confirm availability and details.
            For immediate assistance, call{' '}
            <a href={site.phoneHref} className="font-semibold text-brand-orange hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <BookingForm
              initialData={initialData}
              selectedVehicleName={vehicle?.name}
            />
          </div>
        </div>
      </section>
    </>
  )
}
