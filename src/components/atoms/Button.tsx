import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
  className?: string
  href?: string
  download?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  ghost: 'text-indigo-600 hover:underline',
}

export function Button({
  children,
  variant = 'outline',
  type = 'button',
  disabled = false,
  onClick,
  className = '',
  href,
  download,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition'

  const classes = `${base} ${variantStyles[variant]} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}
