import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { TeamMember } from '../../data/team'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'
import { ImageUpload } from '../../components/admin/ImageUpload'

function emptyMember(): TeamMember {
  return { id: `team-${Date.now()}`, name: '', role: '', bio: '', image: '', isDemo: true }
}

export function AdminTeamPage() {
  const { content, save, saving } = useContent()
  const [items, setItems] = useState<TeamMember[]>(content.team)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => { setItems(content.team) }, [content.team])

  const current = items[activeIndex]
  const update = (field: keyof TeamMember, value: unknown) => {
    setItems((prev) => prev.map((t, i) => (i === activeIndex ? { ...t, [field]: value } : t)))
  }

  return (
    <>
      <PageHeader title="Team Members" description="Manage team profiles on the Team page." />

      <div className="mb-6 flex flex-wrap gap-2">
        {items.map((t, i) => (
          <button key={t.id} type="button" onClick={() => setActiveIndex(i)}
            className={`rounded-sm border px-3 py-1.5 text-sm font-medium ${i === activeIndex ? 'border-brand-orange bg-brand-orange text-brand-white' : 'border-brand-grey/20'}`}>
            {t.name || `Member ${i + 1}`}
          </button>
        ))}
        <button type="button" onClick={() => { setItems((p) => [...p, emptyMember()]); setActiveIndex(items.length) }}
          className="rounded-sm border border-dashed border-brand-orange px-3 py-1.5 text-sm font-semibold text-brand-orange">+ Add</button>
      </div>

      {current && (
        <div className="space-y-5">
          <ImageUpload value={current.image} onChange={(v) => update('image', v)} folder="team" label="Profile Photo" />
          <Field label="Name"><TextInput value={current.name} onChange={(v) => update('name', v)} /></Field>
          <Field label="Role"><TextInput value={current.role} onChange={(v) => update('role', v)} /></Field>
          <Field label="Bio"><TextArea value={current.bio} onChange={(v) => update('bio', v)} rows={3} /></Field>
          <button type="button" onClick={() => { if (confirm('Delete?')) { setItems((p) => p.filter((_, i) => i !== activeIndex)); setActiveIndex(0) } }}
            className="text-sm font-semibold text-brand-orange hover:underline">Delete</button>
        </div>
      )}

      <SaveBar saving={saving} onSave={() => save('team', items)} />
    </>
  )
}
