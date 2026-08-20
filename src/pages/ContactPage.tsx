import { useSeo, pageTitle } from '../lib/seo'
import { ContactForm } from '../components/forms/ContactForm'
import { Button } from '../components/ui/Button'
import { useContactInfo } from '../hooks/useContactInfo'

export function ContactPage() {
  const contact = useContactInfo()

  useSeo({
    title: pageTitle('Contact Us'),
    description:
      'Contact 407 Auto Rentals at 128 Manville Road, Unit 15, Scarborough. Call 416-755-3723 or 343-777-5555, or email 407autorentals@gmail.com.',
  })

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-white sm:text-4xl lg:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-white/80">
            Reach our team anytime for rental inquiries, insurance replacement requests, or general
            questions. We are open 24 hours, 7 days a week.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-black">{contact.name}</h2>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Address</h3>
                  <address className="mt-1 not-italic text-brand-grey-light">
                    {contact.location}
                    <br />
                    {contact.addressLine2}
                    <br />
                    {contact.addressCountry}
                  </address>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Phone</h3>
                  <div className="mt-1 space-y-1">
                    <a
                      href={contact.phoneHref}
                      className="block text-lg font-semibold text-brand-black hover:text-brand-orange"
                    >
                      {contact.phone}
                    </a>
                    <a
                      href={contact.phoneSecondaryHref}
                      className="block text-lg font-semibold text-brand-black hover:text-brand-orange"
                    >
                      {contact.phoneSecondary}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">Email</h3>
                  <a
                    href={contact.emailHref}
                    className="mt-1 block text-lg text-brand-black hover:text-brand-orange"
                  >
                    {contact.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                    Business Hours
                  </h3>
                  <p className="mt-1 text-brand-grey-light">{contact.businessHours}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                    Social Media
                  </h3>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-brand-grey-light hover:text-brand-orange"
                  >
                    Instagram: {contact.instagram}
                  </a>
                </div>
              </div>

              <div className="mt-8 rounded-sm border border-brand-orange/20 bg-brand-orange/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                  Emergency / After-Hours Contact
                </h3>
                <p className="mt-2 text-sm text-brand-grey-light">
                  For urgent rental assistance outside business hours, please call{' '}
                  <a
                    href={contact.emergencyPhoneHref}
                    className="font-semibold text-brand-black hover:text-brand-orange"
                  >
                    {contact.emergencyPhone}
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button to="/booking" size="md">
                  Book a Rental
                </Button>
                <Button href={contact.phoneHref} variant="secondary" size="md">
                  Call Now
                </Button>
                <Button href={contact.emailHref} variant="outline" size="md">
                  Email Us
                </Button>
              </div>

              <div className="mt-10 overflow-hidden rounded-sm border border-brand-grey/10">
                <iframe
                  title="407 Auto Rentals location map"
                  src={contact.mapsEmbedUrl}
                  className="aspect-[16/10] h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="border-t border-brand-grey/10 bg-brand-grey-lighter px-4 py-3 text-center">
                  <a
                    href={contact.mapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-orange hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-bold text-brand-black">Send Us a Message</h2>
              <p className="mb-6 text-sm text-brand-grey-light">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
