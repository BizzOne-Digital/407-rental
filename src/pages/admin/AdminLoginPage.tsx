import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Logo } from '../../components/ui/Logo'

export function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, user, isConfigured } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = (location.state as { from?: string })?.from || '/admin'

  useEffect(() => {
    if (user) navigate(from, { replace: true })
  }, [user, navigate, from])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await signIn(email, password)
    setLoading(false)
    if (result.error) {
      setError(result.error)
    } else {
      navigate(from, { replace: true })
    }
  }

  if (!isConfigured) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-black p-8">
        <div className="max-w-md rounded-sm bg-brand-white p-8 text-center">
          <h1 className="text-xl font-bold">Setup Required</h1>
          <p className="mt-3 text-sm text-brand-grey-light">
            Please configure Supabase in your <code>.env</code> file. See{' '}
            <code>ADMIN_SETUP.md</code> for step-by-step instructions.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-black p-4">
      <div className="w-full max-w-md rounded-sm bg-brand-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <Logo size="large" className="mx-auto" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand-red">
            Admin Login
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="rounded-sm border border-brand-red/20 bg-brand-red/5 p-3 text-sm text-brand-grey">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="admin-email" className="mb-2 block text-sm font-semibold text-brand-grey">
              Email
            </label>
            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full rounded-sm border border-brand-grey/20 px-4 py-3 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold text-brand-grey">
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-sm border border-brand-grey/20 px-4 py-3 text-sm focus:border-brand-red focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-sm bg-brand-red py-3 text-sm font-bold text-brand-white transition-colors hover:bg-brand-red/90 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-brand-grey-light">
          <a href="/" className="text-brand-red hover:underline">← Back to website</a>
        </p>
      </div>
    </div>
  )
}
