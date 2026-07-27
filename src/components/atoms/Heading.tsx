import type { ReactNode } from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3'

interface HeadingProps {
  level?: HeadingLevel
  children: ReactNode
  className?: string
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: 'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl',
  h2: 'text-2xl font-bold text-gray-900 sm:text-3xl',
  h3: 'text-lg font-semibold text-gray-900',
}

export function Heading({ level = 'h2', children, className = '' }: HeadingProps) {
  const Tag = level
  return <Tag className={`${levelStyles[level]} ${className}`.trim()}>{children}</Tag>
}
