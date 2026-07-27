import type { ReactNode } from 'react'

interface LinkProps {
  href: string
  children: ReactNode
  external?: boolean
  className?: string
}

export function Link({ href, children, external = false, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`text-indigo-600 hover:underline ${className}`.trim()}
    >
      {children}
    </a>
  )
}
