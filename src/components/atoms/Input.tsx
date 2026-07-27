interface InputProps {
  id: string
  name: string
  type?: string
  value: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function Input({
  id,
  name,
  type = 'text',
  value,
  required = false,
  onChange,
  className = '',
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className={`mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${className}`.trim()}
    />
  )
}
