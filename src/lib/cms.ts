import { requireSupabase, isSupabaseConfigured, supabase } from './supabase'
import { DEFAULT_CONTENT, CMS_DOCUMENT_MAP } from '../data/defaults'
import type { CmsContent, CmsDocumentId } from '../types/cms'

const ALL_DOC_IDS = Object.keys(CMS_DOCUMENT_MAP) as CmsDocumentId[]

export async function fetchAllContent(): Promise<CmsContent> {
  if (!isSupabaseConfigured) return { ...DEFAULT_CONTENT }

  const client = requireSupabase()
  const { data, error } = await client.from('cms_documents').select('id, data, updated_at')

  if (error) {
    console.error('Failed to fetch CMS content:', error.message)
    return { ...DEFAULT_CONTENT }
  }

  if (!data || data.length === 0) return { ...DEFAULT_CONTENT }

  const merged = structuredClone(DEFAULT_CONTENT)

  for (const row of data) {
    const key = CMS_DOCUMENT_MAP[row.id]
    if (key && row.data !== null && row.data !== undefined) {
      ;(merged as unknown as Record<string, unknown>)[key] = row.data
    }
  }

  return merged
}

export async function saveDocument<T>(id: CmsDocumentId, data: T): Promise<void> {
  const client = requireSupabase()
  const { error } = await client.from('cms_documents').upsert(
    { id, data },
    { onConflict: 'id' },
  )

  if (error) throw new Error(error.message)
}

export async function initializeAllDocuments(): Promise<void> {
  const client = requireSupabase()

  const rows = ALL_DOC_IDS.map((id) => ({
    id,
    data: (DEFAULT_CONTENT as unknown as Record<string, unknown>)[CMS_DOCUMENT_MAP[id]],
  }))

  const { error } = await client.from('cms_documents').upsert(rows, { onConflict: 'id' })
  if (error) throw new Error(error.message)
}

export async function uploadImage(file: File, folder: string): Promise<string> {
  const client = requireSupabase()

  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
  const safeName = file.name
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z0-9-_]/g, '-')
    .slice(0, 40)
  const path = `${folder}/${Date.now()}-${safeName}.${ext}`

  const { error } = await client.storage.from('media').upload(path, file, {
    cacheControl: '60',
    upsert: false,
  })

  if (error) throw new Error(error.message)

  const { data } = client.storage.from('media').getPublicUrl(path)
  return `${data.publicUrl}?v=${Date.now()}`
}

export function subscribeToContentChanges(callback: () => void): (() => void) | null {
  if (!supabase) return null

  const channel = supabase
    .channel('cms_changes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'cms_documents' }, () => {
      callback()
    })
    .subscribe()

  return () => {
    supabase?.removeChannel(channel)
  }
}
