export const SITE = {
  name: '407 Auto Rentals',
  tagline: 'Your trusted insurance replacement and car rental partner in the GTA.',
  phone: '416-755-3723',
  phoneSecondary: '343-777-5555',
  emergencyPhone: '343-777-5555',
  // ▼ ALL FORM SUBMISSIONS ARE SENT TO THIS EMAIL — change it here ▼
  email: '407autorentals@gmail.com',
  // ▲ Update the address above to change where booking & contact forms are delivered ▲
  emailHref: 'mailto:407autorentals@gmail.com',
  location: '128 Manville Road, Unit 15',
  addressLine2: 'Scarborough, ON M1L 4J5',
  addressCountry: 'Canada',
  businessHours: 'Monday – Sunday: 24 hours',
  serviceArea: 'Greater Toronto Area',
  social: '@407autorentals',
  instagramUrl: 'https://www.instagram.com/407autorentals/',
  mapsQuery: '128 Manville Road, Unit 15, Scarborough, ON M1L 4J5, Canada',
  description:
    '407 Auto Rentals is a trusted vehicle rental company at 128 Manville Road, Unit 15, Scarborough, proudly serving the Greater Toronto Area. We specialize in insurance replacement rentals, direct billing to major insurance companies, and affordable retail vehicle rentals. Our diverse fleet includes economy cars, hybrid vehicles, SUVs, luxury vehicles, and pickup trucks to meet the needs of every customer.',
  descriptionExtended:
    'We are committed to providing fast, reliable, and hassle-free rental solutions with exceptional customer service. Whether you need a replacement vehicle after an accident, a rental for business travel, or a vehicle for personal use, our experienced team will help you find the right vehicle at a competitive price. At 407 Auto Rentals, we understand that being without a vehicle can be stressful. That\'s why we focus on quick approvals, flexible rental terms, transparent pricing, and a seamless rental experience. Our goal is to get every customer back on the road safely and efficiently while delivering the highest level of professionalism and service.',
} as const

export const CONTACT_RENTAL_TYPES = [
  'Insurance Replacement',
  'Retail',
  'Corporate',
] as const

export type ContactRentalType = (typeof CONTACT_RENTAL_TYPES)[number]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Booking', href: '/booking' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const

export const RENTAL_TYPES = [
  'Insurance Replacement',
  'Retail Rental',
  'Corporate Rental',
  'Luxury Rental',
  'Other',
] as const

export const VEHICLE_CATEGORIES = [
  'Economy',
  'Hybrid',
  'SUV',
  'Luxury',
  'Pickup Truck',
  'No Preference',
] as const

export const WHY_CHOOSE_US = [
  { title: 'Fast Approvals', description: 'Quick rental request processing to get you moving sooner.' },
  { title: 'Direct Insurance Billing', description: 'Streamlined billing for insurance-related rentals.' },
  { title: 'Flexible Rental Terms', description: 'Daily, weekly, and monthly options to fit your needs.' },
  { title: 'Reliable Vehicles', description: 'Well-maintained fleet across all categories.' },
  { title: 'Competitive Rates', description: 'Transparent pricing with no hidden surprises.' },
  { title: 'Exceptional Customer Service', description: 'Dedicated support throughout your rental experience.' },
  { title: 'GTA-Wide Service', description: 'Serving customers across the Greater Toronto Area.' },
] as const

export const HOW_IT_WORKS = [
  { step: 1, title: 'Request Your Rental', description: 'Submit your rental request online or call our team.' },
  { step: 2, title: 'Get Approved', description: 'Our team reviews your request and confirms availability.' },
  { step: 3, title: 'Choose Your Vehicle', description: 'Select from our diverse fleet of quality vehicles.' },
  { step: 4, title: 'Get Back on the Road', description: 'Pick up your vehicle and drive with confidence.' },
] as const

export type RentalType = (typeof RENTAL_TYPES)[number]
export type VehicleCategory = (typeof VEHICLE_CATEGORIES)[number]
