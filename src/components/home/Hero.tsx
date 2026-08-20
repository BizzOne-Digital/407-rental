import { Button } from '../ui/Button'
import { TrustBadge } from '../ui/TrustBadge'
import { BackgroundVideo } from '../ui/BackgroundVideo'
import { useContent } from '../../context/ContentContext'
import { useSite } from '../../hooks/useSite'

const trustIcons = [
  (
    <svg key="0" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  (
    <svg key="1" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  (
    <svg key="2" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  (
    <svg key="3" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
]

export function Hero() {
  const { content } = useContent()
  const site = useSite()
  const { hero } = content

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-black">
      <div className="absolute inset-0">
        {hero.video ? (
          <BackgroundVideo src={hero.video} poster={hero.videoPoster || hero.image} />
        ) : (
          <img
            src={hero.image}
            alt="Premium vehicle on scenic road"
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/40" />
      </div>

      <div className="section-padding container-wide relative w-full pb-32">
        <div className="max-w-3xl animate-fade-in">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-brand-orange">
            {hero.badge}
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-brand-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-white/85 sm:text-xl">
            {hero.subheading}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button to="/booking" size="lg">
              {hero.primaryCta}
            </Button>
            <Button href={site.phoneHref} variant="white" size="lg">
              {hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
            {hero.trustBadges.map((badge, i) => (
              <TrustBadge key={badge.label} icon={trustIcons[i] ?? trustIcons[0]} label={badge.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
