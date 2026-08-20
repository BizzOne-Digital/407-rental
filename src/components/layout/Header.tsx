import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'
import { NAV_LINKS } from '../../data/site'
import { useSite } from '../../hooks/useSite'

export function Header() {
  const site = useSite()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/95 shadow-lg backdrop-blur-md' : 'bg-brand-black'
      }`}
    >
      <div className="container-wide flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:text-brand-orange ${
                location.pathname === link.href ? 'text-brand-orange' : 'text-brand-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-brand-white transition-colors hover:text-brand-orange"
          >
            {site.phone}
          </a>
          <Button to="/booking" size="sm">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm text-brand-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          mobileOpen ? 'max-h-screen border-t border-brand-white/10' : 'max-h-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="container-wide space-y-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block rounded-sm px-4 py-3 text-base font-medium transition-colors hover:bg-brand-white/5 hover:text-brand-orange ${
                location.pathname === link.href ? 'text-brand-orange' : 'text-brand-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="space-y-3 border-t border-brand-white/10 pt-4">
            <a
              href={site.phoneHref}
              className="block px-4 py-2 text-base font-semibold text-brand-orange"
            >
              {site.phone}
            </a>
            <Button to="/booking" fullWidth>
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
