import { Link } from 'react-router-dom'
import { useSeo, pageTitle } from '../lib/seo'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  useSeo({
    title: pageTitle('Page Not Found'),
    description: 'The page you are looking for could not be found.',
  })

  return (
    <section className="flex min-h-[60vh] items-center justify-center section-padding">
      <div className="text-center">
        <p className="text-6xl font-extrabold text-brand-red">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand-black">Page Not Found</h1>
        <p className="mt-2 text-brand-grey-light">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button to="/" size="lg">Go Home</Button>
          <Link to="/contact" className="text-sm font-semibold text-brand-red hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
