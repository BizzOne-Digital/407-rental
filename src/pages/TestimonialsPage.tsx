import { useSeo, pageTitle } from '../lib/seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TestimonialCard } from '../components/ui/TestimonialCard'
import { CTASection } from '../components/ui/CTASection'
import { useContent } from '../context/ContentContext'

export function TestimonialsPage() {
  const { content } = useContent()
  const testimonials = content.testimonials
  useSeo({
    title: pageTitle('Testimonials'),
    description:
      'Read what customers say about 407 Auto Rentals. Insurance replacement and vehicle rental reviews across the GTA.',
  })

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-brand-white sm:text-4xl lg:text-5xl">Customer Testimonials</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-white/80">
            Demo reviews shown below. Real customer testimonials will be added when available.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="These are placeholder testimonials for demonstration purposes. They are not verified customer reviews."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
