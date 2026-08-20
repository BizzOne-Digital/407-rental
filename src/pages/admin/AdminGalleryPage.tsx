import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { GalleryImage } from '../../data/gallery'
import { PageHeader, Field, TextInput, SaveBar } from '../../components/admin/AdminForm'
import { ImageUpload } from '../../components/admin/ImageUpload'

const CATEGORIES = ['Luxury', 'SUV', 'Economy', 'Hybrid', 'Pickup', 'Service'] as const

function emptyImage(): GalleryImage {
  return { id: `gal-${Date.now()}`, src: '', alt: '', category: 'Luxury', title: '' }
}

export function AdminGalleryPage() {
  const { content, save, saving } = useContent()
  const [items, setItems] = useState<GalleryImage[]>(content.gallery)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => { setItems(content.gallery) }, [content.gallery])

  const current = items[activeIndex]
  const update = (field: keyof GalleryImage, value: unknown) => {
    setItems((prev) => prev.map((g, i) => (i === activeIndex ? { ...g, [field]: value } : g)))
  }

  return (
    <>
      <PageHeader title="Gallery" description="Manage gallery images. Upload photos from your computer." />

      <div className="mb-6 flex flex-wrap gap-2">
        {items.map((g, i) => (
          <button key={g.id} type="button" onClick={() => setActiveIndex(i)}
            className={`rounded-sm border px-3 py-1.5 text-sm font-medium ${i === activeIndex ? 'border-brand-red bg-brand-red text-brand-white' : 'border-brand-grey/20'}`}>
            {g.title || `Image ${i + 1}`}
          </button>
        ))}
        <button type="button" onClick={() => { setItems((p) => [...p, emptyImage()]); setActiveIndex(items.length) }}
          className="rounded-sm border border-dashed border-brand-red px-3 py-1.5 text-sm font-semibold text-brand-red">+ Add</button>
      </div>

      {current && (
        <div className="space-y-5">
          <ImageUpload value={current.src} onChange={(v) => update('src', v)} folder="gallery" label="Gallery Image" />
          <Field label="Title"><TextInput value={current.title} onChange={(v) => update('title', v)} /></Field>
          <Field label="Alt Text"><TextInput value={current.alt} onChange={(v) => update('alt', v)} /></Field>
          <Field label="Category">
            <select value={current.category} onChange={(e) => update('category', e.target.value)} className="w-full rounded-sm border border-brand-grey/20 px-4 py-2.5 text-sm">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
          <button type="button" onClick={() => { if (confirm('Delete?')) { setItems((p) => p.filter((_, i) => i !== activeIndex)); setActiveIndex(0) } }}
            className="text-sm font-semibold text-brand-red hover:underline">Delete</button>
        </div>
      )}

      <SaveBar saving={saving} onSave={() => save('gallery', items)} />
    </>
  )
}
