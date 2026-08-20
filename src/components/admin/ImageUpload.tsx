import { useState, useRef } from 'react'
import { uploadImage } from '../../lib/cms'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  folder: string
  label?: string
}

export function ImageUpload({ value, onChange, folder, label = 'Image' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file (JPG, PNG, WebP).')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Image must be under 10 MB.')
      return
    }

    setUploading(true)
    setError(null)
    try {
      const url = await uploadImage(file, folder)
      onChange(url)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-brand-grey">{label}</label>

      {value && (
        <div className="relative mb-3 aspect-video max-w-md overflow-hidden rounded-sm border border-brand-grey/10">
          <img src={value} alt="Preview" className="h-full w-full object-cover" />
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="rounded-sm border border-brand-red bg-brand-red px-4 py-2 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-red/90 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : value ? 'Replace Image' : 'Upload from Computer'}
        </button>

        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="rounded-sm border border-brand-grey/20 px-4 py-2 text-sm font-semibold text-brand-grey hover:border-red-300 hover:text-brand-red"
          >
            Remove
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
          e.target.value = ''
        }}
      />

      <div className="mt-2">
        <label className="mt-2 block text-xs text-brand-grey-light">Or paste image URL:</label>
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://..."
          className="mt-1 w-full rounded-sm border border-brand-grey/20 px-3 py-2 text-sm focus:border-brand-red focus:outline-none"
        />
      </div>

      {error && <p className="mt-2 text-sm text-brand-red">{error}</p>}
    </div>
  )
}
