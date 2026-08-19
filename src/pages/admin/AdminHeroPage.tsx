import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { HeroContent } from '../../types/cms'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'
import { ImageUpload } from '../../components/admin/ImageUpload'

export function AdminHeroPage() {
  const { content, save, saving } = useContent()
  const [form, setForm] = useState<HeroContent>(content.hero)

  useEffect(() => {
    setForm(content.hero)
  }, [content.hero])

  const update = (field: keyof HeroContent, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const updateBadge = (index: number, label: string) => {
    setForm((prev) => ({
      ...prev,
      trustBadges: prev.trustBadges.map((b, i) => (i === index ? { label } : b)),
    }))
  }

  return (
    <>
      <PageHeader
        title="Homepage Hero"
        description="Main headline, subheading, background image, and trust badges on the homepage."
      />

      <div className="space-y-5">
        <ImageUpload value={form.image} onChange={(v) => update('image', v)} folder="hero" label="Hero Background Image" />
        <Field label="Location Badge">
          <TextInput value={form.badge} onChange={(v) => update('badge', v)} />
        </Field>
        <Field label="Headline" required>
          <TextInput value={form.headline} onChange={(v) => update('headline', v)} />
        </Field>
        <Field label="Subheading">
          <TextArea value={form.subheading} onChange={(v) => update('subheading', v)} rows={4} />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Primary Button Text">
            <TextInput value={form.primaryCta} onChange={(v) => update('primaryCta', v)} />
          </Field>
          <Field label="Secondary Button Text">
            <TextInput value={form.secondaryCta} onChange={(v) => update('secondaryCta', v)} />
          </Field>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-brand-grey">Trust Badges</p>
          {form.trustBadges.map((badge, i) => (
            <div key={i} className="mb-2">
              <TextInput value={badge.label} onChange={(v) => updateBadge(i, v)} />
            </div>
          ))}
        </div>
      </div>

      <SaveBar saving={saving} onSave={() => save('hero', form)} />
    </>
  )
}
