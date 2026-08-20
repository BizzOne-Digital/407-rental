import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { Testimonial } from '../../data/testimonials'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'

function emptyTestimonial(): Testimonial {
  return { id: `t-${Date.now()}`, name: '', role: '', content: '', rating: 5, isDemo: true }
}

export function AdminTestimonialsPage() {
  const { content, save, saving } = useContent()
  const [items, setItems] = useState<Testimonial[]>(content.testimonials)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => { setItems(content.testimonials) }, [content.testimonials])

  const current = items[activeIndex]
  const update = (field: keyof Testimonial, value: unknown) => {
    setItems((prev) => prev.map((t, i) => (i === activeIndex ? { ...t, [field]: value } : t)))
  }

  return (
    <>
      <PageHeader title="Testimonials" description="Manage customer reviews displayed on the website." />

      <div className="mb-6 flex flex-wrap gap-2">
        {items.map((t, i) => (
          <button key={t.id} type="button" onClick={() => setActiveIndex(i)}
            className={`rounded-sm border px-3 py-1.5 text-sm font-medium ${i === activeIndex ? 'border-brand-red bg-brand-red text-brand-white' : 'border-brand-grey/20'}`}>
            {t.name || `Review ${i + 1}`}
          </button>
        ))}
        <button type="button" onClick={() => { setItems((p) => [...p, emptyTestimonial()]); setActiveIndex(items.length) }}
          className="rounded-sm border border-dashed border-brand-red px-3 py-1.5 text-sm font-semibold text-brand-red">+ Add</button>
      </div>

      {current && (
        <div className="space-y-5">
          <Field label="Customer Name"><TextInput value={current.name} onChange={(v) => update('name', v)} /></Field>
          <Field label="Role / Label"><TextInput value={current.role} onChange={(v) => update('role', v)} placeholder="e.g. Insurance Replacement Customer" /></Field>
          <Field label="Review Text"><TextArea value={current.content} onChange={(v) => update('content', v)} rows={4} /></Field>
          <Field label="Rating (1-5)">
            <select value={current.rating} onChange={(e) => update('rating', Number(e.target.value))} className="w-full rounded-sm border border-brand-grey/20 px-4 py-2.5 text-sm">
              {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r} stars</option>)}
            </select>
          </Field>
          <button type="button" onClick={() => { if (confirm('Delete?')) { setItems((p) => p.filter((_, i) => i !== activeIndex)); setActiveIndex(0) } }}
            className="text-sm font-semibold text-brand-red hover:underline">Delete</button>
        </div>
      )}

      <SaveBar saving={saving} onSave={() => save('testimonials', items)} />
    </>
  )
}
