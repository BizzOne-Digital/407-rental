import { SITE } from '../data/site'
import { getRecipientEmail } from '../lib/site-store'

/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  COMPANY EMAIL — ALL FORM SUBMISSIONS ARE SENT HERE
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  Primary: edit in Admin Panel → Business Info
 *  Fallback: src/data/site.ts → email field
 *  Override: VITE_RECIPIENT_EMAIL in .env
 * ═══════════════════════════════════════════════════════════════════════════
 */
export { getRecipientEmail as RECIPIENT_EMAIL }

export const EMAIL_CONFIG = {
  companyName: SITE.name,
  phone: SITE.phone,
  subjects: {
    booking: (customerName: string) =>
      `🚗 New Rental Request — ${customerName} | ${SITE.name}`,
    contact: (name: string, rentalType: string) =>
      `📩 Contact Inquiry — ${name} (${rentalType}) | ${SITE.name}`,
  },
  autoresponse: {
    booking: `Thank you for your rental request with ${SITE.name}.

Our team has received your submission and will contact you shortly to confirm availability and rental details.

For immediate assistance, call ${SITE.phone}.

— ${SITE.name}`,
    contact: `Thank you for contacting ${SITE.name}.

We have received your message and will get back to you shortly.

For urgent inquiries, please call ${SITE.phone}.

— ${SITE.name}`,
  },
} as const
