import type { Testimonial } from '../../data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-sm border border-brand-grey/10 bg-brand-white p-6 shadow-sm">
      <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-4 w-4 ${i < testimonial.rating ? 'text-brand-orange' : 'text-brand-grey/20'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-brand-grey-light">&ldquo;{testimonial.content}&rdquo;</p>
      <footer className="mt-6 border-t border-brand-grey/10 pt-4">
        <cite className="not-italic">
          <span className="block text-sm font-bold text-brand-black">{testimonial.name}</span>
          <span className="text-xs text-brand-grey-light">{testimonial.role}</span>
        </cite>
        {testimonial.isDemo && (
          <span className="mt-2 inline-block rounded-sm bg-brand-grey-lighter px-2 py-0.5 text-xs font-medium text-brand-grey-light">
            Demo Review
          </span>
        )}
      </footer>
    </blockquote>
  )
}
