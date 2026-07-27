type AvatarSize = 'sm' | 'md' | 'lg'

interface AvatarProps {
  src?: string
  alt: string
  size?: AvatarSize
  className?: string
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: 'h-20 w-20',
  md: 'h-24 w-24 sm:h-32 sm:w-32',
  lg: 'h-32 w-32 sm:h-40 sm:w-40',
}

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  if (!src) return null

  return (
    <img
      src={src}
      alt={alt}
      className={`mb-6 rounded-full object-cover shadow-lg ${sizeStyles[size]} ${className}`.trim()}
    />
  )
}
