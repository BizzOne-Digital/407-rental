import { useSeo, pageTitle } from '../lib/seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { FAQAccordion } from '../components/ui/FAQAccordion'
import { CTASection } from '../components/ui/CTASection'
import { useContent } from '../context/ContentContext'

export function FAQPage() {
  const { content } = useContent()
  const faqs = content.faqs
  useSeo({
    title: pageTitle('FAQ'),
    description:
      'Frequently asked questions about 407 Auto Rentals insurance replacement, direct billing, daily, weekly, and monthly vehicle rentals in the GTA.',
  })

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-white/80">
            Find answers to common questions about our rental services, insurance replacement, and
            direct billing.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            title="Common Questions"
            subtitle="Can't find what you're looking for? Contact our team for personalized assistance."
          />
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
