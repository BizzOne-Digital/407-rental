import { useSeo, pageTitle } from '../lib/seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/ui/CTASection'
import { useContent } from '../context/ContentContext'

export function ServicesPage() {
  const { content } = useContent()
  const services = content.services
  useSeo({
    title: pageTitle('Rental Services'),
    description:
      '407 Auto Rentals offers insurance replacement, direct billing, luxury, retail, corporate, daily, weekly, and monthly vehicle rentals across the GTA.',
  })

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-white sm:text-4xl lg:text-5xl">Our Rental Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-white/80">
            Comprehensive vehicle rental solutions for insurance replacement, retail, corporate, and
            luxury needs across the Greater Toronto Area.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-16">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2"
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-sm ${services.indexOf(service) % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className={services.indexOf(service) % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-2xl font-bold text-brand-black sm:text-3xl">{service.title}</h2>
                <p className="mt-4 leading-relaxed text-brand-grey-light">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-brand-grey">
                      <span className="mt-0.5 text-brand-red">&#10003;</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button to={service.ctaHref} size="lg">
                    {service.cta}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-brand-grey-lighter">
        <div className="container-wide">
          <SectionHeading
            title="All Services at a Glance"
            subtitle="Quick overview of everything we offer."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
