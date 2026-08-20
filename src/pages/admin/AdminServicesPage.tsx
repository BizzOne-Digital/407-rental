import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { Service } from '../../data/services'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'
import { ImageUpload } from '../../components/admin/ImageUpload'

function emptyService(): Service {
  return {
    id: `service-${Date.now()}`,
    title: 'New Service',
    shortDescription: '',
    description: '',
    benefits: [],
    image: '',
    imageAlt: '',
    cta: 'Learn More',
    ctaHref: '/booking',
    featured: false,
  }
}

export function AdminServicesPage() {
  const { content, save, saving } = useContent()
  const [services, setServices] = useState<Service[]>(content.services)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => { setServices(content.services) }, [content.services])

  const current = services[activeIndex]
  const update = (field: keyof Service, value: unknown) => {
    setServices((prev) => prev.map((s, i) => (i === activeIndex ? { ...s, [field]: value } : s)))
  }

  return (
    <>
      <PageHeader title="Services" description="Manage all rental services displayed on the website." />

      <div className="mb-6 flex flex-wrap gap-2">
        {services.map((s, i) => (
          <button key={s.id} type="button" onClick={() => setActiveIndex(i)}
            className={`rounded-sm border px-3 py-1.5 text-sm font-medium ${i === activeIndex ? 'border-brand-red bg-brand-red text-brand-white' : 'border-brand-grey/20'}`}>
            {s.title}
          </button>
        ))}
        <button type="button" onClick={() => { setServices((p) => [...p, emptyService()]); setActiveIndex(services.length) }}
          className="rounded-sm border border-dashed border-brand-red px-3 py-1.5 text-sm font-semibold text-brand-red">+ Add</button>
      </div>

      {current && (
        <div className="space-y-5">
          <ImageUpload value={current.image} onChange={(v) => update('image', v)} folder="services" />
          <Field label="Title"><TextInput value={current.title} onChange={(v) => update('title', v)} /></Field>
          <Field label="Short Description"><TextArea value={current.shortDescription} onChange={(v) => update('shortDescription', v)} rows={2} /></Field>
          <Field label="Full Description"><TextArea value={current.description} onChange={(v) => update('description', v)} rows={4} /></Field>
          <Field label="Benefits (comma-separated)"><TextInput value={current.benefits.join(', ')} onChange={(v) => update('benefits', v.split(',').map((s) => s.trim()).filter(Boolean))} /></Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Button Text"><TextInput value={current.cta} onChange={(v) => update('cta', v)} /></Field>
            <Field label="Button Link"><TextInput value={current.ctaHref} onChange={(v) => update('ctaHref', v)} /></Field>
          </div>
          <Field label="Image Alt"><TextInput value={current.imageAlt} onChange={(v) => update('imageAlt', v)} /></Field>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={current.featured ?? false} onChange={(e) => update('featured', e.target.checked)} />
            Featured on homepage
          </label>
          <button type="button" onClick={() => { if (confirm('Delete?')) { setServices((p) => p.filter((_, i) => i !== activeIndex)); setActiveIndex(0) } }}
            className="text-sm font-semibold text-brand-red hover:underline">Delete</button>
        </div>
      )}

      <SaveBar saving={saving} onSave={() => save('services', services)} />
    </>
  )
}
