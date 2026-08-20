import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../../context/ContentContext'
import { initializeAllDocuments } from '../../lib/cms'
import { PageHeader } from '../../components/admin/AdminForm'

export function AdminDashboard() {
  const { content, lastUpdated, refresh } = useContent()
  const [initializing, setInitializing] = useState(false)
  const [initStatus, setInitStatus] = useState<string | null>(null)

  const handleInitialize = async () => {
    if (!confirm('This will load all default content into the database. Existing data will be overwritten. Continue?')) return
    setInitializing(true)
    setInitStatus(null)
    try {
      await initializeAllDocuments()
      await refresh()
      setInitStatus('Content initialized successfully!')
    } catch (err) {
      setInitStatus(err instanceof Error ? err.message : 'Initialization failed.')
    } finally {
      setInitializing(false)
    }
  }

  const stats = [
    { label: 'Vehicles', count: content.vehicles.length, link: '/admin/fleet' },
    { label: 'Services', count: content.services.length, link: '/admin/services' },
    { label: 'Testimonials', count: content.testimonials.length, link: '/admin/testimonials' },
    { label: 'Team Members', count: content.team.length, link: '/admin/team' },
    { label: 'Gallery Images', count: content.gallery.length, link: '/admin/gallery' },
    { label: 'FAQs', count: content.faqs.length, link: '/admin/faq' },
  ]

  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Manage all website content. Changes are saved instantly and visible to all visitors."
      />

      {lastUpdated && (
        <p className="mb-6 text-sm text-brand-grey-light">
          Last synced: {lastUpdated.toLocaleString('en-CA', { timeZone: 'America/Toronto' })}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            to={stat.link}
            className="rounded-sm border border-brand-grey/10 p-5 transition-shadow hover:shadow-md"
          >
            <p className="text-3xl font-bold text-brand-orange">{stat.count}</p>
            <p className="mt-1 text-sm font-semibold text-brand-black">{stat.label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-sm border border-brand-orange/20 bg-brand-orange/5 p-6">
        <h2 className="font-bold text-brand-black">First-Time Setup</h2>
        <p className="mt-2 text-sm text-brand-grey-light">
          If this is your first time using the admin panel, click below to load all default website
          content into the database. You can then edit everything from the sidebar.
        </p>
        <button
          type="button"
          onClick={handleInitialize}
          disabled={initializing}
          className="mt-4 rounded-sm bg-brand-black px-6 py-2.5 text-sm font-semibold text-brand-white hover:bg-brand-grey disabled:opacity-50"
        >
          {initializing ? 'Initializing...' : 'Initialize Default Content'}
        </button>
        {initStatus && <p className="mt-3 text-sm font-semibold text-brand-orange">{initStatus}</p>}
      </div>
    </>
  )
}
