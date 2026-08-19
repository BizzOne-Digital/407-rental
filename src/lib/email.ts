import { EMAIL_CONFIG } from '../config/email'
import { getRecipientEmail } from './site-store'

const FORMSUBMIT_ENDPOINT = () =>
  `https://formsubmit.co/ajax/${encodeURIComponent(getRecipientEmail())}`

interface FormSubmitResponse {
  success: boolean | string
  message?: string
}

async function postToFormSubmit(payload: Record<string, string>): Promise<void> {
  const response = await fetch(FORMSUBMIT_ENDPOINT(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _captcha: 'false',
      _template: 'table',
      ...payload,
    }),
  })

  if (!response.ok) {
    throw new Error(`Email delivery failed (${response.status}). Please try again or call us directly.`)
  }

  let result: FormSubmitResponse
  try {
    result = (await response.json()) as FormSubmitResponse
  } catch {
    throw new Error('Invalid response from email service. Please try again or call us directly.')
  }

  const isSuccess = result.success === true || result.success === 'true'
  if (!isSuccess) {
    throw new Error(
      result.message || 'Email delivery failed. Please try again or call us directly.',
    )
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '—'
  try {
    return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-CA', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

function submittedAt(): string {
  return new Date().toLocaleString('en-CA', {
    timeZone: 'America/Toronto',
    dateStyle: 'full',
    timeStyle: 'short',
  })
}

export interface BookingEmailPayload {
  fullName: string
  email: string
  phone: string
  rentalType: string
  vehicleCategory: string
  pickupDate: string
  returnDate: string
  pickupLocation: string
  insuranceCompany: string
  claimNumber: string
  bodyShop: string
  additionalNotes: string
  selectedVehicle?: string
}

export async function sendBookingEmail(data: BookingEmailPayload): Promise<void> {
  await postToFormSubmit({
    _subject: EMAIL_CONFIG.subjects.booking(data.fullName),
    _replyto: data.email,
    _autoresponse: EMAIL_CONFIG.autoresponse.booking,
    email: data.email,
    'Form Type': 'Rental Booking Request',
    'Full Name': data.fullName,
    Email: data.email,
    Phone: data.phone,
    'Rental Type': data.rentalType,
    'Vehicle Category': data.vehicleCategory,
    'Selected Vehicle': data.selectedVehicle || 'Not specified',
    'Pickup Date': formatDate(data.pickupDate),
    'Return Date': formatDate(data.returnDate),
    'Pickup Location': data.pickupLocation || 'Not specified',
    'Insurance Company': data.insuranceCompany || 'Not specified',
    'Claim Number': data.claimNumber || 'Not specified',
    'Body Shop / Dealership': data.bodyShop || 'Not specified',
    'Additional Notes': data.additionalNotes || 'None',
    'Submitted At': submittedAt(),
    'Company Website': EMAIL_CONFIG.companyName,
  })
}

export interface ContactEmailPayload {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactEmailPayload): Promise<void> {
  await postToFormSubmit({
    _subject: EMAIL_CONFIG.subjects.contact(data.subject),
    _replyto: data.email,
    _autoresponse: EMAIL_CONFIG.autoresponse.contact,
    email: data.email,
    'Form Type': 'Contact Inquiry',
    Name: data.name,
    Email: data.email,
    Phone: data.phone || 'Not provided',
    Subject: data.subject,
    Message: data.message,
    'Submitted At': submittedAt(),
    'Company Website': EMAIL_CONFIG.companyName,
  })
}
