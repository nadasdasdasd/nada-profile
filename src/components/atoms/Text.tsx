import type { ReactNode } from 'react'

type TextSize = 'sm' | 'base' | 'lg'
type TextColor = 'gray-500' | 'gray-600' | 'gray-700' | 'gray-900' | 'indigo-600' | 'emerald-600'

interface TextProps {
  children: ReactNode
  size?: TextSize
  color?: TextColor
  className?: string
}

const sizeStyles: Record<TextSize, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
}

export function Text({ children, size = 'base', color = 'gray-600', className = '' }: TextProps) {
  return (
    <p className={`${sizeStyles[size]} text-${color} ${className}`.trim()}>
      {children}
    </p>
  )
}
