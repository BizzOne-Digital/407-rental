import type { VehicleCategory } from './site'

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

// Demo/sample inventory — replace with actual fleet data when available
export const vehicles: Vehicle[] = [
  {
    id: 'demo-economy-01',
    name: 'Economy Sedan',
    category: 'Economy',
    description: 'Efficient and affordable daily driver ideal for city commuting and insurance replacement needs.',
    features: ['Fuel Efficient', 'Bluetooth', 'Backup Camera', 'Cruise Control'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    imageAlt: 'Sample economy sedan for rental demonstration',
    featured: true,
  },
  {
    id: 'demo-economy-02',
    name: 'Compact Car',
    category: 'Economy',
    description: 'Compact and easy to park, perfect for urban driving across the GTA.',
    features: ['Compact Size', 'Apple CarPlay', 'USB Charging', 'Air Conditioning'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    imageAlt: 'Sample compact car for rental demonstration',
    featured: true,
  },
  {
    id: 'demo-hybrid-01',
    name: 'Hybrid Sedan',
    category: 'Hybrid',
    description: 'Eco-friendly hybrid option combining efficiency with comfortable daily driving.',
    features: ['Hybrid Engine', 'Regenerative Braking', 'Lane Assist', 'Touchscreen Display'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    imageAlt: 'Sample hybrid sedan for rental demonstration',
    featured: true,
  },
  {
    id: 'demo-suv-01',
    name: 'Mid-Size SUV',
    category: 'SUV',
    description: 'Spacious SUV with ample cargo room for families and extended rentals.',
    features: ['All-Wheel Drive', 'Spacious Interior', 'Roof Rails', 'Heated Seats'],
    seats: 7,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce88757da1?w=800&q=80',
    imageAlt: 'Sample mid-size SUV for rental demonstration',
    featured: true,
  },
  {
    id: 'demo-suv-02',
    name: 'Sample Crossover SUV',
    category: 'SUV',
    description: 'Versatile crossover blending comfort, visibility, and practical cargo space.',
    features: ['Elevated Seating', 'Rear Camera', 'Keyless Entry', 'Dual-Zone Climate'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    imageAlt: 'Sample crossover SUV for rental demonstration',
    featured: false,
  },
  {
    id: 'demo-luxury-01',
    name: 'Luxury Sedan',
    category: 'Luxury',
    description: 'Premium sedan with refined interior and smooth performance for executive travel.',
    features: ['Leather Interior', 'Premium Audio', 'Navigation', 'Sunroof'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    imageAlt: 'Sample luxury sedan for rental demonstration',
    featured: true,
  },
  {
    id: 'demo-luxury-02',
    name: 'Sample Premium SUV',
    category: 'Luxury',
    description: 'High-end SUV offering luxury comfort with commanding road presence.',
    features: ['Premium Leather', 'Panoramic Roof', 'Adaptive Cruise', 'Premium Wheels'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1606016159991-d8524d7d2123?w=800&q=80',
    imageAlt: 'Sample premium SUV for rental demonstration',
    featured: false,
  },
  {
    id: 'demo-pickup-01',
    name: 'Pickup Truck',
    category: 'Pickup Truck',
    description: 'Capable pickup truck for work, moving, and utility needs across the GTA.',
    features: ['Towing Capacity', 'Bed Liner', '4x4 Available', 'Bluetooth'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1532547009778-b920afe43641?w=800&q=80',
    imageAlt: 'Sample pickup truck for rental demonstration',
    featured: true,
  },
  {
    id: 'demo-hybrid-02',
    name: 'Sample Hybrid Crossover',
    category: 'Hybrid',
    description: 'Fuel-efficient crossover hybrid with modern safety features and comfort.',
    features: ['Hybrid AWD', 'Safety Suite', 'Wireless Charging', 'Power Liftgate'],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    pricePlaceholder: 'From $XX/day',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    imageAlt: 'Sample hybrid crossover for rental demonstration',
    featured: false,
  },
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
