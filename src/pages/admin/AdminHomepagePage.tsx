import { useState, useEffect } from 'react'
import { useContent } from '../../context/ContentContext'
import type { HomepageSections } from '../../types/cms'
import { PageHeader, Field, TextInput, TextArea, SaveBar } from '../../components/admin/AdminForm'
import { ImageUpload } from '../../components/admin/ImageUpload'

export function AdminHomepagePage() {
  const { content, save, saving } = useContent()
  const [form, setForm] = useState<HomepageSections>(content.homepage)

  useEffect(() => {
    setForm(content.homepage)
  }, [content.homepage])

  const update = (field: keyof HomepageSections, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const sections = [
    { title: 'Why Choose Us', fields: ['whyChooseTitle', 'whyChooseSubtitle'] as const },
    { title: 'Services Section', fields: ['servicesTitle', 'servicesSubtitle'] as const },
    { title: 'Fleet Section', fields: ['fleetTitle', 'fleetSubtitle'] as const },
    { title: 'How It Works', fields: ['howItWorksTitle', 'howItWorksSubtitle'] as const },
    { title: 'Testimonials', fields: ['testimonialsTitle', 'testimonialsSubtitle'] as const },
    { title: 'FAQ Preview', fields: ['faqTitle', 'faqSubtitle'] as const },
    { title: 'Final CTA', fields: ['ctaTitle', 'ctaSubtitle'] as const },
  ]

  return (
    <>
      <PageHeader
        title="Homepage Sections"
        description="Edit headings and text for each section on the homepage."
      />

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="rounded-sm border border-brand-grey/10 p-5">
            <h3 className="mb-4 font-bold text-brand-black">{section.title}</h3>
            <div className="space-y-4">
              <Field label="Title">
                <TextInput value={form[section.fields[0]]} onChange={(v) => update(section.fields[0], v)} />
              </Field>
              <Field label="Subtitle">
                <TextArea value={form[section.fields[1]]} onChange={(v) => update(section.fields[1], v)} rows={2} />
              </Field>
            </div>
          </div>
        ))}

        <div className="rounded-sm border border-brand-grey/10 p-5">
          <h3 className="mb-4 font-bold text-brand-black">Insurance Replacement Section</h3>
          <div className="space-y-4">
            <ImageUpload value={form.insuranceImage} onChange={(v) => update('insuranceImage', v)} folder="homepage" label="Section Image" />
            <Field label="Title"><TextInput value={form.insuranceTitle} onChange={(v) => update('insuranceTitle', v)} /></Field>
            <Field label="Text"><TextArea value={form.insuranceText} onChange={(v) => update('insuranceText', v)} rows={4} /></Field>
          </div>
        </div>

        <div className="rounded-sm border border-brand-grey/10 p-5">
          <h3 className="mb-4 font-bold text-brand-black">Direct Billing Section</h3>
          <div className="space-y-4">
            <Field label="Title"><TextInput value={form.directBillingTitle} onChange={(v) => update('directBillingTitle', v)} /></Field>
            <Field label="Text"><TextArea value={form.directBillingText} onChange={(v) => update('directBillingText', v)} rows={4} /></Field>
          </div>
        </div>

        <div className="rounded-sm border border-brand-grey/10 p-5">
          <h3 className="mb-4 font-bold text-brand-black">Luxury Rentals Section</h3>
          <div className="space-y-4">
            <ImageUpload value={form.luxuryImage} onChange={(v) => update('luxuryImage', v)} folder="homepage" label="Section Image (fallback poster)" />
            <Field label="Luxury Section Video URL (MP4 — replace with your own shoot when ready)">
              <TextInput value={form.luxuryVideo ?? ''} onChange={(v) => update('luxuryVideo', v)} placeholder="https://..." />
            </Field>
            <Field label="Video Poster URL">
              <TextInput value={form.luxuryVideoPoster ?? ''} onChange={(v) => update('luxuryVideoPoster', v)} placeholder="https://..." />
            </Field>
            <Field label="Title"><TextInput value={form.luxuryTitle} onChange={(v) => update('luxuryTitle', v)} /></Field>
            <Field label="Text"><TextArea value={form.luxuryText} onChange={(v) => update('luxuryText', v)} rows={4} /></Field>
          </div>
        </div>
      </div>

      <SaveBar saving={saving} onSave={() => save('homepage', form)} />
    </>
  )
}
