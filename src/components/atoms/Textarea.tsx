interface TextareaProps {
  id: string
  name: string
  rows?: number
  value: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  className?: string
}

export function Textarea({
  id,
  name,
  rows = 4,
  value,
  required = false,
  onChange,
  className = '',
}: TextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      required={required}
      value={value}
      onChange={onChange}
      className={`mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${className}`.trim()}
    />
  )
}
