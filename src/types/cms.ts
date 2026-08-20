import type { Vehicle } from '../data/vehicles'
import type { Service } from '../data/services'
import type { Testimonial } from '../data/testimonials'
import type { TeamMember } from '../data/team'
import type { GalleryImage } from '../data/gallery'
import type { FAQ } from '../data/faqs'

export interface SiteSettings {
  name: string
  tagline: string
  phone: string
  email: string
  location: string
  serviceArea: string
  social: string
  description: string
  descriptionExtended: string
}

export interface HeroContent {
  badge: string
  headline: string
  subheading: string
  image: string
  video?: string
  videoPoster?: string
  primaryCta: string
  secondaryCta: string
  trustBadges: { label: string }[]
}

export interface HomepageSections {
  whyChooseTitle: string
  whyChooseSubtitle: string
  servicesTitle: string
  servicesSubtitle: string
  fleetTitle: string
  fleetSubtitle: string
  insuranceTitle: string
  insuranceText: string
  insuranceImage: string
  directBillingTitle: string
  directBillingText: string
  luxuryTitle: string
  luxuryText: string
  luxuryImage: string
  luxuryVideo?: string
  luxuryVideoPoster?: string
  howItWorksTitle: string
  howItWorksSubtitle: string
  testimonialsTitle: string
  testimonialsSubtitle: string
  faqTitle: string
  faqSubtitle: string
  ctaTitle: string
  ctaSubtitle: string
}

export interface AboutContent {
  heroTitle: string
  heroSubtitle: string
  missionTitle: string
  missionText: string
  commitmentTitle: string
  commitmentSubtitle: string
  insuranceExpertiseTitle: string
  insuranceExpertiseText: string
  gtaTitle: string
  gtaText: string
  heroImage: string
}

export interface WhyChooseItem {
  title: string
  description: string
}

export interface HowItWorksItem {
  step: number
  title: string
  description: string
}

export type CmsDocumentId =
  | 'site'
  | 'hero'
  | 'homepage'
  | 'about'
  | 'vehicles'
  | 'services'
  | 'testimonials'
  | 'team'
  | 'gallery'
  | 'faqs'
  | 'why_choose'
  | 'how_it_works'

export interface CmsContent {
  site: SiteSettings
  hero: HeroContent
  homepage: HomepageSections
  about: AboutContent
  vehicles: Vehicle[]
  services: Service[]
  testimonials: Testimonial[]
  team: TeamMember[]
  gallery: GalleryImage[]
  faqs: FAQ[]
  whyChoose: WhyChooseItem[]
  howItWorks: HowItWorksItem[]
}

export interface CmsDocument {
  id: CmsDocumentId
  data: unknown
  updated_at: string
}
