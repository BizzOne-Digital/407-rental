import { useSeo, pageTitle } from '../lib/seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { CTASection } from '../components/ui/CTASection'
import { useContent } from '../context/ContentContext'

export function TeamPage() {
  const { content } = useContent()
  const teamMembers = content.team
  useSeo({
    title: pageTitle('Our Team'),
    description:
      'Meet the 407 Auto Rentals team. Professional vehicle rental specialists serving the Greater Toronto Area.',
  })

  return (
    <>
      <section className="bg-brand-black py-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Our Team</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Demo team profiles shown below. Real team member information will be added when available.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Placeholder profiles for demonstration. These are not real team member identities."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="overflow-hidden rounded-sm border border-brand-grey/10 bg-white shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} (demo profile)`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-black">{member.name}</h3>
                  <p className="text-sm font-semibold text-brand-orange">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-grey-light">{member.bio}</p>
                  {member.isDemo && (
                    <span className="mt-3 inline-block rounded-sm bg-brand-grey-lighter px-2 py-0.5 text-xs font-medium text-brand-grey-light">
                      Demo Profile
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
