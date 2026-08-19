import type { RentalType, VehicleCategory } from '../data/site'

export interface BookingParams {
  vehicle?: string
  category?: VehicleCategory
  rentalType?: RentalType
  pickupDate?: string
  returnDate?: string
}

export function buildBookingUrl(params: BookingParams): string {
  const searchParams = new URLSearchParams()
  if (params.vehicle) searchParams.set('vehicle', params.vehicle)
  if (params.category) searchParams.set('category', params.category)
  if (params.rentalType) searchParams.set('rentalType', params.rentalType)
  if (params.pickupDate) searchParams.set('pickupDate', params.pickupDate)
  if (params.returnDate) searchParams.set('returnDate', params.returnDate)
  const query = searchParams.toString()
  return query ? `/booking?${query}` : '/booking'
}

export function parseBookingParams(searchParams: URLSearchParams): BookingParams {
  return {
    vehicle: searchParams.get('vehicle') ?? undefined,
    category: (searchParams.get('category') as VehicleCategory) ?? undefined,
    rentalType: (searchParams.get('rentalType') as RentalType) ?? undefined,
    pickupDate: searchParams.get('pickupDate') ?? undefined,
    returnDate: searchParams.get('returnDate') ?? undefined,
  }
}

export function buildFleetUrl(category?: string): string {
  if (!category || category === 'All') return '/fleet'
  return `/fleet?category=${encodeURIComponent(category)}`
}
