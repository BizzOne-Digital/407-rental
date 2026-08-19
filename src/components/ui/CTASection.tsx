import { Button } from './Button'
import { useSite } from '../../hooks/useSite'
import { useContent } from '../../context/ContentContext'

interface CTASectionProps {
  title?: string
  subtitle?: string
}

export function CTASection({ title, subtitle }: CTASectionProps) {
  const site = useSite()
  const { content } = useContent()
  const hp = content.homepage

  const displayTitle = title ?? hp.ctaTitle
  const displaySubtitle = subtitle ?? hp.ctaSubtitle

  return (
    <section className="relative overflow-hidden bg-brand-black">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="section-padding container-wide relative text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{displayTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{displaySubtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to="/booking" size="lg">
            Book Your Rental
          </Button>
          <Button href={site.phoneHref} variant="white" size="lg">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  )
}
