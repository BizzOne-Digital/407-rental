import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { SiteSettings } from '../../types/cms'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'

export function AdminSitePage() {
  const { content, save, saving } = useContent()
  const [form, setForm] = useState<SiteSettings>(content.site)

  useEffect(() => {
    setForm(content.site)
  }, [content.site])

  const update = (field: keyof SiteSettings, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <PageHeader
        title="Business Information"
        description="Company name, contact details, and descriptions used across the website."
      />

      <div className="space-y-5">
        <Field label="Company Name" required>
          <TextInput value={form.name} onChange={(v) => update('name', v)} />
        </Field>
        <Field label="Tagline">
          <TextInput value={form.tagline} onChange={(v) => update('tagline', v)} />
        </Field>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Phone" required>
            <TextInput value={form.phone} onChange={(v) => update('phone', v)} />
          </Field>
          <Field label="Email (form submissions go here)" required>
            <TextInput value={form.email} onChange={(v) => update('email', v)} type="email" />
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Location">
            <TextInput value={form.location} onChange={(v) => update('location', v)} />
          </Field>
          <Field label="Service Area">
            <TextInput value={form.serviceArea} onChange={(v) => update('serviceArea', v)} />
          </Field>
        </div>
        <Field label="Social Media Handle">
          <TextInput value={form.social} onChange={(v) => update('social', v)} />
        </Field>
        <Field label="Short Description">
          <TextArea value={form.description} onChange={(v) => update('description', v)} rows={4} />
        </Field>
        <Field label="Extended Description">
          <TextArea value={form.descriptionExtended} onChange={(v) => update('descriptionExtended', v)} rows={6} />
        </Field>
      </div>

      <SaveBar saving={saving} onSave={() => save('site', form)} />
    </>
  )
}
