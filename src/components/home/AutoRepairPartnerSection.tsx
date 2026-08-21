import type { ReactNode } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { AUTO_REPAIR_PARTNER } from '../../data/auto-repair-partner'

const serviceIcons: Record<string, ReactNode> = {
  'Oil Change': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6l2.1 2.1M3 12h3m12 0h3M5.6 18.4l2.1-2.1m8.6-8.6l2.1-2.1" />
  ),
  'New & Used Tires': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0M12 12m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
  ),
  'Brake Repair': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v8m-4-4h8M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  ),
  'Air Conditioning': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
  ),
  'Suspension Service': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16h16M6 16l2-8h8l2 8M9 8V6m6 2V6" />
  ),
  'Transmission Services': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  ),
}

export function AutoRepairPartnerSection() {
  const { name, tagline, address, city, phones, services, images } = AUTO_REPAIR_PARTNER
  const mapsQuery = encodeURIComponent(`${address}, ${city}, Canada`)

  return (
    <section className="section-padding bg-brand-grey-lighter" aria-labelledby="auto-repair-partner-heading">
      <div className="container-wide">
        <SectionHeading
          badge="Partner Shop"
          title="Auto Repair & Tire Services"
          subtitle="Need maintenance or repairs while your rental is in use? Our trusted partner shop keeps your vehicle running safely."
        />

        {/* Wide banner */}
        <div className="overflow-hidden rounded-sm border border-brand-grey/10 bg-brand-black shadow-lg">
          <img
            src={images.banner}
            alt={`${name} — performance auto repair and tire services`}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Services */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-sm border border-brand-grey/10 bg-brand-white p-6 shadow-sm sm:p-8">
              <h3 id="auto-repair-partner-heading" className="text-xl font-bold text-brand-black">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-grey-light">{tagline}</p>

              <ul className="mt-6 space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-sm font-medium text-brand-grey">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        {serviceIcons[service]}
                      </svg>
                    </span>
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3 border-t border-brand-grey/10 pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-red">Contact</p>
                {phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="flex items-center justify-between rounded-sm border border-brand-grey/10 px-4 py-3 transition-colors hover:border-brand-red/30 hover:bg-brand-red-light"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-grey-light">
                      {phone.label}
                    </span>
                    <span className="font-bold text-brand-black">{phone.number}</span>
                  </a>
                ))}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-sm bg-brand-black px-4 py-3 text-sm text-brand-white transition-colors hover:bg-brand-grey"
                >
                  <span className="font-semibold">{address}</span>
                  <span className="mt-0.5 block text-brand-white/70">{city}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Promotional gallery */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <figure className="overflow-hidden rounded-sm border border-brand-grey/10 bg-brand-white shadow-sm">
              <img
                src={images.servicesFlyer}
                alt={`${name} services overview`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden rounded-sm border border-brand-grey/10 bg-brand-white shadow-sm">
              <img
                src={images.tireCareFlyer}
                alt={`${name} tire care and maintenance`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden rounded-sm border border-brand-grey/10 bg-brand-white shadow-sm sm:col-span-2">
              <img
                src={images.locationFlyer}
                alt={`${name} location in ${city}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
