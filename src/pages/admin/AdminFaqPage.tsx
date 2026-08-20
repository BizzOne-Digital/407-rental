import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { FAQ } from '../../data/faqs'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'

function emptyFaq(): FAQ {
  return { id: `faq-${Date.now()}`, question: '', answer: '' }
}

export function AdminFaqPage() {
  const { content, save, saving } = useContent()
  const [items, setItems] = useState<FAQ[]>(content.faqs)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => { setItems(content.faqs) }, [content.faqs])

  const current = items[activeIndex]
  const update = (field: keyof FAQ, value: string) => {
    setItems((prev) => prev.map((f, i) => (i === activeIndex ? { ...f, [field]: value } : f)))
  }

  return (
    <>
      <PageHeader title="FAQ" description="Manage frequently asked questions." />

      <div className="mb-6 flex flex-wrap gap-2">
        {items.map((f, i) => (
          <button key={f.id} type="button" onClick={() => setActiveIndex(i)}
            className={`rounded-sm border px-3 py-1.5 text-sm font-medium ${i === activeIndex ? 'border-brand-red bg-brand-red text-brand-white' : 'border-brand-grey/20'}`}>
            Q{i + 1}
          </button>
        ))}
        <button type="button" onClick={() => { setItems((p) => [...p, emptyFaq()]); setActiveIndex(items.length) }}
          className="rounded-sm border border-dashed border-brand-red px-3 py-1.5 text-sm font-semibold text-brand-red">+ Add</button>
      </div>

      {current && (
        <div className="space-y-5">
          <Field label="Question"><TextInput value={current.question} onChange={(v) => update('question', v)} /></Field>
          <Field label="Answer"><TextArea value={current.answer} onChange={(v) => update('answer', v)} rows={5} /></Field>
          <button type="button" onClick={() => { if (confirm('Delete?')) { setItems((p) => p.filter((_, i) => i !== activeIndex)); setActiveIndex(0) } }}
            className="text-sm font-semibold text-brand-red hover:underline">Delete</button>
        </div>
      )}

      <SaveBar saving={saving} onSave={() => save('faqs', items)} />
    </>
  )
}
