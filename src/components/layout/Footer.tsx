import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { FOOTER_LINKS } from '../../data/site'
import { useSite } from '../../hooks/useSite'

export function Footer() {
  const site = useSite()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-white">
      <div className="section-padding container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="light" className="mb-4" />
            <p className="text-sm leading-relaxed text-white/70">{site.tagline}</p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={site.phoneHref} className="block font-semibold text-brand-orange hover:underline">
                {site.phone}
              </a>
              <a href={site.emailHref} className="block text-white/70 hover:text-brand-orange">
                {site.email}
              </a>
              <p className="text-white/70">{site.location}</p>
              <p className="text-white/70">{site.serviceArea}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-orange">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/70 transition-colors hover:text-brand-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-orange">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/services#insurance-replacement" className="hover:text-brand-orange">
                  Insurance Replacement
                </Link>
              </li>
              <li>
                <Link to="/services#luxury-rentals" className="hover:text-brand-orange">
                  Luxury Rentals
                </Link>
              </li>
              <li>
                <Link to="/services#direct-billing" className="hover:text-brand-orange">
                  Direct Billing
                </Link>
              </li>
              <li>
                <Link to="/services#retail-rentals" className="hover:text-brand-orange">
                  Retail Rentals
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-brand-orange">
                  View Fleet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-brand-orange">Connect</h3>
            <p className="text-sm text-white/70">
              Follow us on social media:
            </p>
            <p className="mt-2 text-sm font-semibold text-white">{site.social}</p>
            <div className="mt-6">
              <Link
                to="/booking"
                className="inline-flex items-center rounded-sm bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange/90"
              >
                Book Your Rental
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Demo vehicle inventory and testimonials are placeholders until client assets are provided.
          </p>
        </div>
      </div>
    </footer>
  )
}
