export interface Service {
  id: string
  title: string
  shortDescription: string
  description: string
  benefits: string[]
  image: string
  imageAlt: string
  cta: string
  ctaHref: string
  featured?: boolean
}

export const services: Service[] = [
  {
    id: 'insurance-replacement',
    title: 'Insurance Replacement Rentals',
    shortDescription:
      'Need a vehicle after an accident? We provide replacement rentals with quick request processing and insurance-related support.',
    description:
      'When an accident leaves you without a vehicle, 407 Auto Rentals is here to help. Our insurance replacement rental service is designed to get you back on the road quickly with minimal hassle. We work with customers, body shops, and insurance processes to provide a smooth replacement vehicle experience across the GTA.',
    benefits: [
      'Quick rental request processing',
      'Flexible rental terms',
      'Insurance-related rental support',
      'Direct billing options available',
      'Diverse fleet to match your needs',
    ],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    imageAlt: 'Insurance replacement vehicle rental service',
    cta: 'Request a Replacement Vehicle',
    ctaHref: '/booking?rentalType=Insurance+Replacement',
    featured: true,
  },
  {
    id: 'luxury-rentals',
    title: 'Luxury Rentals',
    shortDescription:
      'Experience premium comfort and style with our luxury vehicle rental options for business, leisure, and special occasions.',
    description:
      'Elevate your driving experience with our luxury rental fleet. Whether you need a premium sedan for business travel or a high-end SUV for a special occasion, 407 Auto Rentals offers refined vehicles with exceptional comfort and performance.',
    benefits: [
      'Premium sedans and SUVs',
      'Executive-level comfort',
      'Ideal for business travel',
      'Perfect for special occasions',
      'Professional presentation',
    ],
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
    imageAlt: 'Luxury vehicle rental service',
    cta: 'Explore Luxury Vehicles',
    ctaHref: '/fleet?category=Luxury',
    featured: true,
  },
  {
    id: 'direct-billing',
    title: 'Direct Billing to Insurance Companies',
    shortDescription:
      'Streamlined direct billing for insurance-related rentals, serving customers, insurance companies, body shops, and dealerships.',
    description:
      'Our direct billing service simplifies the rental process for insurance-related needs. We coordinate billing directly where applicable, reducing paperwork and stress for customers while supporting body shops, dealerships, and insurance professionals throughout the GTA.',
    benefits: [
      'Simplified billing process',
      'Support for insurance customers',
      'Works with body shops and dealerships',
      'Reduced paperwork for customers',
      'Professional coordination',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    imageAlt: 'Direct billing for insurance-related vehicle rentals',
    cta: 'Learn About Direct Billing',
    ctaHref: '/services#direct-billing',
    featured: true,
  },
  {
    id: 'retail-rentals',
    title: 'Retail Rentals',
    shortDescription:
      'Affordable daily, weekly, and monthly rentals for personal use, tourists, business travelers, and corporate clients.',
    description:
      'Whether you need a car for a weekend getaway, an extended business trip, or a month-long personal rental, our retail rental options offer flexibility and competitive rates. Choose from economy, hybrid, SUV, luxury, and pickup truck categories.',
    benefits: [
      'Daily, weekly, and monthly options',
      'Competitive retail rates',
      'Multiple vehicle categories',
      'Ideal for tourists and business travelers',
      'Corporate rental solutions',
    ],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    imageAlt: 'Retail vehicle rental service',
    cta: 'Book a Rental',
    ctaHref: '/booking?rentalType=Retail+Rental',
    featured: true,
  },
  {
    id: 'corporate-rentals',
    title: 'Corporate Rentals',
    shortDescription:
      'Professional vehicle rental solutions for businesses, corporate travelers, and fleet support needs.',
    description:
      '407 Auto Rentals provides corporate rental solutions tailored to business needs. From executive travel to temporary fleet support, we offer reliable vehicles and professional service for companies across the GTA.',
    benefits: [
      'Business-friendly rental options',
      'Executive and fleet vehicles',
      'Flexible terms',
      'Professional account support',
      'GTA-wide availability',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    imageAlt: 'Corporate vehicle rental service',
    cta: 'Book a Corporate Rental',
    ctaHref: '/booking?rentalType=Corporate+Rental',
  },
  {
    id: 'daily-rentals',
    title: 'Daily Rentals',
    shortDescription: 'Short-term daily rentals for quick trips, errands, and temporary transportation needs.',
    description:
      'Our daily rental options provide flexible short-term transportation for any occasion. Perfect for day trips, temporary needs, or when you need a vehicle for just a few days.',
    benefits: ['Flexible daily rates', 'Quick pickup', 'All vehicle categories', 'No long-term commitment'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    imageAlt: 'Daily vehicle rental service',
    cta: 'Book a Daily Rental',
    ctaHref: '/booking?rentalType=Retail+Rental',
  },
  {
    id: 'weekly-rentals',
    title: 'Weekly Rentals',
    shortDescription: 'Cost-effective weekly rentals for extended stays, business trips, and temporary needs.',
    description:
      'Weekly rentals offer better value for customers who need a vehicle for an extended period. Ideal for business assignments, family visits, or insurance replacement situations requiring more time.',
    benefits: ['Better weekly rates', 'Extended flexibility', 'All categories available', 'Easy extensions'],
    image: 'https://images.unsplash.com/photo-148529157115f-772bcfc10da5?w=800&q=80',
    imageAlt: 'Weekly vehicle rental service',
    cta: 'Book a Weekly Rental',
    ctaHref: '/booking?rentalType=Retail+Rental',
  },
  {
    id: 'monthly-rentals',
    title: 'Monthly Rentals',
    shortDescription: 'Long-term monthly rentals with competitive rates for extended transportation needs.',
    description:
      'Monthly rentals provide the most economical option for long-term vehicle needs. Whether for personal use, corporate assignments, or extended insurance replacement, we offer flexible monthly terms.',
    benefits: ['Best long-term value', 'Flexible monthly terms', 'Full fleet access', 'Dedicated support'],
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
    imageAlt: 'Monthly vehicle rental service',
    cta: 'Book a Monthly Rental',
    ctaHref: '/booking?rentalType=Retail+Rental',
  },
  {
    id: 'suv-rentals',
    title: 'SUV Rentals',
    shortDescription: 'Spacious SUVs for families, groups, and customers who need extra room and capability.',
    description:
      'Our SUV rental fleet offers spacious interiors, elevated seating, and versatile cargo space. Perfect for family trips, group travel, or anyone who prefers the comfort and visibility of an SUV.',
    benefits: ['Spacious interiors', 'Family-friendly', 'All-wheel drive options', 'Ample cargo space'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce88757da1?w=800&q=80',
    imageAlt: 'SUV vehicle rental service',
    cta: 'Browse SUV Fleet',
    ctaHref: '/fleet?category=SUV',
  },
  {
    id: 'hybrid-rentals',
    title: 'Hybrid Rentals',
    shortDescription: 'Fuel-efficient hybrid vehicles for eco-conscious drivers and cost-effective commuting.',
    description:
      'Our hybrid rental options combine fuel efficiency with modern comfort. Ideal for daily commuting, city driving, and customers looking to reduce fuel costs during their rental period.',
    benefits: ['Fuel efficient', 'Eco-friendly option', 'Modern technology', 'Lower fuel costs'],
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    imageAlt: 'Hybrid vehicle rental service',
    cta: 'Browse Hybrid Fleet',
    ctaHref: '/fleet?category=Hybrid',
  },
  {
    id: 'economy-rentals',
    title: 'Economy Rentals',
    shortDescription: 'Affordable economy vehicles for budget-conscious customers and everyday driving needs.',
    description:
      'Our economy rental fleet offers reliable, fuel-efficient vehicles at competitive rates. Perfect for daily commuting, insurance replacement, and customers who want practical transportation without breaking the budget.',
    benefits: ['Affordable rates', 'Fuel efficient', 'Easy to drive', 'Great for daily use'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    imageAlt: 'Economy vehicle rental service',
    cta: 'Browse Economy Fleet',
    ctaHref: '/fleet?category=Economy',
  },
  {
    id: 'pickup-rentals',
    title: 'Pickup Truck Rentals',
    shortDescription: 'Capable pickup trucks for work, moving, hauling, and utility needs.',
    description:
      'Need a truck for a job, move, or hauling project? Our pickup truck rentals provide the capability and space you need for work and personal projects across the GTA.',
    benefits: ['Towing capability', 'Cargo bed space', 'Work-ready options', '4x4 available'],
    image: 'https://images.unsplash.com/photo-1532547009778-b920afe43641?w=800&q=80',
    imageAlt: 'Pickup truck rental service',
    cta: 'Browse Pickup Fleet',
    ctaHref: '/fleet?category=Pickup+Trucks',
  },
]

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured)
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id)
}
