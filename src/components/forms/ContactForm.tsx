import { useState } from 'react'
import {
  validateEmail,
  validatePhone,
  validateRequired,
  submitContactForm,
  type FormStatus,
  type FormErrors,
} from '../../lib/forms'
import { CONTACT_RENTAL_TYPES } from '../../data/site'
import { Button } from '../ui/Button'

interface ContactFormData {
  name: string
  phone: string
  email: string
  rentalType: string
  preferredVehicle: string
  message: string
}

const defaultFormData: ContactFormData = {
  name: '',
  phone: '',
  email: '',
  rentalType: '',
  preferredVehicle: '',
  message: '',
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(defaultFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    const nameError = validateRequired(formData.name, 'Full name')
    if (nameError) newErrors.name = nameError

    const phoneError = validateRequired(formData.phone, 'Phone number')
    if (phoneError) newErrors.phone = phoneError
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number.'

    const emailError = validateRequired(formData.email, 'Email address')
    if (emailError) newErrors.email = emailError
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address.'

    const rentalTypeError = validateRequired(formData.rentalType, 'Type of rental')
    if (rentalTypeError) newErrors.rentalType = rentalTypeError

    const messageError = validateRequired(formData.message, 'Message')
    if (messageError) newErrors.message = messageError

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        rentalType: formData.rentalType,
        preferredVehicle: formData.preferredVehicle,
        message: formData.message,
      })
      setStatus('success')
      setFormData(defaultFormData)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-sm border border-brand-red/20 bg-brand-red/5 p-8 text-center" role="status">
        <h3 className="text-xl font-bold text-brand-black">Message Sent</h3>
        <p className="mt-3 text-brand-grey-light">
          Thank you for contacting us. Your message has been sent to our team and we will get back
          to you shortly. A confirmation has also been sent to your email.
        </p>
        <Button className="mt-6" onClick={() => setStatus('idle')} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  const inputClass = (field: keyof ContactFormData) =>
    `w-full rounded-sm border bg-brand-white px-4 py-3 text-sm text-brand-black focus:outline-none ${
      errors[field]
        ? 'border-brand-red focus:border-brand-red'
        : 'border-brand-grey/20 focus:border-brand-red'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === 'error' && (
        <div className="rounded-sm border border-brand-red/20 bg-brand-red/5 p-4 text-sm text-brand-grey" role="alert">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-brand-grey">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            value={formData.name}
            onChange={(e) => updateField('name', e.target.value)}
            className={inputClass('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-sm text-brand-red" role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-brand-grey">
            Phone Number <span className="text-brand-red">*</span>
          </label>
          <input
            type="tel"
            id="contact-phone"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass('phone')}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-sm text-brand-red" role="alert">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-brand-grey">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={inputClass('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-sm text-brand-red" role="alert">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-rental-type" className="mb-2 block text-sm font-semibold text-brand-grey">
            Type of Rental <span className="text-brand-red">*</span>
          </label>
          <select
            id="contact-rental-type"
            value={formData.rentalType}
            onChange={(e) => updateField('rentalType', e.target.value)}
            className={inputClass('rentalType')}
            aria-invalid={!!errors.rentalType}
          >
            <option value="">Select rental type</option>
            {CONTACT_RENTAL_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.rentalType && (
            <p className="mt-1 text-sm text-brand-red" role="alert">{errors.rentalType}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-preferred-vehicle"
            className="mb-2 block text-sm font-semibold text-brand-grey"
          >
            Preferred Vehicle
          </label>
          <input
            type="text"
            id="contact-preferred-vehicle"
            value={formData.preferredVehicle}
            onChange={(e) => updateField('preferredVehicle', e.target.value)}
            className={inputClass('preferredVehicle')}
            placeholder="e.g. Toyota RAV4, Luxury SUV"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-brand-grey">
          Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          rows={5}
          className={inputClass('message')}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-sm text-brand-red" role="alert">{errors.message}</p>}
      </div>

      <Button type="submit" size="lg" fullWidth disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
