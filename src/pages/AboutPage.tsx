import { useSeo, pageTitle } from '../lib/seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { CTASection } from '../components/ui/CTASection'
import { useContent } from '../context/ContentContext'
import { useSite } from '../hooks/useSite'

export function AboutPage() {
  const { content } = useContent()
  const site = useSite()
  const { about, whyChoose } = content
  useSeo({
    title: pageTitle('About Us'),
    description:
      'Learn about 407 Auto Rentals — a trusted vehicle rental company at 128 Manville Rd, Unit 15 serving the Greater Toronto Area with insurance replacement and retail rentals.',
  })

  return (
    <>
      <section className="relative overflow-hidden bg-brand-black py-20">
        <div className="absolute inset-0 opacity-30">
          <img
            src={about.heroImage}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="container-wide relative px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-white sm:text-4xl lg:text-5xl">{about.heroTitle}</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-white/80">{about.heroSubtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                badge="Who We Are"
                title="About 407 Auto Rentals"
                align="left"
              />
              <p className="mb-4 leading-relaxed text-brand-grey-light">{site.description}</p>
              <p className="leading-relaxed text-brand-grey-light">{site.descriptionExtended}</p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                alt="407 Auto Rentals vehicle rental service"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-grey-lighter">
        <div className="container-wide">
          <SectionHeading title={about.missionTitle} subtitle="Get back on the road quickly, professionally, and without unnecessary hassle." />
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-grey-light">
            {about.missionText}
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title={about.commitmentTitle} subtitle={about.commitmentSubtitle} />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Quick Approvals',
                desc: 'We process rental requests promptly to minimize your wait time.',
              },
              {
                title: 'Transparent Pricing',
                desc: 'Clear, competitive rates with no hidden surprises.',
              },
              {
                title: 'Exceptional Service',
                desc: 'Dedicated support from request to return.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-brand-grey/10 bg-brand-white p-8 text-center shadow-sm">
                <h3 className="text-lg font-bold text-brand-black">{item.title}</h3>
                <p className="mt-3 text-sm text-brand-grey-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-black">
        <div className="container-wide">
          <SectionHeading
            title={about.insuranceExpertiseTitle}
            subtitle="Specialized support for customers who need a replacement vehicle after an accident."
            light
          />
          <p className="mx-auto max-w-3xl text-center text-brand-white/70">
            {about.insuranceExpertiseText}
          </p>
          <div className="mt-8 text-center">
            <Button to="/booking?rentalType=Insurance+Replacement" size="lg">
              Request a Replacement Vehicle
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title={about.gtaTitle} subtitle="Based in Scarborough, proudly serving the Greater Toronto Area." />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <p className="text-lg leading-relaxed text-brand-grey-light">{about.gtaText}</p>
            <div className="grid grid-cols-2 gap-4">
              {whyChoose.slice(0, 4).map((item) => (
                <div key={item.title} className="rounded-sm border border-brand-grey/10 p-4">
                  <h3 className="text-sm font-bold text-brand-black">{item.title}</h3>
                  <p className="mt-1 text-xs text-brand-grey-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
