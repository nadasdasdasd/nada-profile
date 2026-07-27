import { Input } from '../atoms/Input'
import { Textarea } from '../atoms/Textarea'
import { Label } from '../atoms/Label'

interface FormFieldProps {
  id: string
  name: string
  label: string
  type?: string
  value: string
  required?: boolean
  as?: 'input' | 'textarea'
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function FormField({
  id,
  name,
  label,
  type = 'text',
  value,
  required = false,
  as = 'input',
  rows,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {as === 'textarea' ? (
        <Textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          required={required}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          required={required}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
        />
      )}
    </div>
  )
}
