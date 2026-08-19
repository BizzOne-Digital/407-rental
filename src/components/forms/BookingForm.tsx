import { useState } from 'react'
import { RENTAL_TYPES, VEHICLE_CATEGORIES } from '../../data/site'
import type { RentalType, VehicleCategory } from '../../data/site'
import {
  validateEmail,
  validatePhone,
  validateRequired,
  validateDates,
  submitBookingForm,
  type FormStatus,
  type FormErrors,
} from '../../lib/forms'
import { Button } from '../ui/Button'

export interface BookingFormData {
  fullName: string
  email: string
  phone: string
  rentalType: RentalType
  vehicleCategory: VehicleCategory
  pickupDate: string
  returnDate: string
  pickupLocation: string
  insuranceCompany: string
  claimNumber: string
  bodyShop: string
  additionalNotes: string
}

interface BookingFormProps {
  initialData?: Partial<BookingFormData>
  selectedVehicleName?: string
}

const defaultFormData: BookingFormData = {
  fullName: '',
  email: '',
  phone: '',
  rentalType: 'Insurance Replacement',
  vehicleCategory: 'No Preference',
  pickupDate: '',
  returnDate: '',
  pickupLocation: '',
  insuranceCompany: '',
  claimNumber: '',
  bodyShop: '',
  additionalNotes: '',
}

export function BookingForm({ initialData, selectedVehicleName }: BookingFormProps) {
  const mergedInitial: BookingFormData = {
    ...defaultFormData,
    ...(initialData?.fullName ? { fullName: initialData.fullName } : {}),
    ...(initialData?.email ? { email: initialData.email } : {}),
    ...(initialData?.phone ? { phone: initialData.phone } : {}),
    ...(initialData?.rentalType ? { rentalType: initialData.rentalType } : {}),
    ...(initialData?.vehicleCategory ? { vehicleCategory: initialData.vehicleCategory } : {}),
    ...(initialData?.pickupDate ? { pickupDate: initialData.pickupDate } : {}),
    ...(initialData?.returnDate ? { returnDate: initialData.returnDate } : {}),
    ...(initialData?.pickupLocation ? { pickupLocation: initialData.pickupLocation } : {}),
    ...(initialData?.insuranceCompany ? { insuranceCompany: initialData.insuranceCompany } : {}),
    ...(initialData?.claimNumber ? { claimNumber: initialData.claimNumber } : {}),
    ...(initialData?.bodyShop ? { bodyShop: initialData.bodyShop } : {}),
    ...(initialData?.additionalNotes ? { additionalNotes: initialData.additionalNotes } : {}),
  }
  const [formData, setFormData] = useState<BookingFormData>(mergedInitial)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const today = new Date().toISOString().split('T')[0]

  const updateField = (field: keyof BookingFormData, value: string) => {
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

    const nameError = validateRequired(formData.fullName, 'Full name')
    if (nameError) newErrors.fullName = nameError

    const emailError = validateRequired(formData.email, 'Email')
    if (emailError) newErrors.email = emailError
    else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email address.'

    const phoneError = validateRequired(formData.phone, 'Phone')
    if (phoneError) newErrors.phone = phoneError
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Please enter a valid phone number.'

    const rentalTypeError = validateRequired(formData.rentalType, 'Rental type')
    if (rentalTypeError) newErrors.rentalType = rentalTypeError

    const categoryError = validateRequired(formData.vehicleCategory, 'Vehicle category')
    if (categoryError) newErrors.vehicleCategory = categoryError

    const pickupError = validateRequired(formData.pickupDate, 'Pickup date')
    if (pickupError) newErrors.pickupDate = pickupError

    const returnError = validateRequired(formData.returnDate, 'Return date')
    if (returnError) newErrors.returnDate = returnError

    const dateError = validateDates(formData.pickupDate, formData.returnDate)
    if (dateError) newErrors.returnDate = dateError

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await submitBookingForm({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        rentalType: formData.rentalType,
        vehicleCategory: formData.vehicleCategory,
        pickupDate: formData.pickupDate,
        returnDate: formData.returnDate,
        pickupLocation: formData.pickupLocation,
        insuranceCompany: formData.insuranceCompany,
        claimNumber: formData.claimNumber,
        bodyShop: formData.bodyShop,
        additionalNotes: formData.additionalNotes,
        selectedVehicle: selectedVehicleName,
      })
      setStatus('success')
      setFormData({ ...defaultFormData })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-sm border border-green-200 bg-green-50 p-8 text-center" role="status">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-brand-black">Request Received</h3>
        <p className="mt-3 text-brand-grey-light">
          Thank you. Your rental request has been received and sent to our team. We will contact
          you shortly to confirm availability and rental details. A confirmation has also been sent
          to your email.
        </p>
        <Button
          className="mt-6"
          onClick={() => setStatus('idle')}
          variant="outline"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  const inputClass = (field: keyof BookingFormData) =>
    `w-full rounded-sm border bg-white px-4 py-3 text-sm text-brand-black focus:outline-none ${
      errors[field]
        ? 'border-red-500 focus:border-red-500'
        : 'border-brand-grey/20 focus:border-brand-orange'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {selectedVehicleName && (
        <div className="rounded-sm border border-brand-orange/30 bg-brand-orange/5 p-4">
          <p className="text-sm font-semibold text-brand-black">
            You&apos;re requesting: <span className="text-brand-orange">{selectedVehicleName}</span>
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-sm border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-brand-grey">
            Full Name <span className="text-brand-orange">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            className={inputClass('fullName')}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-brand-grey">
            Email <span className="text-brand-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            className={inputClass('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-brand-grey">
            Phone <span className="text-brand-orange">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className={inputClass('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="rentalType" className="mb-2 block text-sm font-semibold text-brand-grey">
            Rental Type <span className="text-brand-orange">*</span>
          </label>
          <select
            id="rentalType"
            value={formData.rentalType}
            onChange={(e) => updateField('rentalType', e.target.value)}
            className={inputClass('rentalType')}
            aria-invalid={!!errors.rentalType}
          >
            {RENTAL_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.rentalType && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.rentalType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="vehicleCategory" className="mb-2 block text-sm font-semibold text-brand-grey">
            Vehicle Category <span className="text-brand-orange">*</span>
          </label>
          <select
            id="vehicleCategory"
            value={formData.vehicleCategory}
            onChange={(e) => updateField('vehicleCategory', e.target.value)}
            className={inputClass('vehicleCategory')}
            aria-invalid={!!errors.vehicleCategory}
          >
            {VEHICLE_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.vehicleCategory && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.vehicleCategory}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="pickupDate" className="mb-2 block text-sm font-semibold text-brand-grey">
            Pickup Date <span className="text-brand-orange">*</span>
          </label>
          <input
            type="date"
            id="pickupDate"
            value={formData.pickupDate}
            min={today}
            onChange={(e) => updateField('pickupDate', e.target.value)}
            className={inputClass('pickupDate')}
            aria-invalid={!!errors.pickupDate}
          />
          {errors.pickupDate && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.pickupDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="returnDate" className="mb-2 block text-sm font-semibold text-brand-grey">
            Return Date <span className="text-brand-orange">*</span>
          </label>
          <input
            type="date"
            id="returnDate"
            value={formData.returnDate}
            min={formData.pickupDate || today}
            onChange={(e) => updateField('returnDate', e.target.value)}
            className={inputClass('returnDate')}
            aria-invalid={!!errors.returnDate}
          />
          {errors.returnDate && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.returnDate}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="pickupLocation" className="mb-2 block text-sm font-semibold text-brand-grey">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            value={formData.pickupLocation}
            onChange={(e) => updateField('pickupLocation', e.target.value)}
            placeholder="Scarborough, ON or preferred GTA location"
            className={inputClass('pickupLocation')}
          />
        </div>

        <div>
          <label htmlFor="insuranceCompany" className="mb-2 block text-sm font-semibold text-brand-grey">
            Insurance Company
          </label>
          <input
            type="text"
            id="insuranceCompany"
            value={formData.insuranceCompany}
            onChange={(e) => updateField('insuranceCompany', e.target.value)}
            className={inputClass('insuranceCompany')}
          />
        </div>

        <div>
          <label htmlFor="claimNumber" className="mb-2 block text-sm font-semibold text-brand-grey">
            Claim Number
          </label>
          <input
            type="text"
            id="claimNumber"
            value={formData.claimNumber}
            onChange={(e) => updateField('claimNumber', e.target.value)}
            className={inputClass('claimNumber')}
          />
        </div>

        <div>
          <label htmlFor="bodyShop" className="mb-2 block text-sm font-semibold text-brand-grey">
            Body Shop / Dealership
          </label>
          <input
            type="text"
            id="bodyShop"
            value={formData.bodyShop}
            onChange={(e) => updateField('bodyShop', e.target.value)}
            className={inputClass('bodyShop')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="additionalNotes" className="mb-2 block text-sm font-semibold text-brand-grey">
          Additional Notes
        </label>
        <textarea
          id="additionalNotes"
          value={formData.additionalNotes}
          onChange={(e) => updateField('additionalNotes', e.target.value)}
          rows={4}
          className={inputClass('additionalNotes')}
          placeholder="Tell us about your rental needs..."
        />
      </div>

      <Button type="submit" size="lg" fullWidth disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting Request...' : 'Submit Rental Request'}
      </Button>

      <p className="text-center text-xs text-brand-grey-light">
        This is a rental request, not a confirmed reservation. Our team will contact you to confirm
        availability and details.
      </p>
    </form>
  )
}
