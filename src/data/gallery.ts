export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: 'Luxury' | 'SUV' | 'Economy' | 'Hybrid' | 'Pickup' | 'Service'
  title: string
}

export const GALLERY_CATEGORIES = ['All', 'Luxury', 'SUV', 'Economy', 'Hybrid', 'Pickup', 'Service'] as const
export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

// Demo/placeholder gallery images — replace with actual company photos when available
export const galleryImages: GalleryImage[] = [
  {
    id: 'gal-01',
    src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    alt: 'Luxury sedan demonstration photo',
    category: 'Luxury',
    title: 'Luxury Sedan',
  },
  {
    id: 'gal-02',
    src: 'https://images.unsplash.com/photo-1519641471654-76ce88757da1?w=800&q=80',
    alt: 'SUV demonstration photo',
    category: 'SUV',
    title: 'Premium SUV',
  },
  {
    id: 'gal-03',
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    alt: 'Economy car demonstration photo',
    category: 'Economy',
    title: 'Economy Sedan',
  },
  {
    id: 'gal-04',
    src: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
    alt: 'Hybrid vehicle demonstration photo',
    category: 'Hybrid',
    title: 'Hybrid Vehicle',
  },
  {
    id: 'gal-05',
    src: 'https://images.unsplash.com/photo-1532547009778-b920afe43641?w=800&q=80',
    alt: 'Pickup truck demonstration photo',
    category: 'Pickup',
    title: 'Pickup Truck',
  },
  {
    id: 'gal-06',
    src: 'https://images.unsplash.com/photo-1606016159991-d8524d7d2123?w=800&q=80',
    alt: 'Luxury SUV demonstration photo',
    category: 'Luxury',
    title: 'Luxury SUV',
  },
  {
    id: 'gal-07',
    src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    alt: 'Crossover SUV demonstration photo',
    category: 'SUV',
    title: 'Crossover SUV',
  },
  {
    id: 'gal-08',
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    alt: 'Compact car demonstration photo',
    category: 'Economy',
    title: 'Compact Car',
  },
  {
    id: 'gal-09',
    src: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
    alt: 'Hybrid crossover demonstration photo',
    category: 'Hybrid',
    title: 'Hybrid Crossover',
  },
  {
    id: 'gal-10',
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80',
    alt: 'Vehicle service and maintenance demonstration photo',
    category: 'Service',
    title: 'Fleet Maintenance',
  },
  {
    id: 'gal-11',
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80',
    alt: 'Sports car demonstration photo',
    category: 'Luxury',
    title: 'Performance Vehicle',
  },
  {
    id: 'gal-12',
    src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    alt: 'Customer vehicle handover demonstration photo',
    category: 'Service',
    title: 'Customer Service',
  },
]

export function filterGalleryImages(category: GalleryCategory): GalleryImage[] {
  if (category === 'All') return galleryImages
  return galleryImages.filter((img) => img.category === category)
}
