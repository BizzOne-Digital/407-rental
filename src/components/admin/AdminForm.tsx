import { useState } from 'react'

interface SaveBarProps {
  onSave: () => Promise<void>
  saving?: boolean
  label?: string
}

export function SaveBar({ onSave, saving = false, label = 'Save Changes' }: SaveBarProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSave = async () => {
    setStatus('idle')
    try {
      await onSave()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Save failed.')
    }
  }

  return (
    <div className="sticky bottom-0 z-10 -mx-6 -mb-6 mt-8 flex items-center justify-between border-t border-brand-grey/10 bg-brand-white px-6 py-4 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
      <div>
        {status === 'success' && (
          <span className="text-sm font-semibold text-brand-orange">✓ Saved successfully — live on website now</span>
        )}
        {status === 'error' && (
          <span className="text-sm font-semibold text-brand-orange">{errorMsg}</span>
        )}
      </div>
      <button
        type="button"
        onClick={handleSave}
        disabled={saving}
        className="rounded-sm bg-brand-orange px-8 py-3 text-sm font-bold text-brand-white transition-colors hover:bg-brand-orange/90 disabled:opacity-50"
      >
        {saving ? 'Saving...' : label}
      </button>
    </div>
  )
}

export function Field({
  label,
  children,
  required,
}: {
  label: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-brand-grey">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      {children}
    </div>
  )
}

export function TextInput({
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-sm border border-brand-grey/20 px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none"
    />
  )
}

export function TextArea({
  value,
  onChange,
  rows = 4,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  rows?: number
  placeholder?: string
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-sm border border-brand-grey/20 px-4 py-2.5 text-sm focus:border-brand-orange focus:outline-none"
    />
  )
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-brand-black">{title}</h1>
      {description && <p className="mt-2 text-sm text-brand-grey-light">{description}</p>}
    </div>
  )
}
