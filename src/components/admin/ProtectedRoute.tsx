import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, isConfigured } = useAuth()
  const location = useLocation()

  if (!isConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-grey-lighter p-8">
        <div className="max-w-md rounded-sm border border-brand-grey/10 bg-white p-8 text-center shadow-sm">
          <h1 className="text-xl font-bold text-brand-black">Admin Panel Not Configured</h1>
          <p className="mt-3 text-sm text-brand-grey-light">
            Add your Supabase credentials to the <code className="text-brand-orange">.env</code> file
            and run the database schema. See <code className="text-brand-orange">ADMIN_SETUP.md</code>{' '}
            for instructions.
          </p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-grey-lighter">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-brand-orange border-t-transparent" />
          <p className="mt-4 text-sm text-brand-grey-light">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}
