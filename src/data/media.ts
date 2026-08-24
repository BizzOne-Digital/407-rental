/**
 * Placeholder stock videos (Mixkit — free for personal/commercial use).
 * Hero: customer entering a luxury rental vehicle.
 * Luxury: black premium SUV on the road (Cadillac Escalade-style display).
 */
export const PLACEHOLDER_VIDEOS = {
  hero: {
    src: 'https://assets.mixkit.co/videos/73/73-720.mp4',
    poster: 'https://assets.mixkit.co/videos/73/73-thumb-720-0.jpg',
    label: 'Customer entering luxury rental vehicle',
  },
  luxury: {
    src: 'https://assets.mixkit.co/videos/35544/35544-720.mp4',
    poster: 'https://assets.mixkit.co/videos/35544/35544-thumb-720-0.jpg',
    label: 'Black luxury SUV on the road',
  },
} as const

/** Cadillac CT5 — used as hero/luxury poster fallback when video loads. */
export const CADILLAC_POSTER =
  'https://upload.wikimedia.org/wikipedia/commons/2/28/2024_Cadillac_CT5-V_AWD%2C_front_12.20.24.jpg'

const LEGACY_VIDEO_SRCS = new Set([
  'https://assets.mixkit.co/videos/8087/8087-720.mp4',
  'https://assets.mixkit.co/videos/35244/35244-720.mp4',
])

export function isLegacyVideo(url?: string): boolean {
  if (!url) return true
  return LEGACY_VIDEO_SRCS.has(url)
}
