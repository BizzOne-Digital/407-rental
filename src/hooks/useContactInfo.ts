import { SITE } from '../data/site'
import { useSite } from './useSite'

function toPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  return digits.length === 10 ? `tel:+1${digits}` : `tel:${digits}`
}

export function useContactInfo() {
  const site = useSite()

  return {
    ...site,
    phoneSecondary: SITE.phoneSecondary,
    emergencyPhone: SITE.emergencyPhone,
    addressLine2: SITE.addressLine2,
    addressCountry: SITE.addressCountry,
    businessHours: SITE.businessHours,
    instagram: SITE.social,
    instagramUrl: SITE.instagramUrl,
    mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`,
    mapsLinkUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`,
    phoneSecondaryHref: toPhoneHref(SITE.phoneSecondary),
    emergencyPhoneHref: toPhoneHref(SITE.emergencyPhone),
  }
}
