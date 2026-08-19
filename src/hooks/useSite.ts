import { useContent } from '../context/ContentContext'

export function useSite() {
  const { content } = useContent()
  const { site } = content
  const phoneDigits = site.phone.replace(/\D/g, '')
  const phoneHref = phoneDigits.length === 10 ? `tel:+1${phoneDigits}` : `tel:${phoneDigits}`

  return {
    ...site,
    phoneHref,
    emailHref: `mailto:${site.email}`,
  }
}
