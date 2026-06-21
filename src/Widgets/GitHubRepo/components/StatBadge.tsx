interface StatBadgeProps {
  icon: string
  value: number
  label: string
}

export function StatBadge({ icon, value, label }: StatBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 text-sm text-gray-500" title={label}>
      <span className="text-xs">{icon}</span>
      {value}
    </span>
  )
}
