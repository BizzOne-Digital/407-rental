import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { FOOTER_LINKS, SITE } from '../../data/site'
import { useSite } from '../../hooks/useSite'

export function Footer() {
  const site = useSite()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-brand-red bg-brand-black text-brand-white">
      <div className="section-padding container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="footer" className="mb-4" />
            <p className="text-sm leading-relaxed text-brand-white/70">{site.tagline}</p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={site.phoneHref} className="block font-semibold text-brand-red hover:underline">
                {site.phone}
              </a>
              <a
                href={`tel:+1${SITE.phoneSecondary.replace(/\D/g, '')}`}
                className="block font-semibold text-brand-red hover:underline"
              >
                {SITE.phoneSecondary}
              </a>
              <a href={site.emailHref} className="block text-brand-white/70 hover:text-brand-red">
                {site.email}
              </a>
              <p className="text-brand-white/70">
                {site.location}
                <br />
                {SITE.addressLine2}
              </p>
              <p className="text-brand-white/70">{site.serviceArea}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-red">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-brand-white/70 transition-colors hover:text-brand-red">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-red">Services</h3>
            <ul className="space-y-2 text-sm text-brand-white/70">
              <li>
                <Link to="/services#insurance-replacement" className="hover:text-brand-red">
                  Insurance Replacement
                </Link>
              </li>
              <li>
                <Link to="/services#luxury-rentals" className="hover:text-brand-red">
                  Luxury Rentals
                </Link>
              </li>
              <li>
                <Link to="/services#direct-billing" className="hover:text-brand-red">
                  Direct Billing
                </Link>
              </li>
              <li>
                <Link to="/services#retail-rentals" className="hover:text-brand-red">
                  Retail Rentals
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-brand-red">
                  View Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-red">Connect</h3>
            <p className="text-sm text-brand-white/70">
              Follow us on social media:
            </p>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-semibold text-brand-white hover:text-brand-red"
            >
              Instagram: {site.social}
            </a>
            <div className="mt-6">
              <Link
                to="/booking"
                className="inline-flex items-center rounded-sm bg-brand-red px-6 py-3 text-sm font-semibold text-brand-white transition-colors hover:bg-brand-red-dark"
              >
                Book Your Rental
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-brand-white/50">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-brand-white/40">
            Demo vehicle inventory and testimonials are placeholders until client assets are provided.
          </p>
        </div>
      </div>
    </footer>
  )
}
