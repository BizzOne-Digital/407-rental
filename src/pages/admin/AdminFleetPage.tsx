import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import { DEFAULT_CONTENT } from '../../data/defaults'
import type { Vehicle } from '../../data/vehicles'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'
import { ImageUpload } from '../../components/admin/ImageUpload'

const CATEGORIES = ['Economy', 'Hybrid', 'SUV', 'Luxury', 'Pickup Truck'] as const

function emptyVehicle(): Vehicle {
  return {
    id: `vehicle-${Date.now()}`,
    name: 'New Vehicle',
    category: 'Economy',
    description: '',
    features: [],
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    pricePlaceholder: 'From $XX/day',
    image: '',
    imageAlt: '',
    featured: false,
  }
}

export function AdminFleetPage() {
  const { content, save, saving } = useContent()
  const [vehicles, setVehicles] = useState<Vehicle[]>(content.vehicles)
  const [activeIndex, setActiveIndex] = useState(0)
  const [syncStatus, setSyncStatus] = useState<string | null>(null)

  useEffect(() => {
    setVehicles(content.vehicles)
  }, [content.vehicles])

  const current = vehicles[activeIndex]

  const update = (field: keyof Vehicle, value: unknown) => {
    setVehicles((prev) =>
      prev.map((v, i) => (i === activeIndex ? { ...v, [field]: value } : v)),
    )
  }

  const addVehicle = () => {
    setVehicles((prev) => [...prev, emptyVehicle()])
    setActiveIndex(vehicles.length)
  }

  const removeVehicle = () => {
    if (!confirm('Delete this vehicle?')) return
    setVehicles((prev) => prev.filter((_, i) => i !== activeIndex))
    setActiveIndex(Math.max(0, activeIndex - 1))
  }

  const syncDefaultFleet = async () => {
    if (
      !confirm(
        'Replace all vehicles in the database with the latest default fleet list (33 vehicles)? This cannot be undone.',
      )
    ) {
      return
    }

    setSyncStatus(null)
    try {
      await save('vehicles', DEFAULT_CONTENT.vehicles)
      setVehicles(DEFAULT_CONTENT.vehicles)
      setActiveIndex(0)
      setSyncStatus('Fleet updated to the latest default list.')
    } catch (err) {
      setSyncStatus(err instanceof Error ? err.message : 'Failed to update fleet.')
    }
  }

  if (!current) {
    return (
      <>
        <PageHeader title="Fleet / Vehicles" />
        <button type="button" onClick={addVehicle} className="rounded-sm bg-brand-orange px-6 py-3 text-sm font-bold text-brand-white">
          + Add First Vehicle
        </button>
        <SaveBar saving={saving} onSave={() => save('vehicles', vehicles)} />
      </>
    )
  }

  return (
    <>
      <PageHeader title="Fleet / Vehicles" description="Manage your vehicle inventory. Upload photos from your computer." />

      <div className="mb-6 rounded-sm border border-brand-orange/20 bg-brand-orange/5 p-4">
        <p className="text-sm text-brand-grey">
          If the website still shows old sample vehicles, click below to save the latest fleet list to
          the database.
        </p>
        <button
          type="button"
          onClick={syncDefaultFleet}
          disabled={saving}
          className="mt-3 rounded-sm bg-brand-black px-4 py-2 text-sm font-semibold text-brand-white hover:bg-brand-grey disabled:opacity-50"
        >
          {saving ? 'Updating...' : 'Update Fleet to Latest List'}
        </button>
        {syncStatus && <p className="mt-2 text-sm font-semibold text-brand-orange">{syncStatus}</p>}
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2">
        {vehicles.map((v, i) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setActiveIndex(i)}
            className={`rounded-sm border px-3 py-1.5 text-sm font-medium ${
              i === activeIndex ? 'border-brand-orange bg-brand-orange text-brand-white' : 'border-brand-grey/20'
            }`}
          >
            {v.name}
          </button>
        ))}
        <button type="button" onClick={addVehicle} className="rounded-sm border border-dashed border-brand-orange px-3 py-1.5 text-sm font-semibold text-brand-orange">
          + Add Vehicle
        </button>
      </div>

      <div className="space-y-5">
        <ImageUpload value={current.image} onChange={(v) => update('image', v)} folder="fleet" label="Vehicle Photo" />
        <Field label="Vehicle Name" required>
          <TextInput value={current.name} onChange={(v) => update('name', v)} />
        </Field>
        <Field label="Category">
          <select
            value={current.category}
            onChange={(e) => update('category', e.target.value)}
            className="w-full rounded-sm border border-brand-grey/20 px-4 py-2.5 text-sm"
          >
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <Field label="Description">
          <TextArea value={current.description} onChange={(v) => update('description', v)} rows={3} />
        </Field>
        <Field label="Features (comma-separated)">
          <TextInput value={current.features.join(', ')} onChange={(v) => update('features', v.split(',').map((s) => s.trim()).filter(Boolean))} />
        </Field>
        <div className="grid gap-5 sm:grid-cols-3">
          <Field label="Seats"><TextInput value={String(current.seats)} onChange={(v) => update('seats', Number(v) || 5)} type="number" /></Field>
          <Field label="Transmission"><TextInput value={current.transmission} onChange={(v) => update('transmission', v)} /></Field>
          <Field label="Fuel Type"><TextInput value={current.fuelType} onChange={(v) => update('fuelType', v)} /></Field>
        </div>
        <Field label="Price Placeholder">
          <TextInput value={current.pricePlaceholder} onChange={(v) => update('pricePlaceholder', v)} placeholder="From $XX/day" />
        </Field>
        <Field label="Image Alt Text">
          <TextInput value={current.imageAlt} onChange={(v) => update('imageAlt', v)} />
        </Field>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={current.featured ?? false} onChange={(e) => update('featured', e.target.checked)} />
          Show on homepage (Featured)
        </label>
        <button type="button" onClick={removeVehicle} className="text-sm font-semibold text-brand-orange hover:underline">
          Delete This Vehicle
        </button>
      </div>

      <SaveBar saving={saving} onSave={() => save('vehicles', vehicles)} />
    </>
  )
}
