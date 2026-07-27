import { Label } from '../atoms/Label'
import { Link } from '../atoms/Link'

interface ContactInfoItemProps {
  label: string
  href: string
  displayText?: string
  external?: boolean
}

export function ContactInfoItem({ label, href, displayText, external = false }: ContactInfoItemProps) {
  return (
    <div>
      <Label htmlFor="">{label}</Label>
      <Link href={href} external={external}>
        {displayText || href}
      </Link>
    </div>
  )
}
