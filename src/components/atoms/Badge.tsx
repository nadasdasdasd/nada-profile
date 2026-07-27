type BadgeVariant = 'default' | 'indigo'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  indigo: 'bg-indigo-50 text-indigo-700',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-md px-3 py-1.5 text-sm font-medium ${variantStyles[variant]} ${className}`.trim()}
    >
      {children}
    </span>
  )
}
