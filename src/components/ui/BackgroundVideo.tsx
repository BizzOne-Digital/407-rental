interface BackgroundVideoProps {
  src: string
  poster?: string
  className?: string
}

export function BackgroundVideo({ src, poster, className = '' }: BackgroundVideoProps) {
  if (!src) return null

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={`h-full w-full object-cover ${className}`}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
