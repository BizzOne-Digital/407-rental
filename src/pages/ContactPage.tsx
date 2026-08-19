import { useSeo, pageTitle } from '../lib/seo'
import { ContactForm } from '../components/forms/ContactForm'
import { Button } from '../components/ui/Button'
import { useSite } from '../hooks/useSite'

export function ContactPage() {
  const site = useSite()
  useSeo({
    title: pageTitle('Contact Us'),
    description:
      'Contact 407 Auto Rentals in Scarborough, Ontario. Call (343) 777-5555 or email 407autorentals@gmail.com for vehicle rentals across the GTA.',
  })

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Get in touch with our team for rental inquiries, insurance replacement requests, or any
            questions about our services.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-black">{site.name}</h2>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Phone</h3>
                  <a href={site.phoneHref} className="mt-1 block text-lg font-semibold text-brand-black hover:text-brand-orange">
                    {site.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Email</h3>
                  <a href={site.emailHref} className="mt-1 block text-lg text-brand-black hover:text-brand-orange">
                    {site.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Location</h3>
                  <p className="mt-1 text-brand-grey-light">{site.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Service Area</h3>
                  <p className="mt-1 text-brand-grey-light">{site.serviceArea}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/booking" size="md">Book a Rental</Button>
                <Button href={site.phoneHref} variant="secondary" size="md">Call Now</Button>
                <Button href={site.emailHref} variant="outline" size="md">Email Us</Button>
              </div>

              <div className="mt-10 aspect-[16/9] overflow-hidden rounded-sm border border-brand-grey/10 bg-brand-grey-lighter">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <svg className="mb-4 h-12 w-12 text-brand-grey/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-semibold text-brand-grey">Map Placeholder</p>
                  <p className="mt-1 text-sm text-brand-grey-light">
                    Scarborough, Ontario — Greater Toronto Area
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-brand-black">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
