import type { VehicleCategory } from './site'
import { getVehicleImage, VEHICLE_IMAGES } from './vehicle-images'

export interface Vehicle {
  id: string
  name: string
  category: Exclude<VehicleCategory, 'No Preference'>
  description: string
  features: string[]
  seats: number
  transmission: string
  fuelType: string
  pricePlaceholder: string
  image: string
  imageAlt: string
  featured?: boolean
}

type VehicleCategoryValue = Exclude<VehicleCategory, 'No Preference'>

function vehicle(
  id: string,
  name: string,
  category: VehicleCategoryValue,
  overrides: Partial<Omit<Vehicle, 'id' | 'name' | 'category'>> = {},
): Vehicle {
  return {
    id,
    name,
    category,
    description: `Rent a ${name} from 407 Auto Rentals. Contact us for current availability and pricing.`,
    features: ['Bluetooth', 'Backup Camera', 'Air Conditioning'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: category === 'Hybrid' ? 'Electric/Hybrid' : 'Gasoline',
    pricePlaceholder: 'Contact for pricing',
    image: getVehicleImage(id),
    imageAlt: `${name} available for rental at 407 Auto Rentals`,
    featured: false,
    ...overrides,
  }
}

export const FLEET_DATA_VERSION = 5

const FLEET_SIZE = 33

export function isLegacyFleet(list: Vehicle[]): boolean {
  if (list.some((v) => v.id.startsWith('demo-') || /sample/i.test(v.name))) return true
  if (list.length !== FLEET_SIZE) return true

  return list.some((v) => {
    const expected = VEHICLE_IMAGES[v.id]
    return !expected || v.image !== expected
  })
}

export const vehicles: Vehicle[] = [
  // Cars & Sedans
  vehicle('tesla-model-3', 'Tesla Model 3', 'Hybrid', {
    fuelType: 'Electric',
    features: ['All-Electric', 'Autopilot', 'Touchscreen Display', 'Fast Charging'],
    featured: true,
  }),
  vehicle('mercedes-c-class', 'Mercedes-Benz C-Class', 'Luxury', {
    features: ['Leather Interior', 'Premium Audio', 'Navigation', 'Sunroof'],
    featured: true,
  }),
  vehicle('toyota-corolla', 'Toyota Corolla', 'Economy', {
    features: ['Fuel Efficient', 'Apple CarPlay', 'Safety Sense', 'Cruise Control'],
  }),
  vehicle('hyundai-elantra', 'Hyundai Elantra', 'Economy', {
    features: ['Fuel Efficient', 'Bluetooth', 'Backup Camera', 'USB Charging'],
  }),
  vehicle('kia-k4', 'Kia K4', 'Economy', {
    features: ['Modern Design', 'Touchscreen Display', 'Lane Keep Assist', 'Wireless Charging'],
  }),
  vehicle('cadillac-ct5', 'Cadillac CT5', 'Luxury', {
    features: ['Leather Seats', 'Premium Audio', 'Head-Up Display', 'Adaptive Cruise'],
  }),
  vehicle('chevrolet-malibu', 'Chevrolet Malibu', 'Economy', {
    features: ['Spacious Interior', 'Bluetooth', 'Rear Camera', 'Cruise Control'],
  }),
  vehicle('bmw-m340i', 'BMW M340i', 'Luxury', {
    features: ['Performance Engine', 'Sport Suspension', 'Premium Interior', 'Navigation'],
    featured: true,
  }),
  vehicle('bmw-330i', 'BMW 330i', 'Luxury', {
    features: ['Turbocharged Engine', 'Leather Interior', 'iDrive System', 'Sunroof'],
  }),
  vehicle('honda-accord', 'Honda Accord', 'Economy', {
    features: ['Reliable Performance', 'Honda Sensing', 'Apple CarPlay', 'Spacious Cabin'],
  }),
  vehicle('volkswagen-jetta', 'Volkswagen Jetta', 'Economy', {
    features: ['Fuel Efficient', 'Compact Design', 'Touchscreen', 'Backup Camera'],
  }),
  vehicle('dodge-charger', 'Dodge Charger', 'Luxury', {
    features: ['Powerful V6/V8', 'Sport Mode', 'Uconnect System', 'Spacious Interior'],
  }),
  vehicle('audi-a5', 'Audi A5', 'Luxury', {
    features: ['Quattro AWD', 'Virtual Cockpit', 'Premium Interior', 'LED Headlights'],
  }),

  // SUVs & Crossovers
  vehicle('tesla-model-y', 'Tesla Model Y', 'Hybrid', {
    fuelType: 'Electric',
    features: ['All-Electric', 'All-Wheel Drive', 'Panoramic Glass Roof', 'Autopilot'],
    featured: true,
  }),
  vehicle('ford-escape', 'Ford Escape', 'SUV', {
    features: ['Compact SUV', 'SYNC System', 'Rear Camera', 'Roof Rails'],
  }),
  vehicle('nissan-rogue', 'Nissan Rogue', 'SUV', {
    features: ['ProPILOT Assist', 'Spacious Cargo', 'All-Wheel Drive', 'Apple CarPlay'],
  }),
  vehicle('toyota-highlander', 'Toyota Highlander', 'SUV', {
    seats: 7,
    features: ['Three-Row Seating', 'Toyota Safety Sense', 'All-Wheel Drive', 'Power Liftgate'],
  }),
  vehicle('toyota-rav4', 'Toyota RAV4', 'SUV', {
    features: ['All-Wheel Drive', 'Toyota Safety Sense', 'Roof Rails', 'Apple CarPlay'],
    featured: true,
  }),
  vehicle('toyota-venza', 'Toyota Venza', 'Hybrid', {
    features: ['Hybrid AWD', 'Panoramic Roof', 'Safety Sense', 'Power Liftgate'],
  }),
  vehicle('toyota-c-hr', 'Toyota C-HR', 'Hybrid', {
    features: ['Hybrid Engine', 'Distinctive Design', 'Safety Sense', 'Compact Size'],
  }),
  vehicle('honda-cr-v', 'Honda CR-V', 'SUV', {
    features: ['Honda Sensing', 'Spacious Interior', 'All-Wheel Drive', 'Power Tailgate'],
  }),
  vehicle('volkswagen-atlas', 'Volkswagen Atlas', 'SUV', {
    seats: 7,
    features: ['Three-Row Seating', 'Digital Cockpit', 'All-Wheel Drive', 'Panoramic Roof'],
  }),
  vehicle('ford-explorer', 'Ford Explorer', 'SUV', {
    seats: 7,
    features: ['Three-Row Seating', 'SYNC 4', 'All-Wheel Drive', 'Power Liftgate'],
  }),
  vehicle('hyundai-tucson', 'Hyundai Tucson', 'SUV', {
    features: ['Smart Cruise Control', 'Wireless Charging', 'All-Wheel Drive', 'Panoramic Roof'],
  }),
  vehicle('lexus-nx-300', 'Lexus NX 300', 'Luxury', {
    features: ['Premium Interior', 'Lexus Safety System+', 'All-Wheel Drive', 'Navigation'],
  }),
  vehicle('range-rover-sport', 'Range Rover Sport', 'Luxury', {
    features: ['Premium Leather', 'Terrain Response', 'All-Wheel Drive', 'Panoramic Roof'],
    featured: true,
  }),
  vehicle('range-rover-evoque', 'Range Rover Evoque', 'Luxury', {
    features: ['Compact Luxury SUV', 'All-Wheel Drive', 'Premium Audio', 'Touchscreen'],
  }),
  vehicle('porsche-macan', 'Porsche Macan', 'Luxury', {
    features: ['Sport Performance', 'Premium Interior', 'All-Wheel Drive', 'Porsche Connect'],
  }),
  vehicle('jaguar-svr', 'Jaguar SVR', 'Luxury', {
    features: ['Supercharged V8', 'Sport Exhaust', 'Premium Leather', 'All-Wheel Drive'],
  }),
  vehicle('chevrolet-trax', 'Chevrolet Trax', 'SUV', {
    features: ['Compact SUV', 'Chevy Infotainment', 'Rear Camera', 'Roof Rails'],
  }),

  // Trucks
  vehicle('ford-f-150', 'Ford F-150', 'Pickup Truck', {
    features: ['Towing Capacity', 'Bed Liner', '4x4 Available', 'SYNC System'],
    featured: true,
  }),
  vehicle('gmc-sierra', 'GMC Sierra', 'Pickup Truck', {
    features: ['Towing Capacity', 'ProGrade Trailering', '4x4 Available', 'MultiPro Tailgate'],
  }),
  vehicle('chevrolet-silverado', 'Chevrolet Silverado', 'Pickup Truck', {
    features: ['Towing Capacity', 'Bed Liner', '4x4 Available', 'Chevy Infotainment'],
  }),
]

export const FLEET_CATEGORIES = ['All', 'Economy', 'Hybrid', 'SUV', 'Luxury', 'Pickup Trucks'] as const
export type FleetCategory = (typeof FLEET_CATEGORIES)[number]

export function getVehicleById(id: string, list: Vehicle[] = vehicles): Vehicle | undefined {
  return list.find((v) => v.id === id)
}

export function getFeaturedVehicles(list: Vehicle[] = vehicles): Vehicle[] {
  return list.filter((v) => v.featured)
}

export function filterVehicles(category: FleetCategory, list: Vehicle[] = vehicles): Vehicle[] {
  if (category === 'All') return list
  if (category === 'Pickup Trucks') return list.filter((v) => v.category === 'Pickup Truck')
  return list.filter((v) => v.category === category)
}

export function categoryToFleetFilter(category: VehicleCategory): FleetCategory {
  if (category === 'Pickup Truck') return 'Pickup Trucks'
  if (category === 'No Preference') return 'All'
  return category
}
