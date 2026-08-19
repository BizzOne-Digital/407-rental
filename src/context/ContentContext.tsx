import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import type { CmsContent, CmsDocumentId } from '../types/cms'
import { DEFAULT_CONTENT } from '../data/defaults'
import { setRecipientEmail } from '../lib/site-store'
import { fetchAllContent, saveDocument, subscribeToContentChanges } from '../lib/cms'

interface ContentContextValue {
  content: CmsContent
  loading: boolean
  saving: boolean
  lastUpdated: Date | null
  refresh: () => Promise<void>
  save: <T>(id: CmsDocumentId, data: T) => Promise<void>
}

const ContentContext = createContext<ContentContextValue | null>(null)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<CmsContent>(DEFAULT_CONTENT)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const refresh = useCallback(async () => {
    const data = await fetchAllContent()
    setContent(data)
    setRecipientEmail(data.site.email)
    setLastUpdated(new Date())
    setLoading(false)
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  useEffect(() => {
    const unsubscribe = subscribeToContentChanges(() => {
      refresh()
    })
    return () => unsubscribe?.()
  }, [refresh])

  const save = useCallback(
    async <T,>(id: CmsDocumentId, data: T) => {
      setSaving(true)
      try {
        await saveDocument(id, data)
        await refresh()
      } finally {
        setSaving(false)
      }
    },
    [refresh],
  )

  return (
    <ContentContext.Provider value={{ content, loading, saving, lastUpdated, refresh, save }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}
