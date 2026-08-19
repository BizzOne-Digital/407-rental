import {
  sendBookingEmail,
  sendContactEmail,
  type BookingEmailPayload,
  type ContactEmailPayload,
} from './email'

export interface FormErrors {
  [key: string]: string
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return digits.length >= 10
}

export function validateRequired(value: string, fieldName: string): string | null {
  if (!value.trim()) return `${fieldName} is required.`
  return null
}

export function validateDates(pickup: string, returnDate: string): string | null {
  if (!pickup || !returnDate) return null
  const pickupDate = new Date(pickup)
  const returnD = new Date(returnDate)
  if (returnD < pickupDate) return 'Return date must be on or after pickup date.'
  return null
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export async function submitBookingForm(
  data: BookingEmailPayload,
): Promise<void> {
  await sendBookingEmail(data)
}

export async function submitContactForm(
  data: ContactEmailPayload,
): Promise<void> {
  await sendContactEmail(data)
}
