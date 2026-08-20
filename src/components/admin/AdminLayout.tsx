import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Logo } from '../ui/Logo'

const NAV_ITEMS = [
  { to: '/admin', label: 'Dashboard', end: true },
  { to: '/admin/site', label: 'Business Info' },
  { to: '/admin/hero', label: 'Homepage Hero' },
  { to: '/admin/homepage', label: 'Homepage Sections' },
  { to: '/admin/fleet', label: 'Fleet / Vehicles' },
  { to: '/admin/services', label: 'Services' },
  { to: '/admin/testimonials', label: 'Testimonials' },
  { to: '/admin/team', label: 'Team' },
  { to: '/admin/gallery', label: 'Gallery' },
  { to: '/admin/faq', label: 'FAQ' },
  { to: '/admin/about', label: 'About Page' },
]

export function AdminLayout() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/admin/login')
  }

  return (
    <div className="flex min-h-screen bg-brand-grey-lighter">
      <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-brand-grey/10 bg-brand-black">
        <div className="border-b border-brand-white/10 p-4">
          <Logo />
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Admin Panel
          </p>
        </div>

        <nav className="flex-1 overflow-y-auto p-3" aria-label="Admin navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `mb-1 block rounded-sm px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-orange text-brand-white'
                    : 'text-brand-white/70 hover:bg-brand-white/5 hover:text-brand-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-brand-white/10 p-4">
          <p className="truncate text-xs text-brand-white/50">{user?.email}</p>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-sm border border-brand-white/20 px-3 py-2 text-center text-xs font-semibold text-brand-white hover:bg-brand-white/5"
            >
              View Website ↗
            </a>
            <button
              type="button"
              onClick={handleSignOut}
              className="rounded-sm bg-brand-white/10 px-3 py-2 text-xs font-semibold text-brand-white hover:bg-brand-white/20"
            >
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      <main className="ml-64 flex-1 p-8">
        <div className="mx-auto max-w-4xl rounded-sm border border-brand-grey/10 bg-brand-white p-6 shadow-sm">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
