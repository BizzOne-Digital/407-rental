export const AUTO_REPAIR_PARTNER = {
  name: 'Namsot Auto Repairs & Tire Works',
  tagline: 'Full-service auto repair and tire specialists in Waterloo.',
  address: '632 Colby Dr, Unit A',
  city: 'Waterloo, ON',
  phones: [
    { label: 'Main Line', number: '(226) 749-1650', href: 'tel:+12267491650' },
    { label: 'Secondary', number: '(236) 550-1860', href: 'tel:+12365501860' },
    { label: 'Shop Line', number: '(519) 242-0900', href: 'tel:+15192420900' },
  ],
  services: [
    'Oil Change',
    'New & Used Tires',
    'Brake Repair',
    'Air Conditioning',
    'Suspension Service',
    'Transmission Services',
  ],
  images: {
    banner: '/partners/namsot/performance-banner.jpg',
    servicesFlyer: '/partners/namsot/services-flyer.jpg',
    tireCareFlyer: '/partners/namsot/tire-care-flyer.jpg',
    locationFlyer: '/partners/namsot/location-flyer.jpg',
  },
} as const
