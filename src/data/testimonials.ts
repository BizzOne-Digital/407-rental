export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  isDemo: true
}

// Demo/placeholder testimonials — replace with actual customer reviews when available
export const testimonials: Testimonial[] = [
  {
    id: 'demo-01',
    name: 'Demo Customer A',
    role: 'Insurance Replacement Customer',
    content:
      'After my accident, 407 Auto Rentals made the replacement process straightforward. The team was professional and helped me get back on the road quickly.',
    rating: 5,
    isDemo: true,
  },
  {
    id: 'demo-02',
    name: 'Demo Customer B',
    role: 'Retail Rental Customer',
    content:
      'I needed a vehicle for a business trip and the rental process was smooth from start to finish. Great selection of vehicles and competitive pricing.',
    rating: 5,
    isDemo: true,
  },
  {
    id: 'demo-03',
    name: 'Demo Customer C',
    role: 'Corporate Client',
    content:
      'Our company has used 407 Auto Rentals for corporate travel needs. Professional service, reliable vehicles, and flexible rental terms.',
    rating: 5,
    isDemo: true,
  },
  {
    id: 'demo-04',
    name: 'Demo Customer D',
    role: 'Luxury Rental Customer',
    content:
      'Rented a luxury vehicle for a special occasion. The car was immaculate and the experience felt truly premium. Highly recommend.',
    rating: 5,
    isDemo: true,
  },
  {
    id: 'demo-05',
    name: 'Demo Customer E',
    role: 'Weekly Rental Customer',
    content:
      'Needed a weekly rental while my car was in the shop. The team was accommodating and the vehicle was in excellent condition.',
    rating: 4,
    isDemo: true,
  },
  {
    id: 'demo-06',
    name: 'Demo Customer F',
    role: 'SUV Rental Customer',
    content:
      'Rented an SUV for a family trip. Plenty of space, comfortable ride, and the booking process was simple and fast.',
    rating: 5,
    isDemo: true,
  },
]
