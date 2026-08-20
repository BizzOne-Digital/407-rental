interface TrustBadgeProps {
  icon: React.ReactNode
  label: string
}

export function TrustBadge({ icon, label }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-brand-white/90">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-red/20 text-brand-red">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  )
}
