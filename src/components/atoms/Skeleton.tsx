interface SkeletonProps {
  count?: number
  height?: string
  className?: string
}

export function Skeleton({ count = 1, height = 'h-24', className = '' }: SkeletonProps) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`animate-pulse rounded-lg bg-gray-100 ${height} ${className}`.trim()}
        />
      ))}
    </div>
  )
}
