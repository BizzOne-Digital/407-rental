import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { AboutContent } from '../../types/cms'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'
import { ImageUpload } from '../../components/admin/ImageUpload'

export function AdminAboutPage() {
  const { content, save, saving } = useContent()
  const [form, setForm] = useState<AboutContent>(content.about)

  useEffect(() => { setForm(content.about) }, [content.about])

  const update = (field: keyof AboutContent, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <PageHeader title="About Page" description="Edit content on the About page." />

      <div className="space-y-5">
        <ImageUpload value={form.heroImage} onChange={(v) => update('heroImage', v)} folder="about" label="Hero Image" />
        <Field label="Page Title"><TextInput value={form.heroTitle} onChange={(v) => update('heroTitle', v)} /></Field>
        <Field label="Page Subtitle"><TextInput value={form.heroSubtitle} onChange={(v) => update('heroSubtitle', v)} /></Field>
        <Field label="Mission Title"><TextInput value={form.missionTitle} onChange={(v) => update('missionTitle', v)} /></Field>
        <Field label="Mission Text"><TextArea value={form.missionText} onChange={(v) => update('missionText', v)} rows={3} /></Field>
        <Field label="Commitment Title"><TextInput value={form.commitmentTitle} onChange={(v) => update('commitmentTitle', v)} /></Field>
        <Field label="Commitment Subtitle"><TextInput value={form.commitmentSubtitle} onChange={(v) => update('commitmentSubtitle', v)} /></Field>
        <Field label="Insurance Expertise Title"><TextInput value={form.insuranceExpertiseTitle} onChange={(v) => update('insuranceExpertiseTitle', v)} /></Field>
        <Field label="Insurance Expertise Text"><TextArea value={form.insuranceExpertiseText} onChange={(v) => update('insuranceExpertiseText', v)} rows={4} /></Field>
        <Field label="GTA Section Title"><TextInput value={form.gtaTitle} onChange={(v) => update('gtaTitle', v)} /></Field>
        <Field label="GTA Section Text"><TextArea value={form.gtaText} onChange={(v) => update('gtaText', v)} rows={4} /></Field>
      </div>

      <SaveBar saving={saving} onSave={() => save('about', form)} />
    </>
  )
}
