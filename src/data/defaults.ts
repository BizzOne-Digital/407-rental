import { SITE, WHY_CHOOSE_US, HOW_IT_WORKS } from './site'
import { vehicles } from './vehicles'
import { services } from './services'
import { testimonials } from './testimonials'
import { teamMembers } from './team'
import { galleryImages } from './gallery'
import { faqs } from './faqs'
import type { CmsContent } from '../types/cms'

export const DEFAULT_CONTENT: CmsContent = {
  site: {
    name: SITE.name,
    tagline: SITE.tagline,
    phone: SITE.phone,
    email: SITE.email,
    location: SITE.location,
    serviceArea: SITE.serviceArea,
    social: SITE.social,
    description: SITE.description,
    descriptionExtended: SITE.descriptionExtended,
  },
  hero: {
    badge: 'Scarborough, Ontario • Greater Toronto Area',
    headline: 'Your Trusted Insurance Replacement & Car Rental Partner in the GTA',
    subheading:
      'Whether you need a replacement vehicle after an accident or a rental for business or leisure, 407 Auto Rentals offers fast approvals, direct insurance billing, competitive rates, and a premium fleet of economy, hybrid, SUV, and luxury vehicles across the Greater Toronto Area.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=80',
    primaryCta: 'Book Your Rental',
    secondaryCta: 'Call (343) 777-5555',
    trustBadges: [
      { label: 'Fast Approvals' },
      { label: 'Direct Insurance Billing' },
      { label: 'Flexible Rental Terms' },
      { label: 'GTA Service' },
    ],
  },
  homepage: {
    whyChooseTitle: 'Why Choose 407 Auto Rentals?',
    whyChooseSubtitle:
      'Professional, reliable vehicle rental solutions designed to get you back on the road quickly.',
    servicesTitle: 'Complete Rental Solutions',
    servicesSubtitle:
      'From insurance replacement to luxury rentals, we serve every customer across the GTA.',
    fleetTitle: 'Featured Vehicles',
    fleetSubtitle:
      'Browse our diverse fleet of economy, hybrid, SUV, luxury, and pickup truck rentals.',
    insuranceTitle: 'Need a Replacement Vehicle After an Accident?',
    insuranceText:
      'We understand how stressful it can be to be without a vehicle. Our insurance replacement rental service is designed to help you get back on the road quickly with professional support, flexible terms, and direct billing options where applicable.',
    insuranceImage: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1000&q=80',
    directBillingTitle: 'Direct Billing for Insurance-Related Rentals',
    directBillingText:
      'Our direct billing service reduces paperwork and streamlines the rental process for insurance-related needs. We coordinate directly where applicable, making the experience smoother for everyone involved.',
    luxuryTitle: 'Drive Something Exceptional',
    luxuryText:
      'Experience premium comfort and style with our luxury vehicle rental options. Perfect for business travel, special occasions, and customers who demand the best.',
    luxuryImage: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1920&q=80',
    howItWorksTitle: 'How It Works',
    howItWorksSubtitle: 'Getting a rental vehicle is easy with 407 Auto Rentals.',
    testimonialsTitle: 'What Our Customers Say',
    testimonialsSubtitle: 'Real customer testimonials will be added when available.',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to common questions about our rental services.',
    ctaTitle: "Need a Vehicle? Let's Get You Back on the Road.",
    ctaSubtitle:
      'Submit a rental request online or call our team for fast, professional assistance.',
  },
  about: {
    heroTitle: 'About 407 Auto Rentals',
    heroSubtitle: 'Your trusted insurance replacement and car rental partner in the GTA.',
    missionTitle: 'Our Mission',
    missionText:
      'Get back on the road quickly, professionally, and without unnecessary hassle. Our mission is to provide fast, reliable, and hassle-free rental solutions with exceptional customer service.',
    commitmentTitle: 'Our Commitment',
    commitmentSubtitle: 'What you can expect from 407 Auto Rentals.',
    insuranceExpertiseTitle: 'Insurance Replacement Expertise',
    insuranceExpertiseText:
      'We understand the stress of being without a vehicle after an accident. Our team specializes in insurance replacement rentals, offering quick request processing, flexible terms, and direct billing options where applicable.',
    gtaTitle: 'Serving the GTA',
    gtaText:
      '407 Auto Rentals is located in Scarborough, Ontario and serves customers throughout the Greater Toronto Area.',
    heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
  },
  vehicles: [...vehicles],
  services: [...services],
  testimonials: [...testimonials],
  team: [...teamMembers],
  gallery: [...galleryImages],
  faqs: [...faqs],
  whyChoose: WHY_CHOOSE_US.map((item) => ({ ...item })),
  howItWorks: HOW_IT_WORKS.map((item) => ({ ...item })),
}

export const CMS_DOCUMENT_MAP: Record<string, keyof CmsContent> = {
  site: 'site',
  hero: 'hero',
  homepage: 'homepage',
  about: 'about',
  vehicles: 'vehicles',
  services: 'services',
  testimonials: 'testimonials',
  team: 'team',
  gallery: 'gallery',
  faqs: 'faqs',
  why_choose: 'whyChoose',
  how_it_works: 'howItWorks',
}
