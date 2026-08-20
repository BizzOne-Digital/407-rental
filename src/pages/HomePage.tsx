import { useSeo } from '../lib/seo'
import { useContent } from '../context/ContentContext'
import { Hero } from '../components/home/Hero'
import { QuickRentalWidget } from '../components/home/QuickRentalWidget'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { VehicleCard } from '../components/ui/VehicleCard'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { CTASection } from '../components/ui/CTASection'
import { Button } from '../components/ui/Button'
import { BackgroundVideo } from '../components/ui/BackgroundVideo'

export function HomePage() {
  const { content, loading } = useContent()
  const { homepage: hp, whyChoose, howItWorks, services, vehicles, testimonials, faqs } = content

  useSeo({
    title: '407 Auto Rentals | Insurance Replacement & Car Rentals in GTA',
    description:
      '407 Auto Rentals provides insurance replacement rentals, direct billing, luxury, SUV, hybrid and economy vehicle rentals across the Greater Toronto Area.',
  })

  const featuredServices = services.filter((s) => s.featured)
  const featuredVehicles = vehicles.filter((v) => v.featured)

  return (
    <>
      <Hero />
      <QuickRentalWidget />

      {/* Why Choose Us */}
      <section className="section-padding bg-brand-grey-lighter">
        <div className="container-wide">
          <SectionHeading
            title={hp.whyChooseTitle}
            subtitle={hp.whyChooseSubtitle}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-brand-grey/10 bg-brand-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Core Services */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Our Services"
            title={hp.servicesTitle}
            subtitle={hp.servicesSubtitle}
          />
          <div className="grid gap-8 md:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="section-padding bg-brand-grey-lighter">
        <div className="container-wide">
          <SectionHeading
            badge="Our Fleet"
            title={hp.fleetTitle}
            subtitle={hp.fleetSubtitle}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <p className="col-span-full text-center text-brand-grey-light">Loading fleet...</p>
            ) : (
              featuredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))
            )}
          </div>
          <div className="mt-10 text-center">
            <Button to="/fleet" size="lg" variant="secondary">
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Replacement Section */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[400px]">
            <img
              src={hp.insuranceImage}
              alt="Insurance replacement vehicle rental"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex items-center bg-brand-black p-8 sm:p-12 lg:p-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                Insurance Replacement
              </span>
              <h2 className="mt-3 text-3xl font-bold text-brand-white sm:text-4xl">
                {hp.insuranceTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-brand-white/80">
                {hp.insuranceText}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-white/70">
                <li className="flex items-center gap-2">
                  <span className="text-brand-red">&#10003;</span> Quick rental requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-red">&#10003;</span> Flexible rental terms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-red">&#10003;</span> Insurance-related rental support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brand-red">&#10003;</span> Direct billing process
                </li>
              </ul>
              <div className="mt-8">
                <Button to="/booking?rentalType=Insurance+Replacement" size="lg">
                  Request a Replacement Vehicle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Billing Section */}
      <section className="section-padding bg-brand-black">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                badge="Direct Billing"
                title={hp.directBillingTitle}
                subtitle={hp.directBillingText}
                align="left"
                light
              />
              <p className="mb-4 text-brand-white/70">
                {hp.directBillingText}
              </p>
              <Button to="/services#direct-billing" variant="primary" size="lg">
                Learn About Direct Billing
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Customers', 'Insurance Companies', 'Body Shops', 'Dealerships'].map((item) => (
                <div
                  key={item}
                  className="rounded-sm border border-brand-white/10 bg-brand-white/5 p-6 text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-brand-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Rentals Section */}
      <section className="relative min-h-[480px] overflow-hidden">
        <div className="absolute inset-0">
          {hp.luxuryVideo ? (
            <BackgroundVideo
              src={hp.luxuryVideo}
              poster={hp.luxuryVideoPoster || hp.luxuryImage}
            />
          ) : (
            <img
              src={hp.luxuryImage}
              alt="Luxury vehicle rental"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-brand-black/75" />
        </div>
        <div className="section-padding container-wide relative text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Luxury Rentals</span>
          <h2 className="mt-3 text-3xl font-bold text-brand-white sm:text-4xl lg:text-5xl">
            {hp.luxuryTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-white/80">
            {hp.luxuryText}
          </p>
          <div className="mt-8">
            <Button to="/fleet?category=Luxury" size="lg">
              Explore Luxury Vehicles
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="Simple Process"
            title={hp.howItWorksTitle}
            subtitle={hp.howItWorksSubtitle}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-xl font-bold text-brand-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-brand-black">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-grey-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-grey-lighter">
        <div className="container-wide">
          <SectionHeading
            badge="Testimonials"
            title={hp.testimonialsTitle}
            subtitle={hp.testimonialsSubtitle}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/testimonials" variant="outline" size="lg">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            badge="FAQ"
            title={hp.faqTitle}
            subtitle={hp.faqSubtitle}
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} limit={5} />
          </div>
          <div className="mt-10 text-center">
            <Button to="/faq" variant="outline" size="lg">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
